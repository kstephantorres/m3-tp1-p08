import { Form, FormGroup, Button } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = () => {
        if (Object.values(formData).every((value) => value.trim() !== '')) {
          alert('Datos enviados ✅');
          setFormData({
            nombre: '',
            apellido: '',
            dni: '',
            email: '',
          });
        } else {
          alert('Complete todos los datos ❌');
        }
      };

    return (
        <Form className="mt-3">
            <FormGroup>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                />
            </FormGroup>
            <Form.Group controlId="formApellido">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formDNI">
                <Form.Label>DNI:</Form.Label>
                <Form.Control
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit} className="my-3">
                Enviar
            </Button>
        </Form>
    );
};

export default Formulario;