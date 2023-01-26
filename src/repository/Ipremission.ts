import { PermissionEntities } from "../entities/premission";

export interface IPerrmission { 
   GetAll(): Promise<PermissionEntities[]>
}