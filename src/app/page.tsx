import { url } from "inspector";
import Image from "next/image";
import logo from "../../public/SDSync - Logo.png";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Welcome from "./components/Welcome";
import PricePlans from "./components/Pricing";

export default function Home() {
  return (
    <main className="w-full">
      <section className="automacaoBg bg-center h-[100svh] flex flex-col justify-center items-center">
        <div className="w-full h-full opacityBg flex justify-center items-center">
          <div className="w-[80%] py-20">
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="SDSyncLogo"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Welcome />


      <section className="features-section py-16 text-center bg-gray-100" >
        <h2 className="text-4xl font-bold text-black mb-4">Explore as Funcionalidades do SDSync</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Descubra como o nosso sistema SCADA Web pode transformar seus processos industriais e oferecer uma gestão eficiente, segura e em tempo real.
        </p>
        <hr className="border-gray-300 my-8" />
      </section>

      <Features />

      {/* <PricePlans /> */}

      <Footer />
    </main>
  );
}
