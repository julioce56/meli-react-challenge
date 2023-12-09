export type ResItems = {
    author: Author;
    categories: Array<string>;
    items: Items[];
}

export type ResItem = {
    author: Author;
    item: Item;
}

export type Author = {
    name: string;
    lastname: string;
}

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
};

export type Items = Omit<Item, "sold_quantity" | "description"> & {};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};