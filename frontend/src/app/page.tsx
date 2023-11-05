import { CoffeeSection } from '@/components/sections/CoffeeSection';
import Link from 'next/link';

export default async function Home() {
  const buttonStyle = "bg-gold-300 rounded-full text-center hover:bg-gold-500 py-3 px-10 w-fit";
  return (
    <main>
      <header className='bg-topWide bg-cover bg-no-repeat bg-top h-[600px] sm:h-[1200px] sm:mb-28'>
        <div className='sm:max-w-[70%] max-w-[85%] m-auto pt-5'>
          <div className='flex justify-between'>
            <div className='flex gap-1 items-end'>
              <p className='text-xl font-bold'>Company</p>
              <p>Coffee</p>
            </div>
            <Link href={'create-coffee'} className={buttonStyle}>Create</Link>
          </div>
        </div>
        <section className='max-w-[70%] m-auto sm:text-left text-center'>
          <div className='sm:pt-96 pt-24 flex flex-col gap-y-10'>
            <h1 className='sm:text-7xl text-4xl sm:mt-14'>ROASTED COFFEE</h1>
            <p>Choose your coffee from below or create your own.</p>
            <Link href={'create-coffee'} className={`${buttonStyle} mx-auto sm:ml-0`}>Create your own coffee</Link>
          </div>
        </section>
      </header>
      <CoffeeSection />
      <footer className='sm:bg-footerWide bg-footerPhone bg-contain sm:bg-cover bg-no-repeat bg-bottom h-[460px] sm:h-[600px] sm:mt-40'></footer>
    </main>
  );
}
