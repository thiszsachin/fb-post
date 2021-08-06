import { Button, Input } from "@material-ui/core";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { useContext } from "react";
import { GifContext } from "./giphyContext/GiphyContext";
import GifIcon from "@material-ui/icons/Gif";

const useStyles = makeStyles((theme) => ({
  textArea: {
    height: 500,
    width: 550,
  },
}));

const TextArea = ({ handleClose, setAnchorEl }) => {
  const [arr, setArr] = useContext(GifContext);
  const [text, setText] = useState("");
  const classes = useStyles();

  const handleSubmit = () => {
    const dd = new Date().getDate();
    const mm = new Date().getMonth();
    const yyyy = new Date().getFullYear();
    const date = dd + "-" + mm + "-" + yyyy;
    setAnchorEl(null);
    alert("Your post is Updated");

    setArr([{ post: text, date: date }, ...arr]);
  };
  return (
    <Container className={classes.textArea}>
      <Grid container xs={12}>
        <Grid
          xs={12}
          sm={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">
            <b>Create post</b>
          </Typography>
        </Grid>
        <Grid xs={12} sm={2}>
          <Button onClick={() => handleClose(setAnchorEl(null))}>
            <ClearIcon />
          </Button>
        </Grid>
      </Grid>
      <hr />
      <Grid>
        <textarea
          style={{
            height: "300px",
            width: "450px",
            padding: 15,
            fontSize: "25px",
          }}
          placeholder="What's in your mind?"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Grid>
      <Grid style={{ marginTop: 10 }}>
        <Button size="medium" color="primary" variant="outlined">
          {/* <Typography>Add</Typography> */}
          <GifIcon fontSize="large" />
        </Button>
      </Grid>
      <Grid
        style={{
          margin: "10px 0px",
        }}
      >
        <Button
          onClick={handleSubmit}
          variant="contained"
          size="medium"
          color="primary"
        >
          Post
        </Button>
      </Grid>
    </Container>
  );
};

export default TextArea;
