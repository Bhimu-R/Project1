const activities = []; // Stores hosted activities

function showSection(sectionId) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach((section) => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');

  if (sectionId === 'explore') populateActivities();
}

function createActivity() {
  const eventType = document.getElementById('event-type').value;
  const description = document.getElementById('description').value.trim();
  const invitees = document.getElementById('invitees').value;
  const timing = document.getElementById('timing').value;
  const extras = document.getElementById('extras').value.trim();

  if (!description || !timing) {
    alert('Please fill out all required fields.');
    return;
  }

  const newActivity = { eventType, description, invitees, timing, extras };
  activities.push(newActivity);
  alert('Your activity has been created successfully!');
  document.getElementById('host-form').reset();
}

function populateActivities() {
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = '';

  if (activities.length === 0) {
    activityList.innerHTML = '<p>No activities available. Be the first to host!</p>';
    return;
  }

  activities.forEach((activity) => {
    const activityDiv = document.createElement('div');
    activityDiv.className = 'activity-card';
    activityDiv.innerHTML = `
      <h3>${activity.eventType}</h3>
      <p><strong>Description:</strong> ${activity.description}</p>
      <p><strong>Timing:</strong> ${activity.timing}</p>
      <p><strong>Invitees:</strong> ${activity.invitees}</p>
      <p><strong>Extras:</strong> ${activity.extras || 'None'}</p>
    `;
    activityList.appendChild(activityDiv);
  });
}
