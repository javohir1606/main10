import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";

export const MainLoyout =()=>{
  return(
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}