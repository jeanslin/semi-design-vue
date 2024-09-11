import cls from 'classnames';
import * as PropTypes from '../PropTypes';
import { vuePropsMake } from '../PropTypes';
import { cssClasses } from '@douyinfe/semi-foundation/tabs/constants';
import isNullOrUndefined from '@douyinfe/semi-foundation/utils/isNullOrUndefined';
import getDataAttr from '@douyinfe/semi-foundation/utils/getDataAttr';
import TabsFoundation, { TabsAdapter } from '@douyinfe/semi-foundation/tabs/foundation';
import { isEqual, pick } from 'lodash';
import '@douyinfe/semi-foundation/tabs/tabs.scss';

import TabBar from './TabBar';
import TabPane from './TabPane';
import TabItem from './TabItem';
import TabsContext from './tabs-context';
import type { PlainTab, TabBarProps, TabContextValue, TabsProps } from './interface';
import {
  ComponentObjectPropsOptions,
  defineComponent,
  h,
  isVNode,
  PropType,
  reactive,
  ref,
  shallowRef,
  useSlots,
  VNode,
  watch,
} from 'vue';
import { useBaseComponent, useHasInProps } from '../_base/baseComponent';
import { CombineProps, VueJsxNode } from '../interface';
import { getFragmentChildren } from '../_utils';

const panePickKeys = ['className', 'style', 'disabled', 'itemKey', 'tab', 'icon'];

export * from './interface';

export interface TabsState {
  activeKey: string;
  panes: PlainTab[];
  prevActiveKey: string | null;
  forceDisableMotion: boolean;
}

const propTypes: CombineProps<TabsProps> = {
  activeKey: PropTypes.string,
  className: PropTypes.string,
  collapsible: PropTypes.bool,
  contentStyle: PropTypes.oneOfType([PropTypes.object]),
  defaultActiveKey: PropTypes.string,
  keepDOM: PropTypes.bool,
  lazyRender: PropTypes.bool,
  onChange: PropTypes.func as PropType<TabsProps['onChange']>,
  onTabClick: PropTypes.func as PropType<TabsProps['onTabClick']>,
  renderTabBar: PropTypes.func as PropType<TabsProps['renderTabBar']>,
  showRestInDropdown: PropTypes.bool,
  size: PropTypes.string as PropType<TabsProps['size']>,
  style: PropTypes.object,
  tabBarClassName: PropTypes.string,
  tabBarExtraContent: PropTypes.node,
  tabBarStyle: PropTypes.object,
  tabList: PropTypes.array,
  tabPaneMotion: PropTypes.bool,
  tabPosition: PropTypes.string as PropType<TabsProps['tabPosition']>,
  type: PropTypes.string as PropType<TabsProps['type']>,
  onTabClose: PropTypes.func as PropType<TabsProps['onTabClose']>,
  preventScroll: PropTypes.bool,
  more: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  arrowPosition: PropTypes.string as PropType<TabsProps['arrowPosition']>,
  renderArrow: PropTypes.func as PropType<TabsProps['renderArrow']>,
  dropdownProps: PropTypes.object as PropType<TabsProps['dropdownProps']>,
  onVisibleTabsChange: PropTypes.func as PropType<TabsProps['onVisibleTabsChange']>,
  visibleTabsStyle: PropTypes.object,
};

const defaultProps: TabsProps = {
  // children: [],
  collapsible: false,
  keepDOM: true,
  lazyRender: false,
  onChange: () => undefined,
  onTabClick: () => undefined,
  size: 'large',
  tabPaneMotion: true,
  tabPosition: 'top',
  type: 'line',
  onTabClose: () => undefined,
  showRestInDropdown: true,
  arrowPosition: 'both',
};
export const vuePropsType = vuePropsMake(propTypes, defaultProps);

