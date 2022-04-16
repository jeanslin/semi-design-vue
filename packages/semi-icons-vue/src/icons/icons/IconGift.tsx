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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 4.5C4 2.59886 5.41639 1 7.5 1C8.46493 1 9.28471 1.47945 9.91399 2.02664C10.5512 2.58073 11.0941 3.29071 11.5259 3.95501C11.6981 4.21986 11.8566 4.48369 12 4.73638C12.1434 4.48369 12.3019 4.21986 12.4741 3.95501C12.9059 3.29071 13.4488 2.58073 14.086 2.02664C14.7153 1.47945 15.5351 1 16.5 1C18.5836 1 20 2.59886 20 4.5C20 5.47934 19.5978 6.36474 18.9495 7H21C21.5523 7 22 7.44772 22 8V10C22 10.5523 21.5523 11 21 11H13V6H11V11H3C2.44772 11 2 10.5523 2 10V8C2 7.44772 2.44772 7 3 7H5.05051C4.40223 6.36474 4 5.47934 4 4.5ZM11 12H4V20C4 21.1046 4.89543 22 6 22H11V12ZM13 22H18C19.1046 22 20 21.1046 20 20V12H13V22ZM10.4137 6C10.25 5.69701 10.0603 5.36998 9.84906 5.04499C9.46835 4.45929 9.04256 3.91927 8.60163 3.53586C8.15279 3.14555 7.78507 3 7.5 3C6.58361 3 6 3.63972 6 4.5C6 5.32843 6.67157 6 7.5 6H10.4137ZM14.1509 5.04499C13.9397 5.36998 13.75 5.69701 13.5863 6H16.5C17.3284 6 18 5.32843 18 4.5C18 3.63972 17.4164 3 16.5 3C16.2149 3 15.8472 3.14555 15.3984 3.53586C14.9574 3.91927 14.5316 4.45929 14.1509 5.04499Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconGift',

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
