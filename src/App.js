import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lesson from './odin';
import Work from './file';
import Lesson1 from './dva';
import Lesson2 from './screen/tri';
import Lesson3 from './screen/chetyre';
import Lesson4 from './screen/pyat';
import Lesson5 from './screen/shest';
import Lesson6 from './screen/zero';
import Lesson7 from './screen/single.product';
import Lesson8 from './screen/category';
import Lesson9 from './sem';
import Lesson10 from './vosem';

function App() {
  return (
    <div className="App"> <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lesson />}> </Route>
        <Route path="/file" element={<Work/>}> </Route>
        <Route path="/detail/:id" element={<Lesson1/>}> </Route>
        <Route path="/tri" element={<Lesson2/>}> </Route>
        <Route path="/chetyre" element={<Lesson3/>}> </Route>
        <Route path="/pyat" element={<Lesson4/>}> </Route>
        <Route path="/shest/:id" element={<Lesson5/>}> </Route>
        <Route path="/zero" element={<Lesson6/>}> </Route>
        <Route path="/single.product/:id" element={<Lesson7/>}> </Route>
        <Route path="/category/:category" element={<Lesson8/>}> </Route>
        <Route path="/sem/" element={<Lesson9/>}> </Route>
        <Route path="/vosem/:id" element={<Lesson10/>}> </Route>
       
      </Routes>
    </BrowserRouter>
    </div>

  )

}

export default App;
