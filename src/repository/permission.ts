import { DataSource } from "typeorm";
import { PermissionEntities } from "../entities/premission";
import { IPerrmission } from "./Ipremission";

export class PermissionRepository implements IPerrmission {
    private readonly ds: DataSource; 
    constructor(ds:DataSource) { 
        this.ds = ds
    }
    public GetAll(): Promise<PermissionEntities[]> {
        return this.ds.manager.find(PermissionEntities)
    }
}