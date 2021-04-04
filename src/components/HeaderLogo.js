import React from "react"
import styled from "styled-components"
import { FixedBar } from "../components"
import { BREAKPOINT } from "../utils/constants"
import { MenuWrapper, Menu, MobileMenu } from './NavBar'
import { DrawerProvider, DrawerComp} from './Drawer'

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`

const menuItems = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'About',
    url: '/about'
  },
  {
    label: 'Experience',
    url: '/experience'
  },
  {
    label: 'Expertise',
    url: '/expertise'
  },
  {
    label: 'Contact',
    url: '/contact'
  },
]
export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <MobileMenu>
        <DrawerProvider>
          <DrawerComp items={menuItems} />
        </DrawerProvider>
      </MobileMenu>
      <Logo>M.A.</Logo>
      <MenuWrapper>
        <Menu items={menuItems} />
      </MenuWrapper>
    </HeaderWrapper>
  )
}
