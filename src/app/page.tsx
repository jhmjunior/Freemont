import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between h-20 w-full font-['Poppins']">
        <h1 className="w-1/5 font-extrabold text-white text-3xl px-8">
          FREEMONT
        </h1>

        <ul className="flex justify-between w-1/3 font-bold text-white cursor-pointer mr-8 text-lg">
          <li className="hover:text-primary">
            O Carro
          </li>
          <li className="hover:text-primary">
            Segurança
          </li>
          <li className="hover:text-primary">
            Extra
          </li>
          <li className="hover:text-primary">
            Contato
          </li>
        </ul>

      </header>

      <body>
        <div className="flex flex-row px-8 w-4/6 h-5/6 pt-8 items-center justify-between">
          <span className="flex flex-col  justify-between">
            <p className="font-bold font-title text-white text-5xl w-3/5">
              Um carro Incrível, seguro e confortável<span className="text-primary text-7xl">.</span></p>
            <p className="text-secondary text-lg font-bold py-8 w-3/5">
              O Fiat Freemont é um carro de <span className="text-primary">7 lugares</span> com alto índice de segurança, e com um conforto sensacional, que é perfeito para viagens longas, sem deixar de ser ideal para quem gosta de rodar dentro da cidade.
            </p>
            <button className="bg-primary w-48 h-12 rounded-lg text-white font-bold hover:bg-white hover:text-primary my-6">
              Conheça o Carro</button>
          </span>

          <Image
            alt="Carro: Fiat Freemont em alta velocidade"
            width={768}
            height={454}
            src="/freemont.jpg"
            className="absolute right-8 top-28"
          />
        </div>
        <div className="bg-white h-4/5 px-8 my-8">
          <h1 className="text-5xl font-bold py-12 text-tertiary">
            O Carro <span className="text-primary text-6xl">:</span>
          </h1>
          <ul className="flex justify-around font-bold text-primary cursor-pointer text-lg">
            <button className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              DESIGN
            </button>
            <button className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              INTERIOR
            </button>
            <button className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              TECNOLOGIA
            </button>
            <button className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              PERFORMANCE
            </button>
            <button className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              EXTRA
            </button>
          </ul>
          <hr className="border-4 border-tertiary mt-2" />
          <div className="mt-8 flex flex-row">

            <Image
              alt="Carro: Fiat Freemont em alta velocidade"
              width={300}
              height={300}
              src="/freemont.jpg"
              className="w-1/5 mb-8"
            />
          </div>
        </div>
        <div className="flex flex-row px-8 pt-8 items-center justify-between">
          <span className="flex flex-col w-4/6 justify-between">
            <p className="text-secondary text-lg font-bold py-8 w-3/5">
              SEGURANÇA EM PRIMEIRO LUGAR
            </p>
            <p className="font-bold font-title text-white text-5xl w-3/5">
              Num Freemont, a segurança não é um item opcional<span className="text-primary text-7xl">.</span></p>
            <p className="text-secondary text-lg font-bold py-8 w-3/5">
              Para um carro deste porte, a segurança é <span className="text-primary">indispensável</span>. Com construção baseada no mercado americano, e 5 estrelas no Euro NCAP, o carro possui 7 airbags, protegendo a você e sua família em situações perigosas.
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
            src="/airbags2.jpg"
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
            src="/TetoSolar.jpg"
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
      
      </body>
    </>
  );
}
