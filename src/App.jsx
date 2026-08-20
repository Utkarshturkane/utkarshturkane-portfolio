import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHideLoader(true), 2000);
    const t2 = setTimeout(() => setLoading(false), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {loading && <Loader done={hideLoader} />}
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;