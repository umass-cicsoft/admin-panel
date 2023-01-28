import React from 'react';
import styled from 'styled-components';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { NavigationBar } from './components';

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default function App() {
  return (
    <ProSidebarProvider>
      <AppContainer>
        <NavigationBar/>
      </AppContainer>
    </ProSidebarProvider>
  );
}
