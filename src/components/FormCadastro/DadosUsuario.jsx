import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
      value={ email }
      onChange={(event) => {
        setEmail(event.target.value);
      }}
        required
        fullWidth
        margin="normal"
        id="email"
        label="email"
        type="email"
      />
      <TextField
      value={ senha }
      onChange={(event) => {
        setSenha(event.target.value);
      }}
        required
        fullWidth
        margin="normal"
        id="senha"
        label="senha"
        type="password"
      />
      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
