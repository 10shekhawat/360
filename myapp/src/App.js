// import logo from './logo.svg';
import './App.css';
import CreateMain from './componenets/createpaper/CreateMain';
import {Routes,Route} from "react-router-dom"
import Home from './componenets/home/Home';
import CreatedSuccessfully from './componenets/createpaper/CreatedSuccessfully';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/CreatePaper" element={<CreateMain/>} />
      <Route path="/CreatedSuccessfully" element={<CreatedSuccessfully/>} />
    </Routes>
  );
}

export default App;
