class User {
	constructor(infos, activities, sessions, performances) {
		this.infos = infos.data;
		this.activities = activities.data;
		this.sessions = sessions.data;
		this.performances = performances.data
	}

	getFirstName = () => {
		return this.infos.userInfos.firstName
	}

	getNutriment = (name) => {
		return this.infos.keyData[name]
	}
}

export default User;