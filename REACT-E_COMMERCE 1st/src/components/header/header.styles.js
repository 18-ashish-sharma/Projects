import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled.span`
  margin-left: 5px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px;
  cursor: pointer;
`;
