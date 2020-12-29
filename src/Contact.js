import React, { Component } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Icon, ListItemIcon } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

const Contact = (props,ref) => {
    return (  
        <div ref={ref} style={{marginLeft: "25%"}}>
            <EmailIcon/> 
            <Link href="mailto:alexkleymen@gmail.com?subject = Feedback&body = Message"  target="_blank" style={{position: "relative" , bottom: "6px",left: "3px"}} >
                alexkleymen@gmail.com
            </Link><br/><br/>
            <GitHubIcon/>
            <Link href="https://github.com/alexkleymen"  target="_blank" style={{position: "relative" , bottom: "6px",left: "3px"}} >
            alexkleymen
            </Link><br/><br/>
            <LinkedInIcon/>
            <Link href="https://www.linkedin.com/in/alex-kleymen-04851092/"  target="_blank" style={{position: "relative" , bottom: "6px",left: "3px"}} >
                alex kleymen
            </Link><br/><br/>
        </div>
    );
}
 
export default React.forwardRef(Contact);