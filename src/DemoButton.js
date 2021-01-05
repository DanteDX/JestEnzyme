import React from "react";
import {Button} from "@material-ui/core";

export default function DemoButton({demoFunc}){
    return(
        <Button variant="contained" color="secondary" onClick={e => demoFunc()}>
            Demo Button
        </Button>
    )
};