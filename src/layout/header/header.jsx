import logo from "../../assets/img/logo.svg";
import icon from "../../assets/icons/icon.svg"
import icon1 from "../../assets/icons/icon1.svg"
import icon2 from "../../assets/icons/icon2.svg"
import icon3 from "../../assets/icons/icon3.svg"
import icon4 from "../../assets/icons/icon4.svg"
import { Soat } from "../soat/soat";
import { Navbar } from "../navbar/navbar";
export const Header = () => {
  return (
    <>
    <div>

    </div>
      <div className="py-[10px] container">
        <div className="flex justify-between items-center">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
            <div className="flex gap-[23px] items-center">
            <a className="font-medium text-gray-500 text-[16px] " href="tel:">
              +7 (812) 660-50-54
            </a>
            <a className="font-medium text-gray-500 text-[16px] " href="tel:">
              +7 (958) 111-95-03
            </a>
              <Soat />
          </div>
          <div className="">
            <div className="relative flex gap-20px] items-center">
              <img className="absolute top-[16px] left-3" src={icon} alt="img" />
              <button className="font-medium text-[16px] text-gray-500 border-[2px] py-2 pr-[12px] pl-[48px]">
                Поиск
              </button>
              <img src={icon1} alt="img" />
              <img src={icon2} alt="img" />
              <img src={icon3} alt="img" />
              <img src={icon4} alt="img" />
              <button className="font-medium text-[16px] text-[#fff] bg-[#2A5275] py-[16px] px-[26px] rounded-[10px]">Войти</button>
            </div>
          </div>
        </div>
        <div className="">
        </div>
      </div>
          <Navbar />
    </>
  );
};
