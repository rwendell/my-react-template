import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
