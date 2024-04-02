import "./index.scss";
// import IPTU from "../../assets/img/articlesImg/article-iptu.jpg";
import calendar from "../../assets/img/articlesImg/calendar.png";
import arrow from "../../assets/img/articlesImg/arrow.png";
import { Article } from "../../models/ArticleProps";
import { Link } from "react-router-dom";

const ArticleComponent = ({ title, date, img }: Article) => {
  return (
    <article className="article-iptu-container">
      <Link to="/artigos">
        <div className="iptu">
          <div className="container-iptu-img">
            <img src={img} alt="" />
          </div>
          <div className="iptu-content">
            <h5>Artigos</h5>
            <p>{title}</p>
            <span>
              <img width={20} src={calendar} alt="calendar" />
              {date}
            </span>

            <button>
              Leia mais <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};
export default ArticleComponent;
