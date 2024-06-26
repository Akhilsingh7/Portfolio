import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>

      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
