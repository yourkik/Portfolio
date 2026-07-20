import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataEngineerPortfolio from './pages/DataEngineerPortfolio';
import BackendPortfolio from './pages/BackendPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataEngineerPortfolio />} />
        <Route path="/backend" element={<BackendPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
