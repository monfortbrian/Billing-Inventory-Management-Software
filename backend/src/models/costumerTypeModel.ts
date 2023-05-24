import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateCostumerType, ICostumerType } from '../utils/types'

export default class CostumerTypeModel {
 getAll(cb: Function): any {
  const qry = 'select * from customerType  order by id desc'
  Connection.query(qry, (err: Error | null, data: [ICostumerType]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: ICostumerType['id'], cb: Function) {
  const qry = 'select * from customerType where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [ICostumerType]) => {
   cb(err, { success: true, data })
  })
 }

 create(createCostumerType: CreateCostumerType, cb: Function) {
  const qry = 'insert into customerType set ?'
  Connection.query(
   qry,
   [createCostumerType],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
