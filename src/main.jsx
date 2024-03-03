import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import OfflineMessage from "./components/Shared/OfflineMessage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {/* if user offline  */}
        <OfflineMessage />
        
        {window.navigator.onLine && (
          <div>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </div>
        )}
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
