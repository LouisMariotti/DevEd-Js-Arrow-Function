// These will allow us to simplify our way of writting callbacks functions

const videos = [
  "pranking my sister! is she Okay (gone wrong)",
  "How to Javascript",
  "html tutorial",
  "learning piano",
  "Js",
];

// Let's simplify! Nothing wrong with this but can do easier
// const newVideo = videos.map(function (video) {
//   return video.length < 10 ? video : "nope";
// });

// const arrowVideos = videos.map((video) => {
//   return video.length < 15 ? video : "nope";
// });
// // The above will work exactly the same way

// console.log(arrowVideos);

// Can do even simplier!!!!!!!
/* If only have one parameter we don't have to put the bracket. Also we don't 
have to put the curly bracket and we can make the same exact
code in only one line */

const arrowVideos = videos.map((video) => video.toLowerCase());

console.log(arrowVideos);

button.addEventListner("click", (event) => {}); // Can also be used for event listeners
