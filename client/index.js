var legalScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 164, 165, 167, 168, 170, 171, 174, 177, 180];
var legal3DartCloses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 164, 167, 170];
var space = ' ';

class Match {
  constructor (p1name, p2name, startscore) {
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
    this.setsRequired = 3;
    this.legsRequired = 3;
    this.legStart = 2;
    this.SetStart = 2;
    this.turn = 1;
    this.scoreCard = [];
    this.closeCard = [];
    this.Id = '';
    this.gameStarted = '';
    this.lastUpdated = '';
  }

  updateScores () {
    this.p1Average = (this.p1TotalScore * 3) / this.p1TotalDarts;
    this.p2Average = (this.p2TotalScore * 3) / this.p2TotalDarts;
    document.getElementById('score1').innerText = this.p1Score;
    document.getElementById('score2').innerText = this.p2Score;
    document.getElementById('average1').innerText = Number(this.p1Average).toFixed(2);
    document.getElementById('average2').innerText = Number(this.p2Average).toFixed(2);
    document.getElementById('p1setswon').innerText = this.p1Sets;
    document.getElementById('p2setswon').innerText = this.p2Sets;
    document.getElementById('p1Legswon').innerText = this.p1Legs;
    document.getElementById('p2Legswon').innerText = this.p2Legs;
    document.getElementById('inputscore').value = '';
    document.getElementById('inputscore').focus();
    if (this.turn === 1) {
      document.getElementById('arrow1').style.display = 'inline-block';
      document.getElementById('arrow2').style.display = 'none';
    } else {
      document.getElementById('arrow2').style.display = 'inline-block';
      document.getElementById('arrow1').style.display = 'none';
    }
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + space + today.getHours() + ':' + today.getMinutes();
    natch.lastUpdated = date; 
    updateGame();
    console.log(this.p1Name, this.p2Name, this.p1Score, this.p2Score, this.p1Legs, this.p2Legs, this.p1Sets, this.p2Sets, this.p1TotalScore,
      this.p2TotalScore, this.p1TotalDarts, this.p2TotalDarts,
      this.p1LegDarts
      , this.p2LegDarts
      , this.p1Average
      , this.p2Average
     , this.p1180s
     , this.p2180s
     , this.p1140s
     , this.p2140s
     , this.p1100s
     , this.p2100s
     , this.startScore
     , this.setsRequired
     , this.legsRequired
     , this.legStart
     , this.SetStart
     , this.turn
     , this.scoreCard
     , this.closeCard
      , this.Id
      , this.gameStarted
      , this.lastUpdated);
  }

  // Checks whos turn it is
  turncheck (input) {
    if (this.turn === 1) {
      this.scorecheck1(input);
    } else {
      this.scorecheck2(input);
    }
  }

  turncheckClosed (input) {
    document.getElementById('inputBox').style.display = 'block';
    document.getElementById('dartsBox').style.display = 'none';
    if (this.turn === 1) {
      this.situation1(input);
    } else {
      this.situation2(input);
    }
  }

/* eslint-env browser */
  // Checking if score is valid for player1
  scorecheck1 (input) {
    input = +input;
    if (legalScores.includes(input) === false) {
      alert('Please input a legal score');
      this.updateScores();
    } else if (input > this.p1Score || this.p1Score - input === 1) {
      alert('Please input a legal score');
      this.updateScores();
    } else if (input < this.p1Score) {
      if (input === 180) {
        this.p1180s = this.p1180s + 1;
      } else if (input >= 140) {
        this.p1140s = this.p1140s + 1;
      } else if (input >= 100) {
          this.p1100s = this.p1100s + 1;
        }
      this.p1Score = this.p1Score - input;
      this.p1TotalScore = this.p1TotalScore + input;
      this.p1TotalDarts = this.p1TotalDarts + 3;
      this.p1LegDarts = this.p1LegDarts + 3;
      this.turn = 2;
      this.scoreCard.push(input);
      this.updateScores();
    } else if (legal3DartCloses.includes(input) === false) {
      alert('Not a legal close');
      // Closed
    } else {
      if (input >= 140) {
        this.p1140s = this.p1140s + 1;
      } else if (input >= 100) {
          this.p1100s = this.p1100s + 1;
        }
      this.p1Score = this.p1Score - input;
      this.p1TotalScore = this.p1TotalScore + input;
      this.scoreCard.push(input);
      document.getElementById('inputBox').style.display = 'none';
      document.getElementById('dartsBox').style.display = 'block';
    }
  }

