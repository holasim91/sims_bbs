import React from 'react'
import styled from "styled-components";

const Top  = styled.div`
      position: fixed;
  display: flex; //Grid를 쉽게하기 위해
  width: 100%;
  height: 55px;
  background-color: #e2e2e2;
  left: 50%;
  transform: translate(-50%);
  padding: 15px 70px;
  padding-bottom: 10px;
  top:0;

`
export default function Header() {
    return (
        <Top>
            Here is Header
        </Top>
    )
}
