import React from 'react'
import { user4, user5 } from '../../assets';
interface IProps{
    className?:string;
}
const InviteCard = ({className}:IProps) => {
  return (
    <div className={`relative bg-secondary p-4 border border-white/10 rounded-2xl overflow-hidden ${className}`}>
        <div className="p-4 bg-secondary rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Invite members</h3>
            <p className="text-xs text-muted">
                Invite participants to join the meeting.
            </p>
            <div className="flex items-center justify-between mt-2 bg-accent py-2 px-4 rounded-2xl">
                <p className="text-xs text-muted">Parvej</p>
                <h4 className='text-xs'>Join now</h4>
            </div>
        </div>
        <div className="p-4 rounded-2xl bg-accent shadow-card-inset">
            <div className="flex itmes-center gap-2 border border-white/10 p-2 rounded-2xl">
             <div className="rounded-profile-small">
                <img src={user5} alt="" />
             </div>
             <div>
                <h3 className="text-xs">Alima James</h3>
                <p className="text-xs text-muted">alimajames@gamil.com</p>
             </div>
            </div>
            <div className="flex itmes-center gap-2  p-2 rounded-2xl">
             <div className="rounded-profile-small">
                <img src={user4} alt="" />
             </div>
             <div>
                <h3 className="text-xs">Thor</h3>
                <p className="text-xs text-muted">thor@gamil.com</p>
             </div>
            </div>
        </div>
    </div>
  )
}

export default InviteCard