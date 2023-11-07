// import logo from './logo.svg';
import './App.css';
import CreateMain from './componenets/createpaper/CreateMain';
import {Routes,Route} from "react-router-dom"
import Home from './componenets/home/Home';
import History from './componenets/history/History';
import Topics from './componenets/topics/Topics';
import ViewPaperDetails from './componenets/history/ViewPaperDetails';
import EditPaperDetails from './componenets/history/EditPaperDetails';
import QuestionComposition from './componenets/history/QuestionComposition';
import SectionComposition from './componenets/history/SectionComposition';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/CreatePaper" element={<CreateMain/>} />
      <Route path="/History" element={<History/>} />
      <Route path="/Topics" element={<Topics/>} />
      <Route path="/ViewPaperDetails" element={<ViewPaperDetails/>} />
      <Route path="/EditPaperDetails" element={<EditPaperDetails/>} />
      <Route path="/QuestionComposition" element={<QuestionComposition/>} />
      <Route path="/SectionComposition" element={<SectionComposition/>} />
     
    </Routes>
  );
}

export default App;
