function add_users(){
    window.location="game.html";
    var player1=document.getElementById("player1").value;
    var player2=document.getElementById("player2").value;
    localStorage.setItem("Player1",player1);
    localStorage.setItem("Player2",player2);
    console.log(player1);
}
function clear(){
    document.getElementById("player1").innerHTML="";
    document.getElementById("player2").innerHTML="";
}

function tasks_game(){
    var player1=localStorage.getItem("Player1");
    var player2=localStorage.getItem("Player2");
    document.getElementById("player_ques").innerHTML="Question Turn: "+player1;
    document.getElementById("player_ans").innerHTML="Answer Turn: "+player2;
}
function send(){
    input1=document.getElementById("no_1").value;
    input2=document.getElementById("no_2").value;
    sum=input1*input2;
    question_no="<h4>"+input1+" X "+input2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_no+input_box+check_btn;
    document.getElementById("output").innerHTML=row;
    ans=document.getElementById("input_check").value;
}
function check(){
    if(ans==sum){
        document.getElementById("ans_div").innerHTML="well done";
    }
}