import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados);
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={ coletarDados } />,
    <DadosPessoais aoEnviar={ coletarDados } validarCPF={ validarCPF }/>,
    <DadosEntrega aoEnviar={ coletarDados } />,
    <Typography variant="h5">Obrigada pelo Cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo(){
    setEtapaAtual(etapaAtual + 1);
  }
  
  return (
    <>
      <Stepper activeStep={ etapaAtual }>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>

      { formularios[etapaAtual] }
    </>
  );
}

export default FormCadastro;
