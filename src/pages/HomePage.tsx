import { useParams } from "react-router";
import Header from "../components/common/Header";
import Options from "../components/features/Options";
import { useEffect, useRef, useState } from "react";
import { getProducts, type Product } from "../services/apiService";
import { AxiosError } from "axios";
import ItemCard from "../components/features/ItemCard";
import { Rating } from "react-simple-star-rating";

export default function HomePage() {
  const params = useParams();
  const category = params.category;

  const target = useRef<HTMLDivElement>(null);

  function scrollTo() {
    target.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const [data, setData] = useState<Product[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setData(data);
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log(err.message);
        } else {
          console.log(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen overflow-auto bg-background scroll-smooth">
      <Header category={category} />
      <div className="flex justify-center">
        <div className="w-[96%]">
          <div className="flex grow items-center justify-center w-full h-125 mt-5">
            <div className="bg-secondary w-full h-full flex justify-center items-center rounded-2xl">
              <div className="flex flex-col items-center justify-center bg-background w-2/5 h-50 rounded-2xl">
                <h1 className="text-3xl font-extrabold">
                  Modern essentials for You
                </h1>
                <p className="text-center px-15">
                  Curated collections designed to elevate your everyday living.
                  Discover quality and craftsmanship.
                </p>
                <button
                  onClick={scrollTo}
                  className="bg-primary mt-4 px-6 py-3 rounded-[15px] text-background font-bold hover:scale-105 transition-transform duration-300"
                >
                  Explore collection
                </button>
              </div>
            </div>
          </div>

          <div ref={target}>
            <Options category={category} />
            <div className="flex flex-wrap gap-3.5 justify-center">
              {loading ? (
                <div>Loading products...</div>
              ) : (
                data?.map((product) => {
                  return <ItemCard {...product} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
