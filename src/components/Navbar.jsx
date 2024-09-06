import { Building, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const routes = [
    {
      label:"Home",
      href:"/"
    },
    {
        label:"About",
        href:"#"
      },
      {
        label:"Resources",
        href:"#"
      },
      {
        label:"Pricing",
        href:"#"
      },
      {
        label:"Contact Us",
        href:"#"
      }
]
const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <div className="sticky top-0 z-50 bg-background flex items-center justify-between p-4">
        <Logo/>
        <div className={`fixed block h-full w-[300px] top-0 z-40 left-[-320px] ${open && 'left-[0px]'} p-6 bg-background flex flex-col gap-4 transition-all duration-500 
        min-[900px]:static min-[900px]:flex-row min-[900px]:w-auto min-[900px]:p-0 `}>
            <div className="mb-8 min-[900px]:hidden">
                <Logo />
            </div>
            {
                routes.map((route, index) => (
                    <Link key={index} to={route.href} className="text-lg text-muted hover:text-primary transition-all">
                        {route.label}
                    </Link>
                ))
            }
        </div>
        {open && <div className="fixed top-0 left-0 z-30 w-full h-full bg-background/50 hover:bg-background/70 transition-all duration-500 cursor-pointer" onClick={()=>setOpen(!open)} />}
        <div className="hidden sm:flex items-center gap-4">
        <Link to={"/join"} target="_blank" className="btn text-lg">Start meeting</Link>
            <Link to={"/join"} target="_blank" className="btn primary text-lg">Join Now</Link>
        </div>
        <div onClick={()=>setOpen(!open)} className="flex items-center justify-center cursor-pointer bg-secondary p-2 border border-dashed border-white/10 hover:bg-primary rounded-xl text-muted hover:text-white transition-all duration-500 min-[900px]:">
            <Menu />
        </div>
    </div>
  )
}

export default Navbar