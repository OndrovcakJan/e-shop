type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityCounter = ({ quantity, onIncrease, onDecrease }: Props) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button
        onClick={onDecrease}
        className="px-3 py-2 hover:bg-gray-100 rounded-l-lg"
      >
        -
      </button>
      <span className="px-4 py-2 border-gray-300 text-sm">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-3 py-2  hover:bg-gray-100 rounded-r-lg"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
