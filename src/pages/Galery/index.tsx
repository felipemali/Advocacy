import "./index.scss";
import { useEffect, useRef } from "react";
import ButtonWpp from "../../components/ButtonWpp";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img1 from "../../assets/img/img1.jpeg";
import img2 from "../../assets/img/img2.jpeg";
import img3 from "../../assets/img/img3.jpeg";
import img4 from "../../assets/img/img4.jpeg";
import img5 from "../../assets/img/img5.jpeg";
import img6 from "../../assets/img/img6.jpeg";
const galleryBlocks = [
  [img1, img2, img3],
  [img4, img5, img6],
  [img1, img2, img3],
  [img4, img5, img6],
  [img1, img2, img3],
  [img4, img5, img6],
];
import { FaBalanceScale } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
const Galery = () => {
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    blocksRef.current.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-container">
      <Header />
      <section className="gallery">
        <h3 className="index-title-gallery">
          <TfiGallery style={{ marginRight: "0.3rem" }} />
          Galeria
        </h3>
        <p className="index-subtitle">
          <FaBalanceScale style={{ marginRight: "0.3rem" }} />
          Retratos que traduzem nossa atuação e essência.
        </p>
        <div className="border-title-about"></div>
        {galleryBlocks.map((group, index) => (
          <>
            <div
              key={index}
              className={`gallery-block ${index % 2 === 0 ? "left" : "right"}`}
              ref={(el) => {
                if (el) blocksRef.current[index] = el;
              }}
            >
              <div className="images">
                {group.map((img, i) => (
                  <div style={{ display: "block" }}>
                    <img
                      className="image"
                      key={i}
                      src={img}
                      alt={`Foto ${i + 1}`}
                    />
                    <p className="caption">
                      <span>Excelência</span> é construída com dedicação e
                      verdade.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-separate"></div>
          </>
        ))}
      </section>
      <ButtonWpp />
      <Footer />
    </div>
  );
};

export default Galery;
