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
            <g opacity={0.99}>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.28361 7.6084C4.69475 7.6084 4.36516 7.25684 4.36516 6.63281V3.54248H4.35637L4.11027 3.6875C3.82024 3.85889 3.33494 4.04248 3.15916 4.04248C2.89934 4.04248 2.5 3.51709 2.5 3.15674C2.5 2.88867 2.6582 2.65576 2.96582 2.47119L3.97404 1.85156C4.35197 1.62305 4.75627 1.5 5.12102 1.5C5.77141 1.5 6.19328 1.93066 6.19328 2.59863V6.63281C6.19328 7.26123 5.86809 7.6084 5.28361 7.6084ZM9.5 3C8.67157 3 8 3.67157 8 4.5C8 5.32843 8.67157 6 9.5 6H20.5C21.3284 6 22 5.32843 22 4.5C22 3.67157 21.3284 3 20.5 3H9.5ZM8 11.5C8 10.6716 8.67157 10 9.5 10H20.5C21.3284 10 22 10.6716 22 11.5C22 12.3284 21.3284 13 20.5 13H9.5C8.67157 13 8 12.3284 8 11.5ZM8 18.5C8 17.6716 8.67157 17 9.5 17H20.5C21.3284 17 22 17.6716 22 18.5C22 19.3284 21.3284 20 20.5 20H9.5C8.67157 20 8 19.3284 8 18.5ZM2.15723 13.8745C2.15723 14.3052 2.48682 14.5996 2.97021 14.5996H6.0332C6.55176 14.5996 6.85938 14.3359 6.85938 13.8921C6.85938 13.4482 6.54297 13.1758 6.0332 13.1758H4.56104V13.1055L5.59814 12.1826C6.29688 11.563 6.63965 10.9478 6.63965 10.3018C6.63965 9.26904 5.68604 8.5 4.40723 8.5C3.18115 8.5 2.14844 9.25586 2.14844 10.1128C2.14844 10.5039 2.44727 10.7852 2.86914 10.7852C3.16357 10.7852 3.35693 10.6709 3.625 10.3369C3.85791 10.0469 4.04688 9.94141 4.31055 9.94141C4.65332 9.94141 4.89062 10.1611 4.89062 10.4863C4.89062 10.7764 4.68848 11.0576 4.23145 11.4883L2.88672 12.7539C2.34619 13.2593 2.15723 13.5493 2.15723 13.8745ZM4.29736 21.7314C3.02295 21.7314 1.99463 21.0854 1.99463 20.2856C1.99463 19.877 2.28027 19.5825 2.67578 19.5825C2.92188 19.5825 3.1416 19.6968 3.3877 19.9517C3.67773 20.2549 3.96338 20.3911 4.28857 20.3911C4.75439 20.3911 5.06201 20.1582 5.06201 19.8066C5.06201 19.4551 4.75439 19.2178 4.28857 19.2178H4.04688C3.68213 19.2178 3.42285 18.9365 3.42285 18.541C3.42285 18.1675 3.68213 17.873 4.04688 17.873H4.28857C4.6709 17.873 4.95215 17.6533 4.95215 17.3545C4.95215 17.0557 4.67529 16.8403 4.28857 16.8403C3.98975 16.8403 3.74365 16.959 3.42285 17.2622C3.2251 17.4468 3.00098 17.5391 2.7417 17.5391C2.32422 17.5391 2.0166 17.2578 2.0166 16.8755C2.0166 16.1284 3.06689 15.5 4.31494 15.5C5.70801 15.5 6.67041 16.168 6.67041 17.1348C6.67041 17.7676 6.1958 18.3125 5.59375 18.3696V18.4927C6.30566 18.5322 6.82422 19.1211 6.82422 19.8901C6.82422 20.9668 5.77393 21.7314 4.29736 21.7314Z"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconOrderedList',

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
