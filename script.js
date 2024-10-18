// Handle form submission and dynamic resume generation
var resumeForm = document.getElementById("resume-form");
var resumeContainer = document.getElementById("resume-container");
// Input fields
var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var phoneField = document.getElementById("phone");
var educationField = document.getElementById("education");
var skillsField = document.getElementById("skills");
var experienceField = document.getElementById("experience");
var profilePicInput = document.getElementById("profile-pic-input");
// Display elements for the resume
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
var displayEducation = document.getElementById("display-education");
var displaySkills = document.getElementById("display-skills");
var displayExperience = document.getElementById("display-experience");
var displayProfilePic = document.getElementById("profile-pic");
resumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    // Update the resume with form data
    displayName.textContent = nameField.value;
    displayEmail.textContent = "Email: ".concat(emailField.value);
    displayPhone.textContent = "Phone: ".concat(phoneField.value);
    displayEducation.textContent = educationField.value;
    var skillsArray = skillsField.value.split(",");
    displaySkills.innerHTML = ""; // Clear existing skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });
    displayExperience.textContent = experienceField.value;
    // Handle profile picture upload
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayProfilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePicFile);
    }
    // Show resume
    resumeContainer.classList.add("active");
    // Hide form
    resumeForm.style.display = "none";
});
// Make resume editable
function makeEditable() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (el) { return el.classList.toggle("editing"); });
}
