import "./App.css";
import Header from "./Components/Header";
import Sections from "./Components/Sections";
import data from "./data.json";

function App() {
  return (
    <div className="container">
      <Header />
      {data.map((elem) => {
        console.log(elem);
        return <Sections />;
      })}
    </div>
  );
}

export default App;
