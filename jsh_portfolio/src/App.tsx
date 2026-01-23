import "./index.css";
// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio"; // 기존 App 내용을 Portfolio로 분리
import TodoList from "./pages/TodoList/TodoList";
import Timer from "./pages/Timer/Timer";
import TodoListV1 from "./pages/TodoList/TodoList_v1/TodoList_v1";
import TimerV1 from "./pages/Timer/Timer_v1/App_v1";
// import TodoListV2 from "./pages/TodoList/TodoListV2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/TodoList/TodoList_v1" element={<TodoListV1 />} />
        <Route path="/Timer" element={<Timer />}></Route>
        <Route path="/Timer/Timer_v1" element={<TimerV1 />} />
        {/* <Route path="/todolist/v2" element={<TodoListV2 />} />
        <Route path="/todolist/v3" element={<TodoListV3 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
