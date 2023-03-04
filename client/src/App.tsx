/**TRPC and REACT QUERY 💨 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**REACT 🦧 */
import { useState } from "react";

/**ROUTES 🐀 */
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


function App() {


  return (

    <RouterProvider router={router} />

  )
}

export default App
