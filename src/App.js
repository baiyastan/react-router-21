import "./App.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import AboutUser from "./pages/AboutUser";
import CatalogPage from "./pages/CatalogPage";
import CreateCatalog from "./pages/CreateCatalog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about-user/:id" element={<AboutUser />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/create-catalog" element={<CreateCatalog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
