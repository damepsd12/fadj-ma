"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fadjmalogo from '../public/fadjmalogo.png';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Container, Row, H1, SectionLogo, Logo} from './login';

// Styles pour le formulaire
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 14px 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #EDF1F5;

  &:focus {
    border-color: #0070f3;
  }
`;

const Button = styled.button`
  padding: 11px 55px;
  border: 1px solid #BBB;
  border-radius: 10px;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    background-color: #005bb5;
  }
`;

const ForgottenPasswordLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  text-align: end;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    text-decoration: none;
  }
`;

const Inscon = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin: auto;
    margin-bottom:20px;
    border-radius: 10px;
`;

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const correctEmail = "user@example.com"; // Exemple d'email correct
    const correctPassword = "password123"; // Exemple de mot de passe correct

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Vérification des données
        if (email === correctEmail && password === correctPassword) {
            Swal.fire({
                icon: 'success',
                title: 'Connexion réussie',
                text: 'Vous êtes maintenant connecté !',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Connexion échouée',
                text: 'Email ou mot de passe incorrect.',
            });
        }
        
        // Réinitialiser les champs
        setEmail("");
        setPassword("");
    };

    const handleForgotPassword = () => {
        Swal.fire({
            icon: 'info',
            title: 'Mot de passe oublié',
            text: "Veuillez contacter le support technique pour réinitialiser votre mot de passe.",
        });
    };
   
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
              <Form onSubmit={handleSubmit}>
                    <Inscon>
                        <Link href="/" passHref>
                            <Button type="button" style={{ backgroundColor: '#A7DBF5'}}>Connectez-vous</Button>
                        </Link>
                        <Link href="/signup" passHref>
                            <Button type="button" style={{ backgroundColor: '#EDF1F5'}}>Inscrivez-vous</Button>
                        </Link>
                    </Inscon>
                    <Label htmlFor="email">Email:</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <Label htmlFor="password">Mot de passe:</Label>
                    <Input 
                        id="password" 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <ForgottenPasswordLink onClick={handleForgotPassword} style={{ color:'black', fontWeight: '500', marginBottom: "30px" }}>
                        Mot de passe oublié ?
                    </ForgottenPasswordLink>

                    <Button type="submit" style={{ backgroundColor:'#A7DBF5', color: 'black' }}>Se connecter</Button>
              </Form>
         </Container>
    );
};

export default AuthForm;




    
