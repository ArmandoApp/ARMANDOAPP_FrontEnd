import React from 'react';
import Image from './Images/background.PNG';
import WorkerSignUpHome from './WorkerSignUpHome';

const styleDiv = {
    height: '240px',
    width: '100%',
    paddingRight: '9.3vw',
    paddingLeft: '9.3vw'
};

const styleTextDiv = {
    padding: '0 6.6vw', 
    height: '240px',
    width: '100%',
};

const style = {
    paddingTop: '44px',
    paddingBottom: '44px',
    marginBottom: '24px'
};

const stylePA = {
    margin: '0px',
    fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif' ,
    fontWeight: '400px',
    fontSize: '44px',
    lineHeight: '60px',
    letterSpacing: '-.03em'
};

const stylePB = {
    fontFamily: 'ff-clan-web-pro, Helvetica Neue, Helvetica, sans-serif ',
    //fontWeight: '200',
    fontSize: '44px',
    lineHeight: '60px',
    letterSpacing: '-.03em',
    margin: '0'
};

const backgroundImage = {
    backgroundImage: `url(${Image})`,
    marginLeft:"10%",
    height: '500px',
    width: '49%',
};

const SvgIconExampleSimple = () => (
    <div>
        <div  style={styleDiv}>
            <div style={styleTextDiv}>
                <div style={style}>
                    <p style={stylePA}>Make your life better</p>
                    <p style={stylePB}>With us</p>
                    <div>
                    <WorkerSignUpHome />
                    </div>        
                </div>
            </div>
        </div>
        <div style={backgroundImage}>
        </div>
    </div>
  );

  export default SvgIconExampleSimple;