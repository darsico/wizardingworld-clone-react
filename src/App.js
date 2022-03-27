import './assets/css/index.css';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <div className="body">
      <div className='blog'>
        <Blog/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
