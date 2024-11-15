type CardPropsType = {
  img: string;
  title: string;
  discount?: number;
  price: number;
};

export const FoodCard = (props: CardPropsType) => {
  return (
    <div>
      <img src={props.img} />
      <div className="pt-[14px]">
        {" "}
        <p>{props.title}</p>
        <div className="flex gap-4">
          <p className="text-[var(--green)]">{props.discount}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
};
