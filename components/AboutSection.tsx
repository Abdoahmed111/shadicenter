import styles from "@/app/styles";
import Image from "next/image";
import DrAlaaImage from "@/assets/dr-alaa.png";
import Link from "next/link";
const AboutSection = () => {
    return (
        <div
            className={`bg-gradient-to-r from-green-600 to-blue-500 rounded-[30px] ${styles.boxWidth} px-12 md:px-24 pb-12 md:pb-0 my-32 grid grid-cols-6 gap-20`}>
            <Image
                className="w-[363px] h-[412px] m-auto col-span-6 md:col-span-2 object-cover"
                src="/images/dr-alaa.png"
                alt="dr-alaa"
                width={563}
                height={812}
            />
            <div className="flex flex-col gap-6 justify-center items-start col-span-6 md:col-span-4">
                <h2 className=" text-right text-white text-[40px] font-bold">
                    تعرف على د/ علاء الدين أبو شادي
                </h2>
                <p className="text-right text-white text-xl font-normal ">
                    مستشار طبى بمنظمه الأمم المتحدة. ورئيس النقابه العامه للطب
                    البديل والتكميلي مدير مركز شادى لطب الاعشاب ومدير مركز
                    الصباح للطب البديل
                </p>
                <Link href="/dr-alaa" className={`${styles.ctaBtn}`}>
                    اكتشف المزيد
                </Link>
            </div>
        </div>
    );
};

export default AboutSection;
