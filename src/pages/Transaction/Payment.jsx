import React, { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetail, updateAdminPayment } from "../../redux/actions";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
// import Button from "@material-ui/core/Button";
import ReactFilestack from "filestack-react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

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
    const history = useHistory();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.transaction.transactionById);
    const id = props.id;
    useEffect(() => {
        dispatch(getTransactionDetail(id));
    }, [dispatch, id]);

    const [formData, setFormData] = useState({
        nom_trans_adm: "",
        bukti_trans_adm: "",
        
    });

    // const handleChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    
    return (
        <Container className={classes.root}>
            <Formik
             initialValues={{ username: "", password: "" }}
             validate={(values) => {
               const errors = {};
               if (!values.username) {
                 errors.username = "Required";
               }
               if (!values.password) {
                 errors.password = "Required";
               }
               return errors;
             }}
             onSubmit={(values) => {
               dispatch(updateAdminPayment(values, history));
             }}
            >
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
                            <ReactFilestack
                                    apikey={`${process.env.REACT_APP_API_KEY}`}
                                    customRender={({ onPick }) => (
                                        <div>
                                            <button
                                                className="btn btn-primary btn-block"
                                                onClick={onPick}
                                            >
                                                Upload Foto Profile
                                            </button>
                                        </div>
                                    )}
                                    onSuccess={(res) =>
                                        setFormData({
                                            ...formData,
                                            image: res.filesUploaded[0].url,
                                        })
                                    }
                                />
                        </Grid>
                    </Grid>
                </Grid>
            </Formik>
        </Container>
    );
}