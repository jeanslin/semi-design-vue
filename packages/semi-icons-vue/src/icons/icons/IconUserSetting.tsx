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
                d="M16.8647 14.8518C16.4999 15.0624 16.05 15.0605 15.6869 14.8467L15.5756 14.7812C15.3 14.6189 14.9451 14.6625 14.7478 14.9142C14.4537 15.2893 14.2175 15.702 14.0428 16.1378C13.924 16.4343 14.0636 16.7631 14.3416 16.9204L14.453 16.9834C14.8198 17.1908 15.0466 17.5796 15.0466 18.0011C15.0466 18.4223 14.82 18.811 14.4534 19.0185L14.3414 19.082C14.063 19.2396 13.9234 19.569 14.043 19.8657C14.1301 20.0814 14.2332 20.2937 14.3529 20.501C14.4726 20.7084 14.605 20.904 14.7485 21.0874C14.9456 21.3393 15.3006 21.3831 15.5762 21.2207L15.6868 21.1555C16.0499 20.9415 16.5 20.9395 16.865 21.1502C17.2298 21.3609 17.4531 21.7515 17.4495 22.1727L17.4484 22.301C17.4457 22.6205 17.6608 22.9058 17.9771 22.9511C18.4418 23.0177 18.9173 23.0194 19.3893 22.9522C19.7058 22.9072 19.9209 22.6216 19.918 22.3019L19.9169 22.173C19.9131 21.7516 20.1364 21.3608 20.5014 21.1501C20.8662 20.9395 21.3162 20.9414 21.6792 21.1551L21.7905 21.2207C22.0661 21.3829 22.421 21.3393 22.6183 21.0877C22.9124 20.7125 23.1487 20.2998 23.3233 19.864C23.4421 19.5675 23.3025 19.2387 23.0245 19.0815L22.9131 19.0185C22.5463 18.811 22.3195 18.4222 22.3195 18.0008C22.3195 17.5795 22.5461 17.1908 22.9127 16.9833L23.0248 16.9199C23.3032 16.7623 23.4428 16.4328 23.3231 16.1362C23.2361 15.9204 23.1329 15.7081 23.0133 15.5009C22.8935 15.2934 22.7611 15.0978 22.6176 14.9144C22.4205 14.6625 22.0655 14.6188 21.79 14.7812L21.6793 14.8464C21.3162 15.0603 20.8661 15.0623 20.5011 14.8516C20.1363 14.641 19.913 14.2504 19.9166 13.8291L19.9177 13.7008C19.9204 13.3813 19.7053 13.096 19.3891 13.0507C18.9243 12.9841 18.4488 12.9825 17.9769 13.0496C17.6604 13.0947 17.4453 13.3803 17.4481 13.6999L17.4493 13.8288C17.453 14.2502 17.2297 14.641 16.8647 14.8518ZM19.5922 19.5755C20.4618 19.0734 20.7598 17.9614 20.2577 17.0918C19.7556 16.2222 18.6436 15.9242 17.774 16.4263C16.9043 16.9284 16.6064 18.0404 17.1084 18.91C17.6105 19.7797 18.7225 20.0776 19.5922 19.5755Z"
                fill="currentColor"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3475 15.9829C12.2325 15.9942 12.1166 16 11.9999 16C10.0184 16 8.25508 14.3398 7.28613 11.8599C6.68306 11.6143 6.10891 10.8658 5.84697 9.8882C5.50656 8.61777 5.57442 7.48354 6.5036 7.13179C6.59375 2.71088 8.33845 1 11.9999 1C15.6616 1 17.4063 2.7111 17.4962 7.13266C18.4233 7.48536 18.4908 8.61881 18.1507 9.88823C17.8891 10.8644 17.3162 11.6122 16.7141 11.8589C16.6734 11.9631 16.6313 12.0659 16.5878 12.1671C14.6144 12.6432 13.0213 14.0948 12.3475 15.9829ZM12.0829 17.0002C12.0553 17.0001 12.0276 17 11.9999 17C8.14686 17 4.8028 18.1985 3.13288 19.9547C2.28278 20.8487 3.16135 22 4.39501 22H13.5278C12.5777 20.9385 12 19.5367 12 18C12 17.6594 12.0284 17.3253 12.0829 17.0002Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent({
    name: 'IconUserSetting',

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
