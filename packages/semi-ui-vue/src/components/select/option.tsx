import { type ComponentObjectPropsOptions, type CSSProperties, defineComponent, h, type PropType, toRaw, type VNode } from 'vue';
import classNames from 'classnames';

import { isString } from 'lodash';
import { cssClasses } from '@douyinfe/semi-foundation/select/constants';
import { LocaleConsumerFunc } from '../locale/localeConsumer';
import { IconTick } from '@kousum/semi-icons-vue';
import Highlight, { HighlightProps } from '../highlight';
import type { Locale } from '../locale/interface';
import getDataAttr from '@douyinfe/semi-foundation/utils/getDataAttr';
import type { BasicOptionProps } from '@douyinfe/semi-foundation/select/optionFoundation';
import type { CombineProps, RemoveIndexSignature } from '../interface';
import { OptionGroupProps } from './optionGroup';
import { useHasInProps } from '../_base/baseComponent';
import { getTextFormVText } from '../_utils';

const LocaleConsumer = LocaleConsumerFunc<Locale['Select']>();

export interface OptionProps extends RemoveIndexSignature<BasicOptionProps> {
  value?: string | number;
  label?: string | number | VNode | VNode[];
  children?: string | number | VNode | VNode[];
  disabled?: boolean;
  showTick?: boolean;
  className?: string;
  style?: CSSProperties;

  //官方暂时还没有的类型
  selected?: boolean
  empty?: boolean,
  emptyContent?: string | number | VNode | VNode[] | (()=>VNode),
  inputValue?: string
  renderOptionItem?: (...args: any)=>VNode
  onMouseEnter?:  (e: MouseEvent) => any,
  focused?: boolean,
  onSelect?:  (opts: OptionProps, e: MouseEvent) => any,
  prefixCls?: string,
  _scrollIndex?: number,
  _selected?: boolean,
  _show?: boolean,
  semiOptionId?: string,
  key_?: any,
  _parentGroup?: OptionGroupProps,
  _keyInOptionList?: string,
  _keyInJsx?: string | number,
  _inputCreateOnly?: boolean,

  optionRest?: Record<string, any>
}

export const vuePropsType: CombineProps<OptionProps> = {
  value: [String, Number],
  label: [String, Number, Object, Array],
  children: [String, Number, Object, Array],
  disabled: Boolean,
  selected: Boolean,

  empty: Boolean,
  emptyContent: [Object, String, Number, Function] as PropType<OptionProps['emptyContent']>,
  inputValue: String,
  renderOptionItem: Function as PropType<OptionProps['renderOptionItem']>,
  onMouseEnter: Function as PropType<OptionProps['onMouseEnter']>,
  focused: Boolean,

  showTick: Boolean,
  className: String,
  style: [String, Object] as PropType<OptionProps['style']>,
  onSelect: Function as PropType<OptionProps['onSelect']>,
  prefixCls: {
    type: String,
    default: cssClasses.PREFIX_OPTION,
  },
  _scrollIndex: Number,
  _selected: Boolean,
  _show: Boolean,
  semiOptionId: String,
  key_: [Object, String, Number],
  _parentGroup: Object,
  _keyInOptionList: String,
  _keyInJsx: [String, Number],
  _inputCreateOnly: Boolean,

  optionRest: {
    type: Object,
    default: () => {}
  }
};

const Option = defineComponent({
  props: { ...vuePropsType },
  name: 'isSelectOption',
  setup(props, { slots, attrs }) {
    const {getProps} = useHasInProps()
    function onClick({ value, label, children, ...rest }: Partial<OptionProps>, event: MouseEvent) {
      const isDisabled = props.disabled;
      if (!isDisabled) {
        props.onSelect({ ...rest, value, label: toRaw(label || children) }, event);
      }
    }

    function renderOptionContent({ config, children, inputValue, prefixCls }) {
      if (isString(children) && inputValue) {
        return (
          <Highlight
            searchWords={config.searchWords as HighlightProps['searchWords']}
            sourceString={config.sourceString as string}
            highlightClassName={config.highlightClassName as string}
          />
        );
      }
      return children;
    }

    return () => {
      const children = getTextFormVText(slots.default ? slots.default() : null);
      // 还有部分属性没有写到props
      const {
        disabled,
        value,
        selected,
        label,
        empty,
        emptyContent,
        onSelect,
        focused,
        showTick,
        className,
        style,
        onMouseEnter,
        prefixCls,
        renderOptionItem,
        inputValue,
        semiOptionId,
        optionRest,
        ...rest_
      } = getProps(props);
      const rest = {...props.optionRest, ...rest_}
      const optionClassName = classNames(prefixCls, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-selected`]: selected,
        [`${prefixCls}-focused`]: focused,
        [`${prefixCls}-empty`]: empty,
        [className]: className,
      });
      const selectedIconClassName = classNames([`${prefixCls}-icon`]);

      if (empty) {
        if (emptyContent === null) {
          return null;
        }
        return (
          <LocaleConsumer componentName="Select">
            {(locale: Locale['Select']) => <div class={optionClassName}>{emptyContent || locale.emptyText}</div>}
          </LocaleConsumer>
        );
      }

      // Since there are empty, locale and other logic, the custom renderOptionItem is directly converged to the internal option instead of being placed in Select/index
      if (typeof renderOptionItem === 'function') {
        const customRenderClassName = classNames(className,
          {
            [`${prefixCls}-custom`]: true,
            [`${prefixCls}-custom-selected`]: selected
          }
        );
        return renderOptionItem({
          disabled,
          focused,
          selected,
          style,
          label,
          value,
          inputValue,
          onMouseEnter: (e: MouseEvent) => onMouseEnter(e),
          onClick: (e: MouseEvent) => onClick({ value, label, children, ...rest }, e),
          className: customRenderClassName,
          ...rest,
        });
      }

      const config = {
        searchWords: [inputValue],
        sourceString: children,
        highlightClassName: `${prefixCls}-keyword`
      };
      return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events
        <div
          class={optionClassName}
          onClick={(e) => {
            onClick({ value, label, children, ...rest }, e);
          }}
          onMouseenter={(e) => onMouseEnter && onMouseEnter(e)}
          role="option"
          id={semiOptionId}
          aria-selected={selected ? 'true' : 'false'}
          aria-disabled={disabled ? 'true' : 'false'}
          style={style}
          {...getDataAttr(attrs)}
        >
          {showTick ? (
            <div class={selectedIconClassName}>
              <IconTick />
            </div>
          ) : null}
          {isString(children) ? (
            <div class={`${prefixCls}-text`}>{renderOptionContent({ children, config, inputValue, prefixCls })}</div>
          ) : (
            [children]
          )}
        </div>
      );
    };
  },
});

export default Option;
