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
    root: {
        width: '80%',
        margin: '5% auto',
    },
    table: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
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
    createData(2, "Boyas", "Admin"),
    createData(3, "Juan", "Admin"),
    createData(4, "Ian", "Admin"),
    createData(5, "Shinta", "Admin"),
];

export default function Admin() {
    const classes = useStyles();

    return (
        <Fragment >
            <div className={classes.root}>
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

                <TableContainer component={Paper} className={classes.table} >
                    <Table  aria-label="a dense table" size="small">
                        <TableHead>
                            <TableRow > 
                                <TableCell>
                                    <h2>No</h2>
                                </TableCell>
                                <TableCell align="left">
                                    <h2>Name</h2>
                                </TableCell>
                                <TableCell align="left">
                                    <h2>Role</h2>
                                </TableCell>
                                <TableCell align="right">
                                    <h2>Action</h2>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.no}>
                                    <TableCell component="th" scope="row">
                                        <h3>{row.no}</h3>
                                    </TableCell>
                                    <TableCell align="left">
                                        <h3>{row.name}</h3>
                                    </TableCell>
                                    <TableCell align="left">
                                        <h3>{row.role}</h3>
                                    </TableCell>
                                    <TableCell align="right">
                                        <h3>{row.action}</h3>
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
            </div>
        </Fragment>
    );
}