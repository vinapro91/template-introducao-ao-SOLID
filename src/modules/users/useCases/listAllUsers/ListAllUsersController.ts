import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    if (typeof user_id === "string") {
      try {
        const allUsers = this.listAllUsersUseCase.execute({ user_id });
        return response.status(200).json(allUsers);
      } catch (e) {
        return response.status(400).json({ error: e.message });
      }
    }
    return response.status(400).json({ error: "user id is not a string" });
  }
}

export { ListAllUsersController };
