import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-row px-8 w-4/6 h-5/6 pt-8 items-center justify-between">
      <span className="flex flex-col  justify-between">
        <p className="font-bold font-title text-white text-5xl w-3/5">
          Um carro Incrível, seguro e confortável<span className="text-primary text-7xl">.</span></p>
        <p className="text-secondary text-lg font-bold py-8 w-3/5">
          O Fiat Freemont é um carro de <span className="text-primary">7 lugares</span> com alto índice de segurança, e com um conforto sensacional, que é perfeito para viagens longas, sem deixar de ser ideal para quem gosta de rodar dentro da cidade.
        </p>
        <Button className="bg-primary w-48 h-12 rounded-[8px] text-white font-bold hover:bg-white hover:text-primary my-6">
          Conheça o Carro</Button>
      </span>
      <Image
        alt="Carro: Fiat Freemont em alta velocidade"
        width={600}
        height={440}
        src="/freemont.jpg"
        className="absolute right-8 top-28"
      />
    </div>
  )
}