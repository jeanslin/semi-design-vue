import { defineComponent, ref, h, Fragment, useSlots } from 'vue';
import { CombineProps } from '../../interface';
import JsonViewer from '../index';

interface JsonViewerDemoProps {
  name?: string;
}

const data = `{
    "name": "Semi",
    "version": "0.0.0"
}`;
export const vuePropsType: CombineProps<JsonViewerDemoProps> = {
  name: String,
};
const JsonViewerDemo = defineComponent({
  props: { ...vuePropsType },
  name: 'JsonViewerDemo',
  setup(props, { attrs }) {
    const slots = useSlots();


    return () => (
      <div style={{ marginBottom: '16px' }}>
        <JsonViewer height={100} width={400} value={data} />
      </div>
    );
  },
});


export default JsonViewerDemo;
