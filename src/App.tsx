import NavBarRender from "./components/NavBar";
import HeroRender from "./components/HeroSection";
import SectionLayout from "./components/SectionLayout";
import TrustedRender from "./components/TrustedBy";
import FeaturesRender from "./components/Features";
import Services from "./components/Services";
import CenterText from "./components/CenterText";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBarRender />
      <SectionLayout>
        <HeroRender />
        <TrustedRender />
      </SectionLayout>
      <FeaturesRender />
      <SectionLayout>
        <Services />
      </SectionLayout>
      <CenterText />

      <SectionLayout>
        <Testimonials />
      </SectionLayout>
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
