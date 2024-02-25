import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink>
            <PrimaryNavContent href="/sale">Sale</PrimaryNavContent>

            <SecondaryNavContent href="/sale">Sale</SecondaryNavContent>
          </NavLink>

          <NavLink>
            <PrimaryNavContent href="/new">New&nbsp;Releases</PrimaryNavContent>

            <SecondaryNavContent href="/new">
              New&nbsp;Releases
            </SecondaryNavContent>
          </NavLink>

          <NavLink>
            <PrimaryNavContent href="/men">Men</PrimaryNavContent>

            <SecondaryNavContent href="/men">Men</SecondaryNavContent>
          </NavLink>

          <NavLink>
            <PrimaryNavContent href="/women">Women</PrimaryNavContent>

            <SecondaryNavContent href="/women">Women</SecondaryNavContent>
          </NavLink>

          <NavLink>
            <PrimaryNavContent href="/kids">Kids</PrimaryNavContent>

            <SecondaryNavContent href="/kids">Kids</SecondaryNavContent>
          </NavLink>

          <NavLink>
            <PrimaryNavContent href="/collections">
              Collections
            </PrimaryNavContent>

            <SecondaryNavContent href="/collections">
              Collections
            </SecondaryNavContent>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.span`
  color: var(--color-gray-900);
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  max-height: 37px;
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavContent = styled.a`
  font-size: inherit;
  text-transform: inherit;
  text-decoration: inherit;
  color: inherit;
  display: block;
  transition: transform 400ms;
  transform: translateY(var(--var-translate-from));

  ${NavLink}:hover & {
    transform: translateY(var(--translate-to));
  }
`;

const PrimaryNavContent = styled(NavContent)`
  --var-translate-to: -100%;
  --var-translate-from: 0%;
  font-weight: ${WEIGHTS.medium};
`;

const SecondaryNavContent = styled(NavContent)`
  --var-translate-to: 0%;
  --var-translate-from: 100%;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0px;
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Header;
