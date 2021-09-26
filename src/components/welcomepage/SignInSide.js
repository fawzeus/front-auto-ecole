import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(img/SignIn.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  let history = useHistory();
  const classes = useStyles();

  /********************************* */

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectAdmin, setRedirectAdmin] = useState(false);
  const [redirectCandidate, setRedirectCandidate] = useState(false);
  const [redirectEmployee, setRedirectEmployee] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const response2 = await fetch("http://localhost:8000/user/profile", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const content = await response2.json();
    if (content.role === 1) setRedirectAdmin(true);
    if (content.role === 2) setRedirectEmployee(true);
    if (content.role === 3) setRedirectCandidate(true);

    if (redirectAdmin) {
      alert("admin");
      return <Redirect to="/DashbordGestion" />;
    }
    if (redirectCandidate) {
      alert("condidate");
      return <Redirect to="/CandidatDashboard" />;
    }
    if (redirectEmployee) {
      alert("employee");
      return <Redirect to="/" />;
    }

    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const content2 = await response.json();
    if (content2.role === 1) setRedirectAdmin(true);
    if (content2.role === 2) setRedirectEmployee(true);
    if (content2.role === 3) setRedirectCandidate(true);
  };

  if (redirectAdmin) {
    alert("admin");
    return <Redirect to="/DashbordGestion" />;
  } else if (redirectCandidate) {
    alert("candidate");
    return <Redirect to="/CandidatDashboard" />;
  } else if (redirectEmployee) {
    alert("employee");
    return <Redirect to="/" />;
  }

  /********************************* */

  /*function onCreatePost(e) {
    
    e.preventDefault();
    const postData = {
      username,
      password,
      
    };
    axios
      .post(`http://localhost:8000/user/login`, postData)
      .then((response) => {
        alert('hi');
        console.log(response);
      });
  }*/

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <button
          id="accueil1"
          className="btn-custom-sc"
          onClick={() => {
            history.push("/");
          }}
        >
          HOME
        </button>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} type="submit" onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              Number
              fullWidth
              id="username"
              label="User Name"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}></Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
