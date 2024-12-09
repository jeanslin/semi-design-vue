import { expect, test, describe } from 'vitest'
import Comp from "./SelectDemo";
import SelectTest from "./SelectTest";
import {mount} from "@vue/test-utils";
import {fireEvent, render, screen} from "@testing-library/vue";
import SelectDemoToRawTest from './SelectDemoToRawTest';

test('SelectDemo qwe', async () => {
  expect(Comp).toBeTruthy()
  const wrapper = mount(Comp, {})

  const profileLink = wrapper.get('.semi-select-selection-placeholder').text()
  expect(profileLink).toEqual('onChange')


  render(Comp)
  const img = await screen.findAllByText("option-50")
  expect(img.length).toEqual(1)
  const input = await screen.findByText("onChange")
  await fireEvent.click(input);
  const item = await screen.findByText("tony")
  await fireEvent.click(item)
  const valueText = await screen.findByPlaceholderText("select_change_demo") as HTMLInputElement
  expect(valueText.value).toEqual('tony')
})



test('SelectDemo toRaw unit', async () => {

  render(SelectDemoToRawTest)
  const select = await screen.findByText("test") as HTMLInputElement
  await fireEvent.click(select);
  const option = await screen.findByTestId("a001")
  await fireEvent.click(option);
  const valueText = option.parentElement.className
  expect(valueText).toEqual("semi-select-option semi-select-option-selected semi-select-option-focused")
  const hs = await screen.findAllByText("火山")
  expect(hs.length).toEqual(2)
})

test('SelectDemo filter highlight', async () => {

  render(SelectTest)
  await (new Promise(resolve => setTimeout(resolve, 500)))
  const input = await screen.findByRole("select-search-input")
  await fireEvent.input(input, {target: {value: '抖'}})
  const text = await screen.findByText("抖")
  expect(text.getAttribute('class')).toEqual('semi-highlight-tag semi-select-option-keyword')
})
