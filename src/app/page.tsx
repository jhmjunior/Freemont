import CardHolder from "@/components/cardHolder";
import Extra from "@/components/extra";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Payment from "@/components/payment";
import Safety from "@/components/safety";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <body>
        <Hero />
        <CardHolder />
        <Safety />
        <Extra />  
        <Payment />    
      </body>
    </>
  );
}
