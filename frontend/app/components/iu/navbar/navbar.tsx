"use client"; 
import React from 'react'
import './navbar.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Fadjmalogo from '../public/fadjmalogo.png';
import styled from 'styled-components';
import { IoLanguageOutline } from 'react-icons/io5'; // Importation de l'icône
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCircle, FaCartPlus } from "react-icons/fa";


const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2C2C2C;
  padding: 0;
  height: 80px;
  box-sizing: border-box;
  position: fixed;
  top: 0; 
  justify-content: space-between;
  left: 0;
  width: 100%; 
  z-index: 999; /*Reste au-dessus des autres éléments */
`;

// Styles pour la barre haute
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  width: 80%;
  padding: 0 20px;
  background-color: #f8f9fa; /* Couleur de fond pour la partie TopBar */
`;

// Styles pour le logo
const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
;`
const ImageStyled  = styled(Image)`

;`
const SectionLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: start;
  width: 20%;
  color: white;
  background-color: transparent;
  padding: 10px; 
  margin: 0;
`;
const SearchInput = styled.input`
  border: none;
  background-color: #EDF1F5; /* Couleur de fond pour le champ de recherche */
  outline: none;
  padding: 10px;
  border-radius: 4px;
  width: 350px; 
  flex-shrink: 0; /* Empêche l'entrée de rétrécir en largeur */
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const LanguageText = styled.span`
  margin-right: 5px;
  color: #333;
  display: flex;
  align-items: center; 
  cursor: pointer;
`;

const LanguageIcon = styled(IoLanguageOutline)`
  margin-right: 5px;
  color: #333; 
`;

const Dropdown = styled.div<{ $isopen?:boolean}>`
  position: absolute;
  top: 100%;
  left: 0;
  color: #333;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
   display: ${({ $isopen }) => ($isopen ? 'block' : 'none')};

`;

const LanguageOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Greeting = styled.div`
  margin: 5px 0 0;
  font-size: 14px;
  color: #6c757d;
`;

const Jaune = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const P = styled.p`
  justify-content: end;
`;

const languages = [
  'Français (France)',
  'Anglais (USA)',
  'Espagnol (Espagne)',
  'Allemand (Allemagne)',
  'Italien (Italie)',
  'Néerlandais (Pays-Bas)',
  'Portugais (Portugal)',
  'Chinois (Mandarin)',
  'Japonais (Japon)',
  'Arabe (Arabie Saoudite)',
  'Russe (Russie)',
  'Hindi (Inde)',
];

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: any) => {
   setSelectedLanguage(language);
   setIsOpen(false);
   };

  return (
    <NavbarContainer>
      <SectionLogo>
            <Logo  style={{ marginRight: '20px' }}>
            <ImageStyled src="/fadjmalogo.png" width={40}  height={40} alt='logo' />
            </Logo>
            <Logo>
                Fadj-Ma
            </Logo>
         </SectionLogo>
      <TopBar>
       
        <SearchInput type="text" placeholder="Rechercher n'importe quoi ici." />
         <LanguageSelector>
          <LanguageText onClick={toggleDropdown}>
            <LanguageIcon />
            {selectedLanguage}
          </LanguageText>
          <span onClick={toggleDropdown} style={{ color: '#333' }}><IoChevronDownOutline /></span>
          <Dropdown $isopen={isOpen}>
            {languages.map((language) => (
              <LanguageOption key={language} onClick={() => selectLanguage(language)}>
                {language}
              </LanguageOption>
            ))}
          </Dropdown>
        </LanguageSelector> 
        <Greeting>
          <Jaune>
            <FaCircle color="#EBC806" size={29} />
            <P style={{ color: '#333' }}>Bonjour</P>
          </Jaune>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Greeting>
      </TopBar>
    </NavbarContainer>
  );
};

export default Navbar;
