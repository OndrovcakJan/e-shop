import { useNavigate } from "react-router";
import { Rating } from "react-simple-star-rating";

interface Props {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}
export default function ItemCard({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}: Props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/product/${id}`);
  }
  return (
    <div
      className="flex flex-col w-100 bg-white rounded-2xl p-7 hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex bg-secondary p-2 rounded-2xl justify-center items-center">
        <img src={image} alt="Product image" className="w-50 h-50" />
      </div>
      <Rating
        initialValue={rating.rate}
        SVGstyle={{ display: "inline" }}
        readonly
        allowFraction
        size={20}
      />
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{description}</p>
      <p className="text-primary font-bold text-2xl">${price}</p>
    </div>
  );
}
