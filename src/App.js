import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

import Navigationbar from "./components/Navigationbar";
import HomePage from "./pages/HomePage";

import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ServiceListPage from "./pages/ServiceListPage";
import AddNewService from "./pages/AddNewService";
import EditServicePage from "./pages/EditServicePage";
import ReviewList from "./components/ReviewList";


import UserProfilePage from "./pages/UserProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {

  return (
    <div className="App">
      <Navigationbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/userprofilepage"
          element={<IsPrivate> <UserProfilePage /> </IsPrivate>}
        />

        <Route
          path="/reviews"
          element={<IsPrivate> <ReviewList /> </IsPrivate>}
        />

        <Route
          path="/newservice"
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
            element={<ServiceListPage />}
          />
        }

        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;