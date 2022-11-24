import Navbar from './Components/Navbar'; 
import ItemListContainer from './Components/ItemListContainer';
const App = () => {
  let name = "Patri"
  return (
    <div>
   <Navbar /> 
   <ItemListContainer mensaje="Sector debajo del Navbar"/>
    <h1> Helloo {name} </h1>

    </div>
  )
}

export default App;