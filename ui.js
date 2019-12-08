class UI{
	constructor(){
		this.profile = document.getElementById('profile');
	}

	//show profile
	showProfile(user){
		this.profile.innerHTML = `
			<hr>
			<div class="card px-3 pt-3 shadow-sm">
				<div class="row">
					<div class="col-md-3">
						<img src="${user.avatar_url}" class="img-fluid" alt="user">
						<a href="${user.html_url}" class="btn btn-primary btn-block my-3">View Profile</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary p-2 mb-2">Public Repos : ${user.public_repos}</span>
						<span class="badge badge-success p-2 mb-2">Public Gists : ${user.public_gists}</span>
						<span class="badge badge-warning p-2 mb-2">Flowers : ${user.followers}</span>
						<span class="badge badge-info p-2 mb-2">Following : ${user.following}</span>

						<ul class="list-group my-3">
							<li class="list-group-item">Company : ${user.company}</li>
							<li class="list-group-item">Website/blog : ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member Since : ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<hr>
			<h2 class="text-primary mb-3">Latest Repos</h2>
			<div id="repos" class="mb-5"></div>
		`;
	}

	//clear profile
	clearProfile(){
		document.getElementById('profile').innerHTML = '';
	}

	//show alert
	showAlert(message,className){
		//clear remaining alert
		this.clearAlert();
		//create div element
		const div = document.createElement('div');
		//add className
		div.className = `${className} mt-3`;
		//createTextNode and append to div
		div.appendChild(document.createTextNode(message));
		//select parent
		const container = document.querySelector('.searchContainer');
		const card = document.querySelector('.search');
		//insert div betweent parent container and child card
		container.insertBefore(div,card);

		//setTimeout after 2 second
		setTimeout(() => this.clearAlert() ,2000);

	}

	//clear alert 
	clearAlert(){
		const currentAlert = document.querySelector('.alert');
		if(currentAlert){
			currentAlert.remove();
		}
	}

	//show repos
	showRepo(user){
		let output = '';
		user.forEach((repo) => {
			output += `
				<li class="list-group-item">
					${repo.name}
					<span class="badge badge-danger p-2 float-right">Stars : ${repo.stargazers_count}</span>
					<span class="badge badge-success p-2 mr-2 float-right">Watchers : ${repo.watchers_count}</span>
					<span class="badge badge-primary p-2 mr-2 float-right">forks : ${repo.forks_count}</span>
				</li>
			`;
		});
		document.getElementById('repos').innerHTML = output;
	}
}