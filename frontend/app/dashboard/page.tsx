"use client";
import React from 'react';
import styled from 'styled-components';
import { FiChevronsRight } from "react-icons/fi";
import { RiShieldCrossLine } from "react-icons/ri";
import { GoAlert } from "react-icons/go";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";


// Styled components
const ProductageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 90px;
`;
const ProductageRow = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 20px;
  margin: 10px 0; 
`;
const ProductageBox = styled.div`
  text-align: start;

`;

const P1 = styled.p`
  font-size: 16px;
  color: #6c757d; 
  background-color: #fff;
  padding: 20px 10px 10px 10px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
`;

const H1 = styled.h1`
  font-size: 24px;
  color: #343a40; 
`;

const P = styled.p`
  font-size: 16px;
  color: #6c757d; 
  text-align: center;
`;
// Les Card
const  RowCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-sizing: border-box;
  margin-bottom: 40px;
`
const Card = styled.div`
   align-items: center;
   justify-content: center;
   width: 300px;
   border-radius: 5px;
   background-color: #FFF;
`;
const CardTitlep = styled.p`
   text-align: center;
   font-size: 30px;
   font-weight: 700;
   box-sizing: border-box;
   margin-bottom: 0px;
;`
const CardTitle = styled.h3`
   text-align: center;
;`
const CardP = styled.p`
    text-align: center;
    font-size: 13px;
;`
const CardDescription = styled.div`
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 13px;
  display: flex;
  padding: 0px 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
;`
const CardDesp = styled.p`
   margin-right: 20px;
;`
const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  gap: 20px;
  margin-bottom: 30px;
;`
const Box = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    border: 1px solid #333;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0px;
    background-color: #fff;
    box-shadow: 0px 3px 0.5px rgba(0, 0, 0, 0.08);
`;
const Conteneur1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 15px;
    gap: 20px;
    padding: 20px 20px 10px 20px;
    margin: 0px;
    align-items: center;
    border-top-radius: 3px;
    border-radius: 1px;
    box-sizing: border-box;
    width: 100%;
`;
const ConteneurText = styled.div`
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    padding: 40px 20px 40px 20px;
    border-top: 1px solid #333;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
`;
const BContent = styled.div`

`;
const Ctitle = styled.h4`
`;
const BoxContentDes = styled.div`
    display: flex;
    align-items: center;
`;
const Conp = styled.p`
  font-size: 13px;
`;
const BoxContent = styled.div`
   text-align: ;
;`
const BoxContentDescription = styled.div`
    display: inline-block; 
    align-items: center;
    justify-content: space-between;

`;
const Contitle = styled.h3`
`;
const BoxContent1 = styled.div`
`;
const ConDesp = styled.p`
    flex-wrap: nowrap;
    font-size: 13px;
    font-weight: bold;
`;

