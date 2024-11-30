import React, { useEffect, useState } from 'react'
import CardBanner from '../../components/card/CardBanner'
import { VlearningService } from '../../../services/Vlearning';


export default function Home() {
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => {
    VlearningService.getListCourse()
    .then((result) => {
      setListCourse(result.data);
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div>
       <CardBanner />
       <div className='grid grid-cols-4 items-start justify-center w-full h-full container mx-auto'>
        {listCourse?.map((item, index) => {
          return <div key={index}>
          <img src={item.hinhAnh} alt="" />
        </div>
        })}
       </div>
    </div>
  )
}
