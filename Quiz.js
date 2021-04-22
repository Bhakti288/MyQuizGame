class Quiz {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        
    })

    update(state){
        database.ref('/').update({
    gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant ();
        }
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            player.getCount();
        }
        question = new Question ();
        question.display();
    }

    play(){
        question.hide();
        background("yellow");
        textSize(30);
        text("Game Start", 120, 100)
        contestant.getContestantInfo();
    
        if(allContestants !== undefined){
         
         var index = 0;
         var x = 0;
         var y ;
          for(var con in allContestants){
         index = index + 1;
         x = x + 200;
         y = displayHeight - allContestants[con].distance;
         answer[index-1].x=x;
         answer[index-1].y=y;
         if (index===contestant.index){
           answer[index-1].shhapeColor="red";
         }
           
          }
        }
}
