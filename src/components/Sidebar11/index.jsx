import React , {useState} from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import  { Link }  from "react-router-dom";

export default function Sidebar11({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

 // use this function to collapse/expand the sidebar
  function collapseSidebar() {
     setCollapsed(!collapsed)
  }

  return (
    <Sidebar
      {...props}
      width="252px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: {  gap: 50 } }}
      className={`${props.className} flex flex-col h-screen gap-[50px] top-0 py-[30px] md:p-5 sm:py-5 bg-white-A700 !sticky overflow-auto md:hidden`}
    >
      <Img src="images/img_sidebar_logo.png" alt="sidebarlogo" className="h-[40px] w-[162px] object-contain" />
      <Menu
        menuItemStyles={{
          button: {
            padding: "17px",
            gap: "20px",
            color: "#888ea2",
            fontWeight: 500,
            fontSize: "18px",
            [`&:hover, &.ps-active`]: { color: "#314ca3" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.50px" } }}
        className="mb-[334px] flex w-full flex-col justify-center self-stretch"
      >
        <MenuItem component={<Link to="/"/>} icon={<Img src="images/img_home_blue_gray_400.svg" alt="home" className="h-[25px] w-[25px]"/>}>
          Dashboard
        </MenuItem>
        <MenuItem component={<Link to="/transaction"/>}
          icon={<Img src="images/img_television_indigo_600_01.svg" alt="television" className="h-[25px] w-[25px]" />}
        >
          Transactions 
        </MenuItem>
        <MenuItem component={<Link to="/accounts"/>} icon={<Img src="images/img_user_3_1.svg" alt="user3one" className="h-[25px] w-[25px]" />}>
          Accounts
        </MenuItem>
        <MenuItem  component={<Link to="/investments"/>} icon={<Img src="images/img_settings.svg" alt="settings" className="h-[25px] w-[25px]" />}>
          Investments
        </MenuItem>
        <MenuItem  component={<Link to="/creditcards"/>} icon={<Img src="images/img_credit_card_1.svg" alt="creditcardone" className="h-[25px] w-[25px]" />}>
          Credit Cards
        </MenuItem>
        <MenuItem icon={<Img src="images/img_loan_1.svg" alt="loanone" className="h-[25px] w-[25px]" />}>
          Loans
        </MenuItem>
        <MenuItem icon={<Img src="images/img_service_1.svg" alt="serviceone" className="h-[25px] w-[25px]" />}>
          Services
        </MenuItem>
        <MenuItem icon={<Img src="images/img_laptop.svg" alt="laptop" className="h-[25px] w-[25px]" />}>
          My Privileges
        </MenuItem>
        <MenuItem icon={<Img src="images/img_search.svg" alt="search" className="h-[25px] w-[25px]" />}>
          Setting
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
