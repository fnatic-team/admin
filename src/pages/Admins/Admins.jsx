import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 1000,
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    },
}));

function createData(no, name, role, action) {
    return { no, name, role, action };
}

const rows = [
    createData(1, "Rohmad", "Super Admin"),
    createData(1, "Boyas", "Admin"),
    createData(1, "Juan", "Admin"),
    createData(1, "Ian", "Admin"),
    createData(1, "Shinta", "Admin"),
];

export default function Admin() {
    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid>
                        <h1>List Admin</h1>
                    </Grid>
                    <Grid>
                        <Link
                            to="/dashboard/admins/create"
                            className={classes.link}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<AddIcon />}
                            >
                                Add
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.no}>
                                <TableCell component="th" scope="row">
                                    {row.no}
                                </TableCell>
                                <TableCell align="left">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.role}</TableCell>
                                <TableCell align="right">{row.action}
                                    <Link
                                            to="/dashboard/admins/edit"
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                                startIcon={<EditIcon />}
                                            >
                                                Edit
                                            </Button>
                                    </Link>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}