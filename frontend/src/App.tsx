import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from './components/LandingPage';
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/partials/Trailer";
import NotFound from "./components/NotFound";
import Profile from './components/partials/Profile';
import SignInPage from './components/SignIn';
import SignUpPage from './components/SignUp';
import ProtectedRoute from "./Protectedroutes";
import React from "react";

const App = () => {
    return (
        <div className="bg-[#1F1E24] w-screen h-full flex">
             {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
               
            <Routes>
            <Route path="/sign-in" element={<SignInPage/>} />
            <Route path="/sign-up" element={<SignUpPage/>} />
            <Route path="/" element={<LandingPage/>}></Route>  
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                {/* <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} /> */}
                
                <Route path="/trending" element={<ProtectedRoute><Trending /></ProtectedRoute>} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/movie/details/:id" element={<Moviedetails />}>
                    <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>
                <Route path="/tv" element={<Tvshows />} />
                <Route path="/tv/details/:id" element={<TvDetails />}>
                    <Route
                        path="/tv/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>
                <Route path="/person" element={<People />} />
                <Route path="/person/details/:id" element={<PersonDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
