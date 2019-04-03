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

    // Clear all tasks
    (function clearTasks() {
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
      <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
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