import { Button, TextField, Typography } from "@mui/material";


const Login = () => {
  const name = 'Jakyp'
  return (
    <>
      <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введети ваш логин и пароль</Typography>
      <TextField fullWidth margin="normal" label='Email' variant="outlined" placeholder="Введите ваш email"/>
      <TextField type="password" fullWidth margin="normal" label='Password' variant="outlined" placeholder="Введите ваш пароль"/>
      <Button sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily:'Poppins'}}>У вас нет аккаунта?<span className="incitingText">Регистрация</span></Typography>
    </>
  );
};

export default Login;
