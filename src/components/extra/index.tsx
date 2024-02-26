import Image from "next/image";

export default function Extra() {
  return(
    <>
    <div className="bg-white h-4/5 px-8 ">
        <h1 className="text-5xl font-bold py-12 text-tertiary">
          EXTRA <span className="text-primary text-6xl">:</span>
        </h1>
      </div>
      <div className="flex flex-row px-8 pt-8 items-center justify-around bg-white">
        <Image
          alt="Carro: Fiat Freemont em alta velocidade"
          width={400}
          height={400}
          src="/TetoSolar.jpeg"
        />
        <span className="flex flex-col w-4/6 justify-between items-end">
          <p className="text-primary text-lg font-bold py-8 w-3/5">
            Teto Solar!
          </p>
          <p className="text-tertiary text-3xl font-bold w-3/5">
            A Cereja do bolo<span className="text-primary">:</span>
          </p>
          <p className="text-tertiary text-lg  py-8 w-3/5">
            Opcional que saiu em apenas algumas unidades, este incrível carro equipa um teto solar automático, para deixar sua viagem ainda mais agradável, sentindo o calor do sol ou vendo a luz das estrelas.
          </p>
        </span>
      </div>
      <div className="flex flex-row px-8 pt-8 items-center justify-between bg-white">
        <span className="flex flex-col w-4/6 justify-between">
          <p className="text-primary text-lg font-bold py-8 w-3/5">
            Sem dívidas ou preocupações!
          </p>
          <p className="text-tertiary text-3xl font-bold w-3/5">
            IPVA 2024 PAGO<span className="text-primary">!</span>
          </p>
          <p className="text-tertiary text-lg  py-8 w-3/5">
            O carro será entregue com o IPVA 2024 pago, e também já licenciado, para que você possa aproveitá-lo sem se preocupar com isso por 1 ano!
          </p>
        </span>
        <Image
          alt="Carro: Fiat Freemont em alta velocidade"
          width={400}
          height={400}
          src="/IPVA.png"
        />
      </div>
      </>
  )
}