import { BrainCircuit, Maximize2, MoveRight } from "lucide-react";
import React from 'react'

interface IProps {
    className?:string;
}

const SummaryCard = ( {className}:IProps) => {
  return (
    <div className={`bg-background relative py-6 px-4 shadow-card-inset rounded-2xl transition-all duration-500 ${className}`}>
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Summary</h3>
            <div className="flex items-center gap-4">
                <Maximize2 size={15} />
                <MoveRight size={15} />
            </div>
        </div>
        <div className="mt-4">
          <h4 className="font-bold mb-2">Objective</h4>
          <div className="text-sm text-gray-300 line-clamp-6">
            This meeting is focusing on developing a comperhensive startegy to increase Mr.Parvej Ansari
            We will be discussing key tactics such as optimizing video confrencing,content, enhancing engagement with audience, leveraging social media platform for widr rich, collabrating with influencers, and analyzing performance matrics to ensure we stay on track toword our goal. Additionally, we will explore potential advertizing opportunities and create capmign to attarct new viewers and retain existing subscriber.
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 shadow-card-inset p-4 rounded-2xl">
          <BrainCircuit size={18} className="text-blue-500"/>
          <p>Power by AI</p>
        </div>
    </div>
  )
}

export default SummaryCard