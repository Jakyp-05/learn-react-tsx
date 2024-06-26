import { Button, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <>
      <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
      <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введети данные для регистрации</Typography>
      <TextField fullWidth margin="normal" label='Имя' variant="outlined" placeholder="Введите ваше имя"/>
      <TextField fullWidth margin="normal" label='username' variant="outlined" placeholder="Введите ваш username"/>
      <TextField fullWidth margin="normal" label='Email' variant="outlined" placeholder="Введите ваш email"/>
      <TextField type="password" fullWidth margin="normal" label='Password' variant="outlined" placeholder="Введите ваш пароль"/>
      <TextField type="password" fullWidth margin="normal" label='Password' variant="outlined" placeholder="Повторите ваш пароль"/>
      <Button sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Регистрация</Button>
      <Typography variant="body1" sx={{fontFamily:'Poppins'}}>У вас есть аккаунт?<span className="incitingText">Авторизация</span></Typography>
    </>
  )
}

export default Register
