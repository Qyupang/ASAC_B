import React from "react";
import "./../styles/Main_InsightCategory.css";
import MainInsightCategoryButton from "./MainInsightCategoryButton";

const MainInsightCategory = () => {
  const buttons = [
    "조직문화",
    "리더십",
    "회사생활",
    "라이프스타일",
    "IT/기술",
    "인간관계",
    "취업/이직",
    "커리어고민",
    "HR",
    "콘텐츠 제작",
    "경영/전략",
    "MD",
    "UX/UI",
    "노무",
    "개발",
    "브랜딩",
    "데이터",
    "디자인",
    "서비스기획",
    "마케팅",
  ];
  const buttonsList = buttons.map((button, index) => (
    <MainInsightCategoryButton key={index}>{button}</MainInsightCategoryButton>
  ));

  return (
    <div className="Main_InsightCategory_Div">
      <div className="Main_InsightCategory_Buttons">{buttonsList}</div>
    </div>
  );
};

export default MainInsightCategory;
