export type Coffee = {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  imageUrl: string;
  created: Date;
  updated: Date;
}

export type PostCoffee = Omit<Coffee, "id" | "created" | "updated">;


export enum CoffeeType {
  ARABIC = 'Arabic',
  ROBUSTA = 'Robusta',
};