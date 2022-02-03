import { BsFilm } from 'react-icons/bs';

import styled from '@emotion/styled';

export const SearchBar = styled.Form`
  width: auto;
  float: right;
  margin-right: 30px;
`;
const SearchInput = styled.input`
  width: 250px;
  height: 42px;
  padding-left: 15px;
  border-radius: 42px;
  border: 2px solid #324b4e;
  outline: none;
  position: relative;
  transition: 0.3s linear;

  &:focus {
    width: 42px;
    height: 42px;
    border: none;
    position: absolute;
    top: -2px;
    right: 0;
  }
`;
