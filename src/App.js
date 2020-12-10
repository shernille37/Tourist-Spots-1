import './App.css';
import Content from './components/Content';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Showcase from './components/Showcase';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Showcase />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
