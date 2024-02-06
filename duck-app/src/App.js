import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import Layout from "./components/layout";
import DuckPage from "./pages/duckPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/ducks/:duckName" element={<DuckPage/>} />

</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;