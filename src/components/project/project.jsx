import { ProducData } from "../../Data/data";
import icon5 from "../../assets/icons/icon5.svg";
import icon6 from "../../assets/icons/icon6.svg";
import icon7 from "../../assets/icons/icon7.svg";
export const Project = () => {
  return (
    <>
      <div className="pt-[80px]">
        <div className="container">
          <div className="pb-10 flex gap-[30px] items-center">
            <h2 className="font-bold text-[36px] text-[#000]">Хиты продаж</h2>
            <p className="font-medium text-[16px] text-[#2a5275]">Все товары</p>
          </div>
          <div className="flex gap-2 mb-10">
            {ProducData.map((item) => (
              <>
                <div className="">
                  <div className="relative rounded-[8px] w-[326px] bg-[#FFFFFF] p-5">
                    <img src={item.img} alt="img" />
                    <p className="mt-[10px] mb-[10px] font-medium text-16px text-gray-400">
                      {item.title}
                    </p>
                    <h4 className="mb-[20px] font-normal text-[20px] w-[270px]">
                      {item.decektop}
                    </h4>
                    <img className="mb-5" src={item.reting} alt="img" />
                    <div className="flex justify-between items-end mb-5">
                      <div className="">
                        <strong className="text-gray-400 line-through text-[16px] font-bold">
                          {item.desc}
                        </strong>
                        <strong className="block mb-1">{item.price}</strong>
                        <img
                          className="cursor-pointer"
                          src={item.discount}
                          alt=""
                        />
                      </div>
                      <div className="flex gap-[10px]">
                        <img
                          className="w-[48px] h-[48px] cursor-pointer"
                          src={icon5}
                          alt="icons"
                        />
                        <img
                          className="w-[48px] h-[48px] cursor-pointer"
                          src={icon6}
                          alt="icons"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[10px]">
                      <button className="font-bold text-[16px] text-[#4878a6] rounded-[4px] border-[1px] py-[13px] px-[50px]">
                        Купить в 1 клик
                      </button>
                      <img className="cursor-pointer" src={icon7} alt="icons" />
                    </div>
                    <div className="absolute top-[10px] right-[10px]">
                      <button className="font-medium text-[16px] py-[5px] px-[16px] bg-[#48a69b] rounded-[4px] text-[#fff] mb-[10px]">
                        Новинка
                      </button>
                      <button className="block font-medium text-[16px] bg-[#d73838] py-[5px] px-[16px] text-[#fff] rounded-[4px]">
                        Хит продаж
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
