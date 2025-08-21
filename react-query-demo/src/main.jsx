import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query";



ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
     <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
