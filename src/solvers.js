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

window.findSolution=function(row, board, n, callback, method){

    // base case
    if(row === n){
       callback();
       return;
    }
    // recurse
    for(var i = 0; i < n; i++){ // iterate columns
      // place piece
      board.togglePiece(row, i);
      if(!board[method]()){
        findSolution(row+1,board,n, callback, method);
      }
      // unplace piece
      board.togglePiece(row, i);
    }

};

window.findNRooksSolution = function(n) {
  // make a board
  var board = new Board({n:n});
  var solution= undefined;
  //board is current solution
  findSolution(0, board, n, function(){
    solution=_.map(board.rows(), function(row){
      return row.slice();
    });
  },"hasAnyRooksConflicts");

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return that solution
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // make a board
  var board = new Board({n:n});


  findSolution(0, board, n, function(){solutionCount++;}, "hasAnyRooksConflicts");

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board({n:n});
  //board is current solution
  findSolution(0, board, n, function(){
    solution=_.map(board.rows(), function(row){
      return row.slice();
    });
  },"hasAnyQueensConflicts");

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  findSolution(0, board, n, function(){solutionCount++;}, "hasAnyQueensConflicts");

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
