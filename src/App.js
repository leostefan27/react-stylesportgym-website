import "./App.css";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import PricesComponent from "./components/PricesComponent";
import ShowcaseComponent from "./components/ShowcaseComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <ShowcaseComponent />
      <AboutUsComponent />
      <PricesComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}

export default App;
