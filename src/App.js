import "./App.css";
import MainSection from "./components/MainSection";
import SideStaticBar from "./components/SideStaticBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <SideStaticBar />
      <Sidebar />
      <MainSection/>
    </div>
  );
}

export default App;
