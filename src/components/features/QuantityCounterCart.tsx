type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityCounterCart = ({ quantity, onIncrease, onDecrease }: Props) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button
        onClick={onDecrease}
        className="px-2 py-1 hover:bg-gray-100 rounded-l-lg cursor-pointer"
      >
        -
      </button>
      <span className="px-2 py-1 border-gray-300 text-sm">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-2 py-1  hover:bg-gray-100 rounded-r-lg cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounterCart;
