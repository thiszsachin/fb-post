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
  const [gifSearch, setGifSearch] = useState("");
  const [gifShow, setGifShow] = useState(false);
  const [gifData, setGifData] = useState([]);
  const [gif, setGif] = useState("");
  const [gifSelected, setGifSelected] = useState();

  const classes = useStyles();

  const handleSubmit = () => {
    const dd = new Date().getDate();
    const mm = new Date().getMonth();
    const yyyy = new Date().getFullYear();
    const date = dd + "-" + mm + "-" + yyyy;
    setAnchorEl(null);
    setText("");
    setArr([{ post: text, date: date, gif: gif }, ...arr]);

    setGif("");
    setGifData([]);
    setGifSearch("");
    setGifShow(false);
  };

  const handleGif = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=ofxp2AAxTRdrG4Aj7z4ydTOEDu2UdSu8&q=" +
        gifSearch +
        "&limit=5"
    )
      .then((res) => res.json())
      .then((data) => {
        setGifData(data.data);
        setGifShow(true);
      });
  };
  return (
    <>
      <Container className={classes.textArea}>
        <Grid container>
          <Grid
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
          <Grid>
            <Button onClick={() => handleClose(setAnchorEl(null))}>
              <ClearIcon />
            </Button>
          </Grid>
        </Grid>
        <hr />
        <Grid>
          <textarea
            style={{
              height: "250px",
              width: "450px",
              padding: 15,
              fontSize: "25px",
            }}
            placeholder="What's in your mind?"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </Grid>
        <Grid>
          <Input
            value={gifSearch}
            placeholder="Search GIF"
            onChange={(e) => {
              setGifSearch(e.target.value);
            }}
          />
        </Grid>
        <Grid style={{ marginTop: 10 }}>
          <Button
            onClick={handleGif}
            size="medium"
            color="primary"
            variant="outlined"
          >
            <GifIcon fontSize="large" />
          </Button>
        </Grid>
        {gifShow && (
          <Grid>
            {gifData.map((data, index) => (
              <div
                style={{ margin: "20px" }}
                onClick={() => {
                  setGif(data.images.preview_gif.url);
                  setGifSelected(index);
                }}
              >
                <img
                  className={`${index === gifSelected ? "border" : ""}`}
                  src={data.images.preview_gif.url}
                  alt="gif"
                />
              </div>
            ))}
          </Grid>
        )}

        <Grid
          style={{
            margin: "15px 0px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              size="medium"
              color="primary"
            >
              Post
            </Button>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default TextArea;
