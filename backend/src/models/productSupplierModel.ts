// CreateProductSupplier
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateProductSupplier, IProductSupplier } from '../utils/types'

export default class ProductSupplierModel {
 getAll(cb: Function): any {
  const qry = 'select * from productSupplier  order by id desc'
  Connection.query(qry, (err: Error | null, data: [IProductSupplier]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: IProductSupplier['id'], cb: Function) {
  const qry = 'select * from productSupplier where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [IProductSupplier]) => {
   cb(err, { success: true, data })
  })
 }

 create(createProductSupplier: CreateProductSupplier, cb: Function) {
  const qry = 'insert into productSupplier set ?'
  Connection.query(
   qry,
   [createProductSupplier],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }

 update(id: IProductSupplier['id'], product: IProductSupplier, cb: Function) {
  const qry = 'update productSupplier set ? where id=?'
  Connection.query(qry, [product, id], (err: Error | null, data: OkPacket) => {
   if (data.affectedRows <= 0)
    return cb(err, {
     success: false,
     data: 'error product not updated..',
    })
   cb(err, { success: true, message: 'updated successfully' })
  })
 }
}
