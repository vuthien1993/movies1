import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/browse/Browse";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxzKT32q3jywup42lmysX1hkE9U97aNnA",
  authDomain: "deploytest-9f79f.firebaseapp.com",
  projectId: "deploytest-9f79f",
  storageBucket: "deploytest-9f79f.appspot.com",
  messagingSenderId: "779486780807",
  appId: "1:779486780807:web:d5c22199fb7619c70c4722",
  measurementId: "G-JSN30DEV0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Search = React.lazy(() => import("./pages/search/Search"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
