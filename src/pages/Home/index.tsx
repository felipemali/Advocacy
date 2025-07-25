import ButtonWpp from "../../components/ButtonWpp";
import Comments from "../../components/Comments";
import DescriptionPerson from "../../components/DescriptionPerson";
import ServiceContent from "../../components/ServiceContent";
import ArticlePanel from "../../components/ArticlePanel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentTopHome from "../../components/ContentTopHome";
// import CardHeader from "../../components/Header/CardHeader";
const Home = () => {
  return (
    <>
      <Header />
      <ContentTopHome />
      {/* <CardHeader /> */}

      <main>
        <DescriptionPerson />
        <ServiceContent />
        <ArticlePanel />
        <ButtonWpp />
        <Comments />
      </main>
      <Footer />
    </>
  );
};
export default Home;
