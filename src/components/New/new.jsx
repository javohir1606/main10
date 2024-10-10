import React from 'react'
import img from "../../assets/img/produc.png"
export const CardNew = () =>{
  return <>
  
            <section>
                <div className="container">
                    <div className='flex justify-between w-[600px] border border-[#ffffff] mt-[50px] mb-[50px] p-[20px] items-center bg-[#b5b5b5] rounded-[10px]'>
                        <img src={img} alt="img" />
                        <div className='ml-[20px]'>
                            <h3 className='title_cart text-[#fff]'>Сигвеи</h3>
                            <p className='text_cart text-[#fff]'>Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)</p>
                            <button  className='p-[5px] border border-[#e3e3e3] rounded-[5px] mt-[10px] text-[#fff] bg-[#a5a5a5] hover:text-[#060606] hover:bg-[#fff] font-medium'>SHOW</button>
                        </div>
                    </div>
                </div>
            </section>

  </>
}
