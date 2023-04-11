import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './components/Routes/Home/Home';
import Statistics from './components/Routes/Statistics/Statistics';
import AppliedJobs from './components/Routes/AppliedJobs/AppliedJobs';
import Blogs from "./components/Routes/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("/featuredJobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied/jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
