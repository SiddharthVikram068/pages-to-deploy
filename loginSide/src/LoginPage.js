// src/components/LoginPage.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LoginContainer, FormContainer, StyledButton } from './AuthStyles.js';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    };

    return (
            <LoginContainer>
                <FormContainer>
                    <Typography variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        label="username"
                        variant="outlined"
                        fullWidth
                        value={username}
                    onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    {/* <TextField
                        label="Role"
                        variant="outlined"
                        fullWidth
                        select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        margin="normal"
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="clerk">Clerk</MenuItem>
                    </TextField> */}
                    <StyledButton onClick={handleLogin} fullWidth>
                        Login
                    </StyledButton>
                </FormContainer>
            </LoginContainer>
    );
};

export default LoginPage;
