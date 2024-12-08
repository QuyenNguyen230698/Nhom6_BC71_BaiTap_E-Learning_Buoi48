import React from 'react'
import CardBanner from '../../components/card/CardBanner'
import CardListCourse from '../../components/card/CardListCourse'
import CardCommunicate from '../../components/card/CardCommunicate'
import CardCourse from '../../components/card/CardCourse'
import CardUser from '../../components/card/CardUser'



export default function Home() {
  const dataBanner = {
    title: 'V-learning',
    subTitle: 'Cùng nhau khám phá những điều mới mẻ',
    description: 'Học đi đôi với hành',
    img: 'https://res.cloudinary.com/dbcr9t1rd/image/upload/v1732874660/news-banner_brgtw2.webp'
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
       <CardCourse/>
       {/* <CardCommunicate /> */}
       <CardListCourse dataImg={dataImg}/>
       <CardUser/>
    </div>
  )
}
