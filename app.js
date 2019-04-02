class Player {
  constructor(title) {
    this.title = title;
  }
}

// Global variables
let teams = [];

class UI {
  addTeamToList(player) {
    teams.push(player);
    const list = document.getElementById('teamsList');
    teams.forEach(function(item, index, array){
      console.log(index, item);
    });
  } 
}


// Event listener for add team to list
document.getElementById('addTeam').addEventListener('submit', function(e){
  const teamName = document.getElementById('teamName').value;

  // Instantiate Player
  const player = new Player(teamName);

  // Instantiate UI
  const ui = new UI();

  ui.addTeamToList(player);
  e.preventDefault();
})