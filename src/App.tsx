import { Route, Routes } from 'react-router-dom';
import { LoginPage, Dashboard, NotFound } from './pages';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' Component={LoginPage} />
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/*' Component={NotFound} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
