import {Router} from "./router/Router"
import {Styled} from "../src/styled/Styled"
import {Footer} from "../src/components/Footer"
function App() {
  return (
    <div>
      <Styled />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
