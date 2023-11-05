import classnames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

interface Coffee {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  imageUrl: string;
  created: Date;
  updated: Date;
}

type Props = {
  coffee: Coffee
};

const typeColors: Record<string, string> = {
  Robusta: "bg-dark-250",
  Arabic: "bg-aqua",
}

export const CoffeeCard = ({ coffee: { name, description, price, type, imageUrl } }: Props) => {
  const tagClasses = classnames(
    typeColors[type],
    'rounded-full px-3 py-2 absolute left-5 top-5'
  )
  return (
    <div className='text-center flex flex-col items-center w-[370px] sm:w-[390px] bg-dark-300 rounded-md pt-9 pb-14 shadow-card relative'>
      <p className={tagClasses}>{type}</p>
      <Image src={imageUrl} alt={name} width={289} height={216} className='mb-8' />
      <h3 className='text-xl text-gold-500 font-bold'>{name}</h3>
      <p className='mt-2 text-sm text-gray-400 px-7'>{description}</p>
      <p className='mt-2 text-sm font-bold'>{Number(price).toFixed(2)} &euro;</p>
    </div>
  );
};
