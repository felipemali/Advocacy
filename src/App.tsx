import { useRoutes } from "react-router-dom";
import { ArticleContextProvider } from "./context/ArticlesContext";

import { routes } from "./routes";

function App() {
  const elements = useRoutes(routes);

  return <ArticleContextProvider>{elements}</ArticleContextProvider>;
}

export default App;
