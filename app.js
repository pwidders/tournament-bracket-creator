class Player {
  constructor(title) {
    this.title = title;
  }
}

// Global variables
const teams = [];

class UI {
  // Function add team
  addTeamToList(player) {

  }
}

// Event listener for add team to list
document.getElementById('addTeam').addEventListener('submit', function(e) {
  const teamName = document.getElementById('teamName').value;

  // Instantiate Player
  const player = new Player(teamName);
  // console.log(player);
  teams.push(player);
  console.log(teams);

  // Instantiate UI

  
  e.preventDefault();
})