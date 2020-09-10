import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  padding: 10px;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  -webkit-box-shadow: 0px 3px 5px 2px rgba(51,51,51,0.3);
	-moz-box-shadow: 0px 3px 5px 2px rgba(51,51,51,0.3);
	box-shadow: 0px 3px 5px 2px rgba(51,51,51,0.3);
	border-radius: 3px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
  }

  .nav__item {
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    transition: color 0.3s linear;
    &:hover {
        color: ${({ theme }) => theme.primaryHover};
    }
    a:not(:hover) {
        text-decoration: none;
    }
  }
`;