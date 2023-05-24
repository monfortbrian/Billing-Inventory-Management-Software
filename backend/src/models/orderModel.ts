import Connection from '../utils/dbConnect'
import { CreateOrder, Order, ISQLResponseMutation } from '../utils/types'

export default class OrderModel {
 getAll(cb: Function): any {
  const qry = 'select * from orders order by id desc'
  Connection.query(qry, (err: Error | null, data: [Order]) => {
   cb(err, { success: true, data })
  })
 }
 avalaibleProducts(productId: number, qty: number, cb: Function): any {
  const qry = `select * from product where id=${productId} and qty>=${qty} `
  Connection.query(
   qry,
   [productId, qty],
   (err: Error | null, data: [Object]) => {
    cb(err, { success: true, data })
   }
  )
 }

 create(newRecord: CreateOrder, cb: Function) {
  Connection.query(
   'select if(ISNULL(max(orderNumber))=1,1,max(orderNumber)+1) as orderNumber from orders',
   (err: Error | null, data: [Order]) => {
    let orderNumber = data[0].orderNumber
    let newData = { ...newRecord.order, orderNumber: data[0].orderNumber }
    const query1 = `insert into orders set ?`
    const query2 = `insert into orderDetails(orderNumber,productId,qty,unityPrice,total,productSupplierId) values ?`

    let MajorError = ''
    Connection.beginTransaction(function (err) {
     if (err) return cb(err, { success: false, message: err.message })

     Connection.query(query1, [newData], function (err: Error | null, data) {
      if (err) {
       Connection.rollback(function () {
        console.log('error:', err.message)
        MajorError = err.message
        // return cb(err, { success: false, message: err.message })
       })
      }
     })
     let detailsArray = []
     for (var i = 0; i < newRecord.details.length; i++) {
      let { productId, qty, unityPrice, total, productSupplierId } =
       newRecord.details[i]
      detailsArray.push([
       orderNumber,
       productId,
       qty,
       unityPrice,
       total,
       productSupplierId,
      ])
     }
     Connection.query(query2, [detailsArray], function (err, result) {
      if (err) {
       Connection.rollback(function () {
        console.log('error in qry2:', err.message)
        MajorError = err.message
       })
      }
      Connection.commit(function (err) {
       if (MajorError) {
        Connection.rollback(function () {
         return cb(MajorError, { success: false, message: MajorError })
        })
       } else cb(err, { success: true, data: 'created successfull..' })
      })
     })
    })
   }
  )
 }

 getById(id: Order['id'], cb: Function) {
  const qry = 'select * from orders where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [Order]) => {
   cb(err, { success: true, data })
  })
 }
 deleteOne(id: Order['id'], cb: Function) {
  const qry = 'delete from orders where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [Order]) => {
   cb(err, { success: true, data })
  })
 }
}
