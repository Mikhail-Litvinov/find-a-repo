import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { RepositoryPage } from "./pages/RepositoryPage";

export default function App() {

  return (
    <div className='container max-w-screen-xl py-4'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:name" element={<RepositoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
