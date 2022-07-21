import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./Components/Data";
import './style.css'

const cards = data.map((item) => {
  return <Card 
    item={item}
  />
})
function App() {
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
