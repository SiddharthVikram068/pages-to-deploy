import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const FormContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(2),
  backgroundColor: "rgba(48, 48, 48, 0.9)",
  color: "white",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: "1rem",
  padding: theme.spacing(1, 3),
  backgroundColor: "#7e57c2",
  color: "white",
  "&:hover": {
    backgroundColor: "#5e35b1",
  },
}));

// Parent container for centering the form
const GlobalStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center", // Horizontal centering
  alignItems: "center", // Vertical centering
  height: "100vh", // Full viewport height for vertical centering
}));

const WhiteTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: "white", // Make the input text white
  },
  "& .MuiInputLabel-root": {
    color: "#7e57c2", // Make the label text white
  },
  "& .MuiInputBase-root.Mui-focused": {
    color: "white", // Keep the text white when focused
  },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
    borderColor: "#7e57c2", // Optional: Change border color on focus
  },
}));

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Password and confirm password check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // Clear error if passwords match
    console.log({
      username,
      password,
    });
  };

  const handleGoBack = () => {};

  return (
    <GlobalStyles>
      <FormContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <WhiteTextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          aria-label="Username"
        />
        <WhiteTextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          aria-label="Password"
        />
        {error && (
          <Typography variant="body2" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          {/* Left element */}
          <div style={{ paddingRight: "20px" }}>
            <StyledButton onClick={handleLogin} fullWidth>
              Login
            </StyledButton>
          </div>

          <div style={{ paddingLeft: "20px" }}>
            <StyledButton onClick={handleGoBack} fullWidth>
              Go Home
            </StyledButton>
          </div>
        </div>
      </FormContainer>
    </GlobalStyles>
  );
};

export default App;
