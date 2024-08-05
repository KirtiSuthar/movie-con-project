import { Allroute } from './routes/Allroute';
import { Header,Footer } from './components';

import './App.css';

function App() {
  return (
    <div className='app'>
   <Header/>
    <Allroute/>
    <Footer/>
    </div>
  );
}

export default App;
