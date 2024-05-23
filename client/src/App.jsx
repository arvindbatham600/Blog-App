import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AllBlog from "./components/Blogs/AllBlog";
import MyBlog from "./components/Blogs/MyBlog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-blogs" element={<MyBlog />} />
        <Route path="/all-blogs" element={<AllBlog />} />
      </Routes>
    </>
  );
};

export default App;
