import { ReactNode, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { routes } from './pages';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

function Header() {
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
}
