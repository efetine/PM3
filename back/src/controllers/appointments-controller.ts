import { Request, Response } from "express";

//! Obtener todos los turnos

export const getAllAppointments = async (
  req: Request<{}, IUsers[]>,
  res: Response
) => {
  res.json();
};

//! traer 1 turno por id

export const getAppointmentById = async (req: Request, res: Response) => {
  rest.status(200).json();
};

//! crear un turno

export const createAppointmet = async (req: Request, res: Response) => {
  rest.status(200).json();
};

//! cancelar un turno

export const DeletAppointmet = async (req: Request, res: Response) => {
  rest.status(200).json();
};

//! editar un turno

export const editAppointmet = async (req: Request, res: Response) => {
  rest.status(200).json();
};
