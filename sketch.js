var canvas,quiz,contestant,question,database,gameState,contestantCount;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    question.update(1);
  }
  if(gameState === 1){
    clear();
    question.play();
  
}
