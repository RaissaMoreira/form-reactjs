import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form 
    onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ cep, endereco, numero, estado, cidade })
      }}>

      <TextField 
      value={ cep }
      onChange={(event) => {
        setCep(event.target.value);
      }}
      margin="normal" 
      fullWidth 
      id="cep" 
      label="CEP" 
      type="number" />

      <TextField
      value={ endereco }
      onChange={(event) => {
        setEndereco(event.target.value);
      }}
        margin="normal"
        fullWidth
        id="endereco"
        label="endereço"
        type="text"
      />

      <TextField 
      value={ numero }
      onChange={(event) => {
        setNumero(event.target.value);
      }}
      margin="normal" 
      id="numero" 
      label="número" 
      type="number" />

      <TextField 
      value={ estado }
      onChange={(event) => {
        setEstado(event.target.value);
      }}
      margin="normal" 
      id="estado" 
      label="estado" 
      type="text" />

      <TextField
      value={ cidade }
      onChange={(event) => {
        setCidade(event.target.value);
      }}
        margin="normal"
        fullWidth
        id="cidade"
        label="cidade"
        type="text"
      />

      <Button fullWidth type="submit" variant="contained">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
