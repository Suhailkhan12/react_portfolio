import './App.css';
import Home from './component/Home/Home';
import resumeData from './resumeData';

function App() {

  return (
    <div className="App">
      <Home resumeData={resumeData}/>
    </div>
  );
}

export default App;
