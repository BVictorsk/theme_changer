import React from 'react'
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
    background-color: red;
    flex: 1;
    height: 100vh;
    transition: all 0.3s;

    &:hover {
        flex: 4;
    }
`;

const StyledNavLink = styled(NavLink)`

`;

const Sidebar = () => {
  return (
    <SidebarContainer>
        <ul>
            <li>
                <StyledNavLink to='/'>home</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to='/theme-change'>temas</StyledNavLink>
            </li>
        </ul>
    </SidebarContainer>
  )
}

export default Sidebar