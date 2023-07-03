import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ServiceListPage from "./pages/ServiceListPage";
import AddNewService from "./pages/AddNewService";
import EditServicePage from "./pages/EditServicePage";

import UserProfilePage from "./pages/UserProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/userprofilepage"
          element={<IsPrivate> <UserProfilePage /> </IsPrivate>}
        />

        <Route
          path="/service"
          element={<IsPrivate> <AddNewService /> </IsPrivate>}
        />

        <Route
          path="/services/:serviceId"
          element={<IsPrivate> <ServiceDetailsPage /> </IsPrivate>}
        />

        <Route
          path="/services/edit/:serviceId"
          element={<IsPrivate> <EditServicePage/> </IsPrivate>}
        />

        {
          <Route
            path="/services"
            element={<IsPrivate> <ServiceListPage /> </IsPrivate>}
          />
        }

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;