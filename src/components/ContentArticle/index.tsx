import "./index.scss";
import { articles } from "../../helpers/articles";
import { useContext, useEffect, useRef } from "react";
import { ArticleContext } from "../../context/ArticlesContext";
const ContentArticle = () => {
  const { articleID } = useContext(ArticleContext);

  const contentRef = useRef<HTMLDivElement>(null);
  const sessionArticleId = sessionStorage.getItem("articleId");
  const verificationID = sessionArticleId ? Number(sessionArticleId) : articleID
  const article =
    articles[verificationID];

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="content-article" ref={contentRef}>
      <div className="container-img">
        <img src={article.imgLarge} alt="imagem IPTU" />
      </div>
      <div className="container-title">
        <h1>{article.title}</h1>
      </div>
      <div className="container-content">
        {article.content.map(({ text, subtitle }, index) => (
          <div className="content" key={`text-iptu-${index}`}>
            <p>
              <span>{subtitle}</span>
              {text}
            </p>
          </div>
        ))}
        <span className="warning">{articles[verificationID].warning}</span>
      </div>
    </div>
  );
};
export default ContentArticle;
