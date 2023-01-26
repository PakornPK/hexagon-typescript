import test from "node:test";
import { PermissionEntities } from "../entities/premission";
import { IPerrmission } from "./Ipremission";

export class PermissionRepositoryMock implements IPerrmission {

    public GetAll(): Promise<PermissionEntities[]> {
        return new Promise<PermissionEntities[]>((resolve, reject) => {
            const mock: PermissionEntities[] = []
            mock.push({
                branchId: "",
                createAt: new Date(),
                description: "test",
                isDelete: false,
                enum: 100,
                id: "1112313",
                isActive: true,
                name: "test",
                updateAt: new Date()
            })
            mock.push({
                branchId: "",
                createAt: new Date(),
                description: "test",
                isDelete: false,
                enum: 100,
                id: "1112313",
                isActive: true,
                name: "test",
                updateAt: new Date()
            })
            mock.push({
                branchId: "",
                createAt: new Date(),
                description: "test",
                isDelete: false,
                enum: 100,
                id: "1112313",
                isActive: true,
                name: "test",
                updateAt: new Date()
            })
            mock.push({
                branchId: "",
                createAt: new Date(),
                description: "test",
                isDelete: false,
                enum: 100,
                id: "1112313",
                isActive: true,
                name: "test",
                updateAt: new Date()
            })
            resolve(mock)
        })
    }
}