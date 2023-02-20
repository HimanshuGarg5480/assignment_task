
import './App.css';
import Page1 from './Components/Page1';
import FullSizeImg from './Components/FullSizeImg';
import {BrowserRouter as Router,Switch,Routes,Route,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      
      <Routes>
        <Route path='assignment_task' element={<Page1/>} />
        <Route path='/FullSizeImg' element={<FullSizeImg/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}



export default App;
