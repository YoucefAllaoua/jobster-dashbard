/* eslint-disable no-unused-vars */
import { useState } from "react";
import Landing from "./pages";

// when we use this styled component we will have a button (usual one in our page with a uniq class generated auto)
// so we can have many items that return all the same node element but we will not have name conflict because each one have a uniq class
function App() {
	return <Landing />;
}

export default App;
