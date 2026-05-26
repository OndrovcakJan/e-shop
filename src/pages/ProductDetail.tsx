import Header from "../components/common/Header";
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
        const data = await getProduct(Number(id));
        setProduct(data);
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

  console.log("ProductDetail", { id, product });

  if (loading) return <div>loading...</div>;
  if (error) return <div>halo, Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* breadcrumb */}
        <div className=""></div>

        {/* main grid */}
        <div className="">
          {/* levý sloupec */}
          <div>...</div>

          {/* pravý sloupec */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
