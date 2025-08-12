import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  CircularProgress,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import instance from "./api/api_instance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState('10');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleLogin = async (e) => {
    router.push("/home");
    e.preventDefault();
    setLoading(true);
    try {
      // const response = await instance.post("/login", { email, password });
      // //   console.log("Login response:", response);
      // router.push("/home");
      // localStorage.setItem("token", response?.data?.token);
    } catch (error) {
      // toast.error('Login failed. Please try again.');
      console.error("Authentication failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={0}>
      <Grid
         bgcolor={"#DC3173"}
        // color={"#FFFF"}
        item
        xs={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <Stack
          direction={"column"}
          component={Paper}
          elevation={1}
          spacing={3}
          sx={{ width: "90%", p: 2, maxWidth: "500px", mx: "auto", borderRadius: 2, backgroundColor: "#DC3173" }}
        >
          <Stack

            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={4}

          >
            <img src="/logoImage.png" alt="" style={{ width: "150px" }} />
            <Typography
              variant="h6"
              className="bold"
              sx={{ color: "#FFFF", textAlign: "center" }}
            >
              Deligo Content Management System
            </Typography>
          </Stack>
          <Typography
            pb={4}
            fontSize={32}
            className="bold"
            color="#FFFF"
            textAlign="center"
          >
            Login Account
          </Typography>
          <form onSubmit={handleLogin} style={{ width: "100%", color: "#FFF" }}>
            <Stack direction={"column"} spacing={2}>
              <label >Email address</label>
              <TextField
                size="small"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                sx={{
                  backgroundColor: "#fff", // white background
                  borderRadius: 1,
                }}
              />

              <label>Password</label>
              <TextField
                size="small"
                placeholder="Enter password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                sx={{
                  backgroundColor: "#fff", // white background
                  borderRadius: 1,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Select
                size="small"
                value={age}
                onChange={handleChange}
                sx={{
                  // backgroundColor: "#fff", // optional white background
                  color: "#fff", // selected text color
                  "& .MuiSelect-icon": {
                    color: "#fff", // dropdown icon color
                  },
                }}
              >
                <MenuItem value={10} sx={{ color: "#000" }}>Admin</MenuItem>
                <MenuItem value={20} sx={{ color: "#000" }}>Driver</MenuItem>
                <MenuItem value={30} sx={{ color: "#000" }}>Dispatcher</MenuItem>
                <MenuItem value={40} sx={{ color: "#000" }}>Fleet</MenuItem>
              </Select>


              {loading ? (
                <CircularProgress
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  size={20}
                />
              ) : (
                <Button
                  variant="contained"
                  className="SemiBold"
                  sx={{

                    textTransform: "capitalize",
                    fontSize: 18,
                    backgroundColor: "#e1356d",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#e1356d",
                      color: "#fff",
                    },
                  }}
                  type="submit"
                  disabled={loading}
                >
                  Login
                </Button>
              )}
            </Stack>
          </form>

        </Stack>
      </Grid>
      {/* <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "100vh",
          display: { xs: "none", lg: "block" },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/banner.svg"
          alt="Login background"
          sx={{
            height: "100%",
            width: "100%",
            overflowY: "hidden",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Grid> */}
    </Grid>
  );
};

export default Login;
