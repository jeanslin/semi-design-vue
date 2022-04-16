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
                d="M12.0134 4C17.8096 4 22.5 8.71721 22.5 14.5401C22.5 14.8879 22.4822 15.2268 22.4465 15.5656C22.4465 15.5745 22.4465 15.5834 22.4465 15.5924C22.4287 15.7261 22.4198 15.8688 22.4019 16.0026C22.4019 16.0115 22.4019 16.0293 22.393 16.0382C22.3306 16.4841 22.2414 16.921 22.1255 17.3491C22.1166 17.3847 22.1077 17.4204 22.0987 17.4561C22.072 17.5541 22.0363 17.6612 22.0096 17.7593C21.9917 17.8038 21.9828 17.8484 21.965 17.893C21.9382 17.9822 21.9026 18.0713 21.8669 18.1605C21.8491 18.2051 21.8312 18.2586 21.8134 18.3032C21.7777 18.3924 21.7421 18.4816 21.7064 18.5618C21.6885 18.6064 21.6707 18.651 21.6529 18.6956C21.5994 18.8115 21.5459 18.9363 21.4924 19.0522C21.4835 19.0612 21.4834 19.0701 21.4745 19.079C21.3229 19.4 21.1535 19.7121 20.9752 20.0064C20.8503 20.2115 20.5828 20.2739 20.1994 20.0242L18.1752 18.6688C17.9879 18.544 17.9344 18.3032 18.0503 18.107C18.086 18.0446 18.1217 17.9733 18.1573 17.9108C18.2733 17.6879 18.1662 17.4026 17.9344 17.3223C16.0796 16.6535 14.0911 16.2879 12.0045 16.2879C9.92675 16.2879 7.92931 16.6535 6.07453 17.3223C5.83376 17.4115 5.72676 17.6879 5.8516 17.9108C5.88727 17.9733 5.92293 18.0446 5.9586 18.107C6.06561 18.2943 6.01211 18.544 5.82485 18.6688L3.6223 20.1401C3.42612 20.2739 3.14967 20.2115 3.02483 20.0064C2.84649 19.7032 2.67707 19.3911 2.52547 19.079C2.51656 19.0701 2.51657 19.0612 2.51657 19.0522C2.46307 18.9363 2.40955 18.8115 2.35604 18.6956C2.33821 18.651 2.32038 18.6064 2.30254 18.5618C2.26687 18.4726 2.23121 18.3835 2.19554 18.3032C2.17771 18.2586 2.15987 18.2051 2.14204 18.1605C2.10637 18.0713 2.07961 17.9822 2.04394 17.893C2.0261 17.8484 2.0172 17.8038 1.99936 17.7593C1.96369 17.6612 1.93694 17.5541 1.91018 17.4561C1.90127 17.4204 1.89235 17.3847 1.88343 17.3491C1.76751 16.921 1.67834 16.4841 1.607 16.0382C1.607 16.0293 1.60699 16.0115 1.59808 16.0026C1.58024 15.8688 1.56242 15.7261 1.5535 15.5924C1.5535 15.5834 1.5535 15.5745 1.5535 15.5656C1.51783 15.2268 1.5 14.8879 1.5 14.5401C1.5 8.71721 6.19937 4 11.9866 4H12.0134ZM5.94078 13.6484C6.0032 13.6484 6.07452 13.6395 6.14585 13.6217C8.00955 13.0777 9.98025 12.7834 12.0223 12.7834C14.0643 12.7834 16.0351 13.0777 17.8987 13.6217C18.4249 13.7733 18.9242 13.3006 18.7815 12.7745C17.9879 9.76943 15.2681 7.55798 12.0223 7.55798C8.78534 7.55798 6.06561 9.76943 5.26306 12.7745C5.13822 13.2382 5.50383 13.6573 5.94078 13.6573V13.6484Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconDongchediLogo',

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
