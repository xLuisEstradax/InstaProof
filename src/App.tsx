import React from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Input from "./components/Input";
import Button from './components/Button';
import Title from "./components/Title";
import LinK from './components/Link';

import './App.css';
import Center from './components/Center';

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          <Title>Iniciar sesión</Title>
          <Input placeholder='Correo' Label='Correo' />
          <Input placeholder='Contraseña' Label='Contraseña' />
          <Button block={true}> Enviar </Button>
          <Center>
            <LinK>Registrate</LinK>
          </Center>
        </Card>
      </Container>
    )
  };
}

export default App;
