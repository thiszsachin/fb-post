import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Lists from "./components/Lists/Lists";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 50,
    margin: "10px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
  postContainer: {
    margin: "10px 0px",
  },
  list: {
    minHeight: 600,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container style={{ backgroundColor: "#ebe6da" }} maxWidth="sm">
      <Paper elevation={3} className={classes.header}>
        <Typography variant="h5">Welcome to Posts.com</Typography>
      </Paper>
      <Paper className={classes.postContainer} elevation={3}>
        <Grid>
          <CreatePost />
        </Grid>
      </Paper>
      <Grid>
        <Paper className={classes.list}>
          <Lists />
        </Paper>
      </Grid>
    </Container>
  );
}

export default App;
