import './App.css';
import { createContext,Fragment,useState } from 'react';
import Main from './Main/Main';
import NavBar from './Navbar/Navbar';
import Search_Filter_Boxes from './Search-Filter Boxes/Search-Filter-Boxes';
import Test from './Test/Test';
import {Routes,Route} from 'react-router-dom';
import Details from './Details/Details';
export const CounterContext = createContext(); 
function App() {
  const [count, setCount] = useState("Filter by Region"); 
  const [search,setSearch]=useState("");
  const [isDarkMode,setIsDarkMode]=useState(false);
  return (
  <div>
      <CounterContext.Provider value={{ count, setCount,search,setSearch,isDarkMode,setIsDarkMode }}>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Main/>}></Route>
          <Route path='details/:alpha3Code' element={<Details/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
        </Routes>
      </CounterContext.Provider>
  

  </div>
  );
}

export default App;
