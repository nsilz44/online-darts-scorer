var legalScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 164, 165, 167, 168, 170, 171, 174, 177, 180];
var legal3DartCloses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 164, 167, 170];
var space = ' ';

class Match {
  constructor (p1name, p2name, startscore, sets, legs) {
    sets = +sets;
    legs = +legs;
    startscore = +startscore;
    this.p1Name = p1name;
    this.p2Name = p2name;
    this.p1Score = startscore;
    this.p2Score = startscore;
    this.p1Legs = 0;
    this.p2Legs = 0;
    this.p1Sets = 0;
    this.p2Sets = 0;
    this.p1TotalScore = 0;
    this.p2TotalScore = 0;
    this.p1TotalDarts = 0;
    this.p2TotalDarts = 0;
    this.p1LegDarts = 0;
    this.p2LegDarts = 0;
    this.p1Average = 0;
    this.p2Average = 0;
    this.p1180s = 0;
    this.p2180s = 0;
    this.p1140s = 0;
    this.p2140s = 0;
    this.p1100s = 0;
    this.p2100s = 0;
    this.startScore = startscore;
    this.setsRequired = sets;
    this.legsRequired = legs;
    this.legStart = 1;
    this.SetStart = 1;
    this.turn = 1;
    this.inputCard = [];
    this.turnCard = [];
    this.scoreCard = [];
  }

  updateScores () {
    this.p1Average = (this.p1TotalScore * 3) / this.p1TotalDarts;
    this.p2Average = (this.p2TotalScore * 3) / this.p2TotalDarts;
    document.getElementById('score1').innerText = this.p1Score;
    document.getElementById('score2').innerText = this.p2Score;
    document.getElementById('average1').innerText = Number(this.p1Average).toFixed(2);
    document.getElementById('average2').innerText = Number(this.p2Average).toFixed(2);
    document.getElementById('inputscore').value = '';
    document.getElementById('inputscore').focus();
    if (this.turn === 1) {
      document.getElementById('arrow1').style.display = 'inline-block';
      document.getElementById('arrow2').style.display = 'none';
    } else {
      document.getElementById('arrow2').style.display = 'inline-block';
      document.getElementById('arrow1').style.display = 'none';
    }
  }

  // Checks whos turn it is
  turncheck (input) {
    if (this.turn === 1) {
      this.scorecheck1(input);
    } else {
      this.scorecheck2(input);
    }
  }

/* eslint-env browser */
  // Checking if score is valid for player1
  scorecheck1 (input) {
    input = +input;
    if (legalScores.includes(input) === false) {
      alert('Please input a legal score');
    } else if (input > this.p1Score || this.p1Score - input === 1) {
      alert('Please input a legal score');
    } else if (input < this.p1Score) {
      this.p1Score = this.p1Score - input;
      this.p1TotalScore = this.p1TotalScore + input;
      this.p1TotalDarts = this.p1TotalDarts + 3;
      this.turnCard.push(this.turn);
      this.turn = 2;
      this.inputCard.push(input);
      this.scoreCard.push(this.p1Score);
    } else if (legal3DartCloses.includes(input) === false) {
      alert('Not a legal close');
      // Closed
    } else {
      this.p1TotalScore = this.p1TotalScore + input;
      this.p1TotalDarts = this.p1TotalDarts + 3;
      this.inputCard.push(input);
      this.p1Score = this.startScore;
      this.p2Score = this.startScore;
      this.scoreCard.push(this.p1Score);
      this.scoreCard.push(this.p2Score);
      this.situation1();
    }
    this.updateScores();
  }

  scorecheck2 (input) {
    input = +input;
    if (legalScores.includes(input) === false) {
      alert('Please input a legal score');
    } else if (input > this.p2Score || this.p1Score - input === 1) {
      alert('please input a legal score');
    } else if (input < this.p2Score) {
      this.p2Score = this.p2Score - input;
      this.p2TotalScore = this.p2TotalScore + input;
      this.p2TotalDarts = this.p2TotalDarts + 3;
      this.turnCard.push(this.turn);
      this.turn = 1;
      this.scoreCard.push(this.p2Score);
      this.inputCard.push(input);
    } else if (legal3DartCloses.includes(input) === false) {
      alert('Not a legal close');
    } else {
      // Player2 has closed
      // resets score of both players
      this.scorecard.push(input);
      this.p1Score = this.startScore;
      this.p2Score = this.startScore;
      this.situation2();
    }
    this.updateScores();
  }

