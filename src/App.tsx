import './App.css';
import { Contacts } from './components/contactsPage/Contacts';
import { Course } from './components/coursePage/Course';
import { MainPage } from './components/main-page/MainPage';
import { MyWorks } from './components/PortfolioPage/MyWorks';

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/works' element={<MyWorks/>}/>
    </Routes>
    </div>
  );
}

export default App;
