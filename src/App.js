import FooterHechoPor from "./components/FooterHechoPor/FooterHechoPor";
import Obra from "./components/Obra/Obra";
import { lalunaquetepario } from "./data/lalunaquetepario";

function App() {
  return (
    <div className="container-programa">
      <Obra dataObra={lalunaquetepario} />
      <FooterHechoPor />
    </div>
  );
}

export default App;
