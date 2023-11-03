// import logo from './logo.svg';
import './App.css';
import CreateMain from './componenets/createpaper/CreateMain';
import {Routes,Route} from "react-router-dom"
import Home from './componenets/home/Home';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/CreatePaper" element={<CreateMain/>} />
    </Routes>
  );
}

export default App;
