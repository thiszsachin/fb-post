import { Grid } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import { useContext } from "react";
import { GifContext } from "../giphyContext/GiphyContext";
import List from "./List";

const Lists = () => {
  const [arr] = useContext(GifContext);
  return (
    <Container>
      <Grid container xs={12} justifyContent="center">
        <Grid xs={12} style={{ margin: "10px 0px 10px 130px" }}>
          <Typography color="primary" variant="h5">
            Your previous Posts
          </Typography>
        </Grid>
        <Grid xs={12} alignContent="center">
          {arr.map((post) => (
            <List post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Lists;
