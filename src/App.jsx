import DataImage from "./data";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <section id="home" className="hero grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-10 min-h-[90vh]">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-md">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Selamat Datang di Website Portofolio Saya  </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, My Name is Muh Fauzil Addin </h1>
          <p className="text-base/loose mb-6 opacity-50">Information Systems Student & Aspiring Web Developer.
            Suka belajar hal baru, menulis kode, dan membangun ruang digital yang bermanfaat.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#about" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 transition-colors shadow-lg shadow-violet-700/30">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#projects" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500 transition-colors" > Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Imageame" className="w-[400px] mx-auto md:ml-auto order-1 md:order-2 rounded-2xl shadow-xl shadow-violet-900/20" />
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
