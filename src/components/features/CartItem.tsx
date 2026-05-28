import QuantityCounterCart from "./QuantityCounterCart";

interface Props {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  amount: number;
}
export default function CartItem({
  id,
  title,
  price,
  category,
  image,
  amount,
}: Props) {

  function handleIncrease() {}

  function handleDecrease() {}

  return (
    <div className="flex flex-col w-[95%]">
      <div className="flex gap-3 h-full">
        <img src={image} alt="Product image" className="w-25 h-30 rounded-2xl object-scale-down bg-gray-100" />
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col">
            <h2 className="font-bold">{title}</h2>
            <p className="text-gray-500">{category}</p>
          </div>
          <div className="flex w-full mt-auto">
            <QuantityCounterCart quantity={amount} onIncrease={handleIncrease} onDecrease={handleDecrease} />
            <h2 className="font-bold ml-auto">${price}</h2>
          </div>
        </div>
      </div>
      <span className="w-full h-px bg-gray-200 mt-3"></span>
    </div>
  );
}
