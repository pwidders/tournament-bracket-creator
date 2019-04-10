// Player/team constructor
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
  }

  listTeams() {
    const list = document.getElementById('teamsList');
    (function clearList() {
      while(list.firstChild) {
        list.removeChild(list.firstChild);
      }
    })();

    // List teams from array into table
    teams.forEach(function(item, index){
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${item.title}</td>
      <td>${index + 1}</td>
      <td><a href="#" class="delete" team=${item.title}>X<a></td>
      `;

    list.appendChild(row);
    });
  }

  clearField() {
    document.getElementById('teamName').value = '';
  }

  deleteTeam(target) {
    if(target.className === 'delete') {
      const cellValue = target.attributes.team.nodeValue;
      // console.log(cellValue);
      target.parentElement.parentElement.remove();
      
      // Remove team from teams array
      teams = teams.filter(team => team.title !== cellValue)
      // console.log(teams);  

      // Re-list teams
      const ui = new UI();
      ui.listTeams();
    }     
  }
}

// Event listener for add team to list
document.getElementById('addTeam').addEventListener('submit', function(e) {
  const teamName = document.getElementById('teamName').value;

  const player = new Player(teamName);

  const ui = new UI();

  ui.addTeamToList(player);
  ui.listTeams();
  ui.clearField();
  e.preventDefault();
})

// Event listener for delete team
document.getElementById('teamsList').addEventListener('click', function(e) {

  const ui = new UI();

  ui.deleteTeam(e.target);
})

// Event listener for generate bracket
document.getElementById('generateBracket').addEventListener('click', function(e) {
  const ui = new UI();
  const numberOfTeams = teams.length;
  // console.log(numberOfTeams);

  // Switch case depending on number of teams entered
  switch (numberOfTeams) {
    case 1:
      console.log(numberOfTeams);
      alert('Please enter at least 3 teams to continue');
      break;
    case 2:
      console.log(numberOfTeams);
      alert('Please enter at least 3 teams to continue');
      break;
    case 3:
      console.log(numberOfTeams);

      break;
  }
})