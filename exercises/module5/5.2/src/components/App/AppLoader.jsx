import { ProviderWrapper as CountersProviderWrapper } from "/src/contexts/OpinionsContext.jsx";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <CountersProviderWrapper >
        <App />
 
      </CountersProviderWrapper >
  )
}

export default AppLoader;
