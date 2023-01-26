import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { baseEntities } from "./base_entities"

@Entity({ name: "permission" })
export class PermissionEntities extends baseEntities {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ name: "branch_id", nullable: true })
    branchId?: string

    @Column({ name: "enum", type: "int", nullable: false })
    enum: number

    @Column({ name: "name", type: "varchar", length: 100, nullable: false })
    name: string

    @Column({ name: "description", type: "text", nullable: false })
    description: string

    @Column({name: "is_active", type: "bool", nullable: false})
    isActive: boolean
}
