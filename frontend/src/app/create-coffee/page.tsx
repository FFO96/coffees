'use client'
import { LabeledInput } from "@/components/forms/LabeledInput";
import { useErrorModal } from "@/hooks/useErrorModal";
import { postCoffees } from "@/services/coffeeService";
import { CoffeeType } from "@/types/Coffee";
import classnames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CoffeeBody = {
  name: string;
  price: string;
  imageUrl: string;
  description: string;
};

const coffeeTypesArray = Object.values(CoffeeType);

export default function CreateCoffee() {
  const { register, handleSubmit } = useForm<CoffeeBody>();
  const router = useRouter();
  const [coffeType, setCoffeeType] = useState("Arabic");
  const { showError } = useErrorModal();
  const inputClasses = "border-dark-100 border-2 rounded-lg placeholder-dark-200 bg-neutral-700 h-10 p-2";
  const hideArrows = "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  const selectCoffeType = (coffeeType: string) => {
    setCoffeeType(coffeeType)
  }

  const renderCoffeeType = (option: string) => {
    const coffeeTypeClasses = classnames("border-dark-100 border-2 rounded-lg bg-dark-300  h-10 p-2 py-1 grow text-center text-dark-100",
      { "border-white text-white": coffeType === option }
    );
    return <p className={coffeeTypeClasses} key={option} onClick={() => selectCoffeType(option)}>{option}</p>;
  }
  const createCoffee: SubmitHandler<CoffeeBody> = async (data) => {
    const postData = {
      ...data,
      price: parseFloat(data.price),
      type: coffeType,
    };
    try {
      const response = await postCoffees(postData);
      if (response.error) {
        showError(response.error.message);
      }
      router.push("/");
    }
    catch (error: any) {
      // set modal message response.message[0] 
      //set bool del modal a true       
    }

  };

  return (
    <main className='mx-auto sm:m-12'>
      <form onSubmit={handleSubmit(createCoffee)} className="max-w-[714px] m-auto flex flex-col gap-6 items-center sm:bg-dark-300 px-5 sm:px-28 pt-24 pb-32 relative">
        <p className="absolute right-10 top-10 text-4xl cursor-pointer" onClick={() => { router.push("/") }}>✖</p>
        <h2 className='font-bold text-3xl font-mono'> CREATE NEW</h2>
        <div className="flex flex-col sm:flex-row w-full gap-x-4 gap-y-4 ">
          <LabeledInput label="Name" className="w-full sm:w-2/3">
            <input type="text" {...register("name", { required: true })} placeholder="Name your coffee here" className={inputClasses} />
          </LabeledInput>
          <LabeledInput label="Price" className="w-full sm:w-1/3">
            <input type="number" step="0.01" {...register("price", { required: true, validate: (value) => parseFloat(value) > 0 })} placeholder="0.00" className={`${inputClasses} ${hideArrows}`} />
          </LabeledInput>
        </div>
        <LabeledInput label="Type" className="gap-y-2 w-full">
          <div className="flex gap-2 w-full">
            {coffeeTypesArray.map(coffeeType => renderCoffeeType(coffeeType))}
          </div>
        </LabeledInput>
        <LabeledInput label="Upload image" className="gap-y-2 w-full">
          <input type="url" placeholder="Paste image URL here" {...register("imageUrl", { required: true })} className={inputClasses} />
        </LabeledInput>
        <LabeledInput label="Description" className="gap-y-2 w-full">
          <input type="text" placeholder="Add a description" {...register("description", { required: true, maxLength: 250 })} className={inputClasses} />
        </LabeledInput>
        <div className="flex flex-wrap gap-5">
          <button type="reset" className="py-1 grow border-gold-300 border-2 rounded-full text-center w-fit p-8 h-12">Discard</button>
          <button type="submit" className="py-1 grow bg-gold-300 rounded-full text-center p-8 h-12 hover:bg-gold-500">Confirm</button>
        </div>
      </form>
    </main>
  );
}