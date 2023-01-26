export class PermissionRequest { 
    
}


export interface IPemissionResponse { 
    name: string
    description: string
}


export interface IPermissionService { 
    GetPermissions(): Promise<IPemissionResponse[]>
}