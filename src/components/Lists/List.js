import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import pic from "../../static/images/sachinPic.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,
    marginBottom: 15,
    marginLeft: 50,
    margin: "20px 0 15px 50px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function List({ post }) {
  const [like, setLike] = useState(false);
  const handleLikes = () => {
    setLike(!like);
  };
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader
        avatar={<Avatar src={pic} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sachin Srivastava"
        subheader={post.date}
      />
      <CardContent>
        <Typography variant="h6" color="textPrimary" component="p">
          {post.post}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="https://media.giphy.com/media/144Q1gg0FkTEVG/giphy.gif"
      />
      <hr />
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          color={like ? "primary" : "default"}
          onClick={handleLikes}
        >
          <ThumbUpAltIcon />
          <Typography variant="h6">
            <b>Like</b>
          </Typography>
        </IconButton>
        {/* <IconButton aria-label="add to favorites">
          <ChatBubbleOutlineIcon />
          <Typography variant="h6">
            <b>Comment</b>
          </Typography>
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
          <Typography variant="h6">
            <b>Share</b>
          </Typography>
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
