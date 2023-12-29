import { Link, Route, Routes } from 'react-router-dom';
import { AdminPage, LoginPage, UserPage } from './pages';

function App() {
  return (
    <div>
      <header>header</header>
      <button>
        <Link to='/admin'>admin</Link>
      </button>
      <button>
        <Link to='/user'>user</Link>
      </button>
      <Routes>
        <Route path='/' Component={LoginPage} />
        <Route path='/admin' Component={AdminPage} />
        <Route path='/user' Component={UserPage} />
      </Routes>
    </div>
  );
}

export default App;
