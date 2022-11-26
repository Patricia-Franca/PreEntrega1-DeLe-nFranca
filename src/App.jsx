import Navbar1 from './Components/Navbar1'; 
import ItemListContainer from './Components/ItemListContainer';
import './App.css'
const App = () => {
  let name = "World"
  return (
    <div>
   <Navbar1/> 
   <ItemListContainer mensaje="Sector debajo del Navbar"/>
    <h1> Helloo {name} </h1>

    </div>
  )
}

export default App;