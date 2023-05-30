import axios from "axios";
export const customFetch = axios.create({
	baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});
