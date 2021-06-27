import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Image from "material-ui-image";
import Box from "@material-ui/core/Box";

// function OneBook(props) {
//   console.log(props.foundBook);
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="xs">
//         <Typography
//           component="div"
//           style={{ backgroundColor: "#FAFAFA", height: "100vh" }}
//         >
//           <Image
//             src={`http://localhost:5000/${props.foundBook.picture}`}
//             imageStyle={{ width: "inherit", height: "50vh" }}
//           />
//           <Typography variant="h4" gutterBottom>
//             {props.foundBook.title}
//           </Typography>
//           <Typography variant="h5" gutterBottom>
//             by : {props.foundBook.author}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             {props.foundBook.description}
//           </Typography>
//         </Typography>
//       </Container>
//     </React.Fragment>
//   );
// }

function OneBook(props) {
  return (
    <div style={{ width: "100%", marginTop: "5%" }}>
      <Box
        display="flex"
        justifyContent="flex-start"
        flexWrap="nowrap"
        p={1}
        m={10}
        css={{ maxWidth: 300, maxHeight: 300 }}
      >
        <Image
          src={`http://localhost:5000/${props.foundBook.picture}`}
          imageStyle={{ width: "inherit", height: "40vh" }}
        />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={1}
        m={5}
        css={{ maxWidth: 300, maxHeight: "300vh" }}
      >
        <Typography variant="h6" gutterBottom>
          {props.foundBook.title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          by : {props.foundBook.author}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.foundBook.description}
        </Typography>
      </Box>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    foundBook: state.books.find((book) => String(book._id) == id),
  };
};

export default connect(mapStateToProps)(OneBook);
