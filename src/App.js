import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';
import { Container, Typography  } from '@mui/material';
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography >
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome:validarSenha }}>
        <FormCadastro aoEnviar={ aoEnviarForm }/>
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;