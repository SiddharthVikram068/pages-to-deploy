// RegisterPage.jsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {
  RegisterContainer,
  FormContainer,
  StyledButton,
} from "./AuthStyles.js";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = () => {
    // Add registration logic here
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          margin="normal"
        />
        <TextField
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
        </TextField>
        <TextField
          label="Gender"
          variant="outlined"
          fullWidth
          select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          margin="normal"
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <StyledButton onClick={handleRegister} fullWidth>
          Register
        </StyledButton>
      </FormContainer>
    </RegisterContainer>
  );
};

export default RegisterPage;

// // src/components/RegisterPage.js
// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
// import { RegisterContainer, FormContainer, StyledButton } from './AuthStyles.js';

// const RegisterPage = () => {
//     const [fullName, setFullName] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [gender, setGender] = useState('');
//     const [role, setRole] = useState('');

//     const handleRegister = () => {

//     };

//     return (
//         <RegisterContainer>
//             <FormContainer>
//                 <Typography variant="h4" align="center" gutterBottom>
//                     Register
//                 </Typography>
//                 <TextField
//                     label="Full Name"
//                     variant="outlined"
//                     fullWidth
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     margin="normal"
//                 />
//                 <TextField
//                     label="Username"
//                     variant="outlined"
//                     fullWidth
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     margin="normal"
//                 />
//                 <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     margin="normal"
//                 />
//                 <TextField
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     margin="normal"
//                 />
//                 <TextField
//                     label="Confirm Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     margin="normal"
//                 />
//                 <TextField
//                     label="Role"
//                     variant="outlined"
//                     fullWidth
//                     select
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     margin="normal"
//                 >
//                     <MenuItem value="user">User</MenuItem>
//                     <MenuItem value="admin">Admin</MenuItem>
//                     <MenuItem value="clerk">Clerk</MenuItem>
//                 </TextField>
//                 <TextField
//                     label="Gender"
//                     variant="outlined"
//                     fullWidth
//                     select
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     margin="normal"
//                 >
//                     <MenuItem value="male">Male</MenuItem>
//                     <MenuItem value="female">Female</MenuItem>
//                 </TextField>
//                 <StyledButton onClick={handleRegister} fullWidth>
//                     Register
//                 </StyledButton>
//             </FormContainer>
//         </RegisterContainer>
//     );
// };

// export default RegisterPage;
