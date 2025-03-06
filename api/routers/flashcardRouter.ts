import { Router, Request, Response } from "express";

export const flashcardRouter = Router();

flashcardRouter.get("/", (_req:Request, res:Response) => {
	res.json([
		{
			id: 1,
			front: "the house",
			back: "das Haus",
		},
		{
			id: 2,
			front: "the car",
			back: "das Auto",
		},
		{
			id: 3,
			front: "the cat",
			back: "die Katze",
		},
	]);
});
