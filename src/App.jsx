import LoginPage from "./pages/LoginPage";
import LoginAfter from "./pages/LoginAfter";

import "./App.css";
import { Route, Routes } from "react-router-dom";

const user = {
  id: "redstone",
  password: "1234",
};

function App() {
  return (
    <>
      {/* 메인 파랑 라인 */}
      <div className="w-full bg-theme h-5"></div>
      <main className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginAfter user={user} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
