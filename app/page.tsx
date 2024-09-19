import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/navBar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="pb-40">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Experience/>
      <Services/>
      <Portfolio/>
    </main>
  );
}
