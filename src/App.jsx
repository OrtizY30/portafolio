import Layout from "./components/Layout";
import fondo from '/img/fondo2.avif'

function App() {
  return (
    <div className=" w-full h-screen ">
      <img src={fondo} alt="" className=" w-full bg-cover bg-center h-screen fixed"/>
     <Layout/>
    </div>
  );
}

export default App;
