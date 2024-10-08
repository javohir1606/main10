import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className=" bg-[#0E1821] py-[22px]">
        <div className="container flex gap-[20px]">
        <Link className="text-[#fff] font-medium text-[16px]" to={"/"}>Каталог товаров</Link>
        <Link className="text-[#fff] font-medium text-[16px]" to={"/about"}>О компании</Link>
        <Link className="text-[#fff] font-medium text-[16px]" to={"/aksiya"}>Акции</Link>
        <Link className="text-[#fff] font-medium text-[16px]" to={"/conponent"}>Рассрочка 0|0|18</Link>
        <Link className="text-[#fff] font-medium text-[16px]" to={"/servic"}>Сервис и гарантия</Link>
        <Link className="text-[#fff] font-medium text-[16px]" to={"/menu"}>Опт/дропшиппинг</Link>
        <Link className="text-[#fff] font-medium text-[16px]" to={"/contact"}>Контакты</Link>
        </div>
      </div>
    </>
  );
};
