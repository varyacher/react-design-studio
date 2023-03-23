import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts'
import Packages from './components/Packages'
import Designers from './components/Designers'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {
  return (
  <>
    <Menu />
    <div className="main">
      <h1>Interior Design</h1>
      <Showcase />
      <Services />
      <Designers />
      <Packages />
      <Contacts />
      <Footer />
    </div>
    
  </>
  );
}

export default App;
