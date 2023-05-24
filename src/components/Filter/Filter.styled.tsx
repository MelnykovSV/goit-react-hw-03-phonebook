import styled from '@emotion/styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import { colors } from '../../constants';

export const Container = styled.div`
  div {
    position: relative;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 25px;
  }
  input {
    font-size: 18px;
    display: block;
    padding: 21px 25px;
    border: 1px solid ${colors.text.primary};
    width: 100%;
    background-color: ${colors.bg.primary};
    color: ${colors.text.primary};
    border-radius: 8%/50%;
  }
`;

export const StyledSearchIcon = styled(BiSearchAlt2)`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 20px;
  top: 50%;
  color: ${colors.text.primary};
  transform: translateY(-50%);
`;
