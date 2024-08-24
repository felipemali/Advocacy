import "./index.scss";
// import IPTU from "../../assets/img/articlesImg/article-iptu.jpg";
import calendar from "../../assets/img/articlesImg/calendar.png";
import arrow from "../../assets/img/articlesImg/arrow.png";
import { Article } from "../../models/ArticleProps";
import { Link } from "react-router-dom";
import { ArticleContext } from "../../context/ArticlesContext";
import { useContext } from "react";

const ArticleComponent = ({ title, date, img, id }: Article) => {
  const { setArticleID } = useContext(ArticleContext);
  const saveId = () => {
    setArticleID(id);
    sessionStorage.setItem("articleId", JSON.stringify(id));
  };
  return (
    <article className="article-iptu-container">
      <Link to="/artigos" onClick={saveId}>
        <div className={`${date === "23/08/2024" ? "iptu-new" : "iptu"}`}>
          <div className="container-iptu-img">
            <img src={img} alt="logo para o artigo IPTU" />
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
