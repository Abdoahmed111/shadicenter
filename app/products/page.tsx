import { Metadata } from "next";
import React from "react";
import styles from "../styles";
import Image from "next/image";
import products from "@/assets/products.json";
import RightLeaf from "@/assets/RightLeaf";
import RightBigLeaf from "@/assets/RightBigLeaf";

export const metadata: Metadata = {
    title: "منتجات مركز شادي للطب البديل",
    description:
        "مركز شادي للطب البديل يقدم اجود انواع الاعشاب الطبية لعلاج الكثير من الامراض",
};

const Products = () => {
    return (
        <>
            <div
                className={`${styles.boxWidth} h-full mx-auto w-full gap-8 mt-24`}>
                <div className="bg-green-600 bg-opacity-20 rounded-[10px] p-12 flex flex-col justify-between items-center">
                    <div className="w-full flex justify-between items-center ">
                        <RightLeaf />
                        <RightLeaf />
                    </div>
                    <div className="my-6">
                        <h1 className="text-center text-green-500 text-5xl font-bold">
                            منتجاتنا
                        </h1>
                        <p className="text-center text-green-600 text-xl font-normal leading-9 mt-4">
                            مركز شادي للطب البديل يقدم اجود انواع الاعشاب الطبية
                            لعلاج الكثير من الامراض
                        </p>
                    </div>

                    <div className="w-full md:flex justify-between items-center hidden">
                        <RightBigLeaf />
                        <RightBigLeaf />
                    </div>
                </div>
            </div>
            <div
                className={`${styles.boxWidth} grid grid-cols-1 md:grid-cols-4 h-full mx-auto w-full gap-8 mt-24`}>
                {products.map((product, index) => (
                    <div className="bg-white rounded-[10px] shadow border border-green-200 p-8 flex flex-col justify-start items-center mx-4 md:mx-0">
                        <div
                            key={index}
                            className="flex w-full h-[196px] mx-auto">
                            <Image
                                className="object-cover rounded-xl"
                                src={product.image}
                                alt={product.title}
                                width={295}
                                height={196}
                            />
                        </div>
                        <p className="mt-8 text-center text-green-600 text-[22px] font-semibold ">
                            {product.title}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
