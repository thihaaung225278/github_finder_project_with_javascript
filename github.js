class GitHub{
	constructor(){
		this.client_id = 'c8546dac1e59b23147eb';
		this.client_secret = 'f2f8d3e9dfe3b3129a391c2f9c966931a06defce';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}
	async getProfile(user){
		const responseProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const responseRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
		const profile = await responseProfile.json();
		const repos = await responseRepo.json();
		return {
			profile,
			repos
		}
	}
}