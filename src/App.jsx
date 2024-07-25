import { Outlet } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import "./App.css";

function App() {
  return (
    <PageTransition>
      <Outlet />
    </PageTransition>
  );
}

export default App;
