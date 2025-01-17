// Handle course enrollment and progress tracking
const progressList = document.getElementById('progress-list');

function enrollCourse(courseName) {
  const progressItem = document.createElement('li');
  progressItem.textContent = `${courseName} - In Progress`;
  if (progressList.textContent === "No courses enrolled yet.") {
    progressList.innerHTML = ''; // Clear placeholder text
  }
  progressList.appendChild(progressItem);
  alert(`You have successfully enrolled in ${courseName}!`);
}
