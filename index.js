var legalScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 164, 165, 167, 168, 170, 171, 174, 177, 180]
var legal3DartCloses = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 164, 167, 170]
class PlayerScore {
  constructor (playername, startScore) {
    startScore = +startScore
    this.currentScore = startScore
    this.name = playername
    this.legswon = 0
    this.darts_thrown = 0
    this.totalScore = 0
    this.scorecard1 = []
    this.average = 0
  }

  scorecheck (input) {
    input = +input
    console.log(input)
    if (!(input in legalScores)) {
      alert('Please input a legal score')
    } else if (input > this.currentScore || this.currentScore - input === 1) {
      alert('Flair Bust')
    } else if (input < this.currentScore) {
      this.currentScore = this.currentScore - input
      this.scorecard1.push(input)
      this.dartsThrown = this.dartsThrown + 3
      this.totalScore = this.totalScore + input
      document.getElementById('score').innerText = this.currentScore
      document.getElementById('inputscore').value = ''
    } else if (!(input in legal3DartCloses)) {
    } else {
      this.currentScore = this.currentScore - input
      this.totalScore = this.totalScore + input
      document.getElementById('score').innerText = this.currentScore
      document.getElementById('inputscore').value = ''
      document.getElementById('inputscore').focus()
    }
  }
}
var player1 = new PlayerScore('playert1', 301)
document.getElementById('score').innerText = player1.currentScore
document.getElementById('average').innerText = player1.average
