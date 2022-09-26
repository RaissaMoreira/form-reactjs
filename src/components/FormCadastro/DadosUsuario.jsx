import { TextField, Button } from '@mui/material';
import React from 'react';

function DadosUsuario({ aoEnviar }){
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField required fullWidth margin='normal' id="email" label="email" type="email" />
      <TextField required fullWidth margin='normal' id="senha" label="senha" type="password" />
      <Button variant='contained' type='submit'>Cadastrar</Button>
    </form>
  )
}

export default DadosUsuario;