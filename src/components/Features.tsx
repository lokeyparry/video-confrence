import { MessageCircleHeart, ReceiptText, User } from 'lucide-react'
import React, { useRef } from 'react'
import InviteCard from './ui/InviteCard'
import MessageCard from './ui/MessageCard'
import SummaryCard from './ui/SummaryCard'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const features = [
  {
    title:"Invite participant to join the meeting",
    icon: User,
    component: <InviteCard className='bg-secondary/70 backdrop-blur-3xl' />,
    bgStyle:"bg-invite bg-cover",
    description:"Easily invite participants to join the meeting with simple click."
  },
  {
    title:"Instant message for Seamless Communication",
    icon: MessageCircleHeart,
    component: <MessageCard className='bg-secondary/70 backdrop-blur-3xl' />,
    bgStyle:"bg-message bg-cover",
    description:"Send and recieve message in real time to keep ypur team connected and informed through out the meeting."
  },
  {
    title:"Transform notes into insights with out AI summary tool",
    icon: ReceiptText,
    component: <SummaryCard className='bg-secondary/70 backdrop-blur-3xl' />,
    bgStyle:"bg-summary bg-cover",
    description:"Capture key pointe, decision and action automatically, Stay orgnized and productivity white AI handles the details"
  },
]

const Features = () => {
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
        timeline.from(".main-title",{opacity: 0, x: -50})
        .from(".text-muted",{opacity: 0, y:-50})
        .from(".box",{opacity: 0, y:100, stagger:1})
    },{scope:container})
  return (
    <div className='relative py-20 max-w-screen-lg mx-auto' ref={container}>
      <div className="absolute left-[-300px] w-[322px] h-[348px] bg-gradient-to-r from-primary/50 to-primary-accent rounded-full blur-[150px] z-0 "/>
      <div className="max-w-[800px] mx-auto p-4">
        <h1 className="main-title">
          Enhance your productivity in work and life with seamless meeting notes for all video confrences.
        </h1>
        <p className="text-sm text-muted text-center mt-6">
          Our meeting notes tool is your key to boosting productivity whether you are at work or on the top to go.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 p-4 mt-10 min-[900px]:grid-cols-3'>
        {
          features.map((features,index)=> (
            <div className="flex flex-col items-strech justify-between bg-accent rounded-2xl shadow-card-inset overflow-hidden box" key={index}>
              <div className={`p-4 h-[250px] overflow-hidden ${features.bgStyle}`}>
                {features.component}
              </div>
              <div className="flex-1 p-4 bg-accent rounded-b-2xl shadow-card-inset">
                <features.icon />
                <h3 className="text-sm my-2">{features.title}</h3>
                <p className="text-xs text-muted line-clamp-2">{features.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features