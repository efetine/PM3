import { Request, Response, NextFunction } from "express";

function catcher<T>(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<T>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error: any) => {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    });
  };
}

export default catcher;
