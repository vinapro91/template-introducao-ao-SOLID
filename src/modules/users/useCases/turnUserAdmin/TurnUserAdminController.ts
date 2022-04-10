import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    if (typeof user_id === "string") {
      try {
        const user = this.turnUserAdminUseCase.execute({ user_id });
        return response.status(200).json(user);
      } catch (e) {
        return response.status(404).json({ error: e.message });
      }
    }
    return response.status(404).json({ error: "user id is not a string" });
  }
}

export { TurnUserAdminController };
