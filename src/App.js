import './App.css';
import {BrowserRouter as BR, Routes,Route,Link} from 'react-router-dom';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import CustomNav from './Component/CustomNav';

function App() {
    
    return ( 
        <div >
            <BR>
              <CustomNav />
                <Routes>
                        <Route path='/' element={<Home />}  />
                        <Route path='/aboutus' element={<Aboutus />}  />
                </Routes>
            </BR>
           
        </div>
     );
}

export default  App;