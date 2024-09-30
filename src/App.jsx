import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Blogs from "./pages/Blogs.jsx"
import BlogDetails from "./pages/BlogDetails.jsx"
import PlacesRoute from "./pages/PlacesRoute.jsx"
import NoPage from "./pages/NoPage.jsx"
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="/places" element={<PlacesRoute/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
