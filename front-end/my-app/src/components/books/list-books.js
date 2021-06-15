import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import axios from "axios";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Accordion from "@material-ui/core/Accordion";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginTop: 100,
    marginLeft: 70,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  // expand: {
  //   transform: "rotate(0deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: "rotate(180deg)",
  // },
  content: {
    textOverflow: "ellipsis",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function AllBooks() {
  const [books, updateBooks] = useState([]);
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = (id) => {
  //   setExpanded(!expanded);
  // };

  useEffect(() => {
    axios.get("http://localhost:5000/books/books").then((res) => {
      updateBooks(res.data.data);
    });
  }, []);
  const classes = useStyles();

  return (
    <>
      {books.map((item) => {
        return (
          <Box>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
              />
              <CardMedia
                className={classes.media}
                image={`http://localhost:5000/${item.picture}`}
              />

              {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  noWrap
                  className={classes.content}
                >
                  {item.description}
                </Typography>
              </CardContent>
              {/* </Collapse> */}
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                {/* <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={() => handleExpandClick(item._id)}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton> */}
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </>
  );
}
