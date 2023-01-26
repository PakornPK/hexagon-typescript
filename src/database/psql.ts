import _ from "lodash"
import { DataSource } from "typeorm"

export class DatabaseConfig {
    private ds: DataSource
    private env: string
    constructor(ds: DataSource, env: string) {
        this.ds = ds
        this.env = env
    }

    public async initDb() {
        try {
            await this.ds.initialize()
            if (_.isEqual(this.env, "development")) {
                await this.ds.synchronize()
            }
            return null
        } catch (error) {
            console.error(error);
            return error
        }
    }
}