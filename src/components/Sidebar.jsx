import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large menu-btn" onClick={toggleSidebar}></i>}
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/start" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/category" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/subcategory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th">Sub-Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/retailer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="store">Retailer</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="box">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shopping-cart">Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/offers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tag">Offers</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