  // Player 1 won the leg
  situation1 () {
    this.p1Legs = this.p1Legs + 1;
    if (this.p1Legs === this.legsRequired) {
      this.p1Sets = this.p1Sets + 1;
      this.p1Legs = 0;
      this.p2Legs = 0;
      if (this.p1Sets === this.setsRequired) {
        alert(this.p1name + ' has won the game');
        document.getElementById('newmatch').style.display = 'block';
      } else {
        this.legStart = this.SetStart;
        if (this.SetStart === 1) {
          this.SetStart = 2;
        } else {
          this.SetStart = 1;
        }
      }
    }
    this.turn = this.legStart;
    if (this.legStart === 1) {
      this.legStart = 2;
    } else {
      this.legStart = 1;
    }
    document.getElementById('p1setswon').innerText = this.p1Sets;
    document.getElementById('p2setswon').innerText = this.p2Sets;
    document.getElementById('p1Legswon').innerText = this.p1Legs;
    document.getElementById('p2Legswon').innerText = this.p2Legs;
  }

  // Player 2 won the leg
  situation2 () {
    this.p2Legs = this.p2Legs + 1;
    if (this.p2Legs === this.legsRequired) {
      this.p2Sets = this.p2Sets + 1;
      this.p1Legs = 0;
      this.p2Legs = 0;
      if (this.p2Sets === this.setsRequired) {
        alert(this.p2name + ' has won the game');
        document.getElementById('newmatch').style.display = 'block';
      } else {
        this.legStart = this.SetStart;
        if (this.SetStart === 1) {
          this.SetStart = 2;
        } else {
          this.SetStart = 1;
        }
      }
    }
    this.turn = this.legStart;
    if (this.legStart === 1) {
      this.legStart = 2;
    } else {
      this.legStart = 1;
    }
    document.getElementById('p1setswon').innerText = this.p1Sets;
    document.getElementById('p2setswon').innerText = this.p2Sets;
    document.getElementById('p1Legswon').innerText = this.p1Legs;
    document.getElementById('p2Legswon').innerText = this.p2Legs;
  }
}
function home () {
  document.getElementById('home').style.display = 'block';
  document.getElementById('newMatch').style.display = 'none';
  document.getElementById('continueMatch').style.display = 'none';
  document.getElementById('game').style.display = 'none';
  document.getElementById('practice').style.display = 'none';
  document.getElementById('settings').style.display = 'none';
  document.getElementById('managePlayers').style.display = 'none';
}
function creatematch () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('newMatch').style.display = 'block';
  document.getElementById('continueMatch').style.display = 'none';
  document.getElementById('game').style.display = 'none';
  document.getElementById('practice').style.display = 'none';
  document.getElementById('settings').style.display = 'none';
  document.getElementById('managePlayers').style.display = 'none';
  var playerlist1 = document.getElementById('playerlist1');
  var playerlist2 = document.getElementById('playerlist2');
  function loadPlayerlist (list) {
    clearPlayerslist(list);
    async function makelist () {
      const response = await fetch('/players');
      const result = await response.json();
      const results = JSON.parse(result);
      return results;
    }
    makelist()
      .then(results => {
        var delta = [];
        results.forEach(element => {
          element.name = element.Forename.concat(space, element.Surname);
          delta.push(element.name);
        });
        delta.forEach(item => {
          var option = document.createElement('option');
          option.value = item;
          list.appendChild(option);
        });
      });
  }
  loadPlayerlist(playerlist1);
  loadPlayerlist(playerlist2);
}
function continuematch () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('newMatch').style.display = 'none';
  document.getElementById('continueMatch').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('practice').style.display = 'none';
  document.getElementById('settings').style.display = 'none';
  document.getElementById('managePlayers').style.display = 'none';
}
function currentmatch () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('newMatch').style.display = 'none';
  document.getElementById('continueMatch').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('practice').style.display = 'none';
  document.getElementById('settings').style.display = 'none';
  document.getElementById('managePlayers').style.display = 'none';
}
function practicefunc () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('newMatch').style.display = 'none';
  document.getElementById('continueMatch').style.display = 'none';
  document.getElementById('game').style.display = 'none';
  document.getElementById('practice').style.display = 'block';
  document.getElementById('settings').style.display = 'none';
  document.getElementById('managePlayers').style.display = 'none';
}
function settings () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('newMatch').style.display = 'none';
  document.getElementById('continueMatch').style.display = 'none';
  document.getElementById('game').style.display = 'none';
  document.getElementById('practice').style.display = 'none';
  document.getElementById('settings').style.display = 'block';
  document.getElementById('managePlayers').style.display = 'none';
}
function manageplayers () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('newMatch').style.display = 'none';
  document.getElementById('continueMatch').style.display = 'none';
  document.getElementById('game').style.display = 'none';
  document.getElementById('practice').style.display = 'none';
  document.getElementById('settings').style.display = 'none';
  document.getElementById('managePlayers').style.display = 'block';
  resetPlayersInput();
  loadPlayerTable();
  }

