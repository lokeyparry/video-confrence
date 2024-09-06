import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const navigation=[
    {
        title:"Pages",
        routes:[
            {label:"Home", href:'/'},
            {label:"About", href:'#'},
            {label:"Resources", href:'#'},
            {label:"Pricing", href:'#'},
        ]
    },
    {
        title:"Services",
        routes:[
            {label:"HD Video Call", href:'#'},
            {label:"Screen Sharing", href:'#'},
            {label:"Meeting Recording", href:'#'},
            {label:"Virtual background", href:'#'},
        ]
    },
    {
        title:"Support",
        routes:[
            {label:"Feedback", href:'#'},
            {label:"Help Center", href:'#'},
            {label:"Contact Us", href:'#'},
            
        ]
    },
]
const socilaHandles = [
    {
        name:"Facebook",
        icon:Facebook,
        href:"#"
    },
    {
        name:"Youtube",
        icon:Youtube,
        href:"#"
    },
    {
        name:"Instagram",
        icon:Instagram,
        href:"#"
    },
    {
        name:"Linkedin",
        icon:Linkedin,
        href:"#"
    },
]

const Footer = () => {
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
        timeline.from(".newsletter",{opacity: 0, x:50, delay:1})
        .from(".heading",{opacity: 0, y:-50})
        .from(".description",{opacity: 0, x:-50})
        .from(".form",{opacity: 0, x:100})
    },{scope:container})
  return (
    <div className="py-20 max-w-screen-lg mx-auto" ref={container}>
        <div className="flex items-center justify-center flex-col gap-5 px-4 py-10 rounded-2xl shadow-card-inset newsletter">
            <div className='text-center'>
            <h1 className="text-2xl heading">Stay Updated with Our NewsLetter</h1>
            <p className="text-sm text-muted mt-2 description">
                Subscribe to our newsletter for the latest Updates, tips, and exclusive offers delivered to your inbox.
            </p>
            </div>
        
        <div className="flex bg-secondary p-2 rounded-2xl shadow-card-inset form">
            <input type="text" placeholder='Email Address' className=' bg-transparent w-full border-none outline-none h-[40px] px-3' />
            <button className=' btn bg-primary hover:text-white'>Subscribe</button>
        </div>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-4'>
            <div>
                <div className='flex justify-center sm:justify-start'>
                    <Logo />
                </div>
                <p className='text-lg text-muted mt-2 text-center sm:text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nesciunt alias velit, ut maiores et.
                </p>
            </div>
            {
                navigation.map((nav,index)=> (
                    <div className='space-y-2' key={index}>
                        <h1 className="text-xl font-semibold text-center sm:text-left">{nav.title}</h1>
                        {
                            nav.routes.map((route,index)=>(
                                <Link to={route.href} className='block text-lg text-muted text-center sm:text-left transition-all hover:text-white' key={index}>{route.label}</Link>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        <div className="flex items-center justify-between gap-4 flex-col md:flex-row py-6 px-4 mt-10 border-t border-white/10 shadow-card-inset rounded-3xl ">
          <div className="flex items-center gap-4">
            {
                socilaHandles.map((social,index)=>(
                    <Link to={social.href} target='"_blank' className='rounded-icon shadow-card-inset hover: bg-primary/50 transition-all' key={index}>
                        <social.icon size={15} />
                    </Link>
                ))
            }
          </div>
          <div className="text-sm text-center">
            Copyright &copy; ParryMeet 2024 - All rights reserved!
          </div>
          <div className="flex items-center gap-4">
            <Link to={"#"} className='text-sm text-muted transition-all hover:text-primary hover: underline'>Term and Conditions apply</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"#"} className='text-sm text-muted transition-all hover:text-primary hover: underline'>Privacy Policy</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer