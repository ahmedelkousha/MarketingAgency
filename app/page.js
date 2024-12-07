import HeroSection from "./components/heroSection";
import Header from "./components/header";
import Services from "./components/services";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <Services/>
    </div>
  );
}
