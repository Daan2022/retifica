import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import GalleryManager from "./pages/admin/GalleryManager";
import Settings from "./pages/admin/Settings";
import ReceiptGenerator from "./pages/admin/ReceiptGenerator";
import ServicesManager from "./pages/admin/ServicesManager";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<ServicesManager />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route path="receipt" element={<ReceiptGenerator />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
