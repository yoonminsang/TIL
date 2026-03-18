import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './pages';
import Layout from './layout';
import { Global, css } from '@emotion/react';

export default function App() {
  return (
    <BrowserRouter>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
        `}
      />
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
