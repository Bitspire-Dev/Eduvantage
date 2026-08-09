import dynamic from 'next/dynamic';
import { Why } from "../components/sections/why";
import { Hero } from "../components/sections/hero";

const About = dynamic(() => import('../components/sections/about').then(m => m.About), { ssr: true });
const Subjects = dynamic(() => import('../components/sections/subjects').then(m => m.Subjects), { ssr: true });
const Pricing = dynamic(() => import('../components/sections/pricing').then(m => m.Pricing), { ssr: true });
const Method = dynamic(() => import('../components/sections/method').then(m => m.Method), { ssr: true });
const Testimonials = dynamic(() => import('../components/sections/testimonials').then(m => m.Testimonials), { ssr: true });
const FAQ = dynamic(() => import('../components/sections/faq').then(m => m.FAQ), { ssr: true });
const Contact = dynamic(() => import('../components/sections/contact').then(m => m.Contact), { ssr: true });

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
