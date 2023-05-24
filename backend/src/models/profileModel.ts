// CreateProfile
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateProfile, IProfile } from '../utils/types'

export default class ProfileModel {
 getAll(cb: Function): any {
  const qry = 'select * from profile  order by id desc'
  Connection.query(qry, (err: Error | null, data: [IProfile]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: IProfile['id'], cb: Function) {
  const qry = 'select * from profile where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [IProfile]) => {
   cb(err, { success: true, data })
  })
 }

 create(createProfile: CreateProfile, cb: Function) {
  const qry = 'insert into profile set ?'
  Connection.query(
   qry,
   [createProfile],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
