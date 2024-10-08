import img from "../../assets/img/pngwing.svg"
import img1 from "../../assets/img/pngwing1.svg"
export const Skidka = () =>{
  return <>
  <div className="container">
    <div className="flex gap-5 justify-between">
      <div className="rounded-[8px] w-[640px] h-[180px] bg-[#EDF2F6]  flex gap-[147px]">
          <h2 className="font-bold text-[28px] w-[280px] p-[30px]">Скидки до 30% на сигвеи</h2>
          <img className="" src={img} alt="" />
      </div>
      <div className="rounded-[8px] w-[640px] h-[180px] bg-[#EDF2F6]  flex gap-[147px]">
          <h2 className="font-bold text-[28px] w-[280px] p-[30px]">Неделя смарт часов</h2>
          <img className="" src={img1} alt="" />
      </div>
    </div>
  </div>
  </>
}