import HeroSection from "./components/heroSection";
import Services from "./components/services"
export default function Home() {
  return (
    <div >
      <h2 className="bg-black">Marketing Agency</h2>
      <HeroSection />
      <Services />
    </div>
  );
}
