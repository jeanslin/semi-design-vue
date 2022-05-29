import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
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
                d="M21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.29289C21.3166 1.90237 20.6834 1.90237 20.2929 2.29289L17.3135 5.27233C15.8114 4.50566 14.0321 4 12 4C5 4 1 10 1 12C1 13.1757 2.38219 15.7335 4.94345 17.6423L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L21.7071 3.70711ZM7.8284 14.7574L9.29237 13.2934C9.10495 12.9018 9 12.4631 9 12C9 10.3431 10.3431 9 12 9C12.4631 9 12.9018 9.10495 13.2934 9.29237L14.7574 7.8284C13.967 7.30488 13.0191 7 12 7C9.23858 7 7 9.23858 7 12C7 13.0191 7.30488 13.967 7.8284 14.7574Z"
                fill="currentColor"
            />
            <path
                d="M12 20C10.7789 20 9.64914 19.8174 8.61594 19.5054L11.1871 16.9342C11.4516 16.9775 11.7232 17 12 17C14.7614 17 17 14.7614 17 12C17 11.7232 16.9775 11.4516 16.9342 11.1871L20.5032 7.61808C22.1342 9.27317 23 11.0695 23 12C23 14 19 20 12 20Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconEyeClosedSolid',

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
