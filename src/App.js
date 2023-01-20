import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { AddExp } from './pages/AddExp';
import { AddIncome } from './pages/AddIncome';
import { Home } from './pages/Home'

function App() {

  const [expData, setExpData] = useState([{
    date: "20-01-2023",
    expdesc: "Food",
    amount: 1000
  }, {
    date: "20-01-2023",
    expdesc: "Cinema",
    amount: 1000
  }]);

  const [incData, setIncData] = useState([{
    date: "20-01-2023",
    incdesc: "Salary",
    amount: 50000
  }, {
    date: "20-01-2023",
    incdesc: "Rent",
    amount: 20000
  }]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home expData={expData} incData={incData} />} />
        <Route path='/addexp' element={<AddExp expData={expData} setExpData={setExpData} />} />
        <Route path='/addincome' element={<AddIncome incData={incData} setIncData={setIncData} />} />
      </Routes>
    </div>
  );
}

export default App;
