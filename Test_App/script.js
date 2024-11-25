document.addEventListener('DOMContentLoaded', function() {
  const activitiesList = document.getElementById('activities-list');
  const hostForm = document.getElementById('host-form');

  // Sample data for activities
  const activities = [
      { type: 'Movie', description: 'Movie plan at my home', timing: '2024-11-25T19:00', invitees: 5, optionalItems: 'Snacks' },
      { type: 'Sports', description: 'Sports activity at sports club', timing: '2024-11-26T10:00', invitees: 10, optionalItems: 'Water, Energy drinks' }
  ];

  // Display activities
  function displayActivities() {
      activitiesList.innerHTML = '';
      activities.forEach(activity => {
          const activityElement = document.createElement('div');
          activityElement.className = 'activity';
          activityElement.innerHTML = `
              <h3>${activity.type}</h3>
              <p>${activity.description}</p>
              <p><strong>Timing:</strong> ${activity.timing}</p>
              <p><strong>Invitees:</strong> ${activity.invitees}</p>
              <p><strong>Optional Items:</strong> ${activity.optionalItems}</p>
          `;
          activitiesList.appendChild(activityElement);
      });
  }

  displayActivities();

  // Handle host form submission
  hostForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const type = document.getElementById('activity-type').value;
      const invitees = document.getElementById('invitees').value;
      const timing = document.getElementById('timing').value;
      const optionalItems = document.getElementById('optional-items').value;
      const description = `Activity: ${type}`;
      activities.push({ type, description, timing, invitees, optionalItems });
      displayActivities();
      hostForm.reset();
  });
});
