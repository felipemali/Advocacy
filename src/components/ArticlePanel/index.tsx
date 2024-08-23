import ArticleComponent from "../ArticleComponent";
import { articles } from "../../helpers/articles";

const ArticlePanel = () => {
  return (
    <section>
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
  );
};
export default ArticlePanel;
