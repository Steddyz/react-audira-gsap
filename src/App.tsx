import Cards from "./components/Cards";
import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MasterbitSection from "./components/MasterbitSection";
import Products from "./components/Products";

function App() {
  return (
    <main>
      <Header />
      <div>
        <div>
          <div className="w-full">
            <img />
            <Hero />
            <MasterbitSection />
            <Cards />
            <Products />
            <DescriptionSection />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
