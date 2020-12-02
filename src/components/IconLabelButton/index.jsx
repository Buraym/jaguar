import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
    function IconLabelButton() {
    const classes = useStyles();
    return (
        <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<SendIcon />}
      size="large"
      >
        enviar </Button>
    )
    }
    export default IconLabelButton;