import "./index.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/assets/img/img1.jpeg";
import img2 from "@/assets/img/img2.jpeg";
import img3 from "@/assets/img/img3.jpeg";
import img4 from "@/assets/img/img4.jpeg";
import img5 from "@/assets/img/img5.jpeg";
import img6 from "@/assets/img/img6.jpeg";
const images = [
  {
    image: img1,
    text_negrito: "Compromisso",
    text: "com a verdade, dedicação à sua causa.",
  },

  {
    image: img2,
    text_negrito: "Confiança",
    text: "se constrói com transparência, ética e resultados.",
  },
  {
    image: img3,
    text_negrito: "Direito",
    text: "é mais que norma — é proteção, dignidade e voz.",
  },
  {
    image: img4,
    text_negrito: "Integridade",
    text: "é o princípio que guia cada decisão.",
  },

  {
    image: img6,
    text_negrito: "Transparência",
    text: "constrói relações duradouras e seguras.",
  },
  {
    image: img5,
    text_negrito: "Justiça",
    text: "não é um favor, é um direito.",
  },
  
];

export function CarouselImages() {
  return (
    <div className="container-gallery">
      <div className="sub-container-gallery">
        <Carousel className="relative">
          <CarouselContent className="sm:gap-x-2 md:gap-x-5">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="carousel-item flex items-center h-[550px] shrink-0 basis-full sm:basis-1/2 md:basis-1/3 "
              >
                <div className="w-full flex flex-col container-a">
                  <div className="h-[450px] container-img">
                    <img
                      className=" max-w-[450px] h-full rounded-md lg:transition-transform lg:duration-300 lg:hover:scale-[1.03]"
                      src={image.image}
                      alt="advogado Reginaldo"
                    />
                    <p className="caption">
                      <span>{image.text_negrito}</span> {image.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-12" />
          <CarouselNext className="right-2 sm:-right-12" />
        </Carousel>
      </div>
    </div>
  );
}
