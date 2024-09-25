import { dataPortfolio } from "@/data";
import { Title } from "./shared/Title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Portfolio() {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Trabajos Recientes 💼" />

      <div className="grid md:grid-cols-2 gap-14 mt-4">
        {dataPortfolio.map((data) => (
          <div key={data.id}>
            <h3 className="text-xl mb-4">{data.title}</h3>
            <Image
              src={data.image}
              alt="Image"
              width={700}
              height={700}
              className="rounded-2xl w-full"
            />

            <div className="mt-5 flex gap-5">
                <Link className={buttonVariants({variant: "outline"})} href={data.urlGithub} target="_blank">
                Github
                </Link>
                <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
                Live Demo
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
