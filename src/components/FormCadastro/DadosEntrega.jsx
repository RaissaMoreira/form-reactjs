import { Button, TextField } from '@mui/material';
import React from 'react';

function DadosEntrega(){
  return(
    <form>
      <TextField margin='normal' fullWidth id="cep" label="CEP" type="number" />
      <TextField margin='normal' fullWidth id='endereco' label="endereço" type="text" />
      <TextField margin='normal' id="numero" label="número" type="number" />
      <TextField margin='normal' id='estado' label="estado" type="text" />
      <TextField margin='normal' fullWidth id='cidade' label="cidade" type="text" />

      <Button fullWidth type="submit" variant='contained'>Finalizar Cadastro</Button>
    </form>
  )
}

export default DadosEntrega;