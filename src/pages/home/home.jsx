import { data } from "autoprefixer";
import { CatalogData } from "../../Data/data";
import { Slider } from "../silaydir/silaydir";
import { Project } from "../../components/project/project";
import { NewItems } from "../../components/Newitems/newitems";
import { Skidka } from "../../components/skidki/skidki";
import { NewProduckt } from "../../components/Newproduck";
import { New } from "../../components/New/new";
import { NewCard } from "../../components/newcard";
export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-5">
          <div className=" p-[8px] w-[310px] bg-[#fff] text-start">
            {CatalogData.map((item) => (
              <>
                <div className="flex gap-[10px] mb-[13px] mt-[20px]">
                  <img src={item.img} alt="" />
                  <h1>{item.title}</h1>
                </div>
              </>
            ))}
          </div>
          <div className="">
            <Slider />
          </div>
        </div>
        <div className="">
          <Project />
          <NewItems />
          <Skidka />
          <NewProduckt />
          <New />
          <Skidka />
          <NewCard />
        </div>
      </div>
    </>
  );
};