const Index = defineComponent({
  props: { ...vuePropsType, children: Array as PropType<VNode[]> },
  name: 'TabsIndex',
  setup(props, {}) {
    const slots = useSlots();
    const contentRef = ref();
    let contentHeight: string = 'auto';


    const state = reactive<TabsState>({
      activeKey: '',
      panes: getPanes(),
      prevActiveKey: null,
      forceDisableMotion: false,
    });
    const { adapter: adapterInject } = useBaseComponent<TabsProps>(props, state);
    function adapter_(): TabsAdapter<TabsProps, TabsState> {
      return {
        ...adapterInject(),
        collectPane: (): void => {
          const panes = getPanes();
          state.panes = panes as any;
        },
        collectActiveKey: (): void => {
          const { tabList, activeKey: propsActiveKey } = props;
          if (typeof propsActiveKey !== 'undefined') {
            return;
          }
          const { activeKey } = state;
          const panes = getPanes();
          if (panes.findIndex((p) => p.itemKey === activeKey) === -1) {
            if (panes.length > 0) {
              state.activeKey = panes[0].itemKey;
            } else {
              state.activeKey = '';
            }
          }
        },
        notifyTabClick: (activeKey: string, event: MouseEvent): void => {
          props.onTabClick(activeKey, event);
        },
        notifyChange: (activeKey: string): void => {
          props.onChange(activeKey);
        },
        setNewActiveKey: (activeKey: string): void => {
          state.activeKey = activeKey;
        },
        getDefaultActiveKeyFromChildren: (): string => {
          const { tabList } = props;
          let activeKey = '';
          const list = tabList ? tabList : props.children.map((child) => (isVNode(child) ? child.props : null));
          list.forEach((item) => {
            if (item && !activeKey && !item.disabled) {
              activeKey = item.itemKey;
            }
          });
          return activeKey;
        },
        notifyTabDelete: (tabKey: string) => {
          props.onTabClose && props.onTabClose(tabKey);
        },
      };
    }
    const adapter = adapter_();

    const foundation = new TabsFoundation(adapter);
    state.activeKey = foundation.getDefaultActiveKey();

    function getDerivedStateFromProps(props: TabsProps): Partial<TabsState> {
      const states: Partial<TabsState> = {};
      if (!isNullOrUndefined(props.activeKey) && props.activeKey !== state.activeKey) {
        state.prevActiveKey = state.activeKey;
        states.activeKey = props.activeKey;
      }
      return states;
    }

    watch([() => props.activeKey], () => {
      const newState = getDerivedStateFromProps({ ...props });
      if (newState) {
        Object.keys(newState).forEach((key) => {
          state[key] = newState[key];
        });
      }
    });

    watch(
      [() => props.children, () => props.tabList, () => props.activeKey, () => state.activeKey],
      (value, [prevPropsChildren, prevPropsTabList, prevPropsActiveKey, prevStateActiveKey]) => {

        // Panes state acts on tab bar, no need to compare TabPane children
        const prevChildrenProps = (prevPropsChildren || []).map((child) =>
          pick(isVNode(child) ? child.props : null, panePickKeys)
        );

        const nowChildrenProps = (props.children || []).map((child) =>
          pick(isVNode(child) ? child.props : null, panePickKeys)
        );

        const isTabListType = props.tabList || prevPropsTabList;

        if (!isEqual(props.tabList, prevPropsTabList)) {
          foundation.handleTabListChange();
        }

        if (prevStateActiveKey !== state.activeKey && prevStateActiveKey !== state.prevActiveKey) {
          state.prevActiveKey = prevStateActiveKey;
        }

        if (prevPropsActiveKey !== props.activeKey) {
          const newAddedPanelItemKey = (() => {
            const prevItemKeys = new Set(prevChildrenProps.map((p) => p.itemKey));
            return nowChildrenProps.map((p) => p.itemKey).filter((itemKey) => !prevItemKeys.has(itemKey));
          })();
          state.forceDisableMotion = newAddedPanelItemKey.includes(props.activeKey);
        }

        // children变化，tabList方式使用时，啥也不用做
        // children变化，非tabList方式使用，需要重新取activeKey。TabPane可能是异步更新的，若不重新取，未设activeKey时，第一个不会自动激活
        // children changed: do nothing in tabList case
        // children changed: recalc activeKey. TabPane could be updated async. If not recalc the first panel will not be activated
        if (!isEqual(prevChildrenProps, nowChildrenProps) && !isTabListType) {
          foundation.handleTabPanesChange();
        }
      }
    );

    const setContentRef = (ref) => {
      contentRef.value = ref;
    };

    function getPanes(): PlainTab[] {
      const { tabList } = props;
      if (Array.isArray(tabList) && tabList.length) {
        return tabList;
      }
      return props.children
        .filter((child) => {
          return typeof child.type !== 'symbol' && (child.type as any)?.name === 'TabPane';
        })
        .map((child) => {
          if (child) {
            const { tab, icon, disabled, itemKey, closable } = child.props;
            return { tab, icon, disabled, itemKey, closable };
          }
          return undefined;
        });
    }

    const onTabClick = (activeKey: string, event: MouseEvent): void => {
      foundation.handleTabClick(activeKey, event);
    };

    /* istanbul ignore next */
    const rePosChildren = (children: VueJsxNode[], activeKey: string) => {
      const newChildren: VueJsxNode[] = [];

      const falttenChildren = children as VNode[];

      if (children.length) {
        newChildren.push(...falttenChildren.filter((child) => child.props && child.props.itemKey === activeKey));
        newChildren.push(...falttenChildren.filter((child) => child.props && child.props.itemKey !== activeKey));
      }

      return newChildren;
    };

    const getActiveItem = () => {
      const { activeKey } = state;
      const { tabList } = props;
      if (tabList || !Array.isArray(props.children)) {
        return props.children;
      }
      return props.children.filter((pane) => {
        if (isVNode(pane) && pane.type && (pane.type as any).isTabPane) {
          return pane.props.itemKey === activeKey;
        }
        return true;
      });
    };

    const deleteTabItem = (tabKey: string, event: MouseEvent) => {
      event.stopPropagation();
      foundation.handleTabDelete(tabKey);
    };

    return () => {

      const {
        className,
        collapsible,
        contentStyle,
        keepDOM,
        lazyRender,
        renderTabBar,
        showRestInDropdown,
        size,
        style,
        tabBarClassName,
        tabBarExtraContent,
        tabBarStyle,
        tabPaneMotion,
        tabPosition,
        type,
        more,
        onVisibleTabsChange,
        visibleTabsStyle,
        arrowPosition,
        renderArrow,
        dropdownProps,
        ...restProps
      } = props;
      const { panes, activeKey } = state;
      const tabWrapperCls = cls(className, {
        [cssClasses.TABS]: true,
        [`${cssClasses.TABS}-${tabPosition}`]: tabPosition,
      });

      const tabContentCls = cls({
        [cssClasses.TABS_CONTENT]: true,
        [`${cssClasses.TABS_CONTENT}-${tabPosition}`]: tabPosition,
      });

      const tabBarProps = {
        activeKey,
        className: tabBarClassName,
        collapsible,
        list: panes as any,
        onTabClick: onTabClick,
        showRestInDropdown,
        size,
        style: tabBarStyle,
        tabBarExtraContent,
        tabPosition,
        type,
        deleteTabItem: deleteTabItem,
        handleKeyDown: foundation.handleKeyDown,
        more,
        onVisibleTabsChange,
        visibleTabsStyle,
        arrowPosition,
        renderArrow,
        dropdownProps,
      } as TabBarProps;

      const tabBar = renderTabBar ? renderTabBar(tabBarProps, TabBar) : <TabBar {...tabBarProps} />;
      const content = keepDOM ? props.children : getActiveItem();

      return (
        <div class={tabWrapperCls} style={style} {...getDataAttr(restProps)}>
          {tabBar}
          <TabsContext.Provider
            value={
              {
                activeKey,
                lazyRender,
                panes: panes as any,
                tabPaneMotion,
                tabPosition,
                prevActiveKey: state.prevActiveKey,
                forceDisableMotion: state.forceDisableMotion,
              } as TabContextValue
            }
          >
            <div ref={setContentRef} class={tabContentCls} style={{ ...contentStyle }}>
              {content}
            </div>
          </TabsContext.Provider>
        </div>
      );
    };
  },
});
const Tabs = defineComponent({
  props: { ...vuePropsType },
  name: 'Tabs',
  setup(props, {}) {
    const slots = useSlots();
    const {getProps} = useHasInProps()

    return () => {
      const children = getFragmentChildren(slots)
      return (
        <Index {...getProps(props)} children={children}/>
      );
    };
  },
});
export default Tabs;

export { TabPane, TabItem };
