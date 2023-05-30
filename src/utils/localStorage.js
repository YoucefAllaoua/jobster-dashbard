export const addUserToLocalStorage = (user) => {
	localStorage.setItem("user", JSON.stringify(user));
};
export const removeUserFromLocalStorage = (user) => {
	localStorage.removeItem("user");
};
export const getUserFromLocalStorage = () => {
	const result = localStorage.getItem("user");
	return result ? JSON.stringify(result) : null;
};
