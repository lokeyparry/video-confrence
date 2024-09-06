import React, { useRef } from 'react'
import { amazon, facebook, google, linkedin, microsoft, netflix, paypal, samsung, skype, whatsapp } from '../assets'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const partners=[
    {name:"Amazon",logo:amazon},
    {name:"Facebook",logo:facebook},
    {name:"Google",logo:google},
    {name:"Linkedin",logo:linkedin},
    {name:"Microsoft",logo:microsoft},
    {name:"Netflix",logo:netflix},
    {name:"Paypal",logo:paypal},
    {name:"Samsung",logo:samsung},
    {name:"Skype",logo:skype},
    {name:"Whatsapp",logo:whatsapp},
]

const Partners = () => {
    const container = useRef(null)
    useGSAP(()=>{
        const timeline = gsap.timeline({
            delay:0.5,
            scrollTrigger: {
                trigger: container.current,
                start: "20% bottom",
                end: "bottom top",
            }
        })
        timeline.from(".main-title",{opacity: 0, y: -50})
        .from(".logo-slide",{opacity: 0, y:-50})
    },{scope:container})
  return (
    <div className='py-20 max-w-screen-xl mx-auto' ref={container}>
        <div className="mb-10 p-4">
            <h1 className="main-title">Choosen by companies At</h1>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap py-4 group">
            <div className="logo-slide bg-background inline-block animate-slide-logo group-hover:[animation-play-state:paused]">
                {
                    partners.map((partner)=>(
                        <img src={partner.logo} alt={partner.name} key={partner.name} className='inline-block h-[30px] w-auto mx-8 filter grayscale object-contain' />
                    ))
                }
            </div>
            <div className="logo-slide bg-background inline-block animate-slide-logo group-hover:[animation-play-state:paused]">
                {
                    partners.map((partner)=>(
                        <img src={partner.logo} alt={partner.name} key={partner.name} className='inline-block h-[30px] w-auto mx-8 filter grayscale object-contain' />
                    ))
                }
            </div>
             {/* left and right shadow  */}
             <div className='absolute left-0 top-0 h-full w-[500px] bg-gradient-to-l from-transparent to-background'/>
             <div className='absolute right-0 top-0 h-full w-[500px] bg-gradient-to-r from-transparent to-background'/>
        </div>
    </div>
  )
}

export default Partners