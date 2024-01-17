import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import DetailsComponent from "@/components/DetailsComponent/DetailsComponent";
import Clients from "@/components/Clients/Clients";
import CovidForm from "@/components/CovidForm/CovidForm";
import WhyGetVaccinated from "@/components/WhyGetVaccinated/WhyGetVaccinated";
import Patients from "@/components/Patients/Patients";
import GetAQuote from "@/components/GetAQuote/GetAQuote";
import Footer from "@/components/Footer/Footer";
import VaccineRegistration from "@/components/VaccineRegistration/VaccineRegistration";
import Symptoms from "@/components/Symptoms/Symptoms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" w-full px-7 lg:px-20 py-10">
        <Navbar />
        <Hero />
        <DetailsComponent />
      </div>
      <Clients />
      <div className="w-full px-7 lg:px-20 py-10">
        <CovidForm />
        {/* <WhyGetVaccinated /> */}
        <VaccineRegistration />
        <Symptoms />
      </div>
      <Patients />
      <div className="w-full px-7 lg:px-20 py-10">
        <GetAQuote />
        <Footer />
      </div>
      
    </>
  );
}
