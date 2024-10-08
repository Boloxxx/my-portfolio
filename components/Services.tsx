import { dataServices } from "@/data";
import { Title } from "./shared/Title";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
        <Title title="Servicios" subtitle="Que ofrezco" />

        <div className="flex justify-center md:grid-cols-1 gap-5 mt-7">
            {dataServices.map((service) => (
                <div 
                key={service.id}
                className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-full">
                    <h4 className="mb-4 text-2xl flex gap-2">
                        {service.title}
                        {service.icon}
                    </h4>
                    <ul>
                        {service.features.map((feature, index) => (
                            <li key={index} className=" text-xl flex gap-2 mb-3">
                                <Check size={20}/>
                                {feature.name}
                            </li>
                            
                            
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}
