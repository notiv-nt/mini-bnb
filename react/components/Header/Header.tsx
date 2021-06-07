import React from 'react';
import Link from 'next/link';
import { HeaderSection, HeaderContainer, LogoContainer, LogoText, NavList } from './Header.elements';
import LogoImage from '~/assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '~/store/reducer';
import AuthService from '~/services/AuthService';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { user } = useSelector<State, State>((state) => state);
  const dispatch = useDispatch();

  const isAuthenticated = !!user;

  const logout = () => {
    AuthService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <Link href="/" passHref>
          <LogoContainer>
            <LogoImage />
            <LogoText>reactbnb</LogoText>
          </LogoContainer>
        </Link>

        <nav>
          <NavList>
            {isAuthenticated && (
              <>
                <li>
                  <span>{user?.name}</span>
                </li>

                <li>
                  <Link href="/saved">
                    <a>Saved</a>
                  </Link>
                </li>

                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </>
            )}

            {!isAuthenticated && (
              <>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
              </>
            )}
          </NavList>
        </nav>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
