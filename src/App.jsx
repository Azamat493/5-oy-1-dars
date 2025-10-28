import Clients from "./components/Clients";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/hero";
import AcHub from "./components/Hub";
import PlansGrowth from "./components/PlansGrowth";
import Statsection from "./components/Statsection";
import WhySwitch from "./components/WhySwitch";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Statsection />
      <WhySwitch />
      <PlansGrowth />
      <Clients />
      <AcHub />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
