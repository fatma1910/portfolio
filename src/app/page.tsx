import About from "./_Components/About";
import Hero from "./_Components/Hero";
import ProjectsSection from "./_Components/MyProjects";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]   ">
      <div className="container mx-auto my-24 py-4 px-12 flex flex-col gap-36">
        <Hero />
        <About/>
        <ProjectsSection/>

      </div>
      
    </div>
  );
}
