import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionDetail, updateAdminPayment } from "../../redux/actions";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import ReactFilestack from "filestack-react";
import Button from "@material-ui/core/Button";
import FormGroup from '@material-ui/core/FormGroup';


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
         // eslint-disable-next-line
    }, []);
   
    console.log(detail.jumlah_bayar, 'bayar')
    const [formData, setFormData] = useState({
        bukti_trans_adm: "",
        nom_trans_adm: 0,
        status_transaksi: "PAID BY ADMIN",
    });
    console.log(formData, 'form data')

 // eslint-disable-next-line 
    String.prototype.localIDR = function () {
        return Number(this).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 2,
        });
    };
    //  const handleChange = (event) => {
    //     event.preventDefault();
    //     setFormData({
    //         ...formData,
    //         nom_trans_adm: detail.jumlah_bayar,
    //     })
    // };

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <Container className={classes.root}>
            <Grid container item xs={12} md={12} lg={12}>
                <Grid key={detail._id} container item xs={12} md={12} lg={12}>
                    <Grid container item xs={12} md={12} lg={12}>
                        <Typography className={classes.typography}
                            variant="h6" >
                            Event Name
                        </Typography>
                        <TextField
                            className={classes.textField}
                            defaultValue={detail.nama_acara}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12} md={12} lg={12}>
                        <Typography className={classes.typography}
                            variant="h6" >
                            Event Organizer
                        </Typography>
                        <TextField
                            className={classes.textField}
                            defaultValue={detail.penyelenggara}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12} md={12} lg={12}>
                        <Typography variant="h6" className={classes.typography}>
                            Nominal Transfer
                        </Typography>
                        <TextField 
                            className={classes.textField}
                            defaultValue={detail !== null &&
                                `${`${
                                    detail.jumlah_bayar
                                }
                                    `.localIDR()}`}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12} md={12} lg={12}>
                        <FormGroup
                            style={{ textAlign: "left" }}>
                            <ReactFilestack
                                apikey={`${process.env.REACT_APP_API_KEY}`}
                                customRender={({ onPick }) => (
                                    <div>
                                        <button
                                            className="btn btn-primary btn-block"
                                            onClick={onPick}
                                        >
                                            Upload Bukti Pembayaran
                                        </button>
                                    </div>
                                )}
                                onSuccess={(res) =>
                                    setFormData({
                                        ...formData,
                                        bukti_trans_adm:
                                            res.filesUploaded[0].url,
                                        nom_trans_adm: detail.jumlah_bayar
                                    })
                                }
                            />
                            <Grid container item xs={12} md={12} lg={12}>
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => {
                                        dispatch(updateAdminPayment(id, formData))
                                      } }
                                    >
                                    Pay Now
                                </Button>
                            </Grid>
                        </FormGroup>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Container>
    );
}