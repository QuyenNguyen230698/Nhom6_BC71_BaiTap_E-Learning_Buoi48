import React from 'react'
import CardBanner from '../../components/card/CardBanner'
import CardListCourse from '../../components/card/CardListCourse'
import CardCommunicate from '../../components/card/CardCommunicate'
import CardCourse from '../../components/card/CardCourse'
import CardUser from '../../components/card/CardUser'
import CardCountingUp from '../../components/card/CardCountingUp'
import CardInfoClass from '../../components/card/CardInfoClass'



export default function Home() {
  const dataBanner = {
    title: 'V-learning',
    subTitle: 'Cùng nhau khám phá những điều mới mẻ',
    description: 'Học đi đôi với hành',
    img: '/img/bannerHome.jpg'
  }
  const dataImg = [
    { src: '/img/content1.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content2.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content3.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content4.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content1.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content2.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content3.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' },
    { src: '/img/content4.webp', description: 'Lập trình hiện đang là xu hướng trên toàn thế giới...' }
  ]


  return (
    <div className='w-full h-full flex flex-col bg-white' >
       <CardBanner dataBanner={dataBanner} />
       <CardCountingUp/>
       <CardInfoClass/>
       <CardCourse/>
       <CardCommunicate />
       <CardListCourse dataImg={dataImg}/>
       <CardUser/>
    </div>
  )
}
