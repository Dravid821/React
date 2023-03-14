import './App.css';
import Header from './Component/Header';
import About from './Component/About';
import Service from './Component/Service'
import Team from './Component/Team';
import Project from './Component/Project';
import Client from './Component/Client';
import Footer from './Component/Footer';
import Copyrights from './Component/Copyrights';


function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Service/>
      <Team/>
      <Project/>
      <Client/>
      <Footer/> 
      <Copyrights/>
    </div>
  );
}

export default App;
