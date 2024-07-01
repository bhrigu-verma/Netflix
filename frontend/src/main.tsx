import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Profile from "./components/partials/Profile";
import "./index.css";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
          
            </ClerkProvider>
        </BrowserRouter>
    </Provider>
);
