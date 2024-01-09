import { Route, Routes } from 'react-router-dom';
import { LoginPage, Dashboard, NotFound } from './pages';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path='/' Component={LoginPage} />
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/*' Component={NotFound} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
