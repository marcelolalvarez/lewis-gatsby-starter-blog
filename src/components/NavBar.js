import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

export const MenuWrapper = styled.div`
  display: inline-block;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuItemWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin: 0 12px;
  list-style: none;
  a {
    padding: 5px 10px;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    color: #121213;
    transition: 0.15s ease-in-out;
    @media (max-width: 1024px) {
      font-size: 15px;
      padding: 5px;
    }
    &:hover {
      color: #6666ff;
    }
    &.active-link {
      color: #6666ff;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = ({items, ...props}) => (
  <MenuItemWrapper {...props}>
    {items.map((item, index) => (
      <MenuItem key={index}>
        {item.external ? (
          <a href={item.url}>{item.label}</a>
        ) : (
          <Link to={item.url} activeClassName="active-link">
            {item.label}
          </Link>
        )}
      </MenuItem>
    ))}
  </MenuItemWrapper>
)