import Routes from "./routes";
import {ChurrasProvider} from "./context/churras.context";

function App() {
  return (
    <ChurrasProvider>
      <Routes/>
    </ChurrasProvider>
  )
}

export default App
