"use client"; // Assurez-vous d'avoir cette directive au début du fichier.
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fadjmalogo from '../public/fadjmalogo.png';
import styled from 'styled-components';
import { setUncaughtExceptionCaptureCallback } from 'process';
import { Container, Row, H1, Logo, SectionLogo,  } from './signup';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin: 50px;
  padding: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 600px;
  padding: 20px; 
`;

const Input = styled.input`
  margin: 10px 0px;
  outline: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%; // pour que les champs prennent toute la largeur
`;

const Select = styled.select`
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%; // pour que les sélecteurs prennent toute la largeur
`;

const Label = styled.label`
  margin: 5px 0; // Espacement autour des labels
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem; // Espace entre les colonnes
  width: 100%; // Prendre toute la largeur
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1; // Pour que chaque conteneur prenne une largeur égale
`;

const RadioContainer = styled.div`
  margin: 10px 0;
  display: flex; // Alignement en ligne
  align-items: center; // Centre verticalement les éléments
`;

const RadioLabel = styled.label`
  margin-right: 20px; // Espace entre les options
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #A7DBF5;
  font-weight: 700;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
    color: #fff;
  }
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between; // espace entre les champs de date
`;
const ConnectSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  gap: 20px;
`;

const ConnexionButton = styled.button`
  cursor: pointer;
  background: #A7DBF5;
  border: 1px solid #CCC;
  color: #0070f3;
  font-weight: bold;
  padding: 10px 20px;
   border-radius: 10px;
  
`;

const InscriptionButton = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid #CCC;
  padding: 10px;
  color: #0070f3;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
`;
const DateSelectContainer = styled.div`
  flex: 1; // Pour que chaque sélecteur prenne une largeur égale
  margin: 0 5px; // Pour l'espacement entre les champs de date
`;
const Inscon = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin: auto;
    margin-bottom:20px;
    border-radius: 10px;
`;

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastFirst, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    sex: '',
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajoutez votre logique d'inscription ici
    console.log(formData);
  };

  const days = Array.from({ length: 31 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
  const years = Array.from({ length: 100 }, (_, idx) => (new Date().getFullYear() - idx).toString());

  return (
      <Container>
            <Row>
                  <H1>Bienvenue chez votre pharmacie</H1>
                  <SectionLogo>
                        <Logo  style={{ marginRight: '20px' }}>
                            <Image
                                src="/fadjmalogo.png"
                                alt="logo"
                                width={40}
                                height={40}
                            />
                        </Logo>
                        <Logo>
                            Fadj-Ma
                        </Logo>
                  </SectionLogo>
             </Row>
           <FormContainer>
                  <Form onSubmit={handleSubmit}>
                      <Inscon>
                            <Link href="/" passHref>
                                <Button type="button" >Connectez-vous</Button>
                            </Link>
                            <Link href="/signup" passHref>
                              <Button type="button" >Inscrivez-vous</Button>
                            </Link>
                      </Inscon>
                    {/* Champs radio alignés sur une ligne */}
                    <RadioContainer>
                      <RadioLabel>
                        <Input
                          type="radio"
                          name="sex"
                          value="male"
                          checked={formData.sex === 'male'}
                          onChange={handleChange}
                          required
                        />
                        Homme
                      </RadioLabel>
                      <RadioLabel>
                        <Input
                          type="radio"
                          name="sex"
                          value="female"
                          checked={formData.sex === 'female'}
                          onChange={handleChange}
                          required
                        />
                        Femme
                      </RadioLabel>
                    </RadioContainer>

                    {/* Champs nom et prénom dans une colonne */}
                    <FlexContainer>
                      <InputContainer>
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          type="text"
                          name="firstName"
                          placeholder="Prénom"
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="true"
                          required
                        />
                      </InputContainer>

                      <InputContainer>
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          type="text"
                          name="lastName"
                          placeholder="Nom"
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="true"
                          
                        />
                      </InputContainer>
                    </FlexContainer>
                    {/* Labels et champs de date de naissance */}
                    <Label>Date de naissance</Label>
                    <DateContainer>
                      <DateSelectContainer>
                        <Label htmlFor="birthDay">Jour</Label>
                        <Select
                          id="birthDay"
                          name="birthDay"
                          value={formData.birthDay}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled hidden>Sélectionnez</option>
                          {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </Select>
                      </DateSelectContainer>

                      <DateSelectContainer>
                        <Label htmlFor="birthMonth">Mois</Label>
                        <Select
                          id="birthMonth"
                          name="birthMonth"
                          value={formData.birthMonth}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled hidden>Sélectionnez</option>
                          {months.map(month => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </Select>
                      </DateSelectContainer>

                      <DateSelectContainer>
                        <Label htmlFor="birthYear">Année</Label>
                        <Select
                          id="birthYear"
                          name="birthYear"
                          value={formData.birthYear}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled hidden>Sélectionnez</option>
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </Select>
                      </DateSelectContainer>
                    </DateContainer>
                    {/* Champs email et mot de passe dans une autre colonne */}
                    <FlexContainer>
                      <InputContainer>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="true"
                        />
                      </InputContainer>

                      <InputContainer>
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Mot de passe"
                          onChange={(e) => setPassword(e.target.value)}
                              autoComplete="true"
                          required
                        />
                      </InputContainer>
                    </FlexContainer>

                    {/* Champs de confirmation mot de passe */}
                    <InputContainer>
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmer le mot de passe"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </InputContainer>

                    

                    <Button type="submit">S'inscrire</Button>
                  </Form>
            </FormContainer>
      </Container>
  );
};

export default SignupForm;






