import { dataAboutMe, dataSlider } from "@/data";
import { Title } from "./shared/Title";
import { Button, buttonVariants } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="AboutMe">
      <Title title="Sobre mi" subtitle="Conóceme" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-9 flex items-center justify-center">
          {/* CAROUSEL */}
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-m-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          <p className="my-8">
            Soy un estudiante en la etapa final de la carrera de Ingeniería en
            Sistemas Computacionales en la Universidad Tecnológica de Santiago
            (UTESA). Además, me apasiona la programación web y he desarrollado
            mis habilidades de manera autodidacta. A lo largo de mi aprendizaje,
            he adquirido experiencia en tecnologías como HTML, CSS, JavaScript,
            Sass, TypeScript, React, Next.js, Tailwind, MySQL, Git, y GitHub. Estoy comprometido
            con seguir creciendo en el campo del desarrollo web y aplicar mis
            conocimientos en proyectos desafiantes y de alto impacto.
          </p>
          <Link className={buttonVariants()} href="#contact">
            <Phone size={20} className="mr-2" />
            Hablame
          </Link>
        </div>
      </div>
    </div>
  );
}
