name_player_1 = localStorage.getItem("player_1");
name_player_2 = localStorage.getItem("player_2");

player1 = 0;
player2 = 0;

document.getElementById("name_player_1").innerHTML = name_player_1 + " : ";
document.getElementById("name_player_2").innerHTML = name_player_2 + " : ";

document.getElementById("score_p1").innerHTML = player1;
document.getElementById("score_p2").innerHTML = player2;

document.getElementById("Player_Question").innerHTML = "Question Turn" + name_player_1;
document.getElementById("Player_Answer").innerHTML = "Answer Turn" + name_player_1;

function send() {

    number_1 = document.getElementById("name_player_1").value;
    number_2 = document.getElementById("name_player_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);

    question_word = "<h4>" + number_1 + "X" + number_2 + "</h4>";

    input_box = "<br>Answer: <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button> ";

    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()

{

    get_answer = document.getElementById("input_check_box").value
    Answer = get_answer.toLowerCase();

    if (answer_turn = player_1) {

        score_p1 = score_p1 + 1;
        document.getElementById("score_p1").innerHTML = score_p1;

    } else {

        score_p2 = score_p2 + 1;
        document.getElementById("score_p2").innerHTML = score_p2;

    }
}
