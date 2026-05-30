import DescriptionPerson from "../../components/DescriptionPerson";
import ServiceContent from "../../components/ServiceContent";
import ArticlePanel from "../../components/ArticlePanel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentTopHome from "../../components/ContentTopHome";
import { AreaGallery } from "@/components/AreaGallery";
import Comments from "@/components/Comments";
const Home = () => {
  return (
    <>
      <Header />
      <ContentTopHome />

      <main>
        <DescriptionPerson />
        <AreaGallery />
        <ArticlePanel />
        <ServiceContent />
        <Comments />
      </main>
      <Footer />
    </>
  );
};
export default Home;
