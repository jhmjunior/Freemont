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
  category: 'DESIGN' | 'INTERIOR' | 'TECNOLOGIA' | 'PERFORMNCE' | 'EXTRA',
  title: string,
  description: string,
  image: string
}

export default function CardHolder() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["DESIGN", "INTERIOR", "TECNOLOGIA", "PERFORMANCE", "EXTRA"]

  const handleFilterButtonCLick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

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
    <div className="bg-white h-4/5 px-8 my-8">
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
            {category}
          </Button>
        ))}
      </div>
      <Separator className="border-4 border-tertiary mt-2" />
      <div className="mt-8 flex flex-row">
        <div className="w-full">
          <Carousel className="max-w-lg">
            <CarouselContent className="">
              {filteredItems.map((item, idx) => (
                <Card key={`items-${idx}`}>
                  <div>
                    <CardHeader>
                      <CardDescription className="text-primary">
                        {item.category}
                      </CardDescription>
                      <CardTitle>
                        <span className="text-primary text-6xl">.</span> {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </div>
    </div>
  )
}