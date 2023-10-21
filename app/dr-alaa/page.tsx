import { Metadata } from "next";
import React from "react";
import styles from "../styles";
import Image from "next/image";
import DrAlaaImage from "@/assets/dr-alaa.png";
import DrAlaaAbout1 from "@/assets/dr-alaa-about.jpeg";
import DrAlaaAbout2 from "@/assets/dr-alaa-about2.jpeg";
import DrAlaaAbout3 from "@/assets/dr-alaa-about3.jpeg";
import DrAlaaAbout4 from "@/assets/dr-alaa-about4.jpeg";

export const metadata: Metadata = {
    title: "دكتور علاء الدين ابو شادي",
    description:
        "مستشار طبى بمنظمه الأمم المتحدة. ورئيس النقابه العامه للطب البديل والتكميلي  مدير مركز شادى لطب الاعشاب ومدير مركز الصباح للطب البديل",
};

const DrAlaa = () => {
    return (
        <>
            {/* hero section */}
            <div
                className={`${styles.boxWidth} flex flex-col md:flex-row justify-between items-center h-full mx-auto w-full gap-8 mt-24`}>
                <div className="w-[385px] h-[393px] md:w-[585px] md:h-[593px] bg-gradient-to-r from-green-600 to-green-200 rounded-[43px] object-contain flex justify-center items-center">
                    <Image
                        className="flex "
                        src="/images/dr-alaa.png"
                        alt="dr-alaa"
                        width={585}
                        height={593}
                    />
                </div>
                <div className="h-full flex flex-col gap-4 justify-center items-center md:items-start mx-3 md:mx-0">
                    <h1 className="text-center md:text-right">
                        <span className="text-black text-3xl md:text-4xl text- font-bold">
                            تعرف علي{" "}
                        </span>
                        <span className="text-green-500 text-3xl md:text-4xl font-bold">
                            {" "}
                            د/ علاء الدين ابو شادي
                        </span>
                    </h1>
                    <div className="text-center md:text-right text-neutral-600 text-md md:text-xl font-normal leading-9">
                        مستشار طبى بمنظمه الأمم المتحدة. ورئيس النقابه العامه
                        للطب البديل والتكميلي <br />
                        مدير مركز شادى لطب الاعشاب ومدير مركز الصباح للطب البديل
                    </div>
                    <a href="#" className={`${styles.ctaBtn} mt-8`}>
                        تواصل معنا
                    </a>
                </div>
            </div>

            {/* about section */}
            <div
                className={`${styles.boxWidth} flex flex-col justify-between items-center h-full mx-auto w-full gap-8 mt-24`}>
                <h2 className="text-green-600 text-2xl md:text-3xl font-bold">
                    من هو د/ علاء الدين ابو شادي
                </h2>
                <p className="text-center md:text-right text-lg md:text-xl text-black  font-normal tracking-wider">
                    حاصل على دكتوراه فى الطب التكميلي والبديل من بريطانيا.
                    ومستشار طبى بمنظمه الأمم المتحدة. ورئيس النقابه العامه للطب
                    البديل والتكميلي. وحاصل على دبلومه طب الاعشاب من المعهد
                    العالي العالمى لطب الاعشاب. وعمل مدرس وأستاذ دكتور فى المركز
                    الثقافى البريطانى لطب الاعشاب. ومدير مركز شادى لطب الاعشاب
                    والمنتجات العشبيه والمكملات الغذائيه بالكويت ومدير مركز
                    الصباح للطب البديل
                </p>
            </div>

            <div
                className={`${styles.boxWidth} grid grid-cols-1 md:grid-cols-2 h-full mx-auto w-full gap-8 mt-24`}>
                <div className="flex w-full h-[740px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src={DrAlaaAbout1}
                        alt="Dr Alaa"
                    />
                </div>
                <div className="flex w-full h-[740px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src={DrAlaaAbout2}
                        alt="Dr Alaa"
                    />
                </div>
                <div className="flex w-full h-[740px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src={DrAlaaAbout3}
                        alt="Dr Alaa"
                    />
                </div>
                <div className="flex w-full h-[740px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src={DrAlaaAbout4}
                        alt="Dr Alaa"
                    />
                </div>
            </div>
        </>
    );
};

export default DrAlaa;
