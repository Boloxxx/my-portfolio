import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";
import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <main className="pb-40">
      <NavBar />
      <Introduction />
      <AboutMe />
    </main>
  );
}
