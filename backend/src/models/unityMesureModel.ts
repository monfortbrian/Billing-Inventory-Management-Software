// CreateUnityMesure
import { OkPacket } from 'mysql'
import Connection from '../utils/dbConnect'
import { CreateUnityMesure, IUnityMesure } from '../utils/types'

export default class UnityMesureModel {
 getAll(cb: Function): any {
  const qry = 'select * from unityMesure  order by id desc'
  Connection.query(qry, (err: Error | null, data: [IUnityMesure]) => {
   cb(err, { success: true, data })
  })
 }

 getById(id: IUnityMesure['id'], cb: Function) {
  const qry = 'select * from unityMesure where id=?'
  Connection.query(qry, [id], (err: Error | null, data: [IUnityMesure]) => {
   cb(err, { success: true, data })
  })
 }

 create(createUnityMesure: CreateUnityMesure, cb: Function) {
  const qry = 'insert into unityMesure set ?'
  Connection.query(
   qry,
   [createUnityMesure],
   (err: Error | null, result: OkPacket) => {
    cb(err, { success: true, data: result })
   }
  )
 }
}
