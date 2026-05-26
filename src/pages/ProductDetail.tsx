//import Header from "../components/common/Header";
import { getProduct, type Product } from "../services/apiService";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getProduct(Number(id));
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.message);
        } else {
          setError(err as string);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  console.log("ProductDetail", { id, product });

  if (loading) return <div>loading...</div>;
  if (error) return <div>halo, Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return <div>ProductDetail Page</div>;
};
    
export default ProductDetail;
