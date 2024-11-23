import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

// const Posts = () => {
//   const posts = useSelector((state) => state);
//   const classes = useStyles();

//   console.log("The posts in the state are ", posts);

//   return !posts.length ? (
//     <CircularProgress />
//   ) : (
//     <Grid
//       className={classes.container}
//       container
//       alignItems="stretch"
//       spacing={3}
//     >
//       {posts.map((post) => (
//         <Grid item key={post._id} xs={12} sm={6}>
//           <Post post={post} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

const Posts = () => {
  const { data: posts, isLoading } = useSelector((state) => state.post); // Adjust for the new state shape
  const classes = useStyles();

  console.log("The posts in the state are ", posts);

  if (isLoading) {
    return <CircularProgress />;
  }

  return !posts.length ? (
    <div>No posts available</div> // Show a fallback message if no posts exist
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
