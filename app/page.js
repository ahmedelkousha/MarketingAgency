import HeroSection from "./components/heroSection";
import Header from "./components/header";
import Services from "./components/services";
import HelpSection from "./components/helpSection";
export default function Home() {
  return (
    <div>
      <div className="header-wrapper sticky top-0 bg-white z-10 border-b-2">
      <Header/>
      </div>
      <HeroSection />
      <Services/>
      <HelpSection/>
    </div>
  );
}
