import ButtonWpp from "../../components/ButtonWpp";
import ContentArticle from "../../components/ContentArticle";
import ContentTopHome from "../../components/ContentTopHome";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Articles = () => {
  return (
    <>
      <Header />
      <ContentTopHome />
      <main>
        <ContentArticle />
      </main>
      <ButtonWpp />
      <Footer />
    </>
  );
};

export default Articles;
