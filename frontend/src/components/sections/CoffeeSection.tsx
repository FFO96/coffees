import { getCoffees, postCoffees } from "@/services/coffeeService";
import { CoffeesList } from "../CoffeesList";
import { Coffee } from "@/types/Coffee";


export const CoffeeSection = async () => {

  const getCoffeeTypes = (coffees: Coffee[]): string[] => {
    let coffeeTypes: string[] = [];
    if (coffees.length > 0) {
      coffeeTypes = ['All', ...new Set(coffees.map(coffee => coffee.type))];
    }
    return coffeeTypes;
  }
  let coffees: Coffee[] = [];
  const response = await getCoffees();
  if (response.data) {
    coffees = response.data;
  }

  return (
    <section className='flex flex-col items-center gap-10 max-w-[1320px] m-auto p-14'>
      <h2 className='font-bold sm:text-2xl text-xl font-mono text-white'>COMPANY EXCLUSIVE COFFEE</h2>

      <CoffeesList coffees={coffees} filterOptions={getCoffeeTypes(coffees)} />
    </section>
  )
}