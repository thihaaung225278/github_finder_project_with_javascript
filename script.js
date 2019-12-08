//Instantiate github object
const github = new GitHub();
//Instantiate UI object
const ui = new UI();
// Event Listener 
document.getElementById('searchUser').addEventListener('keyup',(e) => {
	if(e.target.value !== ''){

		github.getProfile(e.target.value)
		.then(data => {
			if(data.profile.message == 'Not Found'){
				//show alert error
				ui.showAlert(`User is not found.`,'alert alert-danger');
			}else{
				//show profile
				ui.showProfile(data.profile);
				//show repos
				ui.showRepo(data.repos);
			}
		});

	}else{
		ui.clearProfile();
	}
});