import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Profile from "../layouts/Profile";
import Root from "../pages/Root";
import ErrorPage from "../pages/Error";
import EventCompanyDetails from "../layouts/EventDetails";
import EventDetails from "../pages/EventDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import EditProfile from "../pages/EditProfile";
import AskQuestion from "../pages/AskQus";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />
    },
    
   
      {
        path: "/companyDetails",
        element: <EventCompanyDetails />,
      },
    
      {
         path: "/askqus",
         element:  <PrivateRoute>
         <AskQuestion/>
                  </PrivateRoute>
      },
      {
        path: "/eventDetails/:id",
        loader: () => fetch("/eventdata.json"),
        element: (
          <PrivateRoute>
 <EventDetails />
          </PrivateRoute>
           
       
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;



// import { createBrowserRouter } from "react-router-dom";
// import HomeLayout from "../layouts/HomeLayout";
// import Profile from "../layouts/Profile";
// import Root from "../pages/Root";
// import ErrorPage from "../pages/Error";
// import EventCompanyDetails from "../layouts/EventDetails";
// import EventDetails from "../pages/EventDetails";
// import Login from "../components/Login";
// import Register from "../components/Register";
// import AuthLayout from "../layouts/AuthLayout";
// import ProtectedRoute from "../components/ProtectedRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomeLayout />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/companyDetails",
//         element: <EventCompanyDetails />,
//       },
//       {
//         path: "/eventDetails/:id",
//         loader: () => fetch("/eventdata.json"), 
//         element: (
          
//             <EventDetails />
       
//         ),
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <AuthLayout />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);

// export default router;



