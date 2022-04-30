import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import MyItems from "./Components/MyItems/MyItems";
import ManageItems from "./Components/ManageItems/ManageItems";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import AddItems from "./Components/AddItems/AddItems";
import ItemsDetail from "./Components/ItemsDetail/ItemsDetail";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-items"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-items"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <ItemsDetail />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
