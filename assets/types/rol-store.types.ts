import { IPagination } from "../types/pagination.types";
import { ICreateRoles, IGetRoles, IUpdateRoles } from "./rol.types";

export interface IRolesStore {
  roles: IGetRoles[];
  pagination_roles: IPagination;
  OnGetRoles: (page: number, limit: number, name: string) => void;
  OnDelete: (id: number) => void;
  OnCreate: (payload: ICreateRoles) => void;
  OnUpdate: (id: number, payload: IUpdateRoles) => void;
}
