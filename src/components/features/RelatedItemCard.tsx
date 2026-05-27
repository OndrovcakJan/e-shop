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
      className="cursor-pointer rounded-xl bg-gray-100 p-6 flex flex-col items-center gap-3 
    hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <p className="text-xs text-gray-500 uppercase tracking-widest">
        {product.category}
      </p>
      <p className="text-sm font-semibold text-center capitalize">
        {product.title}
      </p>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
};

export default RelatedItemCard;