  // Player 1 won the leg
  situation1 (input) {
    input = +input;
    this.p1LegDarts = 0;
    this.p2LegDarts = 0;
    this.closeCard.push(input);
    this.p1TotalDarts = this.p1TotalDarts + input;
    this.p1Legs = this.p1Legs + 1;
    this.p1Score = this.startScore;
    this.p2Score = this.startScore;
    if (this.p1Legs === this.legsRequired) {
      this.p1Sets = this.p1Sets + 1;
      this.p1Legs = 0;
      this.p2Legs = 0;
      if (this.p1Sets === this.setsRequired) {
        alert(this.p1name + ' has won the game');
        document.getElementById('inputBox').style.display = 'none';
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
    this.updateScores();
  }

  scorecheck2 (input) {
    input = +input;
    if (legalScores.includes(input) === false) {
      alert('Please input a legal score');
      this.updateScores();
    } else if (input > this.p2Score || this.p2Score - input === 1) {
      alert('Please input a legal score');
      this.updateScores();
    } else if (input < this.p2Score) {
      if (input === 180) {
        this.p2180s = this.p2180s + 1;
      } else if (input >= 140) {
        this.p2140s = this.p2140s + 1;
      } else if (input >= 100) {
          this.p2100s = this.p2100s + 1;
        }
      this.p2Score = this.p2Score - input;
      this.p2TotalScore = this.p2TotalScore + input;
      this.p2TotalDarts = this.p2TotalDarts + 3;
      this.p2LegDarts = this.p2LegDarts + 3;
      this.turn = 1;
      this.scoreCard.push(input);
      this.updateScores();
    } else if (legal3DartCloses.includes(input) === false) {
      alert('Not a legal close');
      // Closed
    } else {
      if (input >= 140) {
        this.p2140s = this.p2140s + 1;
      } else if (input >= 100) {
          this.p2100s = this.p2100s + 1;
        }
      this.p2Score = this.p2Score - input;
      this.p2TotalScore = this.p2TotalScore + input;
      this.scoreCard.push(input);
      document.getElementById('inputBox').style.display = 'none';
      document.getElementById('dartsBox').style.display = 'block';
    }
  }

  // Player 2 won the leg
  situation2 (input) {
    input = +input;
    this.p1LegDarts = 0;
    this.p2LegDarts = 0;
    this.closeCard.push(input);
    this.p2TotalDarts = this.p2TotalDarts + input;
    this.p2Legs = this.p2Legs + 1;
    this.p1Score = this.startScore;
    this.p2Score = this.startScore;
    if (this.p2Legs === this.legsRequired) {
      this.p2Sets = this.p2Sets + 1;
      this.p1Legs = 0;
      this.p2Legs = 0;
      if (this.p2Sets === this.setsRequired) {
        alert(this.p2name + ' has won the game');
        document.getElementById('inputBox').style.display = 'none';
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
    this.updateScores();
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
  document.getElementById('dartsBox').style.display = 'none';
  natch.updateScores();
  document.getElementById('inputscore').focus();
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
  loadPlayerTable(document.getElementById('playerTable'));
  }

const natch = new Match('p1name', 'p2name', 501);
function matchmaker () {
  resetNatch();
  natch.p1Name = document.getElementById('p1name').value;
  natch.p2Name = document.getElementById('p2name').value;
  natch.startScore = document.getElementById('startscore').value;
  var setsRequired = document.getElementById('sets').value;
  var legsRequired = document.getElementById('legs').value;
  setsRequired = +setsRequired;
  legsRequired = +legsRequired;
  natch.setsRequired = setsRequired;
  natch.legsRequired = legsRequired;
  natch.p1Score = natch.startScore;
  natch.p2Score = natch.startScore;
  natch.Id = dateToId();
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + space + today.getHours() + ':' + today.getMinutes();
  natch.gameStarted = date;
  document.getElementById('name1').innerText = natch.p1Name;
  document.getElementById('name2').innerText = natch.p2Name;
  document.getElementById('score1').innerText = natch.p1Score;
  document.getElementById('score2').innerText = natch.p2Score;
  const gameParams = 'First to ' + natch.setsRequired.toString() + ' sets with first to ' + natch.legsRequired.toString() + ' legs  per set';
  document.getElementById('gameParams').innerText = gameParams;
  currentmatch();
}
  class Practice {
    constructor () {
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

function loadPlayerTable (tableId) {
  clearPlayersTable(tableId);
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
  playersTable(tableId)
    .then(results => {
  const table = tableId;
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
function clearPlayersTable (Parent) {
  while (Parent.hasChildNodes()) {
     Parent.removeChild(Parent.firstChild);
  }
}
function clearPlayerslist (id) {
  while (id.hasChildNodes()) {
    id.removeChild(id.firstChild);
  }
}

function savePractice () {
  document.getElementById('inputPractice').style.display = 'none';
  document.getElementById('submitPractice').style.display = 'none';
  document.getElementById('submitPractice').style.display = 'none';
  document.getElementById('inputPracticeName').style.display = 'block';
}

function practiceSaved () {
  var totalScore = practice.totalScore;
  var average = practice.average;
  var dartsUsed = practice.dartsUsed;
  var p100s = practice.p100s;
  var p140s = practice.p140s;
  var p180s = practice.p180s;
  var name = document.getElementById('practicename').value;
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + space + today.getHours() + ':' + today.getMinutes();
  var jsarray = { Name: name, Score: totalScore, 'Darts thrown': dartsUsed, '100s': p100s, '140s': p140s, '180s': p180s, Average: average, 'Date and time': date };
  async function practiceSavedComplete () {
    try {
      var jsonData = JSON.stringify(jsarray);
      var response = await fetch('/practice/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      });
      const result = await response.json();
      const results = JSON.parse(result);
      return results.Name;
    } catch (e) {
      alert(e);
    }
  }
  practiceSavedComplete()
    .then(Name => {
      getPractice(Name);
      alert('Practice has been saved');
    });
  function getPractice (name) {
    async function gotPractice () {
      const response = await fetch('/practice/?name=' + name);
      const body = await response.json();
      var results = JSON.parse(body);
      return results;
    }
    gotPractice()
      .then(results => {
        loadPlayerTable(document.getElementById('practiceTable'));
      });
  }
}

function undoGame () {
  var oldScorecard = natch.scoreCard;
  oldScorecard.pop();
  const p1name = natch.p1Name;
  const p2name = natch.p2Name;
  const startscore = natch.startScore;
  const legsRequired = natch.legsRequired;
  const setsRequired = natch.setsRequired;
  const closecard = natch.closeCard;
  const iD = natch.Id;
  const gameStarted = natch.gameStarted;
  const lastUpdated = natch.lastUpdated;
  resetNatch();
  continueGame(p1name, p2name, startscore, legsRequired, setsRequired, oldScorecard, closecard, iD, gameStarted, lastUpdated);
}

function resetNatch () {
  natch.p1Name = '';
  natch.p2Name = '';
  natch.p1Score = '';
  natch.p2Score = '';
  natch.p1Legs = 0;
  natch.p2Legs = 0;
  natch.p1Sets = 0;
  natch.p2Sets = 0;
  natch.p1TotalScore = 0;
  natch.p2TotalScore = 0;
  natch.p1TotalDarts = 0;
  natch.p2TotalDarts = 0;
  natch.p1LegDarts = 0;
  natch.p2LegDarts = 0;
  natch.p1Average = 0;
  natch.p2Average = 0;
  natch.p1180s = 0;
  natch.p2180s = 0;
  natch.p1140s = 0;
  natch.p2140s = 0;
  natch.p1100s = 0;
  natch.p2100s = 0;
  natch.startScore = 501;
  natch.setsRequired = 3;
  natch.legsRequired = 3;
  natch.legStart = 2;
  natch.SetStart = 2;
  natch.turn = 1;
  natch.scoreCard = [];
  natch.closeCard = [];
  natch.Id = '';
  natch.gameStarted = '';
  natch.lastUpdated = '';
}

function continueGame (p1name, p2name, startscore, legsRequired, setsRequired, oldScorecard, closecard, iD, gameStarted, lastUpdated) {
  natch.Id = iD;
  natch.gameStarted = gameStarted;
  natch.lastUpdated = lastUpdated;
  natch.p1Name = p1name;
  natch.p2Name = p2name;
  setsRequired = +setsRequired;
  legsRequired = +legsRequired;
  startscore = +startscore;
  natch.startScore = startscore;
  natch.legsRequired = legsRequired;
  natch.setsRequired = setsRequired;
  natch.p1Score = startscore;
  natch.p2Score = startscore;
  if (oldScorecard.length === 0) {
  } else {
    oldScorecard.forEach(input => {
      natch.turncheck(input);
      if (natch.p1Score === 0 || natch.p2Score === 0) {
        natch.turncheckClosed(closecard.pop());
    }
  });
}

  currentmatch();
}

function updateGame () {
  const p1name = natch.p1Name;
  const p2name = natch.p2Name;
  const startscore = natch.startScore;
  const legsRequired = natch.legsRequired;
  const setsRequired = natch.setsRequired;
  const closecard = natch.closeCard;
  const iD = natch.Id;
  const gameStarted = natch.gameStarted;
  const lastUpdated = natch.lastUpdated;
  const scoreCard = natch.scoreCard;
  var jsarray = {
    'Player1 Name': p1name,
    Player2: p2name,
    'Sets required': setsRequired,
    'Legs required per set': legsRequired,
    'Starting score': startscore,
    closecard: closecard,
    id: iD,
    'Game started': gameStarted,
    'last updated': lastUpdated,
    scorecard: scoreCard
  };
  var jsonarray = JSON.stringify(jsarray);
  const response = fetch('/game', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonarray
  });
  console.log(response.body);
}
