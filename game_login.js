function addUser() {

    player_1 = document.getElementById("name_player_1").value;
    player_2 = document.getElementById("name_player_2").value;
    console.log(player_1);
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location = "game_page.html";
}
