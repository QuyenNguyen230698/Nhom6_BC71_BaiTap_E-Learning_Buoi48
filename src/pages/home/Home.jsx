import React from "react";
import CardBanner from "../../components/card/CardBanner";
import CardListCourse from "../../components/card/CardListCourse";
import CardCommunicate from "../../components/card/CardCommunicate";
import CardCourse from "../../components/card/CardCourse";
import CardUser from "../../components/card/CardUser";
import CardCountingUp from "../../components/card/CardCountingUp";
import CardInfoClass from "../../components/card/CardInfoClass";
import CardADS from "../../components/card/CardADS";

export default function Home() {
  const dataBanner = {
    title: 'V-learning',
    subTitle: '"Chỉ khi bước, bạn mới biết đôi chân mình mạnh mẽ đến đâu!"',
    description: 'Học đi đôi với hành',
    img: 'https://res.cloudinary.com/dmd3qqgum/image/upload/v1733651444/123_rpthnm.jpg'
  }
  const dataImg = [
    {
      src: "/img/content1.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content2.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content3.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content4.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content1.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content2.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content3.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
    {
      src: "/img/content4.webp",
      description: "Lập trình hiện đang là xu hướng trên toàn thế giới...",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      <CardBanner dataBanner={dataBanner} />
      <CardADS/>
      <CardCountingUp />
      <CardInfoClass />
      <CardCourse />
      <CardCommunicate />
      <CardListCourse dataImg={dataImg} />
      <CardUser />
    </div>
  );
}
