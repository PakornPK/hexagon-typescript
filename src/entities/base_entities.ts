import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class baseEntities {
    @UpdateDateColumn({ name: "update_at" })
    updateAt: Date

    @CreateDateColumn({ name: "create_at" })
    createAt: Date

    @Column({ name: "is_delete" })
    isDelete: boolean
}