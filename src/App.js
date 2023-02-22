import "./App.css";
import AboutUsComponent from "./components/AboutUsComponent";
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
    </>
  );
}

export default App;
