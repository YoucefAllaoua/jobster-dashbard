export const addUserToLocalStorage = (user) => {
	localStorage.add("user", JSON.stringify(user));
};
export const removeUserFromLocalStorage = (user) => {
	localStorage.removeItem("user");
};
export const getUserFromLocalStorage = () => {
	const result = localStorage.getItem("user");
	return result ? JSON.parse(result) : null;
};
