import IPTU from "../assets/img/articlesImg/article-iptu.png";
import IPTULarge from "../assets/img/articlesImg/article-iptu-large.jpg";
import heranca from "../assets/img/articlesImg/cobranca-herdeiro-aluguel.jpg";
import woman from "../assets/img/articlesImg/womann.png";
// import heranca2 from "../assets/img/articlesImg/desgin.png";

export const articles = [
  {
    title:
      "Sou casada com separação total de bens. Meu marido faleceu, tenho direito de permanecer na casa?",
    date: "08/10/2024",
    content: [
      {
        subtitle: "Resposta é:",
        text: "Sim, o cônjuge sobrevivente tem direito ao direito real de habitação, que garante o direito de moradia no imóvel familiar. ",
      },
      {
        subtitle: "Direitos:",
        text: "O direito real de habitação é um direito vitalício e personalíssimo, ou seja, o cônjuge sobrevivente pode permanecer no imóvel até o falecimento. ",
      },

      {
        subtitle: "*",
        text: "O direito real de habitação é assegurado independentemente do regime de bens do casamento ou da união estável.",
      },
      {
        subtitle: "*",
        text: "O direito real de habitação é garantido mesmo que o cônjuge sobrevivente tenha outros bens em seu patrimônio pessoal.",
      },
      {
        subtitle: "*",
        text: "O direito real de habitação é gratuito e não é possível exigir do cônjuge sobrevivente qualquer contrapartida financeira em favor dos herdeiros.",
      },
      {
        subtitle: "ATENÇÃO:",
        text: "No entanto, o direito real de habitação não se aplica em caso de divórcio. A questão deve ser resolvida na partilha de bens do divórcio.",
      },
      {
        subtitle: "Direito à Moradia:",
        text: "O direito à moradia é o direito de toda pessoa ter acesso a um lar e a uma comunidade seguros para viver em paz, dignidade e saúde.",
      },
    ],
    img: woman,
    imgLarge: woman,
    warning: "",
    id: 0,
  },
  {
    title:
      "Posso cobrar aluguel de herdeiro que mora no imóvel recebido de herança?",
    date: "23/08/2024",
    content: [
      {
        subtitle: "A resposta é:",
        text: "SIM. O herdeiro que mora sozinho no imóvel de herança deve pagar aluguel aos herdeiros que não estão utilizando o imóvel.  ",
      },
      {
        subtitle: "Objetivo:",
        text: "O objetivo do aluguel é gerar renda para conseguirem abrir o inventário ou para realizar o pagamento de despesas, impostos, dívidas do falecido, etc.          ",
      },

      {
        subtitle: "Melhor Caminho:",
        text: "Nesses casos, os herdeiros que não estão de acordo devem manifestar expressamente, o melhor caminho é através de uma notificação extrajudicial. ",
      },
      {
        subtitle: "Atenção:",
        text: "É importante que a notificação seja feita da forma correta para que não haja problemas posteriormente caso seja necessário ingressar com uma ação judicial.",
      },
    ],
    img: heranca,
    imgLarge: heranca,
    warning:
      "Quer saber mais a respeito do assunto, clique no ícone do WHATSAPP que está na tela!",
    id: 1,
  },
  {
    title: "Quem Pode Requerer a Isenção do IPTU em Campo Grande?",
    date: "23/03/2024",
    content: [
      {
        subtitle: "Idosos:",
        text: "Pessoas com idade igual ou superior a 60 anos podem solicitar a isenção do IPTU se atenderem aos requisitos estabelecidos pela legislação municipal. Geralmente, isso inclui possuir apenas um imóvel residencial e ter renda familiar limitada. ",
      },
      {
        subtitle: "Pessoas com Deficiência:",
        text: "Indivíduos com deficiência física, mental, auditiva, visual ou múltipla, devidamente comprovada, também têm direito à isenção do IPTU. Os critérios específicos podem variar e devem ser verificados na legislação local.",
      },

      {
        subtitle: "Aposentados e Pensionistas:",
        text: "Em alguns casos, aposentados e pensionistas podem ser elegíveis para a isenção do IPTU, desde que atendam aos requisitos de idade e renda estabelecidos pela legislação municipal.",
      },
      {
        subtitle: "Beneficiários de Programas Sociais:",
        text: "Em determinadas situações, beneficiários de programas sociais do governo podem ter direito à isenção do IPTU, desde que comprovem sua condição",
      },
      {
        subtitle:
          "Imóvel Adquirido com Benefícios do Programa Minha Casa Minha Vida",
        text: "não importa o Valor Comercial e sim o Valor Venal.",
      },
    ],
    img: IPTU,
    imgLarge: IPTULarge,
    warning: "",
    id: 2,
  },
];

// const sessionData = getSessionData("idProperties");
//sessionStorage.setItem("articleId", JSON.stringify(articleID));
