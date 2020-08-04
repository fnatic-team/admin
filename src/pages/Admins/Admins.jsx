import React, { Fragment, useEffect } from "react";
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
import { getAllAdmin, deleteAdmin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '5% auto',
    },
    table: {
        padding: theme.spacing(3),
    },
    tablehead: {
        padding: '0',
        margin: '0',
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    },
}));


export default function Admin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const admins = useSelector((state) => state.admin);
    console.log(admins)

    useEffect(() => {
        dispatch(getAllAdmin());
    }, [dispatch]);

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
                    <Table aria-label="a dense table" size="small">
                        <TableHead >
                            <TableRow className={classes.tablehead} > 
                                <TableCell >
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
                            {Array.isArray(admins) &&
                            admins.map((row, index) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <h3>{index+1}</h3>
                                    </TableCell>
                                    <TableCell align="left">
                                        <h3>{row.fullname}</h3>
                                    </TableCell>
                                    <TableCell align="left">
                                        <h3>{row.role}</h3>
                                    </TableCell>
                                    {row.role==='superadmin' && 
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() =>
                                                dispatch(deleteAdmin(row._id))
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Fragment>
    );
}