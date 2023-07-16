import Featured from "./components/Featured";
import Hero from "./components/Hero";
import LeftPanel from "./components/LeftPanel";
import Navbar from "./components/Navbar";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* featured */}
      <div className="lg:relative lg:top-[470px]">
        <Featured />
      </div>
      {/* left panel */}
      <div className="lg:relative ">
        <LeftPanel />
      </div>
      {/* special offers */}
      <div className="lg:relative lg:top-[470px]">
        <SpecialOffers />
      </div>
      {/* browse */}
      {/* footer */}
    </>
  );
}

export default App;
