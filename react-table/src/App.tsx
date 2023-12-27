import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './pages';
import Layout from './layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
