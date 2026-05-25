import { useParams } from "react-router";
import Header from "../components/common/Header";

export default function HomePage() {
  const params = useParams();
  const category = params.category;
  return (
    <div className="min-h-screen bg-background">
      <Header category={category} />
      <h1>Homepage</h1>
    </div>
  );
}
