import * as config from "./config";
import { app } from "./server";

app.listen(config.getBackendPort(), () => {
	console.log(
		`API is running at http://localhost:${config.getBackendPort()}`
	);
});