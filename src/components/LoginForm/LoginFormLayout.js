import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginFormLayout = ({children}) => {
    return (
        <Container
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexDirection : 'column',
                alignItems: 'center',
                justifyContent : 'center',
                flexGrow: 1,
            }}    
        >
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
           </Typography>
           {children}
        </Container>
    );
}

export default LoginFormLayout;