const natch = new Match('p1name', 'p2name', 501, 1, 1);
function matchmaker () {
  natch.p1Name = document.getElementById('p1name').value;
  natch.p2Name = document.getElementById('p2name').value;
  natch.startScore = document.getElementById('startscore').value;
  natch.setsRequired = document.getElementById('sets').value;
  natch.legsRequired = document.getElementById('legs').value;
  natch.p1Score = natch.startScore;
  natch.p2Score = natch.startScore;
  document.getElementById('name1').innerText = natch.p1Name;
  document.getElementById('name2').innerText = natch.p2Name;
  document.getElementById('score1').innerText = natch.p1Score;
  document.getElementById('score2').innerText = natch.p2Score;
  currentmatch();
  document.getElementById('inputscore').focus();
}
  class Practice {
    constructor () {
      this.name = '';
      this.totalScore = 0;
      this.dartsUsed = 0;
      this.average = 0;
      this.p100s = 0;
      this.p140s = 0;
      this.p180s = 0;
    }

    updateScores () {
      document.getElementById('scorePractice').innerText = this.totalScore;
      document.getElementById('dartsPractice').innerText = this.dartsUsed;
      document.getElementById('p100').innerText = this.p100s;
      document.getElementById('p140').innerText = this.p140s;
      document.getElementById('p180').innerText = this.p180s;
      document.getElementById('averagePractice').innerText = Number(this.average).toFixed(2);
      document.getElementById('inputPractice').value = '';
      document.getElementById('inputPractice').focus();
    }

    score (input) {
      input = +input;
      this.totalScore = this.totalScore + input;
      this.dartsUsed = this.dartsUsed + 3;
      this.average = this.totalScore * 3 / this.dartsUsed;
      if (input === 180) {
        this.p180s = this.p180s + 1;
      } else if (input >= 140) {
        this.p140s = this.p140s + 1;
      } else if (input >= 100) {
        this.p100s = this.p100s + 1;
      } else {
      }
      this.updateScores();
    }
  }

const practice = new Practice();

function loadPlayerTable () {
  clearPlayersTable();
  async function playersTable () {
    try {
      const response = await fetch('/players');
      const result = await response.json();
      const results = JSON.parse(result);
      return results;
  } catch (e) {
    alert(e);
  }
  }
  playersTable()
    .then(results => {
  const table = document.getElementById('playerTable');
  const data = Object.keys(results[0]);
  generateTableHead(table, data);
  generateTable(table, results);
  });
}

function generateTable (table, data) {
  for (const element of data) {
    const row = table.insertRow();
    for (key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function generateTableHead (table, data) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of data) {
    const th = document.createElement('th');
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function deletePlayer (ids) {
  async function deletePlayerSuccess () {
    try {
      await fetch('/delete');
    } catch (e) {
      alert(e);
    }
  }
  deletePlayerSuccess()
    .then(alert('Successful Deletion'));
  }
function createUpdatePlayer () {
  var firstname = document.getElementById('forename').value;
  var secondname = document.getElementById('surname').value;
  var nickname = document.getElementById('nickname').value;
  var id = document.getElementById('idPlayer').value;
  var json = { Forename: firstname, Surname: secondname, Nickname: nickname, ID: id };
  async function createPlayerSuccess () {
    try {
      var jsonData = JSON.stringify(json);
      await fetch('/players/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      });
    } catch (e) {
      alert(e);
    }
  }
  createPlayerSuccess()
    .then(alert('Successful player creation'));
    manageplayers();
}

function dateToId () {
  var rightNow = new Date();
  var res = rightNow.toISOString().slice(0, 10).replace(/-/g, '');
  var hh = rightNow.getHours();
  var mm = rightNow.getMinutes();
  var ss = rightNow.getSeconds();
  var HH = '' + hh;
  var MM = '' + mm;
  var SS = '' + ss;
  var Id = res.concat(HH, MM, SS);
  return Id;
}
function resetPlayersInput () {
  document.getElementById('forename').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('nickname').value = '';
  var newId = dateToId();
  document.getElementById('idPlayer').value = newId;
}
function clearPlayersTable () {
  var Parent = document.getElementById('playerTable');
  while (Parent.hasChildNodes()) {
     Parent.removeChild(Parent.firstChild);
  }
}
function clearPlayerslist (id) {
  while (id.hasChildNodes()) {
    id.removeChild(id.firstChild);
  }
}
function continueGame (p1name, p2name, startscore, sets, legs, scorecard, closecard) {
  natch.p1Name = p1name;
  natch.p2Name = p2name;
  natch.startScore = startscore;
  natch.setsRequired = sets;
  natch.legsRequired = legs;
}
