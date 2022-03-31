import Obra from "./components/Obra/Obra";
import { lalunaquetepario } from "./data/lalunaquetepario";

function App() {
  return (
    <div className="container-programa">
      <Obra dataObra={lalunaquetepario} />
    </div>
  );
}

export default App;
