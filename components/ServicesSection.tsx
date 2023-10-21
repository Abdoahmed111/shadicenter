"use client";

import services from "@/assets/services.json";
import styles from "@/app/styles";
import BeeIcon from "@/assets/BeeIcon";
import PlanetsIcon from "@/assets/PlanetsIcon";
import AlaqIcon from "@/assets/AlaqIcon";
import ChineseIcon from "@/assets/ChineseIcon";
import MassageIcon from "@/assets/MassageIcon";
import ElectromagneticIcon from "@/assets/ElectromagneticIcon";
import HegamaIcon from "@/assets/HegamaIcon";
import Ta5sesIcon from "@/assets/Ta5sesIcon";
import Tabe3eIcon from "@/assets/Tabe3eIcon";
import WeightLossIcon from "@/assets/WeightLossIcon";
import SmomIcon from "@/assets/SmomIcon";

const ServiceIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
        case "bee":
            return <BeeIcon />;
        case "planets":
            return <PlanetsIcon />;
        case "alaq":
            return <AlaqIcon />;
        case "chinese":
            return <ChineseIcon />;
        case "massage":
            return <MassageIcon />;
        case "electromagnetic":
            return <ElectromagneticIcon />;
        case "hegama":
            return <HegamaIcon />;
        case "ta5ses":
            return <Ta5sesIcon />;
        case "tabe3e":
            return <Tabe3eIcon />;
        case "weightLoss":
            return <WeightLossIcon />;
        case "smom":
            return <SmomIcon />;
        default:
            return null; // Return null for unknown icons or add another default behavior
    }
};

const handleOpenModal = (id: number) => {
    const modal = document.getElementById(
        `my_modal_${id}`
    ) as HTMLDialogElement;
    modal?.showModal();
};

const ServicesSection = () => {
    return (
        <div
            id="services"
            className="w-full bg-green-500 flex flex-col justify-center items-center py-20">
            <div className={`${styles.boxWidth}`}>
                <h2 className="text-center text-white text-5xl font-bold">
                    خدماتنا
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 gap-y-24 mx-8 my-8 md:my-0 md:mx-0">
                    {services.map((service, index) => (
                        <div
                            className=" bg-white rounded-lg h-56 flex flex-col justify-center items-center gap-y-4 md:gap-y-6"
                            key={index}>
                            <div className="bg-emerald-50 rounded-full shadow w-[172px] h-[172px] flex justify-center items-center -mt-28">
                                <ServiceIcon icon={service.icon} />
                            </div>
                            <h5 className="text-center text-green-600 text-2xl font-bold">
                                {service.name}
                            </h5>
                            <button
                                onClick={() => handleOpenModal(index)}
                                className="text-center text-green-600 text-lg font-semibold bg-white border-0">
                                اقرأ المزيد
                            </button>
                            <dialog id={`my_modal_${index}`} className="modal">
                                <div className="modal-box mx-auto flex flex-col justify-start items-center gap-y-12 py-12 px-16">
                                    <div className="flex flex-col justify-center items-center gap-y-4">
                                        <div className="rounded-full p-8 border border-green-500">
                                            <ServiceIcon icon={service.icon} />
                                        </div>
                                        <h5 className="text-center text-green-600 text-2xl font-bold">
                                            {service.name}
                                        </h5>
                                    </div>
                                    <div className="w-full leading-7">
                                        <p className="text-right text-green-600 text-[22px] font-bold">
                                            عن {service.name}
                                        </p>
                                        <p>{service.details}</p>

                                        <p>{service.list}</p>

                                        {service.benifits && (
                                            <div className="mt-8">
                                                <p>من أهم فوائده:</p>
                                                <ul className="w-full list-disc pr-6">
                                                    {service.benifits &&
                                                        service.benifits.map(
                                                            (item) => (
                                                                <li>
                                                                    {item.title}
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <form
                                    method="dialog"
                                    className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
