import ArticleComponent from "../ArticleComponent";
import { articles } from "../../helpers/articles";
import { GrArticle } from "react-icons/gr";
import "./index.scss";
import { FaBalanceScale } from "react-icons/fa";
const ArticlePanel = () => {
  return (
    <>
      <h3 className="index-title-article">
        <GrArticle size={24} style={{ marginRight: "0.5rem" }} />
        Artigos
      </h3>
      <p className="index-subtitle-article">
        <FaBalanceScale style={{ marginRight: "0.5rem" }} />
        Entenda seus direitos.
      </p>
      <div className="border-title-about"></div>
      <section className="container-article-panel">
        {articles.map((data, index) => (
          <ArticleComponent
            key={`article-${index}`}
            title={data.title}
            date={data.date}
            img={data.imgLarge}
            id={data.id}
          />
        ))}
      </section>
    </>
  );
};
export default ArticlePanel;
