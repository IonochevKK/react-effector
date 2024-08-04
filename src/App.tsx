import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { TodoEffector } from './page/TodoEffector';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-effector" element={<TodoEffector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
