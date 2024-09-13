import About from "@/components/About";
import Blogs from "@/components/Blogs";
import ChooseUs from "@/components/ChooseUs";
import Contact from "@/components/Contact";
import Founder from "@/components/Founder";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <Solutions />
      <Services />
      <Blogs />
      <About />
      <Founder />
      <ChooseUs />
      <Contact />
    </main>
  );
}
