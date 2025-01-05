import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function CardADS() {
    const navigate = useNavigate()
    useEffect(() => {
        document.getElementById('bannerAds').showModal()
    },[])
  return (
    <div>
            {/* <button className="btn" onClick={()=>document.getElementById('bannerAds').showModal()}>open modal</button> */}
                <dialog id="bannerAds" className="modal">
                <div data-aos="fade-in" data-aos-delay="100" className="modal-box h-35r bg-white cursor-pointer" onClick={()=>navigate('/spring2025')}>
                <img src="https://res.cloudinary.com/dmd3qqgum/image/upload/v1736044683/att.-wy_QJ6zHSeZmtwBP_mxpJaMNqyvsLWb_pUt-ene_kg_njtscb.jpg" alt="bannerADS" className='w-full h-full rounded-none object-cover'/>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                </dialog>
    </div>
  )
}
