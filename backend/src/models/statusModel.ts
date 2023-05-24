// CreateStatus
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateStatus, IStatus } from '../utils/types'

export default class StatusModel {
 getAll(cb: Function): any {
  const qry = 'select * from status  order by id desc'
  Connection.query(qry, (err: Error | null, data: [IStatus]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: IStatus['id'], cb: Function) {
  const qry = 'select * from status where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [IStatus]) => {
   cb(err, { success: true, data })
  })
 }

 create(createStatus: CreateStatus, cb: Function) {
  const qry = 'insert into status set ?'
  Connection.query(
   qry,
   [createStatus],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
