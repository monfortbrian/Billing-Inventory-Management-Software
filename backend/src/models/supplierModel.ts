// CreateSupplier
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateSupplier, ISupplier } from '../utils/types'

export default class SupplierModel {
 getAll(cb: Function): any {
  const qry = 'select * from supplier  order by id desc'
  Connection.query(qry, (err: Error | null, data: [ISupplier]) => {
   cb(err, { success: true, count: data?.length, data })
  })
 }

 getById(id: ISupplier['id'], cb: Function) {
  const qry = 'select * from supplier where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [ISupplier]) => {
   cb(err, { success: true, data })
  })
 }

 create(createSupplier: CreateSupplier, cb: Function) {
  const qry = 'insert into supplier set ?'
  Connection.query(
   qry,
   [createSupplier],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
