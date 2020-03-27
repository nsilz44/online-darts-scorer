var legalScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 164, 165, 167, 168, 170, 171, 174, 177, 180, 180]
var legal3DartCloses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 164, 167, 170, 170]

class Match {
  constructor (p1name, p2name, startscore, sets, legs) {
    sets = +sets
    legs = +legs
    startscore = +startscore
    this.p1Name = p1name
    this.p2Name = p2name
    this.p1Score = startscore
    this.p2Score = startscore
    this.p1Legs = 0
    this.p2Legs = 0
    this.p1Sets = 0
    this.p2Sets = 0
    this.startScore = startscore
    this.setsRequired = sets
    this.legsRequired = legs
    this.legStart = 1
    this.SetStart = 1
    this.turn = 1
  }

  // Checks whos turn it is
  turncheck (input) {
    if (this.turn === 1) {
      this.scorecheck1(input)
    } else {
      this.scorecheck2(input)
    }
  }

  // Checking if score is valid for player1
  scorecheck1 (input) {
    input = +input
    if (!(input in legalScores)) {
      alert('Please input a legal score')
    } else if (input > this.p1Score || this.p1Score - input === 1) {
      alert('Bust')
      this.turn = 2
    } else if (input < this.p1Score) {
      this.p1Score = this.p1Score - input
      this.turn = 2
    } else if (!(input in legal3DartCloses)) {
      alert('Not a legal close')
    } else {
      this.p1Score = this.startScore
      this.p2Score = this.startScore
      this.situation1()
    }
    document.getElementById('score1').innerText = this.p1Score
    // document.getElementById('average1').innerText = Number(this.average).toFixed(2)
    document.getElementById('inputscore').value = ''
    document.getElementById('inputscore').focus()
  }

  scorecheck2 (input) {
    input = +input
    if (!(input in legalScores)) {
      alert('Please input a legal score')
    } else if (input > this.p2Score || this.p1Score - input === 1) {
      alert('Bust')
      this.turn = 1
    } else if (input < this.p2Score) {
      this.p2Score = this.p2Score - input
      this.turn = 1
    } else if (!(input in legal3DartCloses)) {
      alert('Not a legal close')
    } else {
      // Player2 has closed
      // resets score of both players
      this.p1Score = this.startScore
      this.p2Score = this.startScore
      this.situation2()
    }
    document.getElementById('score2').innerText = this.p2Score
    // document.getElementById('average2').innerText = Number(this.average).toFixed(2)
    document.getElementById('inputscore').value = ''
    document.getElementById('inputscore').focus()
  }

  situation1 () {
    this.p1Legs = this.p1Legs + 1
    if (this.p1Legs === this.legsRequired) {
      this.p1Sets = this.p1Sets + 1
      this.p1Legs = 0
      this.p2Legs = 0
      if (this.p1Sets === this.setsRequired) {
        alert(this.p1name + ' has won the game')
        document.getElementById('newmatch').style.display = 'block'
      } else {
        this.legStart = this.SetStart
        if (this.SetStart === 1) {
          this.SetStart = 2
        } else {
          this.SetStart = 1
        }
      }
    }
  }

  situation2 () {
    this.p2Legs++
    if (this.p2Legs === this.legsRequired) {
      this.p2Sets++
      this.p1Legs = 0
      this.p2Legs = 0
      if (this.p2Sets === this.setsRequired) {
        alert(this.p2name + ' has won the game')
        document.getElementById('newmatch').style.display = 'block'
      } else {
        this.legStart = this.SetStart
        if (this.SetStart === 1) {
          this.SetStart = 2
        } else {
          this.SetStart = 1
        }
      }
    }

    this.turn = this.legStart
    if (this.legStart === 1) {
      this.legStart = 2
    } else {
      this.legStart = 1
    }
  }
}
let natch = new Match('p1name', 'p2name', 501, 1, 1)
function matchmaker () {
  var p1name = document.getElementById('p1name').value
  var p2name = document.getElementById('p2name').value
  var startScore = document.getElementById('startscore').value
  var setsRequired = document.getElementById('sets').value
  var legsRequired = document.getElementById('legs').value
  natch.p1Name = p1name
  natch.p2Name = p2name
  natch.p1Score = startScore
  natch.p2Score = startScore
  natch.legsRequired = legsRequired
  natch.setsRequired = setsRequired
  console.log(p1name)
  document.getElementById('p1name').innerText = p1name
  document.getElementById('p2name').innerText = p2name
  document.getElementById('score1').innerText = startScore
  document.getElementById('score2').innerText = startScore
  document.getElementById('newmatch').style.display = 'none'
  document.getElementById('inputscore').focus()
}
