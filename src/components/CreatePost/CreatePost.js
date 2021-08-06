import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import { Avatar, Grid, Typography, Paper } from "@material-ui/core";
import TextArea from "../TextArea";
import pic from "../../static/images/sachinPic.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  postText: {
    borderRadius: "24px",
    padding: "12px 30px",
    marginLeft: 20,
    backgroundColor: "#ebe6da",
  },
}));

export default function CreatePost() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem aria-haspopup="true" aria-controls="lock-menu">
          <Grid>
            <Avatar src={pic} />
          </Grid>
          <ListItem
            button
            className={classes.postText}
            onClick={handleClickListItem}
          >
            <Typography>What's in your mind, Sachin?</Typography>
          </ListItem>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <TextArea handleClose={handleClose} setAnchorEl={setAnchorEl} />
      </Menu>
    </Paper>
  );
}
