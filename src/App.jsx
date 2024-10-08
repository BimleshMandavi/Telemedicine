<<<<<<< HEAD
import React from "react";
=======
>>>>>>> bimlesh
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SpecialtiesPage from "./pages/SpecialtiesPage ";
import ShowAllDrs from "./pages/ShowAllDrs";
<<<<<<< HEAD
=======
import "./App.css";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
>>>>>>> bimlesh

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<SpecialtiesPage />} />
        <Route path="/showalldoctors" element={<ShowAllDrs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Layout>
  );
}

export default App;
