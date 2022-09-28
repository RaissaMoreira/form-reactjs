import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';
import { Container, Typography  } from '@mui/material';
import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography >
      <FormCadastro aoEnviar={ aoEnviarForm } validacoes={{ cpf: validarCPF, senha: validarSenha, nome:validarSenha }}/>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;