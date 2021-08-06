import { Grid } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import { useContext } from "react";
import { GifContext } from "../giphyContext/GiphyContext";
import List from "./List";

const Lists = () => {
  const [arr] = useContext(GifContext);
  return (
    <Container>
      <Grid container>
        <Grid style={{ margin: "10px 0px 10px 130px" }}>
          <Typography color="primary" variant="h5">
            Your previous Posts
          </Typography>
        </Grid>
        <Grid>
          {arr.map((post, i) => (
            <List key={i} post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Lists;
