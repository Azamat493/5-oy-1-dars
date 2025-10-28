import Clients from "./components/Clients";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hub from "./components/Hub";
import Showcase from "./components/Showcase";
import PlansGrowth from "./components/PlansGrowth";
import Statsection from "./components/Statsection";
import WhySwitch from "./components/WhySwitch";

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <Statsection />
      <WhySwitch />
      <PlansGrowth />
      <Clients />
      <Hub />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;