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
                d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.8281 14.6094C10.9688 14.6094 10.5391 14.0723 10.5391 13.3691C10.5391 12.3242 11.0566 11.6504 12.2676 10.7324C12.2894 10.7158 12.3111 10.6993 12.3326 10.6829C13.1573 10.0555 13.7324 9.61807 13.7324 8.82812C13.7324 7.93945 12.9023 7.42188 11.9746 7.42188C11.2129 7.42188 10.627 7.70508 10.168 8.30078C9.83594 8.64258 9.57227 8.82812 9.12305 8.82812C8.38086 8.82812 8 8.31055 8 7.71484C8 7.10938 8.3418 6.49414 8.87891 6.02539C9.60156 5.40039 10.7539 5 12.2773 5C14.9922 5 16.8965 6.33789 16.8965 8.64258C16.8965 10.3223 15.8906 11.1328 14.709 11.9531C13.9082 12.5391 13.5273 12.8809 13.2246 13.5742L13.2238 13.5756C12.8922 14.1609 12.638 14.6094 11.8281 14.6094ZM11.8086 18.7695C10.8711 18.7695 10.0996 18.1641 10.0996 17.2266C10.0996 16.2891 10.8711 15.6836 11.8086 15.6836C12.7461 15.6836 13.5078 16.2891 13.5078 17.2266C13.5078 18.1641 12.7461 18.7695 11.8086 18.7695Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconHelpCircle',

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
