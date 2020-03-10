legal_Scores = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,117,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,164,165,167,168,170,171,174,177,180];
legal_3_dart_closes = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,117,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,160,161,164,167,170];
class playerScore{
    constructor(playername,start_score){
        this.score = start_score;
        this.name = playername;
        this.legswon = 0;
        this.darts_thrown = 0;
        this.total_score = 0;
        this.scorecard = []
        this.average = 0.00;
    }
    scorecheck(input){
        console.log(input)
        if (input in legal_Scores){
            alert('Please input a legal score');
        }
        else if (input > playerScore.score || playerScore.score - input == 1 ) {
            alert('Flair Bust');
        } 
        else if (input < playerScore.score){
            playerScore.score = playerScore.score - input;
            playerScore.scorecard.push(input);
            playerScore.darts_thrown = playerScore.darts_thrown + 3 ;
            playerScore.total_score = playerScore.total_score + input;
        }
        else if (input in legal_3_dart_closes){
            alert('Please input a legal checkout');
        }
        else {
            playerScore.score = start_score;
            playerScore.scorecard.push(input); 
            playerScore.total_score = playerScore.total_score + input;
            alert('NICE ONE');
        }
        }
    }


player1 = new playerScore('player1',301);

var inp_score1 = document.getElementById('inputscore').value
inp_score1 = + inp_score1
var a = document.getElementById('submit1').addEventListener('click',player1.scorecheck(inp_score1) )
var b = document.getElementById('score').innerText = player1.score;
var c = document.getElementById('average').innerText = player1.average;


