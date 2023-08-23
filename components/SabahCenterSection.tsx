import styles from "@/app/styles";
import RightBigLeaf from "@/assets/RightBigLeaf";
import RightLeaf from "@/assets/RightLeaf";

const SabahCenterSection = () => {
    return (
        <div
            className={`${styles.boxWidth} flex flex-col md:flex-row justify-between items-center h-full mx-auto w-full gap-8 mt-40 mb-10`}>
            <div className="bg-green-100 w-[350px] md:w-[535px] h-[506px] md:h-[756px] rounded-lg relative">
                <img
                    className="w-[207px] md:w-[380px] h-[424] rounded-lg absolute -top-10 md:-top-20 right-4 md:right-12"
                    src="https://via.placeholder.com/380x464"
                />
                <img
                    className="w-[207px] md:w-[380px] h-[424] rounded-lg absolute top-48 -left-4 md:-left-20"
                    src="https://via.placeholder.com/380x464"
                />
            </div>
            <div className="h-full flex flex-col gap-4 justify-center items-start mx-3 md:mx-0">
                <div className="flex w-full justify-end mb-12">
                    <RightLeaf />
                </div>
                <h2 className="text-right text-green-500 text-[36px] font-bold">
                    تعرف علي مركز الصباح
                </h2>
                <div className="  text-right text-neutral-600 text-xl font-normal leading-9">
                    اهلا بيكم في مركز شادي اهلا بيكم في مركز شادي <br />
                    اهلا بيكم في مركز شادي اهلا بيكم في{" "}
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
