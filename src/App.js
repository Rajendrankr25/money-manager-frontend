import { Paper } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { AddExp } from './pages/AddExp';
import { AddIncome } from './pages/AddIncome';
import { Home } from './pages/Home'

function App() {

  const expdata = [{
    id: 1,
    date: "20-01-2023",
    expdesc: "Food",
    amount: 1000
  }];

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home expdata={expdata} />} />
        <Route path='/addexp' element={<AddExp />} />
        <Route path='/addincome' element={<AddIncome />} />
      </Routes>
    </div>
  );
}

export default App;
