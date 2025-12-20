import { Why } from "../components/why";
import { Hero } from "../components/hero"; // client component (carousel)
import { Pricing } from "../components/pricing";
import { Method } from "../components/method";
import { Testimonials } from "../components/testimonials";
import { FAQ } from "../components/faq"; // FAQ is server-rendered
import { Contact } from "../components/contact"; // purely static – converts to server markup
import { About } from "../components/about";
import { Subjects } from "../components/subjects";

export function HomePageSections(){
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
