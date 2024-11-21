"use client"; // Ajoutez cette ligne pour indiquer que c'est un composant client
import React from 'react';
import styled from 'styled-components';
import DashboardLayout from './dashboard/layout';
import ProductPage from './dashboard/produits/page';



const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "navbar navbar"
    "sidebar main";
  grid-template-columns: 200px 1fr;
  height: 100vh;
`;

const Main = styled.main`
  grid-area: main;
  padding: 20px;
`;

const App = () => (
  <DashboardLayout>
    <Main>
      <ProductPage />
      </Main>
  </DashboardLayout>
);

export default App;