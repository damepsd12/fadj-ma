"use client";
import React, { Fragment } from 'react'
import './layout.ts';
import Navbar from '../components/iu/navbar/navbar.tsx'
import { Main, Asidebar, Left } from './layout.ts';
import Sidebar from '../components/iu/sidebar/sidebar.tsx';
import Footer from '../components/iu/footer/footer.tsx';

const DashboardLayout = ({children}) => {
  return (
    <Main>
      <Left>
          <Sidebar/>
      </Left>
       <Asidebar>
            <Navbar/>
            {children}
            <Footer/>
       </Asidebar>
    </Main>
  )
}

export default DashboardLayout;
