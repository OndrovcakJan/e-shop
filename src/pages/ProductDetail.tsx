import Header from "../components/common/Header";
import {
  getProduct,
  type Product,
  getProductsByCategory,
} from "../services/apiService";
import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import QuantityCounter from "../components/common/QuantityCounter";
import { Rating } from "react-simple-star-rating";
import RelatedList from "../components/features/RelatedList";
import Cart from "../components/common/Cart";
import { Truck, SquareChevronLeft } from "lucide-react";
import { addProduct, type CartObject } from "../services/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(Number(id));
        setProduct(data);

        const all = await getProductsByCategory(data.category);
        const filtered = all.filter((p) => p.id !== data.id).slice(0, 3);
        setRelated(filtered);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.message);
        } else {
          setError(err as string);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>halo, Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  const description = `${product.description.charAt(0).toUpperCase()}${product.description.slice(1)}`;

  function handleCart() {
    const item: CartObject = { ...product!, amount: quantity };
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
    addProduct(item);
  }

  return (
    <Cart>
      <div>
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-8 mt-15 ml-8">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600 ml-8">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <span>-</span>
            <Link
              to={`/category/${product.category}`}
              className="capitalize hover:text-black"
            >
              {product.category}
            </Link>
            <span>-</span>
            <span className="text-black">{product.title}</span>
          </div>

          <div className="grid grid-cols-[55%_45%]  gap-10">
            {/* levý sloupec */}

            <div className="relative rounded-2xl bg-gray-100 p-10 flex items-center justify-center overflow-hidden ml-8 w-105">
              <img
                src={product.image}
                alt={product.title}
                onClick={() => setLightboxOpen(true)}
                className="transition duration-300 hover:scale-110 cursor-pointer"
              />
            </div>

            {/* pravý sloupec */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-[#e4e4fa] px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold capitalize">{product.title}</h1>
              <div className="flex items-center gap-2">
                <Rating
                  initialValue={product.rating.rate}
                  SVGstyle={{ display: "inline" }}
                  readonly
                  allowFraction
                  size={20}
                />
                <span className="text-sm text-gray-600">
                  {product.rating.count} Reviews
                </span>
              </div>
              <p className="text-3xl font-bold">${product.price}</p>
              <p className="text-sm text-gray-500">
                Free shipping on orders over $1'000'000.
              </p>

              <p className="text-gray-700 mt-6 max-w-2xl ">{description}</p>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <QuantityCounter
                    quantity={quantity}
                    onIncrease={() => setQuantity((q) => q + 1)}
                    onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                  />
                  {/* add to cart button */}
                  <button
                    onClick={handleCart}
                    className="flex-1 bg-green-800 hover:bg-green-900 text-white font-semibold py-2 rounded-lg transition duration-200 text-bg cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="flex items-center justify-around bg-indigo-50 rounded-xl px-6 py-4 mt-2">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Truck />
                    <span className="text-sm font-medium">
                      Free Express Shipping
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600">
                    <SquareChevronLeft />
                    <span className="text-sm font-medium">30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <hr className="border-t border-gray-200 mt-9" />
        </div>
        <RelatedList products={related} />

        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setLightboxOpen(false)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="max-h-100 max-w-100 object-contain"
            />
          </div>
        )}
      </div>
    </Cart>
  );
};

export default ProductDetail;
