import { createContext, useState, ReactNode } from "react";

type ArticleContextType = {
  articleID: number;
  setArticleID: (articleID: number) => void;
};

const initialValue: ArticleContextType = {
  articleID: 0,
  setArticleID: () => {},
};

export const ArticleContext = createContext<ArticleContextType>(initialValue);

type Props = {
  children: ReactNode;
};

export const ArticleContextProvider = ({ children }: Props) => {
  const [articleID, setArticleID] = useState<number>(0);
  return (
    <ArticleContext.Provider
      value={{
        articleID,
        setArticleID,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
