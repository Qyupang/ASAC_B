import "./../styles/Signin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import dummy from "./../db/SigninLanguage.json";
import { useRef, useState } from "react";

const SigninComponent = (props) => {
  const langList = dummy.langs.map((langs) => <option>{langs}</option>);

  //전체동의 구현 이벤트
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [oneIDCheck, setOneIDCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const allCheckBtnColor = useRef(null);
  const ageCheckBtnColor = useRef(null);
  const oneIDCheckBtnColor = useRef(null);
  const privacyCheckBtnColor = useRef(null);

  //전체 동의 눌렀을 때, 다른 체크박스들도 반응하는 이벤트 && 색 바꿔주기
  const allCheckEvent = (allCheck) => {
    if (allCheck === true) {
      setAgeCheck(true);
      setOneIDCheck(true);
      setPrivacyCheck(true);
      ageCheckBtnColor.current.style.backgroundColor = "#36f";
      oneIDCheckBtnColor.current.style.backgroundColor = "#36f";
      privacyCheckBtnColor.current.style.backgroundColor = "#36f";
    } else {
      setAgeCheck(false);
      setOneIDCheck(false);
      setPrivacyCheck(false);
      ageCheckBtnColor.current.style.backgroundColor = "#fff";
      oneIDCheckBtnColor.current.style.backgroundColor = "#fff";
      privacyCheckBtnColor.current.style.backgroundColor = "#fff";
    }
  };

  const allCheckBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      allCheckEvent(true);
      allCheckBtnColor.current.style.backgroundColor = "#36f";
    } else {
      setAllCheck(false);
      allCheckEvent(false);
      allCheckBtnColor.current.style.backgroundColor = "#fff";
    }
  };
  const ageCheckBtEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
      ageCheckBtnColor.current.style.backgroundColor = "#36f";
    } else {
      setAgeCheck(false);
      setAllCheck(false);
      ageCheckBtnColor.current.style.backgroundColor = "#fff";
      allCheckBtnColor.current.style.backgroundColor = "#fff";
    }
  };
  const oneIDCheckBtEvent = () => {
    if (oneIDCheck === false) {
      setOneIDCheck(true);
      oneIDCheckBtnColor.current.style.backgroundColor = "#36f";
    } else {
      setOneIDCheck(false);
      setAllCheck(false);
      oneIDCheckBtnColor.current.style.backgroundColor = "#fff";
      allCheckBtnColor.current.style.backgroundColor = "#fff";
    }
  };
  const privacyCheckBtEvent = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
      privacyCheckBtnColor.current.style.backgroundColor = "#36f";
    } else {
      setPrivacyCheck(false);
      setAllCheck(false);
      privacyCheckBtnColor.current.style.backgroundColor = "#fff";
      allCheckBtnColor.current.style.backgroundColor = "#fff";
    }
  };

  return (
    <div className="Signin_Div">
      <div className="Signin_Div_Div">
        <div className="Signin_Header">
          <button
            className="Signin_Header_divStyle"
            onClick={() => props.setModalOpen("1")}
          >
            취소
          </button>
          <h1 className="Signin_Header_Title">회원가입</h1>
          <div className="Signin_Header_divStyle"></div>
        </div>
        <div className="Signin_Body_Div">
          <div className="Signin_Body">
            <div className="Signin_Inputs">
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">이메일</label>
                <input
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_readOnly"
                  readOnly="readonly"
                  placeholder={props.email}
                ></input>
              </div>
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">이름</label>
                <input
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_input"
                  placeholder="이름을 입력해주세요."
                ></input>
              </div>
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">휴대폰 번호</label>
                <select class="Signin_Input_selectStyle">{langList}</select>
                <div className="Signin_Input_Phone_Div">
                  <input
                    placeholder="(예시) 01012345678"
                    className="Signin_Input_inputStyle Signin_Input_inputStyle_input"
                  ></input>
                  <button className="Signin_Input_buttonStyle">
                    인증번호 받기
                  </button>
                </div>
                <input
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_readOnly"
                  readOnly="readonly"
                  placeholder="인증번호를 입력해주세요."
                ></input>
              </div>
              <div className="Signin_Input_divStyle">
                <label className="Signin_Input_labelStyle">비밀번호</label>
                <input
                  placeholder="비밀번호를 입력해주세요."
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_input"
                ></input>
                <input
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                  className="Signin_Input_inputStyle Signin_Input_inputStyle_input"
                ></input>
                <span className="Signin_Input_Password_Text">
                  영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
                  <br />
                  16자 이하로 입력해주세요.
                </span>
              </div>
            </div>
            <div className="Signin_Agree">
              <div className="Signin_Agree_Agree_Div_Div Signin_Agree_All">
                <div
                  className="Signin_Agree_checkbox_custom"
                  ref={allCheckBtnColor}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <label
                  className="Signin_Agree_TextStyle"
                  style={{ color: "#333", fontWeight: "600" }}
                >
                  <input
                    type="checkbox"
                    className="Signin_Agree_Checkbox"
                    checked={allCheck}
                    onClick={(e) => allCheckBtnEvent()}
                  />
                  전체 동의
                </label>
              </div>
              <div className="Signin_Agree_Agree_Div">
                <div className="Signin_Agree_Agree_Div_Div">
                  <div
                    className="Signin_Agree_checkbox_custom"
                    ref={ageCheckBtnColor}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <label className="Signin_Agree_TextStyle Signin_Argee1_style">
                    <input
                      type="checkbox"
                      className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                      checked={ageCheck}
                      onClick={(e) => {
                        ageCheckBtEvent();
                      }}
                    />
                    만 14세 이상입니다. (필수)
                  </label>
                </div>
                <div className="Signin_Agree_Agree_Div_Div Signin_Agree_Agree_Div_Div_FlexStyle">
                  <div className="Signin_Agree_Agree_Div_Div_FlexStyle_Div">
                    <div
                      className="Signin_Agree_checkbox_custom"
                      ref={oneIDCheckBtnColor}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <label className="Signin_Agree_TextStyle">
                      <input
                        type="checkbox"
                        className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                        checked={oneIDCheck}
                        onClick={(e) => {
                          oneIDCheckBtEvent();
                        }}
                      />
                      oneID 이용약관 동의 (필수)
                    </label>
                  </div>
                  <Link to="/servicecenter" className="Signin_Agree_TextStyle">
                    자세히
                  </Link>
                </div>
                <div className="Signin_Agree_Agree_Div_Div Signin_Agree_Agree_Div_Div_FlexStyle">
                  <div className="Signin_Agree_Agree_Div_Div_FlexStyle_Div">
                    <div
                      className="Signin_Agree_checkbox_custom"
                      ref={privacyCheckBtnColor}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <label className="Signin_Agree_TextStyle">
                      <input
                        type="checkbox"
                        className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                        checked={privacyCheck}
                        onClick={(e) => {
                          privacyCheckBtEvent();
                        }}
                      />
                      개인정보 및 수집 이용 동의 (필수)
                    </label>
                  </div>
                  <Link to="/privacy" className="Signin_Agree_TextStyle">
                    자세히
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Signin_Footer">
          <button>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
