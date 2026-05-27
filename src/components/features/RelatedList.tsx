import type { Product } from "../../services/apiService";
import RelatedItemCard from "./RelatedItemCard";

type Props = {
  products: Product[];
};

const RelatedList = ({ products }: Props) => {
  if (products.length === 0) return null;

  return (
    
    <div className="mt-30 mb-15 px-6 md:px-12 lg:px-20">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <RelatedItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedList;
