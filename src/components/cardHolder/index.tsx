import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

interface Information {
  id: string,
  category: string,
  title: string,
  description: string,
  image: string
}

async function getInformations(): Promise<Information[]> {
  const result = await fetch('http://localhost:3000/informations')

  return result.json()
}

export default async function CardHolder() {
  const informations = await getInformations()

  return (
    <div className="bg-white h-4/5 px-8 my-8">
      <h1 className="text-5xl font-bold py-12 text-tertiary">
        O Carro<span className="text-primary text-6xl">:</span>
      </h1>
      <ul className="flex justify-around font-bold text-primary cursor-pointer text-lg">
        <Button variant='ghost' className="w-1/5">
          DESIGN
        </Button>
        <Button variant='ghost' className="w-1/5">
          INTERIOR
        </Button>
        <Button variant='ghost' className="w-1/5">
          TECNOLOGIA
        </Button>
        <Button variant='ghost' className="w-1/5">
          PERFORMANCE
        </Button>
        <Button variant='ghost' className="w-1/5">
          EXTRA
        </Button>
      </ul>
      <Separator className="border-4 border-tertiary mt-2" />
      <div className="mt-8 flex flex-row">
        {informations.map(information => (
          <Card key={information.id}>
            <div>
              <CardHeader>
                <CardDescription>{information.category}</CardDescription>
                <CardTitle>{information.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{information.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}

      </div>
    </div>
  )
}