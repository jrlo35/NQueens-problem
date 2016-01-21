/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, row, col) {
  // store solution
  var solution = new Board({n:n});
  var startRow = row || 0;
  var startCol = col || 0;
  //toggle on starting position
  solution.togglePiece(startRow,startCol)
  //place n pieces
  var length=solution.rows().length-1
  // console.log(solution)
  // console.log(startRow, startCol);
  for(var i=1;i<n;i++){
    console.log("working on piece " + i)
    var goodRow = null;
    for(var j=0;j<=length;j++){
      console.log('row ' + j);
      if(solution.get(j)[startCol]===1){
        continue;
      }
      solution.togglePiece(j, startCol);
      console.log(solution.rows());
      if(solution.hasRowConflictAt(j)){
        console.log('had conflict')
        solution.togglePiece(j,startCol)
      } else{
        console.log('no conflict')
        goodRow=j;
        break;
      }
    }//col
  //   for(var k=0;k<=length;k++){
  //     solution.togglePiece(goodRow,k)
  //     if(solution.hasColConflictAt(k)){
  //       solution.togglePiece(goodRow,k)
  //       console.log('row and col',j,k)
  //     }

  //     else{
  //       break;
  //     }
  //   }
  }
  //check rows until we find one with no rook
    //remember that row
    //find column to place piece
      // place each piece (n pieces)


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return that solution
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
