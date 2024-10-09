import img from "../../assets/img/logo.svg";
import icons from "../../assets/icons/icon8.svg";
import { Soat } from "../soat/soat";
export const Footer = () => {
  return (
    <>
      <div className="bg-[#EDF2F6] p-10">
        <div className="container">
          <ul className="flex gap-[81px] justify-between">
            <li>
              <img className="mb-5" src={img} alt="" />
              <a className="font-semibold text-[20px] text-black" href="#">
                +7 (958) 111-95-03
              </a>
              <a
                className="font-semibold text-[20px] text-black mb-[10px] block"
                href="#"
              >
                +7 (812) 660-50-54
              </a>
              <Soat />
              <p className="mt-[20px] font-normal text-[16px] w-[230px]">
                Проспект Стачек 67 к.5 Лиговский проспект 205 Гражданский
                проспект, 116 к.5
              </p>
            </li>
            <li>
              <a className="font-semibold text-[20px] text-gray-400" href="#">
                Для клиента
              </a>
              <p className="mt-5 font-normal text-[16px] text-black">
                Как купить <br /> Доставка и оплата <br /> Кредит <br />{" "}
                Политика конфиденциальности <br />
                Вопросы и ответы (F.A.Q.) <br /> Сервис и гарантия
              </p>
            </li>
            <li>
              <a className="font-semibold text-[20px] text-gray-400" href="#">
                О магазине
              </a>
              <p className="mt-5 font-normal text-[16px] text-black">
                Отзывы <br />
                Наши преимущества
                <br />
                История компании
                <br />
                Сотрудничество
                <br />
                Партнёрская программа
                <br />
                Вакансии
                <br />
              </p>
            </li>
            <li>
              <a className="font-semibold text-[20px] text-gray-400" href="#">
                Сотрудничество
              </a>
              <p className="mt-5 font-normal text-[16px] text-black">
                Оптом <br />
                Дропшиппинг <br />
              </p>
            </li>
          </ul>
          <hr className="mt-[40px] mb-[10px]"/>
          <ul className="flex justify-between items-center">
            <li>
              <p className="font-normal text-[16px] text-gray-400">SmartТехника © 2021 Все права защищены</p>
            </li>
            <li className="flex items-center">
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
            </li>
            <li>
              <p className="font-normal text-[16px] text-gray-400">Разработка: websl.ru</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
