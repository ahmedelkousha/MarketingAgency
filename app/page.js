import HeroSection from "./components/heroSection";
import Header from "./components/header";
import Services from "./components/services";
import HelpSection from "./components/helpSection";
import Footer from "./components/footer";
import CopyrightSection from "./components/copyrightSection";

export default function Home() {
  return (
    <div>
      <div className="header-wrapper sticky top-0 bg-white z-10 border-b-2">
      <Header/>
      </div>
      <HeroSection />
      <Services/>
      <HelpSection/>
      <Footer/>
      <CopyrightSection/>
    </div>
  );
}
