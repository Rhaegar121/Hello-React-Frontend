import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />}>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;