import { NavLink, useLoaderData } from "react-router-dom";
import { getServices } from "../services/apiServices";
import Banner from "../features/home/Banner";
import Services from "../features/home/Services";
import Header from "../features/home/Header";
import Cookies from "js-cookie";

const Home = () => {
  const services = useLoaderData();

  Cookies.get("jwt");

  return (
    <div className="flex h-full flex-col gap-4 overflow-scroll p-4">
      <Header isHome={true} />
      <Banner />
      <Services services={services} />
    </div>
  );
};

export default Home;

export async function loader() {
  const records = await getServices();

  return records;
}
