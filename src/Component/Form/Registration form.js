import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./reg.css";
import useForm from "./useForm";
import validate from "./validateInfo";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Reg from "./register.svg";
import Image from 'react-bootstrap/Image'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                IEEE DITU
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <div className="container-fluid Register d-flex flex-row justify-content-center">
            <img className="register_image" src={Reg} alt=""/> 
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <form action="" method="POST" className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    type="text"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.firstName}
                                />
                                {errors.firstName && (
                                    <p className="Err">{errors.firstName}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleChange}
                                    value={values.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email && (
                                    <p className="Err">{errors.email}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="branch"
                                    label="Branch"
                                    name="branch"
                                    autoComplete="branch"
                                    onChange={handleChange}
                                    value={values.branch}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="year"
                                    label="Year"
                                    type="number"
                                    name="year"
                                    autoComplete="year"
                                    onChange={handleChange}
                                    value={values.year}
                                />
                                {errors.year && (
                                    <p className="Err">{errors.year}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="college"
                                    label="College"
                                    name="college"
                                    autoComplete="college"
                                    onChange={handleChange}
                                    value={values.college}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    type="number"
                                    name="phone"
                                    autoComplete="phone"
                                    onChange={handleChange}
                                    value={values.phone}
                                />
                                {errors.phone && (
                                    <p className="Err">{errors.phone}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                    style={{
                                        minWidth: "100%",
                                    }}>
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={values.gender}
                                        onChange={handleChange}
                                        required
                                        label="Gender"
                                        name="gender">
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>
                                            Female
                                        </MenuItem>
                                        <MenuItem value={"Other"}>
                                            Other
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                {errors.gender && (
                                    <p className="Err">{errors.gender}</p>
                                )}
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <div class="col-md-6">
                                    <div class="label-flex">
                                        <label for="meal_preference">
                                            Gender
                                        </label>
                                    </div>
                                    <div
                                        class="select-list"
                                        style={{
                                            position: "relative",
                                            display: "list-item",
                                            width: "100%",
                                        }}>
                                        <select
                                            name="meal_preference"
                                            id="meal_preference">
                                            <option value="#">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                                Female
                                            </option>
                                            <option value="I don't want to disclose">
                                                I don't want to disclose
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </Grid> */}

                            {/* <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid> */}
                            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="secondary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Register
                        </Button>
                        {/* <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid> */}
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}
