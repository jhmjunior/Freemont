import { Button } from "../ui/button";

export default function Payment() {
  return (
    <div className="flex flex-row px-8 pt-8 items-center justify-aroun">
      <span className="flex flex-col w-4/6 justify-between">
        <p className="text-secondary text-lg font-bold py-8 w-3/5">
          Ok, mas e o valor?
        </p>
        <p className="font-bold font-title text-white text-5xl w-3/5">
          Já pensou em levar tudo isso e mais para casa com um preço que cabe no bolso<span className="text-primary text-7xl">?</span></p>
        <p className="text-secondary text-lg font-bold py-8 w-3/5">
          O carro é tão <span className="text-primary">incrivel</span> que algum detalhe pode acabar passando despercebido nesta lista, pois alguns de seus itens de série dispensam apresentação (como botão de start stop, sensor de luminosidade, dentre outros).
          Todo esse kit impressionante, pode ser seu por apenas <span className="text-[#5DBA66] font-bold">R$ 52.499,00</span>!
        </p>
        <p className="text-secondary text-lg font-bold w-3/5">
          Gostou? Me envie uma mensagem no Whatsapp no botão ao lado e para que possamos bater um papo.
        </p>
      </span>
      <div className="flex flex-col items-center content-center pt-60">

        <Button
          size='lg'
          className="bg-[#5DBA66] hover:text-[#5DBA66] ">
          EU QUERO!
        </Button>
      </div>
    </div>
  )
}


