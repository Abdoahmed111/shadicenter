import styles from "@/app/styles";
import Image from "next/image";
import React from "react";
import DrAlaaImage from "@/assets/products-img.jpeg";
import RightLeaf from "@/assets/RightLeaf";
import RightBigLeaf from "@/assets/RightBigLeaf";

const OurProductsSection = () => {
    return (
        <div
            className={`${styles.boxWidth} px-12 md:px-24 pb-12 md:pb-0 my-32 grid grid-cols-1 md:grid-cols-2 gap-8 `}>
            <div className="h-full flex flex-col gap-4 justify-center items-start mx-3 md:mx-0">
                <div className="flex w-full justify-start mb-12">
                    <RightLeaf />
                </div>
                <h2 className="text-right text-green-500 text-4xl font-bold">
                    منتجاتنا
                </h2>
                <div className="text-right text-neutral-600 text-xl font-normal leading-9">
                    اهلا بيكم في مركز شادي اهلا بيكم في مركز شادي <br />
                    اهلا بيكم في مركز شادي اهلا بيكم في{" "}
                </div>
                <a href="#" className={`${styles.ctaBtn} mt-8`}>
                    اكتشف
                </a>
                <div className="flex w-full justify-end mt-12">
                    <RightBigLeaf />
                </div>
            </div>
            <div className="relative hidden md:flex">
                <div className="border-8 border-green-600 rounded-md object-cover h-full absolute md:top-20 md:right-16 w-full"></div>
                <div className="rounded-lg object-cover absolute top-0 md:top-0 md:left-10 h-full">
                    <Image
                        className="object-cover w-full h-full rounded-md"
                        src={DrAlaaImage}
                        alt="dr-alaa"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurProductsSection;
