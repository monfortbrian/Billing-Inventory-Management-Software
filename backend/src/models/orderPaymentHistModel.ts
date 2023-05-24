// CreateOrderPaymentHist
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateOrderPaymentHist, IOrderPaymentHist } from '../utils/types'

export default class OrderPaymentHistModel {
 getAll(cb: Function): any {
  const qry = 'select * from orderPaymentHist  order by id desc'
  Connection.query(qry, (err: Error | null, data: [IOrderPaymentHist]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: IOrderPaymentHist['id'], cb: Function) {
  const qry = 'select * from orderPaymentHist where id=?'
  Connection.query(
   qry,
   [id],
   (err: Error | null, data: [IOrderPaymentHist]) => {
    cb(err, { success: true, data })
   }
  )
 }

 create(createProductSupplier: CreateOrderPaymentHist, cb: Function) {
  const qry = 'insert into orderPaymentHist set ?'
  Connection.query(
   qry,
   [createProductSupplier],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }

 update(id: IOrderPaymentHist['id'], product: IOrderPaymentHist, cb: Function) {
  const qry = 'update orderPaymentHist set ? where id=?'
  Connection.query(qry, [product, id], (err: Error | null, data: OkPacket) => {
   if (data.affectedRows <= 0)
    return cb(err, {
     success: false,
     data: 'champs not updated..',
    })
   cb(err, { success: true, message: 'updated successfully' })
  })
 }
}
