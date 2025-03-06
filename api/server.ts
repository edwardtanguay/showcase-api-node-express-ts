import express from "express";

export const app = express();
app.use(express.json());

app.get("/", (_req: express.Request, res: express.Response) => {
	res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Info Site</title>
    </head>
    <body>
        <h1>Info Site</h1>
        <p>Version: <strong>1.1</strong></p>
    </body>
    </html>
  `);
});
