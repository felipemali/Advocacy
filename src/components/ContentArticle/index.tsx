import "./index.scss";
import { articles } from "../../helpers/articles";
import { useEffect, useRef } from "react";
const ContentArticle = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const article = articles[0];

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="content-article" ref={contentRef}>
      <div className="container-img">
        <img src={article.imgLarge} alt="" />
      </div>
      <div className="container-title">
        <h1>{article.title}</h1>
      </div>
      <div className="content">
        {article.content.map(({ text }, index) => (
          <p key={`text-iptu-${index}`}>{text}</p>
        ))}
      </div>
    </div>
  );
};
export default ContentArticle;
