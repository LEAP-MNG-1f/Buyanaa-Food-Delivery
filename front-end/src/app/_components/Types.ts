export type TCategoryId = {
  name: string;
  _id: string;
  _v: number;
};

export type TFoodObject = {
  _id?: string;
  _v?: string;
  price: string;
  name: string;
  ingredient: string;
  image: string;
  categoryId?: TCategoryId;
};

export type TFoodArray = {
  foods: TFoodObject[];
};