const ProductPage = () => {
  return (
     <>
        <ProductageContainer>
            <ProductageRow>
              <ProductageBox>
                <H1>Tableau de bord</H1>
                <P>Un aperçu rapide des données de votre pharmacie</P>
              </ProductageBox>
              <P1>Télécharger le rapport</P1>
            </ProductageRow>
           <RowCard>
                <Card  style ={{border:'1px solid #01A768' }} >
                    <CardTitlep>
                        <RiShieldCrossLine color="#01A768" />
                    </CardTitlep>
                    <CardTitle>
                          Bien
                    </CardTitle>
                    <CardP>status de l'inventaire</CardP>
                    <CardDescription style={{ backgroundColor: '#A6DBCB', border:'1px solid #01A768' }}>
                        <CardDesp>Afficher le rapport détaillé</CardDesp>
                        <FiChevronsRight />
                    </CardDescription>
                </Card>

                <Card style ={{border:'1px solid #FEDB20' }}>
                      <CardTitlep>
                          <FaMoneyBills  color="#FEDB20" />
                      </CardTitlep>
                      <CardTitle>
                          4.800.432 FCFA
                      </CardTitle>
                      <CardP>Revenu: janvier 2022 <LuChevronDown /></CardP>
                     <CardDescription style={{ backgroundColor: '#F2E9AC', border:'1px solid #FEDB20' }}>
                        <CardDesp>Afficher le rapport détaillé</CardDesp>
                        <FiChevronsRight />
                    </CardDescription>
                </Card>

                <Card style={{border:'1px solid #22B4F6' }}>
                    <CardTitlep>
                        <MdOutlineMedicalServices  color="#22B4F6" />
                    </CardTitlep>
                    <CardTitle>
                          298
                    </CardTitle>
                    <CardP>Medicaments disponibles</CardP>
                    <CardDescription style={{ backgroundColor: '#A7DCF5', border:'1px solid #22B4F6' }}>
                        <CardDesp>Visitez l'inventaire</CardDesp>
                        <FiChevronsRight />
                    </CardDescription>
                </Card>

                <Card style={{border:'1px solid #F25F56' }}>
                    <CardTitlep>
                        <GoAlert color="#F25F56" />
                    </CardTitlep>
                    <CardTitle>
                          01
                    </CardTitle>
                    <CardP>Pénurie de médicaments</CardP>
                    <CardDescription style={{ backgroundColor: '#EEBFBF', border:'1px solid #F25F56' }}>
                        <CardDesp>Résoudre maintenant</CardDesp>
                        <FiChevronsRight />
                    </CardDescription>
                </Card>
           </RowCard>
           <RowBox>
                <Box>
                    <Conteneur1>
                             <BContent>
                                    <Ctitle>Inventaire</Ctitle>
                              </BContent>
                              <BoxContent1>
                                      <BoxContentDes>
                                          <Conp>Allez dans la configuration</Conp>
                                          <FiChevronsRight />
                                      </BoxContentDes>
                              </BoxContent1>
                          </Conteneur1>
                    <ConteneurText>
                          <BoxContent>
                              <Contitle>298</Contitle>
                              <ConDesp>Nombre total de Médicaments</ConDesp>
                          </BoxContent>
                          <BoxContent1>
                                <BoxContentDescription>
                                    <Contitle>24</Contitle>
                                    <ConDesp>Groupes de médecine</ConDesp>
                                </BoxContentDescription>
                          </BoxContent1>
                    </ConteneurText>
                </Box>
                <Box>
                   <Conteneur1>
                        <BContent>
                            <Ctitle>Rapport rapide</Ctitle>
                        </BContent>
                            <BoxContent1>
                                <BoxContentDes>
                                    <Conp>Janvier 2022</Conp>
                                    <IoChevronDownOutline />
                               </BoxContentDes>
                        </BoxContent1>
                    </Conteneur1>
                    <ConteneurText>
                          <BoxContent>
                              <Contitle>70856</Contitle>
                              <ConDesp>Quantité de Médicaments v...</ConDesp>
                          </BoxContent>
                          <BoxContent1>
                                <BoxContentDescription>
                                    <Contitle>5288</Contitle>
                                    <ConDesp>Factures génerées</ConDesp>
                                </BoxContentDescription>
                          </BoxContent1>
                    </ConteneurText>
                </Box>
           </RowBox>
           <RowBox>
                <Box>
                    <Conteneur1>
                             <BContent>
                                    <Ctitle>Ma pharmacie</Ctitle>
                              </BContent>
                              <BoxContent1>
                                      <BoxContentDes>
                                          <Conp>Accédez à la gestion des utilisateurs</Conp>
                                          <FiChevronsRight />
                                      </BoxContentDes>
                              </BoxContent1>
                          </Conteneur1>
                    <ConteneurText>
                          <BoxContent>
                              <Contitle>01</Contitle>
                              <ConDesp>Nombre total de fournisseure</ConDesp>
                          </BoxContent>
                          <BoxContent1>
                                <BoxContentDescription>
                                    <Contitle>05</Contitle>
                                    <ConDesp>Nombre total d'utilisateurs</ConDesp>
                                </BoxContentDescription>
                          </BoxContent1>
                    </ConteneurText>
                </Box>
                <Box>
                   <Conteneur1>
                        <BContent>
                            <Ctitle>Clients</Ctitle>
                        </BContent>
                            <BoxContent1>
                                <BoxContentDes>
                                    <Conp>Allez à la page clients</Conp>
                                    <FiChevronsRight />
                               </BoxContentDes>
                        </BoxContent1>
                    </Conteneur1>
                    <ConteneurText>
                          <BoxContent>
                              <Contitle>845</Contitle>
                              <ConDesp>Nombre total de clients</ConDesp>
                          </BoxContent>
                          <BoxContent1>
                                <BoxContentDescription>
                                    <Contitle>Adalimumab</Contitle>
                                    <ConDesp>Article fréquemment...</ConDesp>
                                </BoxContentDescription>
                          </BoxContent1>
                    </ConteneurText>
                </Box>
           </RowBox>
        </ProductageContainer>
     </>
  );
}

export default ProductPage;