import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { AddExp } from './pages/AddExp';
import { AddIncome } from './pages/AddIncome';
import { ExpEdit } from './pages/EditExp';
import { IncEdit } from './pages/EditInc';
import { Home } from './pages/Home'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addexp' element={<AddExp />} />
        <Route path='/addincome' element={<AddIncome />} />
        <Route path='/expenses/edit/:id' element={<ExpEdit />} />
        <Route path='/income/edit/:id' element={<IncEdit />} />
      </Routes>
    </div>
  );
}

export default App;
