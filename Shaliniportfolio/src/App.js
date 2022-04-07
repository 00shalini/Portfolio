
import './App.css';
import {Nav} from '../src/Components/Nav';
import {Home} from '../src/Components/Pages/Home';
import {About} from '../src/Components/Pages/About';
import {Project} from '../src/Components/Pages/Projects';
import {Blog} from '../src/Components/Pages/Blogs';
import {Contact} from '../src/Components/Pages/Contact'
import { Experience } from './Components/Pages/Experience';


function App() {
    

  return (
    <div>
      <Nav/>
      <div style={{marginLeft:'33%'}}>
        <Home/>
        <About/>
        <Experience/>
        <Project/>
        <Blog/>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
