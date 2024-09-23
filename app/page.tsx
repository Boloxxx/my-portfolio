import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/navBar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
// import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="pb-40">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </main>
  );
}
