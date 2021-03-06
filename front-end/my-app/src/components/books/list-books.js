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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Accordion from "@material-ui/core/Accordion";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginTop: 100,
    marginLeft: 50,
    float: "left",
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
  link: {
    textDecoration: "none",
    color: "#707070",
  },
}));

function AllBooks(props) {
  console.log(props, "hhhh");
  const [liked, setLiked] = useState(false);
  // const [likes, updateLikes] = useState([]);
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = (id) => {
  //   setExpanded(!expanded);
  // };

  const likeBook = (liked) => {
    setLiked(!liked);
  };
  const classes = useStyles();

  return (
    <>
      {props.bookss.map((item) => {
        return (
          <Box>
            <Card className={classes.root}>
              <Link to={`/book/${item._id}`} className={classes.link}>
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
              </Link>
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
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => likeBook(liked)}
                >
                  {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>

                <IconButton aria-label="Commrnt">
                  <InsertCommentIcon />
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

const mapStateToProps = (state) => {
  return {
    bookss: state.books,
  };
};

export default connect(mapStateToProps)(AllBooks);
