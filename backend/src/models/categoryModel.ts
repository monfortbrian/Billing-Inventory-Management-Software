import Connection from '../utils/dbConnect'
import { ICategory } from '../utils/types'

export default class CategoryModel {
 getAll(cb: Function): any {
  const qry = 'select * from category  order by id desc'
  Connection.query(qry, (err: Error | null, data: [ICategory]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: ICategory['id'], cb: Function) {
  const qry = 'select * from category where id=? '
  Connection.query(qry, [id], (err: Error | null, data: [ICategory]) => {
   cb(err, { success: true, data })
  })
 }
}
