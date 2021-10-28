import {Router} from "./router/Router"
import {Styled} from "../src/styled/Styled"
import {Footer} from "../src/components/Footer"
import GlobalState from "./context/GlobalState"


function App() {
  return (
    <GlobalState>
      <div>
        <Styled />
        <Router />
        <Footer />
      </div>
    </GlobalState>
  )
}

export default App;
