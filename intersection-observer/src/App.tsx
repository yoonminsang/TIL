import { FC, ReactNode, useState } from 'react';
import { RootPage } from './pages/RootPage';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ImageLazyLoadingPage } from './pages/ImageLazyLoadingPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Header: FC = () => {
  const location = useLocation();
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <header>
      <button
        onClick={() => setIsShow((isShow) => !isShow)}
        css={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 100,
          height: 30,
        }}
      >
        {isShow ? '헤더 가리기' : '헤더 보이기'}
      </button>
      {isShow && (
        <nav
          css={{
            marginTop: 50,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 20,
            fontSize: '25px',
          }}
        >
          {routes.map(({ path }) => {
            if (path === location.pathname)
              return (
                <NavLink to={path} css={{ color: 'red' }} key={path}>
                  {path}
                </NavLink>
              );
            return (
              <Link to={path} css={{ color: 'black' }} key={path}>
                {path}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

const routes: { path: string; element: ReactNode }[] = [
  { path: '/', element: <RootPage /> },
  { path: '/image-lazy-loading', element: <ImageLazyLoadingPage /> },
];
