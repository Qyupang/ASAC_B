import "./../styles/Detail_Position_Contents.css";
import { Link } from "react-router-dom";

const DetailPositionContents = (props) => {
  function responseButton() {
    if (95 <= props.response && props.response <= 100) {
      return (
        <div>
          <button className="Detail_Position_li_responseButton">
            응답률 매우 높음
          </button>
        </div>
      );
    }
  }

  return (
    <li className="Detail_Position_li">
      <Link to={`${props.id}`}>
        <div className="Detail_Position_li_img_Div">
          <img
            src={props.img}
            alt={props.title}
            className="Detail_Position_li_img"
          ></img>
          <button className="Detail_Position_li_bookmark"></button>
        </div>
        <div className="Detail_Position_li_Text_Div">
          <h3 className="Detail_Position_li_title">{props.title}</h3>
          <span className="Detail_Position_li_company Detail_Position_li_Text_Style">
            {props.company}
          </span>
          {responseButton()}
          <span className="Detail_Position_li_place Detail_Position_li_Text_Style">
            {props.place}
          </span>
          <div className="Detail_Position_li_compensation_Div">
            <span className="Detail_Position_li_compensation_Text_Style">
              채용보상금&nbsp;
            </span>
            <span className="Detail_Position_li_compensation_Text_Style">
              {props.compensation}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default DetailPositionContents;
