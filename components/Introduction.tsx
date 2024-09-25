import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Container from "./shared/Container";
import Socials from "./Socials";
import ImageProfile from "./ImageProfile";

export default function Introduction() {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hello I'm</h3>
        <h1 className="text-4xl font-bold mb-3">Bryan Rodriguez 🧑‍💻</h1>
        <h2 className="text-2xl text-gray-400">Frontend Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> Contacta conmigo
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv-bryan.pdf"
              target="_blank"
            >
              <Paperclip className="mr-2" /> Descargar CV
            </Link>
          </div>
        </div>
        <div className="mb-8 xl:mb-0 flex justify-center mt-5">
          <Socials containerStyles="flex gap-6" iconStyles="w-9 text-2xl h-9 border-accent rounded-full flex justify-center items-center text-accent text-slate-800 dark:text-gray-100 hover:bg-accent hover-text-primary hover:transition-all duration-500 "/>
          {/* iCONS */}
        </div>
        <div className="mt-10 flex justify-center">
          <ImageProfile/>
        </div>
      </div>
    </Container>
  );
}