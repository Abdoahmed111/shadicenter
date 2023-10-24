import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OurProductsSection from "@/components/OurProductsSection";
import ServicesSection from "@/components/ServicesSection";
import SabahCenterSection from "@/components/SabahCenterSection";
import ContactUSection from "@/components/ContactUSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "مركز شادي للطب البديل",
    description:
        "يوجد مكملات غذائية ومنتجات مكونة جميعها من اعشاب طبيعية لتحسين وظائف الجسم والعمل علي امتداده بالنشاط الذي يحتاجه الإنسان وتنشيط الدورة الدموية",
};

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Our Products Section */}
            <OurProductsSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Sabah Center Section */}
            <SabahCenterSection />

            {/* Contact Us section */}
            <ContactUSection
                address="حولي شارع تونس برج الفوزان أمام برج البغلى للاسفنج الدور الثالث"
                mobile="0096566438659"
            />
        </>
    );
}
