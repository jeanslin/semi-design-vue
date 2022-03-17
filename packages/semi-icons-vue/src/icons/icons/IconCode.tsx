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
                d="M14.4885 4.18603C14.5912 3.364 14.0081 2.61431 13.1861 2.51156C12.3641 2.4088 11.6144 2.99189 11.5116 3.81392L9.51162 19.8139C9.40886 20.636 9.99195 21.3856 10.814 21.4884C11.636 21.5911 12.3857 21.0081 12.4885 20.186L14.4885 4.18603ZM8.06066 5.93931C8.64645 6.5251 8.64645 7.47485 8.06066 8.06063L4.12132 12L8.06066 15.9393C8.64645 16.5251 8.64645 17.4748 8.06066 18.0606C7.47487 18.6464 6.52513 18.6464 5.93934 18.0606L0.93934 13.0606C0.353553 12.4748 0.353553 11.5251 0.93934 10.9393L5.93934 5.93931C6.52513 5.35353 7.47487 5.35353 8.06066 5.93931ZM15.9393 5.93931C16.5251 5.35353 17.4749 5.35353 18.0607 5.93931L23.0607 10.9393C23.6464 11.5251 23.6464 12.4748 23.0607 13.0606L18.0607 18.0606C17.4749 18.6464 16.5251 18.6464 15.9393 18.0606C15.3536 17.4748 15.3536 16.5251 15.9393 15.9393L19.8787 12L15.9393 8.06063C15.3536 7.47485 15.3536 6.5251 15.9393 5.93931Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconCode',

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
