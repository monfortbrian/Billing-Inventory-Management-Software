// CreatePaymentType
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreatePaymentType, IPaymentType } from '../utils/types'

export default class PaymentTypeModel {
 getAll(cb: Function): any {
  const qry = 'select * from paymentType  order by id desc'
  Connection.query(qry, (err: Error | null, data: [IPaymentType]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: IPaymentType['id'], cb: Function) {
  const qry = 'select * from paymentType where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [IPaymentType]) => {
   cb(err, { success: true, data })
  })
 }

 create(createPaymentType: CreatePaymentType, cb: Function) {
  const qry = 'insert into paymentType set ?'
  Connection.query(
   qry,
   [createPaymentType],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
