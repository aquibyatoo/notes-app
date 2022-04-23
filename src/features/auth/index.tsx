import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Auth = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    password: "",
  });

  const [error, setError] = React.useState(false);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userDetails.username === "admin" && userDetails.password === "admin") {
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      router.replace("/");

      return;
    }

    setError(true);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    if (error) setError(false);

    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20rem" },
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
            }}
          >
            <TextField
              name="username"
              label="Username"
              variant="standard"
              value={userDetails.username}
              onChange={handleChange}
              error={error && userDetails.username !== "admin"}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              error={error && userDetails.password !== "admin"}
              value={userDetails.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "10rem", margin: "auto", marginTop: "1rem" }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
