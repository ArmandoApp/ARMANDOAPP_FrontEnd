
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import GridList from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import PaidIcon from './Images/paid.png';
import React from "react";

const Payment = ()=> {
    const avatarStyle = { backgroundColor: "#ffffff", height: 70, width: 70 , margin: 10 };
    const cancelStyle = { float: "right", marginTop: 5};
    const resumeStyle = { float: "left", marginTop: 5};
    const paymentAvatarStyle = { backgroundColor: "#26580f", height: 35, width: 35};
    const paperStyle = {
        height: '500px',
        width: '400px',
        background: '#f8f8f9',
        position: 'relative',
        marginLeft:'35%',
        marginTop: '70px'
    };

    const styleText = {
        marginLeft: '100px',
        marginTop: '-100px',
        fontSize: '1.71429rem',
        fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
        fontWeight: '400'
    };
    const tabla=[];
    return(
        
            <Paper  style={paperStyle}>
                <div align="center">
                    <Avatar style={avatarStyle} src="/WillSmith.jpg"/>
                    <div>Will Smith</div >
                </div>
                <FlatButton variant="outlined" style={cancelStyle}>Cancel</FlatButton>
    
                <div align="center">
                    <Avatar style={paymentAvatarStyle}  src={PaidIcon} />
                   
                </div>
                <div align="center">
                    <h1>Resumen de pago</h1>
                    <h2>Este es el valor a pagar por el servicio prestado</h2>
                    <h2 style={resumeStyle}>Precio</h2>
                    <h2 style={cancelStyle}>150.000</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h2 style={resumeStyle}>Tarifa Armando</h2>
                    <h2 style={cancelStyle}>10.000</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h2 style={resumeStyle}>Fecha</h2>  
                    <h2 style={cancelStyle}>20 febrero 2022</h2>
                    <br/>
                    <br/>
                    <br/>
                    
                    <FlatButton variant="contained" align >Pagar</FlatButton>
                </div>
            </Paper>
        
        
    )
}
export default Payment;