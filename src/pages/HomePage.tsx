import { useParams } from "react-router";
import Header from "../components/common/Header";
import Options from "../components/features/Options";

export default function HomePage() {
  const params = useParams();
  const category = params.category;
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
                <a
                  href="#idk"
                  className="bg-primary mt-4 px-6 py-3 rounded-[15px] text-background font-bold hover:scale-105 transition-transform duration-300"
                >
                  Explore collection
                </a>
              </div>
            </div>
          </div>
          <Options category={category} />
          <h1 id="idk" className="my-[1000px]">
            Idk
          </h1>
        </div>
      </div>
    </div>
  );
}
