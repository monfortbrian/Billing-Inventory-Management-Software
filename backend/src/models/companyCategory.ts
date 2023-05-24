// CreateCompanyCategory
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateCompanyCategory, ICompanyCategory } from '../utils/types'

export default class CompanyCategoryModel {
 getAll(cb: Function): any {
  const qry = 'select * from companyCategory  order by id desc'
  Connection.query(qry, (err: Error | null, data: [ICompanyCategory]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: ICompanyCategory['id'], cb: Function) {
  const qry = 'select * from companyCategory where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [ICompanyCategory]) => {
   cb(err, { success: true, data })
  })
 }

 create(createCompanyCategory: CreateCompanyCategory, cb: Function) {
  const qry = 'insert into companyCategory set ?'
  Connection.query(
   qry,
   [createCompanyCategory],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
