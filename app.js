// Init github
const github = new Github();

// init ui
const ui = new UI();

// Search iput
const searchUser = document.getElementById("searchUser");

// search inout event
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP Call
    github.getUser(userText).then((data) => {
      console.log(data);
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show the profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   Clear the profile
    ui.clearProfile();
  }
});
