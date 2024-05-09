import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div className="parrotLoding"></div>;
  }
  return isAuthenticated ? <Header /> : <LandingPage />;
}

export default App;
