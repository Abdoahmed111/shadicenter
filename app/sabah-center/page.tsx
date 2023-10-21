import { Metadata } from "next";
import React from "react";
import styles from "../styles";
import Image from "next/image";
import SabahCenterSection from "@/components/SabahCenterSection";
import ContactUSection from "@/components/ContactUSection";

export const metadata: Metadata = {
    title: "مركز الصباح للطب البديل",
    description:
        "مركز الصباح يقدم الإبر الصينية لانها وسيلة من وسائل الطب الصيني البديل والتي اعتمادها الجامعات الأمريكية والمعاهد  والمراكز الألمانية وتعتبر من الإجراءات التكميلية وتستخدم من اجل الكثير من الأمراض",
};

const SabahCenter = () => {
    return (
        <>
            {/* hero section */}
            <SabahCenterSection />

            {/* about section */}
            <div
                className={`${styles.boxWidth} flex flex-col justify-between items-center h-full mx-auto w-full gap-8 mt-24`}>
                <h2 className="text-green-600 text-2xl md:text-3xl font-bold">
                    عن المركز{" "}
                </h2>
                <p className="text-center md:text-right text-[18px] md:text-[20px] text-black  font-normal leading-9  tracing-wider">
                    مركز الصباح يقدم الإبر الصينية لانها وسيلة من وسائل الطب
                    الصيني البديل والتي اعتمادها الجامعات الأمريكية والمعاهد
                    والمراكز الألمانية وتعتبر من الإجراءات التكميلية وتستخدم من
                    اجل الكثير من الأمراض، سم النحل Apitherapy هو عبارة عن سائل
                    حامض تفرزه الغدد الحامضيةAcid glands الهدف منها تنبيه
                    الخلايا الحسيه للجهاز العصبي فيرفع حالة المناعة وافراز
                    الهرمونات والانزيمات حيث ان سم النحل يحتوى علي اكثر من 8مواد
                    فعاله يعالج منها العقم والضعف الجنسى .
                    <br /> المساج Massage انه علاج بسيط لا يعتمد علي الأدوية أو
                    المعدات الطبية با تقنيات تدليك لتنشيط الجسم لهدف تنظيم
                    وظائفه وضبطها والتخلص من السموم عن طريق الضغط علي الجسم بطرق
                    مختلفة باليد ، المعالجة الكهرومغناطيسية للأعصاب تستخدم
                    لتحفيز الشفاء من خلال تطبيق الكهرومغناطيسيةللمناطق المتضررة
                    من الجسم صممت لتطبيق كثافات متفاوتة من الحرارة
                    الكهرومغناطيسية لكتلة أنسجة الجسم ويعالج الشلل النصفي الجلطة
                    ألم الظهر والرقبة والرومانيين المرضى ذوى الاحتياجات الخاصة
                </p>
                <p className="text-center md:text-right text-[18px] md:text-[20px] text-black  font-normal leading-9  tracing-wider">
                    دودة العلق Leeches دودة العلق معجزة صغيرة وهبها الله لنا وهي
                    دودة تعيش في البحر والماء العذب وتعتبر من شعبة الديدان
                    الحلقية فانها تعطي هرمونات لا توجد الا في الدودة من اهم
                    فوائدها علاج خشونة الركبة علاج ضعف البصر علاج الغدة الدوقية
                    أمراض القلب وانسداد الشرايين علاج الدوالي تستخدم في شد
                    البشرة وفي عمليات التجميل <br /> الحجامة CuppingTherapy
                    العلاج عن طريق مص وتسريب الدم عنًطريق استعمال الكوؤس وهي
                    تساعد في اخراج السموم من الجسم وتقوية مناعة الجسم وتنظيم
                    الهرمونات يوجد مكملات غذائية ومنتجات مكونة جميعها منزاعشاب
                    طبيعية لتحسين وظائف الجسم والعمل علي امتداده بالنشاط الذي
                    يحتاجه الإنسان وتنشيط الدورة الدموية
                </p>
            </div>

            <div
                className={`${styles.boxWidth} grid grid-cols-1 md:grid-cols-2 h-full mx-auto w-full gap-8 mt-24`}>
                <div className="flex w-full h-[595px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src="/images/sabah1.jpeg"
                        alt="Dr Alaa"
                        width={595}
                        height={100}
                    />
                </div>
                <div className="flex w-full h-[595px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src="/images/sabah2.jpeg"
                        alt="Dr Alaa"
                        width={595}
                        height={100}
                    />
                </div>
                <div className="flex w-full h-[595px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src="/images/sabah3.jpeg"
                        alt="Dr Alaa"
                        width={595}
                        height={100}
                    />
                </div>
                <div className="flex w-full h-[595px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src="/images/sabah4.jpeg"
                        alt="Dr Alaa"
                        width={595}
                        height={100}
                    />
                </div>
                <div className="flex w-full h-[595px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src="/images/sabah5.jpeg"
                        alt="Dr Alaa"
                        width={595}
                        height={100}
                    />
                </div>
                <div className="flex w-full h-[595px] mx-auto">
                    <Image
                        className="object-cover rounded-xl"
                        src="/images/sabah6.jpeg"
                        alt="Dr Alaa"
                        width={595}
                        height={100}
                    />
                </div>
            </div>

            <ContactUSection />
        </>
    );
};

export default SabahCenter;
