import "./../styles/Signin.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import dummy from "./../db/SigninLanguage.json";

const SigninComponent = (props) => {
  const langList = dummy.langs.map((langs) => <option>{langs}</option>);

  return (
    <div className="Signin_Div">
      <div className="Signin_Header">
        <button
          className="Signin_Header_div"
          onClick={() => props.setModalOpen("1")}
        >
          취소
        </button>
        <h1 className="Signin_Header_Title">회원가입</h1>
        <div className="Signin_Header_div"></div>
      </div>
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
            <div className="Signin_Agree_checkbox_custom">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <label
              className="Signin_Agree_TextStyle"
              style={{ color: "#333", fontWeight: "600" }}
            >
              <input
                type="checkbox"
                className="Signin_Agree_Checkbox"
                name="all"
              />
              전체 동의
            </label>
          </div>
          <div className="Signin_Agree_Agree_Div">
            <div className="Signin_Agree_Agree_Div_Div">
              <div className="Signin_Agree_checkbox_custom">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <label className="Signin_Agree_TextStyle Signin_Argee1_style">
                <input
                  type="checkbox"
                  className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                  name="age"
                />
                만 14세 이상입니다. (필수)
              </label>
            </div>
            <div className="Signin_Agree_Agree_Div_Div Signin_Agree_Agree_Div_Div_FlexStyle">
              <div className="Signin_Agree_Agree_Div_Div_FlexStyle_Div">
                <div className="Signin_Agree_checkbox_custom">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <label className="Signin_Agree_TextStyle">
                  <input
                    type="checkbox"
                    className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                    name="oneId"
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
                <div className="Signin_Agree_checkbox_custom">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <label className="Signin_Agree_TextStyle">
                  <input
                    type="checkbox"
                    className="Signin_Agree_Checkbox Signin_Agree_TextStyle"
                    name="term"
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
      <div className="Signin_Footer">
        <button>가입하기</button>
      </div>
    </div>
  );
};

export default SigninComponent;
