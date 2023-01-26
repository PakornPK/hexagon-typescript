import { PermissionEntities } from "../entities/premission";
import { IPerrmission } from "../repository/Ipremission";
import { IPermissionService, IPemissionResponse } from "./Ipermission";

export class PermissionService implements IPermissionService {
    private pm: IPerrmission
    constructor(pm: IPerrmission) {
        this.pm = pm
    }

    public async GetPermissions(): Promise<IPemissionResponse[]> {
        const result: IPemissionResponse[] = []
        try {
            const permission = await this.pm.GetAll()
            permission.forEach((el: PermissionEntities) => {
                result.push({
                    name: el.name,
                    description: el.description,
                })
            })
            return result
        } catch (error) {
            return result
        }
    }
}