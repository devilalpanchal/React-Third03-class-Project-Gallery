import "./App.css";
import Header from "./Header";
import Routot from "./Routes";
import Combined from "./Combined";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./LandingPage";
function App() {
  return (
    <>
    {/* <LandingPage/> */}
      <Header/>
      <Routot/>
      <Combined/>
    </>
  );
}

export default App;
