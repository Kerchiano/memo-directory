import { Route, Routes } from "react-router-dom";

import ListPage from "./pages/ListPage";
import TablePage from "./pages/TablePage";
import IndexPage from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ListPage />} path="/list" />
      <Route element={<TablePage />} path="/table" />
    </Routes>
  );
}

export default App;
