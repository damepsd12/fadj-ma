"use client"; 
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  padding: 20px 20px;
  border-top: none;
  color: #000;
  margin-bottom: 40px;
`;

export const Thead = styled.thead`
  border-top: none;
  color: black;
  border-bottom: 2px solid #BBB;
`;

export const Tbody = styled.tbody`
   font-size: 15px;
`;

export const Tr = styled.tr`
   border-top: 1px solid #CCC;
  :nth-child(even) {
  }
`;
export const Th = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 12px;
`;
export const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;