import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, IconProps, vuePropsType as iconVuePropsType } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
    return () => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            // @ts-ignore
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                d="M4.5 4.75C4.5 3.23122 5.73122 2 7.25 2C8.76878 2 10 3.23122 10 4.75V19.25C10 20.7688 8.76878 22 7.25 22C5.73122 22 4.5 20.7688 4.5 19.25V4.75Z"
                fill="currentColor"
            />
            <path
                d="M14 4.75C14 3.23122 15.2312 2 16.75 2C18.2688 2 19.5 3.23122 19.5 4.75V19.25C19.5 20.7688 18.2688 22 16.75 22C15.2312 22 14 20.7688 14 19.25V4.75Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconPause',

    setup(props, { slots }) {
        return () => (
            <ConvertIcon iconType={'activity'} {...props}>
                {{
                    default: () => <SvgComponent />,
                }}
            </ConvertIcon>
        );
    },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
