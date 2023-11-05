'use client'
import { Coffee } from "@/types/Coffee";
import { CoffeeCard } from "./elements/CoffeeCard";
import Tabs from "./elements/Tabs";
import { useState } from "react";

type Props = {
  coffees: Coffee[];
  filterOptions: string[];
};

export const CoffeesList = ({ coffees, filterOptions }: Props) => {
  const [listedCoffees, setListedCoffees] = useState(coffees);

  const handleSelect = (option: string) => {
    if (option !== 'All') {
      const filteredCoffees = coffees.filter(coffee => coffee.type === option);
      setListedCoffees(filteredCoffees);
    } else {
      setListedCoffees(coffees);
    }
  }

  return (
    <><Tabs options={filterOptions} onSelect={handleSelect} />
      <div className='flex flex-wrap justify-between gap-y-5 gap-x-4'>
        {listedCoffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)}
      </div>
    </>
  );
}