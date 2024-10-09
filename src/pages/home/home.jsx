import { CatalogData } from "../../Data/data";
import { Slider } from "../silaydir/silaydir";
import { Skidka } from "../../components/skidki/skidki";
import { Conpont } from "../../components/conpont/conpont";
export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-5">
          <div className=" p-[8px] w-[310px] bg-[#fff] text-start">
            {CatalogData.map((item) => (
              <div className="flex gap-[10px] mb-[13px] mt-[20px]" key={item.id}>
                <img src={item.img} alt="" />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="">
            <Slider />
          </div>
        </div>
        <div className="">
          <Conpont />
          <Skidka />
          <Conpont />
          <Conpont />
          <Skidka />
          <Conpont />
          <Conpont />
        </div>
      </div>
    </>
  );
};
