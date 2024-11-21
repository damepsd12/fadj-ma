"use client"; 
import React from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './formproduct';
import { RiArrowDropDownLine } from "react-icons/ri";
import DetailsPage  from './detail/page';
import { IoSearchSharp } from "react-icons/io5";
import { FiChevronsRight } from "react-icons/fi";
import { Table, Thead, Tbody, Tr, Th, Td} from './produit';
import { MdOutlineFilterAlt } from "react-icons/md";

const Medicament = styled.div`
   padding: 75px 40px 0px 30px;
`;

const Container = styled.div`
   width: 100%;
   display: inline-block;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    gap: 20px;
    width: 100%;
`;

const Box = styled.div``;

const H1 = styled.h2`
    font-weight: bold;
`;

const P = styled.p``;

const Button = styled.button`
  padding: 8px 18px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 360px;
  outline: none;
`;

const SearchIcon = styled(IoSearchSharp)`
  position: absolute; 
  right: 10px; 
  top: 50%; 
  transform: translateY(-50%); /* Ajustement du centrage vertical */
  color: #000; 
  cursor: pointer; 
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownList = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000; /* S'assurer que la liste est au-dessus des autres éléments */
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const groups = [
  'Antibiotiques',
  'Antihypertenseurs',
  'Diabètes',
  'Maladies cardiovasculaires',
  'Produits à base de plantes',
  'Crèmes et pommade cutanées',
  'Gels et sprays anti-inflammatoires',
];

/* LE CRUD PRODUCT  START*/


/* LE CRUD PRODUCT END*/
/* FOOTER START */
 const Footer = styled.footer`
  margin-top: 0px;
 `;
const Footercontainer = styled.div`
  margin-top: 0px;
`;
const Frow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
`;
const Fp = styled.div`
`;

 /* FOOTER END */
const MedicamaPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null); // Typage explicite

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Typage explicite
    setSearchTerm(e.target.value);
  };

  const handleGroupSelect = (group: string) => { // Typage explicite
    setSelectedGroup(group);
    setDropdownOpen(false);
  };

  

  return (
    <Medicament>
          <Container>
                  <Row>
                      <Box>
                          <H1>Médicaments (298)</H1>
                          <P>Liste des médicaments disponibles à la vente</P>
                        </Box>
                      <Box>
                          <Button onClick={() => setModalOpen(true)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              width="20px"
                              height="20px"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            Nouveau médicament
                          </Button>
                          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                      </Box>
                  </Row>
                  <Row>
                      <SearchContainer>
                            <SearchInput
                              type="text"
                              placeholder="Rechercher dans l'inventaire médicaments."
                              value={searchTerm}
                              onChange={handleSearchChange}
                            />
                            <SearchIcon />
                      </SearchContainer>
                      <DropdownContainer>
                                <MdOutlineFilterAlt style={{ marginRight: "5px" }} size={29} />
                                <SelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                  {selectedGroup || 'Sélectionner un groupe'} <RiArrowDropDownLine style={{ marginLeft: "5px" }} size={29}/>
                                </SelectButton>
                                {isDropdownOpen && (
                                  <DropdownList>
                                    {groups.map((group) => (
                                      <DropdownItem key={group} onClick={() => handleGroupSelect(group)}>
                                        {group}
                                      </DropdownItem>
                                    ))}
                              </DropdownList>
                            )}
                      </DropdownContainer>
                  </Row>
                  {/* LE CRUD PRODUCT START*/}
                  <Row>
                      <Table>
                        <Thead>
                          <Tr>
                            <Th>Nom du Médicament</Th>
                            <Th>ID du médicament</Th>
                            <Th>Nom du Groupe</Th>
                            <Th>Stock</Th>
                            <Th>Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>Augmentin 625 Duo Comprimé</Td>
                            <Td>D06ID232435454</Td>
                            <Td>Médecine générique</Td>
                            <Td>350</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Azithral-500 Comprimé</Td>
                            <Td>D06ID232435451</Td>
                            <Td>Médecine générique</Td>
                            <Td>20</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Sirop Ascoril LS</Td>
                            <Td>D06ID232435452</Td>
                            <Td>Diabète</Td>
                            <Td>85</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Azée 500 Comprimé</Td>
                            <Td>D06ID232435450</Td>
                            <Td>Médecine générique</Td>
                            <Td>75</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Allegra 120mg Comprimé</Td>
                            <Td>D06ID232435455</Td>
                            <Td>Diabète</Td>
                            <Td>44</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Sirop d'Alex</Td>
                            <Td>D06ID232435456</Td>
                            <Td>Médecine générique</Td>
                            <Td>65</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Amoxyclav-625 Comprimé</Td>
                            <Td>D06ID232435457</Td>
                            <Td>Médecine générique</Td>
                            <Td>150</Td>
                            <Td>
                              <Link href="/dashboard/produits/detail" style={{ textDecoration:'none' }} passHref>
                                <Button  style={{ border:'none' }}>Voir tous les Détails <FiChevronsRight  style={{ marginLeft:'20px' }}/></Button>
                              </Link>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                  </Row>
                  <Footer>
                       <Footercontainer> 
                                   <Frow>
                                        <Fp>Affichage de 1 à 8 résultats sur 298 </Fp>
                                        <Fp>Page 01</Fp>
                                   </Frow>

                       </Footercontainer>
                  </Footer>
          </Container>
    </Medicament>
  );
}

export default MedicamaPage;
