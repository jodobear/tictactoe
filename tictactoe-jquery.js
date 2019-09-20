$(document).ready(function() {
  let move = 1;
  let turn = true;

  $("#gameBoard tr td").click(function() {
    if ($(this).text() === '' && turn) {
      if ((move % 2) === 1) { $(this).append('X'); }
      else { $(this).append('0'); }
      move++;

      if (winner() !== -1 && winner() != '') {
        if (winner() == 'X') { alert('Player 1 wins!'); }
        else { alert('Player 2 wins!'); }
        turn = false;
      }
    }
  });

  const winner = () => {
    let sq1 = $("#gameBoard tr:nth-child(1) td:nth-child(1)").text();
    let sq2 = $("#gameBoard tr:nth-child(1) td:nth-child(2)").text();
    let sq3 = $("#gameBoard tr:nth-child(1) td:nth-child(3)").text();
    let sq4 = $("#gameBoard tr:nth-child(2) td:nth-child(1)").text();
    let sq5 = $("#gameBoard tr:nth-child(2) td:nth-child(3)").text();
    let sq6 = $("#gameBoard tr:nth-child(2) td:nth-child(3)").text();
    let sq7 = $("#gameBoard tr:nth-child(3) td:nth-child(1)").text();
    let sq8 = $("#gameBoard tr:nth-child(3) td:nth-child(2)").text();
    let sq9 = $("#gameBoard tr:nth-child(3) td:nth-child(3)").text();

    if ((sq1 === sq2) && (sq2 === sq3)) { return sq3; }
    else if ((sq1 === sq4) && (sq4 === sq7)) { return sq7; }
    else if ((sq1 === sq5) && (sq5 === sq9)) { return sq9; }
    else if ((sq2 === sq5) && (sq5 === sq8)) { return sq8; }
    else if ((sq3 === sq6) && (sq6 === sq9)) { return sq9; }
    else if ((sq3 === sq5) && (sq5 === sq7)) { return sq7; }
    else if ((sq4 === sq5) && (sq5 === sq6)) { return sq6; }
    else if ((sq7 === sq8) && (sq8 === sq9)) { return sq9; }
    return -1;
  }

});