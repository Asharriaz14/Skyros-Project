import FeatureSection from "./FeatureSection"
import HeroSection from "./HeroSection"
import Workflow from "./Workflow"
import ChooseUs from "./ChooseUs"
import Testimonials from "./Testimonials"

function Home() {
  return (
    <>
    
     <HeroSection />
    <Workflow  />
    <FeatureSection id="Feature" />
    <Testimonials id="Testimonal" />
    <ChooseUs />
    </>
  )
}

export default Home