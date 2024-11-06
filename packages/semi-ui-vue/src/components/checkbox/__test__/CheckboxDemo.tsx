import {defineComponent, ref, h, Fragment, useSlots} from 'vue'
import ContrlDemo from "./ContrlDemo";
import { CheckboxGroup } from '../index';
interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const CheckboxDemo = defineComponent((props, {}) => {
  const slots = useSlots()
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['抖音', '火山', '皮皮虾'];
  const options = [
    { label: '追求极致', value: '1', extra: '不断提高要求，延迟满足感，在更大范围里找最优解' },
    { label: '务实敢为', value: '2', extra:'直接体验，深入事实；不自嗨，注重效果；能突破有担当，打破定式；尝试多种可能，快速迭代' },
    { label: '开放谦逊', value: '3', extra: '内心阳光，信任伙伴；乐于助人和求助，合作成大事;格局大，上个台阶想问题；对外敏锐谦虚，ego小，听得进意见' },
    { label: '坦诚清晰', value: '4', extra: '敢当面表达真实想法；能承认错误，不装不爱面子；实事求是，暴露问题，反对“向上管理”；准确、简洁、直接，有条理有重点' }
  ];
  const optionsWithDisabled = [
    { label: 'Photography', value: 'Photography' },
    { label: 'Movies', value: 'Movies' },
    { label: 'Running', value: 'Running', disabled: false },
  ];
  return () => (
    <div>
      <ContrlDemo />
      {/*<Checkbox onChange={checked => console.log(checked)} aria-label="Checkbox 示例">Semi Design</Checkbox>*/}
      {/*<div>*/}
      {/*  <CheckboxGroup options={plainOptions} defaultValue={['抖音']} onChange={onChange} aria-label="CheckboxGroup 示例" />*/}
      {/*  <br/><br/>*/}
      {/*  <CheckboxGroup options={options} defaultValue={[]} onChange={onChange} aria-label="CheckboxGroup 示例" />*/}
      {/*  <br/><br/>*/}
        <CheckboxGroup
          options={[
            {
              "label": "1月",
              "value": 1
            },
            {
              "label": "2月",
              "value": 2
            },
            {
              "label": "3月",
              "value": 3
            },
            {
              "label": "4月",
              "value": 4
            },
            {
              "label": "5月",
              "value": 5
            },
            {
              "label": "6月",
              "value": 6
            },
            {
              "label": "7月",
              "value": 7
            },
            {
              "label": "8月",
              "value": 8
            },
            {
              "label": "9月",
              "value": 9
            },
            {
              "label": "10月",
              "value": 10
            },
            {
              "label": "11月",
              "value": 11
            },
            {
              "label": "12月",
              "value": 12
            }
          ]}
          onChange={onChange}
          aria-label="Checkbox 示例"
        />
      {/*</div>*/}
    </div>
  )
})


export default CheckboxDemo

