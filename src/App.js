
import './App.css';
import { Dashboard } from './Dashboard';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Books } from './Books';
import { Addbook } from './Addbook';
import ViewBook from './ViewBook';
import { Editbook } from './Editbook';
import Members from './Members';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <div className='row'>
          <Sidebar />
          <div className='col-lg-10 half ' >
            <Navbar />

            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/books" element={<Books />}></Route>
              {/* <Route path="/addbook" element={<Addbook />}></Route> */}
              <Route path='/members' element={<Members/>}></Route>
              <Route path="/addbook" element={<Addbook/>}></Route>
              <Route path="/viewbook/:id" element={<ViewBook />}></Route>
              <Route path="/editbook/:id" element={<Editbook />}></Route>
            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );


}

export default App;