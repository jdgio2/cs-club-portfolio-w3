import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
export default function App() {
    return (
        <div className="gap-4 flex flex-col">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}
