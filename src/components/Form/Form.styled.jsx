import { BsFilm } from 'react-icons/bs';

import styled from '@emotion/styled';

export const SearchBar = styled.form`
  position: relative;
  width: auto;
  float: right;
  margin-right: 30px;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 42px;
  padding-left: 15px;
  border-radius: 42px;
  border: 2px solid #324b4e;
  outline: none;
  transition: 0.3s linear;

  &:focus {
    width: 300px;
  }
`;
export const IconButton = styled.button`
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;
