"use client";
import React from 'react';
import styled from 'styled-components';
import { PiCopyrightLight } from "react-icons/pi";

const Footercontainer = styled.div`
    background-color: #2C2C2C;
`
const Footer = styled.p`
    font-size: 12px;
`
const footer = () => {
    return (
        <Footercontainer>
            <Footer>
                Propulsé par red team <PiCopyrightLight />2024 version 1.1.2
            </Footer>
        </Footercontainer>
    )
}

export default footer