import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainDashboard from "pages/MainDashboard";
import Transaction from "pages/Transaction";
import Accounts from "pages/Accounts";
import Investments from "pages/Investments";
import CreditCards from "pages/CreditCards";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainDashboard />,
    },
    {
      path: "transaction",
      element: <Transaction />,
    },
    {
      path: "accounts",
      element: <Accounts />,
    },
    {
      path: "investments",
      element: <Investments />,
    },
    {
      path: "creditcards",
      element: <CreditCards />,
    },
    {
      path: "creditcards",
      element: <CreditCards />,
    },
    // {
    //   path: "loans",
    //   element: <Loans />,
    // },
    // {
    //   path: "services",
    //   element: <Services />,
    // },
    // {
    //   path: "my-privileges",
    //   element: <Privileges />,
    // },
    // {
    //   path: "setting",
    //   element: <Setting />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;
