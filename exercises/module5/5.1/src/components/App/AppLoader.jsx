import { ProviderWrapper as CountersProviderWrapper } from "/src/contexts/CountersContext.jsx";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <CountersProviderWrapper >
        <App />
 
      </CountersProviderWrapper >
  )
}

export default AppLoader;
