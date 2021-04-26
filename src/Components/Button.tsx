import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  button: {
  }
});
interface Props {
    onClick?: Function;
    className: string;
    classes: any;
    variant: any;
    color: any;
 }
const Buttons: React.FC<Props> = (props) => 
     (
      <Button variant={props.variant} color={props.color} className={props.classes}>
        <b>{props.children}</b>
      </Button>
    );
  
  export default withStyles(styles)(Buttons);