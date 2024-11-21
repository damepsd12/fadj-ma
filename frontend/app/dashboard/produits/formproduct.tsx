"use client"; 
import styled from 'styled-components';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Assurez-vous que le modal est au-dessus des autres éléments */
`;

const P = styled.p``;

const Tete = styled.div`
   width: 80px;
   height: 80px; /* Correction du typographie: 'heigth' à 'height' */
   background-color: #D9D9D9;
   align-items: center;
   padding: 24px;
   margin: 40px auto 0;
   border-radius: 50%;
`;

const ModalContainer = styled.div`
   background: white;
   padding: 0; 
   border-radius: 8px;
   width: 600px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   z-index: 1001; /* S'assurer que le contenu du modal est au-dessus de l'overlay */
   position: relative; /* Pour que le positionnement soit correct */
`;

const Form = styled.form`
  padding: 10px 40px 0;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 15px;
`;

const FormGroup = styled.div`
  width: 100%;
  gap: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;  
  margin-bottom: 5px;  
  font-weight: 700;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ModalHeader = styled.div`
    text-align: center; 
    padding: 20px 10px;
    background-color: #EDF1F5;
    width: 100%;
    margin-bottom: 0;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
`;

const ImagePreview = styled.img`
  width: 100px; 
  height: 100px; 
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer; 
`;

// Modal component with typing
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dosage: '',
    price: '',
  });

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Cast en string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Médicament ajouté:', formData);
    // Ici, vous pouvez ajouter la logique pour enregistrer le médicament et l'image
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <label htmlFor="image-upload">
            <Tete>
                <FaPlus size={30}/>
            </Tete>
            {imageSrc ? (
              <ImagePreview src={imageSrc} alt="Prévisualisation" />
            ) : (
              <h2>Ajouter une image</h2>
            )}
          </label>
          <Input
            type="file"
            id="image-upload"
            style={{ display: 'none' }} 
            accept="image/*"
            onChange={handleImageChange}
          />
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
            <P style={{ fontWeight: "bold", marginBottom: "0px" }}>Obligatoire</P>
            <P style={{ marginBottom: "40px", color: "#ccc" }}>Donnez plus de détails possible</P>
          <Row>
            <FormGroup>
              <Label htmlFor="name">Nom du médicament:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Entrez le nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Entrez la description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                type="text"
                name="dosage"
                id="dosage"
                placeholder="Entrez le dosage"
                value={formData.dosage}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="price">Prix</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Entrez le prix"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <ButtonGroup style={{ marginBottom: "30px" }}>
              <Button type="button" onClick={onClose} style={{ backgroundColor: "white", padding: "10px 40px", fontSize: "20px", border: "1px solid #BBB",  borderRadius: "5px" }}>
                Annuler
              </Button>
              <Button type="submit" style={{ backgroundColor: "#A7DBF5", padding: "10px 30px", fontSize: "20px", border: "none", borderRadius: "5px" }}>Enregistrer</Button>
          </ButtonGroup>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;


