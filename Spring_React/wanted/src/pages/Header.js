/*
Header.js
최상단바 컴포넌트

2022.10.21 박보민
 */

import React from "react";

import "./../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/imgs/logo.png";

import HeaderCategory from "./../components/HeaderCategory";

const Header = () => {
  return (
    <div className="Header_div">
      <header>
        <div className="Header_Menu">
          <div>
            <button className="Header_Menu_Icon_button">
              <FontAwesomeIcon icon={faBars} className="Header_Menu_Icon" />
            </button>
            <a href="https://www.wanted.co.kr/">
              <img
                src={logo}
                alt="wanted logo"
                className="Header_Menu_LogoImg"
              />
            </a>
          </div>
          <div>
            <ul className="Header_Category_ul">
              <HeaderCategory href="https://www.wanted.co.kr/jobsfeed">
                채용
              </HeaderCategory>
              <HeaderCategory href="https://www.wanted.co.kr/events">
                이벤트
              </HeaderCategory>
              <HeaderCategory href="https://www.wanted.co.kr/salary">
                직군별 연봉
              </HeaderCategory>
              <HeaderCategory href="https://www.wanted.co.kr/cv/intro">
                이력서
              </HeaderCategory>
              <HeaderCategory href="https://www.wanted.co.kr/community">
                커뮤니티
              </HeaderCategory>
              <HeaderCategory href="https://www.wanted.co.kr/gigs/experts">
                프리랜서
              </HeaderCategory>
              <HeaderCategory href="https://www.wanted.co.kr/aiscore/resume">
                AI 합격예측
              </HeaderCategory>
            </ul>
          </div>
          <div className="Header_Buttons_Div">
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="Header_Search_Icon"
              />
            </button>
            <button className="Header_Singin_Button">회원가입/로그인</button>
            <p className="Header_Button_pipe">|</p>
            <button className="Header_EnterpriseService_Button">
              기업 서비스
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
