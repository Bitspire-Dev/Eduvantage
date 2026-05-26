import { Why } from "../components/sections/why";
import { Hero } from "../components/sections/hero";
import { Pricing } from "../components/sections/pricing";
import { Method } from "../components/sections/method";
import { Testimonials } from "../components/sections/testimonials";
import { FAQ } from "../components/sections/faq";
import { Contact } from "../components/sections/contact";
import { About } from "../components/sections/about";
import { Subjects } from "../components/sections/subjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <About />
      <Subjects />
      <Pricing />
      <Method />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
