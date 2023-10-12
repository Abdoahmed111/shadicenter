import styles from "@/app/styles";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-green-600 mt-32 py-20">
            <div
                className={`${styles.boxWidth} px-6 md:px-24 md:pb-0 flex flex-col justify-center items-start gap-y-12 `}>
                <div className="w-full flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center">
                    <div className="flex justify-start items-center gap-4">
                        <Image
                            src="/logo.png"
                            width={64}
                            height={64}
                            alt="logo"
                        />
                        <p className="w-[277px] text-right text-white text-sm font-normal leading-[24.91px]">
                            اهلا بيكم في مركز ابو شادي اهلا بيكم في مركز ابو
                            شادي اهلا بيكم فيا
                        </p>
                    </div>

                    <ul className="flex justify-start items-start gap-x-4 md:gap-x-8">
                        <li className="text-right text-white text-md font-semibold hover:text-black">
                            <a href="">الرئيسية</a>
                        </li>
                        <li className="text-right text-white text-md font-semibold hover:text-black">
                            <a href="">د/علاء</a>
                        </li>
                        <li className="text-right text-white text-md font-semibold hover:text-black">
                            <a href="">منتجاتنا</a>
                        </li>
                        <li className="text-right text-white text-md font-semibold hover:text-black">
                            <a href="">خدماتنا</a>
                        </li>
                        <li className="text-right text-white text-md font-semibold hover:text-black">
                            <a href="">مركز الصباح</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-8 md:gap-y-0">
                    <div className="flex justify-start items-start gap-x-4">
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.5001 1.79541C13.6242 1.79541 15.6613 2.6151 17.1633 4.07415C18.6653 5.5332 19.5091 7.5121 19.5091 9.57551C19.5091 12.8631 17.131 16.4459 12.4366 20.3623C12.1755 20.5802 11.8427 20.6998 11.4986 20.6995C11.1545 20.6992 10.8219 20.579 10.5612 20.3607L10.2507 20.099C5.7641 16.2848 3.49121 12.7897 3.49121 9.57551C3.49121 7.5121 4.33501 5.5332 5.83697 4.07415C7.33894 2.6151 9.37604 1.79541 11.5001 1.79541ZM11.5001 6.58317C10.6832 6.58317 9.89968 6.89843 9.322 7.4596C8.74432 8.02078 8.41978 8.78189 8.41978 9.57551C8.41978 10.3691 8.74432 11.1302 9.322 11.6914C9.89968 12.2526 10.6832 12.5679 11.5001 12.5679C12.3171 12.5679 13.1006 12.2526 13.6783 11.6914C14.256 11.1302 14.5805 10.3691 14.5805 9.57551C14.5805 8.78189 14.256 8.02078 13.6783 7.4596C13.1006 6.89843 12.3171 6.58317 11.5001 6.58317Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col justify-start items-start gap-y-4">
                            <p className="text-right text-white text-lg font-semibold">
                                العنوان
                            </p>
                            <p className="text-right text-white text-base font-normal">
                                ش . الامير محمد متفرع من ميدان الجواد الابيض
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-x-4">
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.5013 1.9165C16.7942 1.9165 21.0846 6.20696 21.0846 11.4998C21.0846 16.7927 16.7942 21.0832 11.5013 21.0832C9.80773 21.0859 8.14394 20.6377 6.6809 19.7846L1.92182 21.0832L3.21748 16.3222C2.3637 14.8587 1.91515 13.1942 1.91798 11.4998C1.91798 6.20696 6.20844 1.9165 11.5013 1.9165ZM8.23532 6.99567L8.04365 7.00334C7.91956 7.01089 7.7983 7.04349 7.68715 7.09917C7.58319 7.15804 7.48829 7.23164 7.4054 7.31767C7.2904 7.42596 7.22523 7.51988 7.15527 7.61092C6.80081 8.07179 6.60996 8.6376 6.61286 9.219C6.61477 9.68859 6.73744 10.1457 6.92911 10.5731C7.32107 11.4375 7.96602 12.3528 8.81702 13.2009C9.02211 13.405 9.22336 13.6101 9.43994 13.8008C10.4974 14.7318 11.7574 15.4032 13.1199 15.7615L13.6643 15.8449C13.8416 15.8545 14.0189 15.8411 14.1971 15.8325C14.4762 15.8181 14.7487 15.7425 14.9954 15.6111C15.1209 15.5464 15.2434 15.4761 15.3624 15.4003C15.3624 15.4003 15.4036 15.3734 15.4822 15.314C15.6116 15.2182 15.6911 15.1501 15.7985 15.038C15.878 14.9556 15.947 14.8588 15.9997 14.7486C16.0745 14.5924 16.1492 14.2943 16.1799 14.0461C16.2029 13.8564 16.1962 13.7529 16.1933 13.6887C16.1895 13.5861 16.1042 13.4798 16.0112 13.4347L15.4535 13.1846C15.4535 13.1846 14.6197 12.8214 14.1099 12.5895C14.0565 12.5662 13.9994 12.5528 13.9412 12.5502C13.8757 12.5434 13.8094 12.5508 13.7469 12.5718C13.6844 12.5928 13.6272 12.6269 13.579 12.6719C13.5742 12.67 13.51 12.7246 12.8171 13.5641C12.7773 13.6175 12.7226 13.6579 12.6598 13.6801C12.5969 13.7023 12.5289 13.7053 12.4644 13.6887C12.402 13.6719 12.3408 13.6508 12.2814 13.6254C12.1626 13.5756 12.1214 13.5564 12.0399 13.5219C11.4899 13.2819 10.9806 12.9576 10.5305 12.5607C10.4098 12.4553 10.2976 12.3403 10.1826 12.2291C9.80563 11.8681 9.47705 11.4596 9.20515 11.014L9.14861 10.9229C9.108 10.8617 9.07516 10.7958 9.05086 10.7265C9.01444 10.5856 9.10932 10.4725 9.10932 10.4725C9.10932 10.4725 9.34219 10.2176 9.45048 10.0796C9.5559 9.94542 9.64502 9.81509 9.70252 9.72213C9.81561 9.54005 9.85107 9.35317 9.79165 9.20846C9.52332 8.55296 9.2454 7.90034 8.95982 7.2525C8.90327 7.12409 8.73557 7.03209 8.58319 7.01388C8.53144 7.00813 8.47969 7.00238 8.42794 6.99855C8.29924 6.99215 8.17028 6.99343 8.04173 7.00238L8.23436 6.99471L8.23532 6.99567Z"
                                fill="white"
                            />
                        </svg>

                        <div className="flex flex-col justify-start items-start gap-y-4">
                            <p className="text-right text-white text-lg font-semibold">
                                رقم الواتساب
                            </p>
                            <p className="text-right text-white text-base font-normal">
                                +0992575422134
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
