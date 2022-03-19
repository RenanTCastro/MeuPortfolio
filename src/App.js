import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Qualifications from './components/Qualifications/Qualifications';
import MyProjects from './components/MyProjects/MyProjects';
import Certifications from './components/Certifications/Certifications';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Qualifications/>
      <MyProjects/>
      <Certifications/>
    </div>
  );
}

export default App;
