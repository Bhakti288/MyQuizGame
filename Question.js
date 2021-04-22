class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Submit');
      this.heading = createElement('h2');
    }
    hide(){
      this.heading.hide();
      this.button.hide();
      this.input.hide();
    }

    display(){
        this.title.html("MyQuizGame");
        this.title.position(350,0);

        this.question.html("Question :- What starts and ends with letter 'E', but has only one letter ?");
        this.question.position(150,80);
        this.option1.html("1:Everyone");
        this.option1.position(150,100);
        this.option2.html("2:Everyone");
        this.option2.position(150,120);
        this.input1.position(150,230);


        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }