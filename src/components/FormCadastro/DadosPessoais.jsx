import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf: { valido: true, texto:'' }});

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
      }}>
      <TextField 
      value={nome}
      onChange={event => {
        setNome(event.target.value);
      }}
      id="nome" label="Nome" margin="normal" fullWidth />

      <TextField 
      value={sobrenome}
      onChange={event => {
        setSobrenome(event.target.value);
      }}
      id="sobrenome" label="Sobrenome" margin="normal" fullWidth />

      <TextField 
      value={cpf}
      onChange={event => {
        setCpf(event.target.value);
      }}
      onBlur={(event) => {
        const ehValido = validarCPF(event.target.value);
        setErros({ cpf: ehValido });
      }}
      error={ !erros.cpf.valido }
      helperText={ erros.cpf.texto }
      id="CPF" label="CPF" margin="normal" fullWidth />

      <FormControlLabel
        label="Promoções"
        control={<Switch 
          checked={promocoes}
          onChange={(event) => {
          setPromocoes(event.target.checked);
          }} 
        name="promocoes"/>}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch 
          checked={novidades}
          onChange={(event) => {
          setNovidades(event.target.checked);
          }} 
        name="novidades"/>}
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
