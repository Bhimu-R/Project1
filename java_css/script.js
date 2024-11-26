const activities = []; // Stores hosted activities

// Show a specific section and hide the others
function showSection(sectionId) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach((section) => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');

  if (sectionId === 'explore') populateActivities(); // Populate activities when the Explore section is shown
  if (sectionId === 'host') setDefaultDateTime(); // Set default date and time when Host section is shown
}

// Function to create a new activity
function createActivity() {
  const eventType = document.getElementById('event-type').value;
  const description = document.getElementById('description').value.trim();
  const invitees = document.getElementById('invitees').value;
  const timing = document.getElementById('timing').value;
  const extras = document.getElementById('extras').value.trim();
  const imageFile = document.getElementById('image').files[0];

  if (!description || !timing) {
    alert('Please fill out all required fields.');
    return;
  }

  const newActivity = {
    eventType,
    description,
    invitees,
    timing,
    extras,
    image: imageFile ? URL.createObjectURL(imageFile) : null,
  };

  activities.push(newActivity);
  alert('Your activity has been created successfully!');
  document.getElementById('host-form').reset();
}

// Populate activities in the Explore section
function populateActivities() {
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = ''; // Clear previous content

  if (activities.length === 0) {
    activityList.innerHTML = '<p>No activities available. Be the first to host!</p>';
    return;
  }

  activities.forEach((activity) => {
    const activityDiv = document.createElement('div');
    activityDiv.className = 'activity-card';
    activityDiv.innerHTML = `
      ${activity.image ? `<img src="${activity.image}" alt="Activity Image">` : ''}
      <h3>${activity.eventType}</h3>
      <p><strong>Description:</strong> ${activity.description}</p>
      <p><strong>Timing:</strong> ${activity.timing}</p>
      <p><strong>Invitees:</strong> ${activity.invitees}</p>
      <p><strong>Extras:</strong> ${activity.extras || 'None'}</p>
    `;
    activityList.appendChild(activityDiv);
  });
}

// Function to set the default current date and time for the timing field
function setDefaultDateTime() {
  const timingInput = document.getElementById('timing'); // Get the timing input field
  const now = new Date(); // Get the current date and time

  // Format the date and time to match 'datetime-local' input
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String((now.getDate()+1)).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  timingInput.value = formattedDateTime; // Set the default value
}

// Set the default date and time when the page is loaded
window.onload = () => {
  setDefaultDateTime();
};
