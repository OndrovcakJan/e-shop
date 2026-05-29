import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';

// Core Swiper styles required for functionality
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Product } from '../../services/apiService';

interface Props {
  data: Product[];
}

export default function ProductShowcase({data}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
        Featured Products
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        // Using a global style injector to add padding for pagination dots below the cards
        className="pb-14!"
      >
        {data.map((item: Product) => (
          <SwiperSlide key={item.id} className="h-full">
            <div className="group flex h-120 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">

              {/* Image Container */}
              <div className="h-60 w-full overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt="Product image"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-scale-down"
                />
              </div>

              {/* Product Info */}
              <div className="flex grow flex-col p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold leading-snug text-gray-800">
                  {item.title}
                </h3>
                <p className="mb-5 text-xl font-bold">
                  ${item.price}
                </p>

                {/* Button pushed to the bottom via mt-auto */}
                <Link to={`/product/${item.id}`} className="mt-auto w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  View Product
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
