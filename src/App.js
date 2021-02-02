import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import datajson from "./data.json";

function App() {
  return (
    <div className="container">
      <Header />

      {datajson.map((elem, index) => {
        // Je récupère l'ensemble du data.json et le stock dans ma props data
        return <Section key={index} data={elem} />;
      })}
    </div>
  );
}

export default App;
