import bunyan from 'bunyan'
import dayjs from 'dayjs'

export const logs = bunyan.createLogger({
    name: "myapp",
    time: dayjs().format()
})
