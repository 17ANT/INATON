import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route />
        <h1>hello world</h1>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
