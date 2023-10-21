import styles from "@/app/styles";
import RightBigLeaf from "@/assets/RightBigLeaf";
import RightLeaf from "@/assets/RightLeaf";
import Image from "next/image";

const SabahCenterSection = () => {
    return (
        <div
            className={`${styles.boxWidth} grid grid-cols-10 h-full mx-auto w-full gap-8 mt-40 mb-10`}>
            <div className="bg-green-100 w-[350px] md:w-[535px] h-[506px] md:h-[756px] rounded-lg relative col-span-10 md:col-span-6 mx-auto md:mx-0">
                <Image
                    className="w-[207px] md:w-[380px] h-[424px] rounded-lg absolute -top-10 md:-top-20 right-4 md:right-12 object-cover"
                    src="/images/sabah-center1.jpeg"
                    width={100}
                    height={100}
                    alt="Sabah Center"
                />
                <Image
                    className="w-[207px] md:w-[380px] h-[424px] rounded-lg absolute top-48 -left-4 md:-left-20 object-cover"
                    src="/images/sabah-center2.jpeg"
                    width={100}
                    height={100}
                    alt="Sabah Center"
                />
            </div>
            <div className="h-full flex flex-col gap-4 justify-center items-start mx-3 md:mx-0 col-span-10 md:col-span-4">
                <div className="flex w-full justify-end mb-12">
                    <RightLeaf />
                </div>
                <h2 className="text-right text-green-600 text-4xl font-bold">
                    تعرف علي مركز الصباح
                </h2>
                <div className="  text-right text-neutral-600 text-xl font-normal leading-9">
                    مركز الصباح يقدم الإبر الصينية لانها وسيلة من وسائل الطب
                    الصيني البديل والتي اعتمادها الجامعات الأمريكية والمعاهد
                    والمراكز الألمانية وتعتبر من الإجراءات التكميلية وتستخدم من
                    اجل الكثير من الأمراض،
                </div>
                <a href="#" className={`${styles.ctaBtn} mt-8`}>
                    اكتشف
                </a>
                <div className="flex w-full justify-start mt-20">
                    <RightBigLeaf />
                </div>
            </div>
        </div>
    );
};

export default SabahCenterSection;
