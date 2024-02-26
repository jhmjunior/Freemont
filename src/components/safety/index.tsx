import Image from "next/image";
import Link from "next/link";

export default function Safety() {
  return (
    <>

      <div className="flex flex-row px-8 pt-8 items-center justify-between">
        <span className="flex flex-col w-4/6 justify-between">
          <p className="text-secondary text-lg font-bold py-8 w-3/5">
            SEGURANÇA EM PRIMEIRO LUGAR
          </p>
          <p className="font-bold font-title text-white text-5xl w-3/5">
            Num Freemont, a segurança não é um item opcional<span className="text-primary text-7xl">.</span></p>
          <p className="text-secondary text-lg font-bold py-8 w-3/5">
            Para um carro deste porte, a segurança é <span className="text-primary">indispensável</span>. Com construção baseada no mercado americano, e 5 estrelas no <Link className="underline" target="_blank" href='https://www.euroncap.com/en/results/fiat/freemont/10969'>Euro NCAP</Link>, o carro possui 7 airbags, protegendo a você e sua família em situações perigosas.
          </p>
        </span>
        <Image
          alt="Carro: Fiat Freemont em alta velocidade"
          width={700}
          height={385}
          src="/airbags.jpg"
        />
      </div>
      <div className="flex flex-row px-8 pt-8 items-center justify-around">
        <Image
          alt="Carro: Fiat Freemont em alta velocidade"
          width={700}
          height={385}
          src="/airbags3.jpg"
        />
        <span className="flex flex-col w-4/6 justify-between items-end">
          <p className="text-secondary text-lg font-bold py-8 w-3/5">
            Com o ESP (ou controle de estabilidade) a sensação de segurança fica ainda mais <span className="text-primary">evidente</span>. Este sistema auxilia o condutor em situações de derrapagens (como por exemplo, em um atoleiro) fazendo com que o carro assuma a posição mais segura, evitando acidentes.
          </p>
        </span>
      </div>
      <div className="flex flex-row px-8 pt-8 items-center justify-between">
        <span className="flex flex-col w-4/6 justify-between">
          <p className="text-secondary text-lg font-bold py-8 w-3/5">
            Equipado com sensores de pressão dos pneus nas 4 rodas, o motorista é alertado em situações que houverem alterações na pressão dos pneus, ajudando a identificar possíveis furos ou outras imperfeições.
          </p>
        </span>
        <Image
          alt="Carro: Fiat Freemont em alta velocidade"
          width={700}
          height={385}
          src="/airbags.jpg"
        />
      </div>
         </>
  )
}