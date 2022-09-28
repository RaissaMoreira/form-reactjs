import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({senha: { valido: true, texto:'' }});

  function validarCampos(event){
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido){
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({email, senha});
        }
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
        name="email"
        label="email"
        type="email"
      />
      <TextField
      value={ senha }
      onChange={(event) => {
        setSenha(event.target.value);
      }}
      onBlur={validarCampos}
      error={!erros.senha.valido}
      helperText={erros.senha.texto}
        required
        fullWidth
        margin="normal"
        id="senha"
        name="senha"
        label="senha"
        type="password"
      />
      <Button variant="contained" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
