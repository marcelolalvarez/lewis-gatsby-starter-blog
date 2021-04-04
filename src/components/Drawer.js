import React, { useReducer, Fragment, useContext } from 'react';
import styled from "styled-components"
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import { Menu } from './NavBar'
import { FiX } from 'react-icons/fi';

const DrawerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 40px;
  .mobile-menu {
    display: block;
    padding-top: 50px;
    margin-bottom: auto;
    li {
      margin: 0 0 15px 0;
      a {
        display: block;
        position: relative;
        padding-left: 25px;
        padding-right: 25px;
        &.active-link {
          &:before {
            opacity: 1;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 3px;
          height: 18px;
          top: 50%;
          left: 0;
          opacity: 0;
          background: #292929;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 5px 0;
`;


const DrawerClose = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  padding: 0 15px;
  cursor: pointer;
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #6666ff;
  }
  span {
    display: block;
    height: 2px;
    background-color: #292929;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;

const HamburgerIconSquare = styled.div`
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  span {
    display: block;
    height: 2px;
    background-color: #292929;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
  }
`;

const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
export const DrawerContext = React.createContext({});

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
}

export const Drawer = ({ className, children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  ...props }) => {
  const addAllClasses = ['drawer'];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={addAllClasses.join(' ')}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration=".4s"
        {...props}
      >
        {closeButton && (
          <div
            className="drawer__close"
            onClick={toggleHandler}
            style={closeButtonStyle}
          >
            {closeButton}
          </div>
        )}

        {children}
      </RcDrawer>
      <div
        className="drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  )
}

export const DrawerComp = ({ items }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  return (
    <Drawer
      width='290px'
      placement='left'
      drawerHandler={
        <HamburgerIconSquare>
          <span />
          <span />
          <span />
        </HamburgerIconSquare>
      }
      open={state.isOpen}
      toggleHandler={toggleDrawer}
    >
      <DrawerContentWrapper>
        <DrawerHead>

          <DrawerClose onClick={toggleDrawer}>
            <FiX />
          </DrawerClose>
        </DrawerHead>
        <Menu items={items} className='mobile-menu' />
      </DrawerContentWrapper>
    </Drawer>
  )
}