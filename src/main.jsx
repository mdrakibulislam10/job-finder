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
import JobDetails from './components/Routes/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("/featuredJobs.json")
      },
      {
        path: "/job/details/:jobId",
        element: <JobDetails />
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/applied/jobs",
        element: <AppliedJobs />,
        loader: async () => fetch("/featuredJobs.json")
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
