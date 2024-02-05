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
    
      const handleSubmit = (e) => {
        e.preventDefault()
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
        <Form onSubmit={handleSubmit} className="mt-3">
            <FormGroup>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                minLength={2}
                maxLength={40}
                />
            </FormGroup>
            <Form.Group controlId="formApellido">
                <Form.Label>Apellido:</Form.Label>
                <Form.Control
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                required
                minLength={2}
                maxLength={50}
                />
            </Form.Group>

            <Form.Group controlId="formDNI">
                <Form.Label>DNI:</Form.Label>
                <Form.Control
                type="number"
                name="dni"
                value={formData.dni}
                onChange={handleInputChange}
                required
                min={10000000}
                max={99999999}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="my-3">
                Enviar
            </Button>
        </Form>
    );
};

export default Formulario;