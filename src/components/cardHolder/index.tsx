'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { items } from "./db"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";


interface item {
  id: string,
  category: string,
  title: string,
  description: string,
  image: string
}

export default function CardHolder() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["DESIGN", "INTERIOR", "TECNOLOGIA", "PERFORMANCE", "EXTRA"]
  // const pages = indexOf
  // const 

  const handleFilterButtonCLick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

/* 
Fazer useEffect e useState para controlar a página do arquivo, onde, se o item puxado for página A, só mostrar os itens da página A, e fechá-la ao clicar no botão para a página B.

OU

mudar o esquema inteiro para o vídeo 
https://www.youtube.com/watch?v=8dYC3NQK6ns
aproximadamente 26 minutos
*/

  useEffect(() => {
    filterItems()
  }, [selectedFilters])

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory)
        return temp
      })
      setFilteredItems(tempItems.flat())
    } else {
      setFilteredItems([...items])
    }
  }



  return (
    <div className="bg-white px-8 my-8">
      <h1 className="text-5xl font-bold py-12 text-tertiary">
        O Carro<span className="text-primary text-6xl">:</span>
      </h1>
      <div className="flex justify-around font-bold text-primary cursor-pointer text-lg">
        {filters.map((category, idx) => (
          <Button
            onClick={() => handleFilterButtonCLick(category)}
            className={`w-1/5 focus:bg-primary focus:text-white ${selectedFilters?.includes(category) ? "active" : ""
              }`}
            key={`filters-${idx}`}
            variant='ghost'
          >
            <label htmlFor="buttonInput">
              <input type="radio" className="hidden" name="buttonInput" />
            </label>
            {category}

          </Button>
        ))}
      </div>
      <Separator className="border-4 border-tertiary mt-2" />
      <div className="flex items-center flex-col">
        <Carousel className="max-w-screen-2xl">
          <CarouselContent className="">
            {filteredItems.map((item, idx) => (
              <CarouselItem key={`items-${idx}`}>
                <Card className="flex flex-row" >
                  <div className="flex items-center">
                    <CardHeader>
                      <CardDescription className="text-primary">
                        {item.category}
                      </CardDescription>
                      <CardTitle>
                        <span className="text-primary text-6xl">.</span> {item.title}
                      </CardTitle>
                      <Image
                        width={500}
                        height={200}
                        src={item.image}
                        alt={item.alt}
                      />
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}