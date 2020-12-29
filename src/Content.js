import React, { Component } from 'react';
import {useSpring, animated} from 'react-spring'
import Typography from '@material-ui/core/Typography';
import './App.css'


const Content = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return ( 
        <div   style={{textAlign: "center", marginTop: "100px", height: "100%"}}>
          <span style={{display: 'block' , marginLeft: '20%' , marginRight: '20%', borderLeft: '4px solid black',props}}>
          <Typography variant="h4" component="h2" gutterBottom>
          Mission-driven full stack developer with a passion for efficent App design, collaboration, and learning.
                    </Typography>
              
              </span>
          <animated.div style={props} className='about' >
        I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from graduated industrial and information systems engineer to system analyst, to project manager, to soultion architect — I've never stopped engaging my passion to help others and solve problems.
        As a full stack web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</animated.div>
        </div>
     );
}
 
export default React.forwardRef(Content);