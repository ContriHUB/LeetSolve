import React from "react";
import {Section , Text , Image} from "../styles/footer";
const Footer =(props)=>{

    return(
        <Section>
            <Text>Made with Love for
					ContriHub&apos;21. EXISTS. {props.Timeout}</Text>                   
        </Section>
    )



};

export default Footer;