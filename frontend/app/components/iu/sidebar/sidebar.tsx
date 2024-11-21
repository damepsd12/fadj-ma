"use client"; 
import React from 'react';
import styled from 'styled-components';
import './sidebar.ts';
import Link from 'next/link';
import Image from 'next/image';
// import AuthForm from '../../login/login';
import Fadjma from '../public/fadjma.jpg';
import { FaEllipsisV } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa";
import { BsGrid1X2 } from "react-icons/bs";
import { LuCornerUpLeft } from "react-icons/lu";
import { CiMedicalCase } from "react-icons/ci";
import { PiCopyrightLight } from "react-icons/pi";
import { Container} from './sidebar.ts';

// Créer le composant Container

const Logo = styled.h1`
    font-size: 25px;
    font-weight: 700;
     line-height: 16px;
`;
const SectionLogo = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    background-color: #2C2C2C;
    margin-bottom: 30px;
`;

const Admin = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 4px;
   justify-content: space-between;
   box-sizing: border-box;
   margin-bottom: 30px;
`;
const Adminpro = styled.div`
     display: flex;
     align-items: center;
     justify-content: start;
`
const Profil = styled.div`
    border-radius: 50%;
     color: white;
`;
const Name = styled.div`
     text-align: start;
     margin-left: 20px;

`;
const Icon = styled.div`
      font-size: 14px;
`;
const P1 = styled.p`
    font-size: 16px;
    font-weight: 700;
`;
const P = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: #DABB0B;
`;
const StyledImage = styled(Image)`
    width: 4Opx;
    height: 40px;
    border-radius: 50%
`;
const Ul = styled.ul`
    display: inline-block;
    padding: 0px;
    margin: 0px;
    margin-bottom: 30vh;
    text-align: start;
`;
// Créer le composant Navbar
const Navbar = styled.nav`
  padding: 10px 0px 10px 0px;
  color: white;
  display: inline-block;
  text-align: start;
`;
const Li = styled.li`
    list-style: none;
    margin-bottom: 20px;
    text-align: start;
`;
const Span = styled.span`
    font-size: 16px;
    text-decoration: none  !important;
    color: white;
`;
const Link = styled.a`
   text-decoration: none;
;`
const Inscon = styled.div`
;`
const Button = styled.button`
   color: #fff !important;
`
const Footer = styled.p`
    font-size: 12px;
`
const Sidebar = () => {
  return (
    <Container>
         <SectionLogo>
            <Logo>
                <FaCartPlus />
            </Logo>
            <Logo>
                Fadj-Ma
            </Logo>
         </SectionLogo>
        
        <Admin>
            <Adminpro>
                <Profil>
                    <StyledImage src="/fadjma.jpg" width={40}  height={40}  alt='profil'/>
                </Profil>
                <Name>
                    <P1>Modou Fall</P1>
                    <P>Administrateur</P>
                </Name>
            </Adminpro>
            <Icon>
               <FaEllipsisV size={16}/>
            </Icon>
        </Admin>
      <Navbar>
           <Ul>
               <Li>
                  <Link href="/dashboard" passHref>
                        <Adminpro>
                            <Profil>
                               <BsGrid1X2 />
                            </Profil>
                            <Name>
                            <Span>Tableau de bord</Span>
                            </Name>
                        </Adminpro>
                  </Link>
               </Li>
               <Li>
                  <Link href="/dashboard/produits" passHref>
                    <Adminpro>
                        <Profil>
                            <CiMedicalCase />
                        </Profil>
                        <Name>
                            <Span>Médicaments</Span>
                        </Name>
                    </Adminpro>
                  </Link>
              </Li>
           </Ul>
            <Link  href="/login" passHref>
                <Adminpro>
                    <Profil>
                        <LuCornerUpLeft />
                    </Profil>
                    <Name>
                        <Span>Deconnexion</Span>
                    </Name>
                </Adminpro>
            </Link>
      </Navbar>
      <Footer>
           Propulsé par red team <PiCopyrightLight />2024 version 1.1.2
      </Footer>
    </Container>
  );
};

export default Sidebar;

