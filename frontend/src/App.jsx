import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home, { loader as servicesLoader } from "./pages/Home";
import AppLayout from "./features/AppLayout";
import Records, { loader as recordLoader } from "./pages/Records";
import Vehicles, { loader as vehiclesLoader } from "./pages/Vehicles";
import CreateBooking, {
  loader as serviceLoader,
  action as createBookingAction,
} from "./features/booking/CreateBooking";

import Track, { loader as recordTrackLoader } from "./features/record/Track";
import Error from "./ui/Error";
import CreateVehicle, {
  action as createVehicleAction,
} from "./features/vehicle/CreateVehicle";
import Support from "./pages/Support";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Dashboard, { loader as allCountsLoader } from "./pages/Admin/Dashboard";
import AllVehicles, {
  loader as allVehiclesLoader,
} from "./pages/Admin/AllVehicles";
import AllRecords, {
  loader as allRecordsLoader,
} from "./pages/Admin/AllRecords";
import { all } from "axios";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: servicesLoader,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
        loader: vehiclesLoader,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/vehicles/new",
        element: <CreateVehicle />,
        action: createVehicleAction,
      },
      {
        path: "/booking/:serviceId/new",
        element: <CreateBooking />,
        loader: serviceLoader,
        action: createBookingAction,
      },
      {
        path: "/booking/:serviceId/:vehicleId/new",
        element: <CreateBooking />,
        loader: serviceLoader,
        action: createBookingAction,
      },
      {
        path: "/records",
        element: <Records />,
        loader: recordLoader,
      },
      {
        path: "/records/search",
        element: <Records />,
        loader: recordLoader,
      },
      {
        path: "/records/past/:recordId",
        element: <Track />,
        loader: recordTrackLoader,
      },
      {
        path: "/records/ongoing/:recordId",
        element: <Track />,
        loader: recordTrackLoader,
      },
      {
        path: "/confirmation",
        element: <PageNotFound />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
        loader: allCountsLoader,
      },
      {
        path: "/admin/vehicles",
        element: <AllVehicles />,
        loader: allVehiclesLoader,
      },
      {
        path: "/admin/records",
        element: <AllRecords />,
        loader: allRecordsLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            mawWidth: "900px",
            padding: "16px 24px",
            color: "#fff",
            background: "#333",
            borderRadius: "8px",
          },
        }}
      />
    </>
  );
};

export default App;
