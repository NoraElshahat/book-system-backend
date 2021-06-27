import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Image from "material-ui-image";

function OneBook(props) {
  console.log(props.foundBook);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <Typography
          component="div"
          style={{ backgroundColor: "#FAFAFA", height: "100vh" }}
        >
          <Image
            src={`http://localhost:5000/${props.foundBook.picture}`}
            imageStyle={{ width: "inherit", height: "50vh" }}
          />
          <Typography variant="h4" gutterBottom>
            {props.foundBook.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            by : {props.foundBook.author}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.foundBook.description}
          </Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    foundBook: state.books.find((book) => String(book._id) == id),
  };
};

export default connect(mapStateToProps)(OneBook);
