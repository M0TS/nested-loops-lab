const musicData = require("./data.json");
 //console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  const artistNames = [];
  for (let artist of artists) {
    artistNames.push(artist.name);
  }
  return artistNames;
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
//  function getAllAlbumTitles(artists) {
//    const albumTitles = [];
//     for (let i = 0; i < artists.length; i++) {
//      for (let j = 0; j < artists[i].albums.length; j++) {
//        albumTitles.push(artists[i].albums[j].title);
//      }
//     }
//     return albumTitles;
//     }
    function getAllAlbumTitles(artists) {
     const albumTitles = [];
     for (let artist of artists) {
       for (let album of artist.albums) {
         albumTitles.push(album.title);
       }
     }
     return albumTitles;
   }
  
   
   
   
     
  

//    for (let artist of artists) {
//    for (let album of artist.albums) { 
//     if (album.title) {
//     albumTitles.push(artist.albums.title);
/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  const nameOfSongs = [];
   for (let artist of artists) {
    for (let album of artist.albums) {
       nameOfSongs.push(...album.songs);
     }
   }
  //  for (let i = 0; i < artists.length; i++) {
  //    for (let j = 0; j < artists[i].albums.length; j++) {
  //     nameOfSongs.push(artists[i].albums[j].songs);
  //   }
  // }
  return nameOfSongs;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let checkerBoard = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        checkerBoard += " ";
      } else {
checkerBoard += "#";
      }
    }
    checkerBoard += "\n";
  }
  return checkerBoard;
}


/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ] - An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard() {
  let checkerBoard = "";
  let rows = 4;
  let cols = 4;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      checkerBoard += (i + j) % 2 === 0 ? " " : "#";
    }
    checkerBoard += "\n";
  }
  return checkerBoard;
}


/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
 const chessBoard = [];
  for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const color = (i + j) % 2 === 0 ? 'light' : 'dark';
    const square = {piece: null, positionX: j, positionY: i, color: color};
    chessBoard.push(square);
  }
 }
 return chessBoard;
}

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  const chessBoard = [];
  for (let i = 0; i < row; i++) {
  const rowArr = [];
  for (let j = 0; j < column; j++) { 
    const color = (i+j) % 2 === 0 ? "light" : "dark";
    const square = {piece: null, positionX: j, positionY: i, color: color};
if (i === row && j === column) {
  square.piece = piece;
}
rowArr.push(square);
  }
  chessBoard.push(rowArr);
}
return chessBoard;
}

module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
