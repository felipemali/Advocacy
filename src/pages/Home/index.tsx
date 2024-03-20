import ButtonWpp from "../../components/ButtonWpp";
import Comments from "../../components/Comments";
import DescriptionPerson from "../../components/DescriptionPerson";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServiceContent from "../../components/ServiceContent";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <DescriptionPerson />
        <ServiceContent />
        <ButtonWpp />
        <Comments />
      </main>
      <Footer />
    </>
  );
};
export default Home;
