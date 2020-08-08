import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetail } from "../../redux/actions";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "auto",
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(3),
        width: theme.spacing(40),
    },
    typography: {
        width: theme.spacing(20),
    }
}));

export default function Payment(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.transaction.transactionById);
    const id = props.id;
    useEffect(() => {
        dispatch(getTransactionDetail(id));
    }, [dispatch, id]);
    
    return (
        <Container className={classes.root}>
            <Grid container item xs={12} md={12} lg={12}>
                <Grid key={detail._id} container item xs={12} md={12} lg={12}>
                    <Grid container item xs={12} md={12} lg={12}>
                        <Typography className={classes.typography}
                            variant="h6" >
                            Nominal Transfer
                        </Typography>
                        <TextField
                            className={classes.textField}
                            defaultValue={detail.nama_acara}
                            
                        />
                    </Grid>
                    <Grid container item xs={12} md={12} lg={12}>
                        <Typography className={classes.typography}
                            variant="h6" >
                            Bukti Transfer
                        </Typography>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            // onClick={handleOpen}
                        >
                            Upload Bukti Transfer
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}