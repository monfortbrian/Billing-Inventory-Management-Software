// CreateCostumer
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateCostumer, ICostumer } from '../utils/types'

export default class CostumerModel {
 getAll(cb: Function): any {
  const qry = 'select * from customer  order by id desc'
  Connection.query(qry, (err: Error | null, data: [ICostumer]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: ICostumer['id'], cb: Function) {
  const qry =
   'select cust.name,cust.fullAdress,cust.phone1,cust.phone2,cust.email,cust.nif,cust.rc,cust.IsAssujette,custT.name customerType,usr.username from customer cust,customerType custT,user usr where custT.id=cust.costumerTypeId and cust.userId=usr.id and cust.id=?'

  Connection.query(qry, [id], (err: Error | null, data: [ICostumer]) => {
   cb(err, { success: true, count: data?.length, data })
  })
 }

 create(createCostumer: CreateCostumer, cb: Function) {
  const qry = 'insert into customer set ?'
  Connection.query(
   qry,
   [createCostumer],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
