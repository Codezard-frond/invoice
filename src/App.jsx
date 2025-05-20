import Home from "./pages/Home";
import Details from "./pages/Details";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
