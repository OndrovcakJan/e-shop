import { useNavigate } from "react-router";
import type { Product } from "../../services/apiService";

type Props = {
  product: Product;
};

const RelatedItemCard = ({ product }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer rounded-xl bg-gray-50 p-6 flex flex-col items-center gap-2 
    hover:shadow-md transition duration-300 hover:scale-103 px-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <p className="text-xs text-gray-700 uppercase tracking-widest">
        {product.category}
      </p>
      <p className="text-sm font-bold text-center capitalize">
        {product.title}
      </p>
      <p className="text-sm font-semibold text-black">${product.price}</p>
    </div>
  );
};

export default RelatedItemCard;
