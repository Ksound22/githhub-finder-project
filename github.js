class Github {
  constructor() {
    this.client_id = "68a37b49f02f336c1961";
    this.client_secret = "e2fa85e201fd4f72535cff48a5c85fd530410855";
    this.repos_count = 6;
    this.repos_sort = "Created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
