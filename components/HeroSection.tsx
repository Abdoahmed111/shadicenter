import styles from "@/app/styles";
import RightBigLeaf from "@/assets/RightBigLeaf";
import RightLeaf from "@/assets/RightLeaf";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div
            className={`${styles.boxWidth} flex flex-col md:flex-row justify-between items-center h-full mx-auto w-full gap-8 mt-24`}>
            <div>
                <div className="flex gap-8 mb-8">
                    <Image
                        className="w-[147px] md:w-[277px] h-[188px] md:h-[318px] rounded-[10px] object-cover"
                        src="/images/shadi-center2.jpeg"
                        alt="Shadi Center"
                        width={100}
                        height={100}
                    />
                    <Image
                        className="w-[188px] md:w-[308px] h-32 md:h-48 rounded-[10px] object-cover"
                        src="/images/shadi-center.jpeg"
                        alt="Shadi Center"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex gap-8">
                    <Image
                        className="w-[105px] md:w-[225px] h-[195px] md:h-[265px] rounded-[10px] object-cover"
                        src="/images/shadi-center4.jpeg"
                        alt="Shadi Center"
                        width={100}
                        height={100}
                    />
                    <Image
                        className="-mt-16 md:-mt-32 w-[230px] md:w-[360px] h-[291px] md:h-[421px]  rounded-[10px] object-cover"
                        src="/images/shadi-center3.jpeg"
                        alt="Shadi Center"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className="h-full flex flex-col gap-4 justify-center items-start mx-3 md:mx-0">
                <div className="flex w-full justify-end mb-12">
                    <RightLeaf />
                </div>
                <div className="text-right">
                    <span className="text-black text-4xl font-bold">
                        اهلا بكم في
                    </span>
                    <span className="text-green-500 text-4xl font-bold">
                        {" "}
                        مركز شادي للطب البديل
                    </span>
                </div>
                <div className="  text-right text-neutral-600 text-xl font-normal leading-9">
                    يوجد مكملات غذائية ومنتجات مكونة جميعها من اعشاب طبيعية
                    <br />
                    لتحسين وظائف الجسم والعمل علي امتداده بالنشاط الذي <br />
                    يحتاجه الإنسان وتنشيط الدورة الدموية
                </div>
                <a
                    target="_blank"
                    href="https://wa.me/0992575422134"
                    className={`${styles.ctaBtn} mt-8`}>
                    تواصل معنا
                </a>
                <div className="flex w-full justify-start mt-20">
                    <RightBigLeaf />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
