import { Education } from "../src/Components/Education";
import { Experiences } from "../src/Components/Experiences";
import { Footer } from "../src/Components/Footer";
import Main from "../src/Components/Main";
import Nav from "../src/Components/Nav";
import { Projects } from "../src/Components/Projects";
import { Skills } from "../src/Components/Skills";

export default function Home() {
    return (
        <>
            <Nav />
            <Main />
            <Skills />
            <Education />
            <Experiences />
            <Projects />
            <Footer />
        </>
    );
}
