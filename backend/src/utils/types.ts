import { Options } from 'nodemailer/lib/mailer'
import mysql from 'mysql'

export interface User extends CreateUser {
 id?: number
 location?: Location
 post?: Post
 profile?: Profil
 active: string
 code: string
 role: string
 passwordToken?: string
 resetPasswordToken_expire?: string
}
export interface CreateUser {
 userName: string
 firstName: string
 lastName: string
 email: string
 password: string
 profilePicture?: string
 locationId: number
 addresse: string
 phoneNumber: string
 tokenVersion: number
 postId: number
 code?: string
 active?: string
 codeExpireTime?: number
 profileId: number
}
export interface Product {
 id: number
 name: string
 description: string
 qty: number
 categoryId: number
 category?: Category
 supplierId: number
 supplier?: Supplier
 price: number
 barCode?: number
 unit: string
}
export interface CreateProduct {
 name: string
 description: string
 categoryId: number
 supplierId: number
 price: number
 qty: number
 barCode?: string
}
export interface Order {
 id: number
 employeId: number
 payment: string
 tva: number
 orderNumber: number
 subtotal: number
 total: number
 discount: number
 totalTva: number
 totalDisc: number
 totalTvaDisc: number
 statusId: number
 paymentType: number
 costumerId: number

 orderMonth: number
 orderYear: number
 orderDay: number
 createdAt: Date
 updatedAt: Date
}
export interface CreateOrder {
 order: {
  employeId: number
  payment: string
  tva: number
  discount: number
  subtotal: number
  total: number
  totalTva: number
  totalDisc: number
  totalTvaDisc: number
  statusId: number
  paymentType: number
  costumerId: number
 }
 details: [CreateOrderDetail]
}
export interface CreatePaymentType {
 name: string
 description: string
}
export interface IPaymentType {
 id: number
 name: string
 description: string
}
export interface CreateProfile {
 name: string
 description: string
}
export interface IProfile {
 id: number
 name: string
 description: string
}
export interface CreateSupplier {
 name: string
 description: string
 adressAvenue: string
 adressNumber: string
 provComuneZonQuarter: string
 nif: string
 rc: string
 phone1: string
 phone2: string
 email: string
 userId: number
}
export interface ISupplier {
 id: number
 name: string
 description: string
 adressAvenue: string
 adressNumber: string
 provComuneZonQuarter: string
 nif: string
 rc: string
 phone1: string
 phone2: string
 email: string
}
export interface CreateProductSupplier {
 productId: number
 supplierId: number
 qty: number
 soldQty: number
 unityMesureId: number
 costPrice: number
 sellPrice: number
}
export interface IProductSupplier {
 id: number
 productId: number
 supplierId: number
 qty: number
 soldQty: number
 unityMesureId: number
 costPrice: number
 sellPrice: number
}
export interface CreateUnityMesure {
 name: string
 description: string
}
export interface IUnityMesure {
 id: number
 name: string
 description: string
}
export interface OrderDetail {
 id: number
 orderId: number
 order?: Order
 productId: number
 product?: Product
 price: number
 qty: number
 total: number
 productSupplierId: number
}
export interface CreateOrderDetail {
 // productId,qty,unityPrice,total,productSupplierId
 orderNumber: number
 productId: number
 productSupplierId: number
 qty: number
 unityPrice: number

 total: number
}
export interface Location {
 id?: number
 province: string
 city: string
}
export interface CreateCompanyCategory {
 name: string
}
export interface ICompanyCategory {
 id: number
 name: string
}
export interface CreateStatus {
 name: string
 description: string
}
export interface IStatus {
 id: number
 name: string
 description: string
}
export interface CreateCostumer {
 costumerTypeId: number
 name: string
 fullAdress: string
 phone1: string
 phone2: string
 email: string
 nif: string
 rc: string
 isAssujette: string
}
export interface ICostumer {
 id: number
 costumerTypeId: number
 name: string
 fullAdress: string
 phone1: string
 phone2: string
 email: string
 nif: string
 rc: string
 isAssujette: string
}

export interface CreateCostumerType {
 name: string
 description: string
}
export interface ICostumerType {
 id: number
 name: string
 description: string
}
export interface Profil {
 id?: number
 name: string
 description: string
}
export interface Post {
 id?: number
 name: string
 description: string
}
export interface Category {
 id?: number
 name: string
 description: string
}
export interface Supplier {
 id?: number
 campanyName: string
 location: Location
 phoneNumber: string
 addresse: string
}
export interface CreateCostumer {
 costumerTypeId: number
 name: string
 fullAdress: string
 phone1: string
 phone2: string
 email: string
 nif: string
 rc: string
 IsAssujette: string
 userId: string
}
export interface ICostumer {
 id: number
 costumerTypeId: number
 name: string
 fullAdress: string
 phone1: string
 phone2: string
 email: string
 nif: string
 rc: string
 IsAssujette: string
 userId: string
}
export interface IOrderResponce {
 success: boolean
 data: IOrderDetailed[]
}
export interface IUserResponse {
 success: boolean
 data: User[]
}
export interface IOrderDetailed {
 id: number
 orderId: number
 productId: number
 productSupplierId: number
 price: number
 qty: number
 unityPrice: number
 total?: number
}
export interface CreateOrderPaymentHist {
 orderId: number
 amount: number
 rate: number
 employeId: number
}
export interface IOrderPaymentHist {
 id: number
 orderId: number
 amount: number
 rate: number
 employeId: number
}
export interface ISQLResponseMutation extends mysql.OkPacket {}
export interface IGeneralResponse {
 success: boolean
 data: Object
}
export interface ISession {
 sessionId: string
 email: string
 valid: string
 userName: string
}
export interface IAccessToken {
 id?: number
 email: string
 role?: string
}

export interface ICategory {
 id: number
 name: string
 description: string
 image: string
}

export interface IRefreshToken extends IAccessToken {
 tokenVersion: number
 exp?: number
 iat?: number
}
export interface IMailerOptions extends Options {}
