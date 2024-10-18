// Handle form submission and dynamic resume generation
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeContainer = document.getElementById("resume-container") as HTMLDivElement;

// Input fields
const nameField = document.getElementById("name") as HTMLInputElement;
const emailField = document.getElementById("email") as HTMLInputElement;
const phoneField = document.getElementById("phone") as HTMLInputElement;
const educationField = document.getElementById("education") as HTMLTextAreaElement;
const skillsField = document.getElementById("skills") as HTMLTextAreaElement;
const experienceField = document.getElementById("experience") as HTMLTextAreaElement;
const profilePicInput = document.getElementById("profile-pic-input") as HTMLInputElement;

// Display elements for the resume
const displayName = document.getElementById("display-name") as HTMLHeadingElement;
const displayEmail = document.getElementById("display-email") as HTMLParagraphElement;
const displayPhone = document.getElementById("display-phone") as HTMLParagraphElement;
const displayEducation = document.getElementById("display-education") as HTMLParagraphElement;
const displaySkills = document.getElementById("display-skills") as HTMLUListElement;
const displayExperience = document.getElementById("display-experience") as HTMLParagraphElement;
const displayProfilePic = document.getElementById("profile-pic") as HTMLImageElement;

resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent form submission

    // Update the resume with form data
    displayName.textContent = nameField.value;
    displayEmail.textContent = `Email: ${emailField.value}`;
    displayPhone.textContent = `Phone: ${phoneField.value}`;
    displayEducation.textContent = educationField.value;

    const skillsArray = skillsField.value.split(",");
    displaySkills.innerHTML = ""; // Clear existing skills
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        displaySkills.appendChild(li);
    });

    displayExperience.textContent = experienceField.value;

    // Handle profile picture upload
    const profilePicFile = profilePicInput.files?.[0];
    if (profilePicFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            displayProfilePic.src = e.target?.result as string;
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
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => el.classList.toggle("editing"));
}
