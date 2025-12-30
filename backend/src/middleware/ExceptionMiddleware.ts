import type { Request, Response, NextFunction } from "express";

async function ExceptionMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("[Error]: ", err.message);
  const statusCode = 500;
  const response =
    process.env.NODE_ENV === "development"
      ? {
          status: statusCode,
          err: err.message,
          detail: err.stack,
        }
      : {
          status: statusCode,
          err: err.message,
          detail: "Internal server error",
        };
  res.status(statusCode).json(response);
}

export default ExceptionMiddleware;
