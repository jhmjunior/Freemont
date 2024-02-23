import Image from "next/image";
import { Button } from "../ui/button";

export default function CardHolder() {
  return(
    <div className="bg-white h-4/5 px-8 my-8">
          <h1 className="text-5xl font-bold py-12 text-tertiary">
            O Carro <span className="text-primary text-6xl">:</span>
          </h1>
          <ul className="flex justify-around font-bold text-primary cursor-pointer text-lg">
            <Button variant='ghost' className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              DESIGN
            </Button>
            <Button variant='ghost' className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              INTERIOR
            </Button>
            <Button variant='ghost' className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              TECNOLOGIA
            </Button>
            <Button variant='ghost' className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              PERFORMANCE
            </Button>
            <Button variant='ghost' className="hover:bg-primary rounded-lg hover:text-white w-1/5 text-center h-12">
              EXTRA
            </Button>
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
  )
}