import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./../styles/Main_SlideBanner.css";
import MainSlideBannerImg from "./MainSlideBannerImg";

const MainSlideBanner = () => {
  const images = [
    {
      id: 1,
      src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100",
      alt: "우리 회사를 소개합니다.",
      title: "우리 회사를 소개합니다.",
      contents: "'회사'에 대한 정보, 원티드가 찾아드릴게요!",
      href: "https://www.wanted.co.kr/events/employeebranding",
    },
  ];
  const imagesList = images.map((image) => (
    <MainSlideBannerImg
      key={image.id}
      src={image.src}
      alt={image.alt}
      title={image.title}
      contents={image.contents}
      href={image.href}
    />
  ));

  return (
    <div className="Main_SlideBanner_Div">
      <button className="Main_SlideBanner_ArrowButton Main_SlideBanner_LeftButton">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="Main_SlideBanner_Img_Div">{imagesList}</div>
      <button className="Main_SlideBanner_ArrowButton Main_SlideBanner_RightButton">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default MainSlideBanner;
