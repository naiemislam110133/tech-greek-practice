import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/videos" element={<Videos></Videos>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/blog" element={<BlogDetails></BlogDetails>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
