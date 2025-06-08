import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { CiHeart } from "react-icons/ci";



const Recipas = () => {

  const { datas,loading } = useFetch("/products");
  console.log(datas);
const navigate =useNavigate()

  

  return (
    <div>
    <div className=" mt-4 conatiner mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2">
      {datas?.products?.map((item) => (
        <div key={item.id} className="border-2">
          <button className="text-2xl">
              <CiHeart />
          </button>
          <img
            onClick={() => navigate(`/product/${item.id}`)}
            src={item.thumbnail}
            />
          <h1 className="font-semibold text-2xl text-center">{item.title}</h1>
        </div>
      ))}
      
      </div>
      {loading&& <div className="text-center text-4xl">...Loading</div>}
    </div>
  );
};

export default Recipas;
