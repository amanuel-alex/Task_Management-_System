import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Task from "./pages/Task";
import TaskDetails from "./pages/TaskDetails";
import Trash from "./pages/Trash";
import User from "./pages/User";
import HomePage from "./pages/home";
import SignUp from "./pages/signup";
function Layout() {
  const user = "";
  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row ">
      <div className="w-1/5 h-screen bg-green-600 sticky top-0 hidden md:block">
        <Sidebar />
      </div>
      {/* mobile sidebar */}
      <div className="flex-1 overflow-y-auto">
        {/* <Navbar /> */}
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
}
function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/completed/:status" element={<Task />} />
          <Route path="/in-progress/:status" element={<Task />} />
          <Route path="/todo/:status" element={<Task />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/users" element={<User />} />
          <Route path="/trash" element={<Trash />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Toaster richColors />
    </main>
  );
}

export default App;
