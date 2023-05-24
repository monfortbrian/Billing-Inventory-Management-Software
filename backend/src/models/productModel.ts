import Connection from "../utils/dbConnect";
import {
    CreateProduct,
    Product,
    User,
    ISQLResponseMutation,
} from "../utils/types";

export default class ProductModel {
    getAll(cb: Function): any {
        const qry =
            "SELECT prod.*,cat.name category,unit.name unit from product prod,unityMesure unit,category cat where prod.unityMesureId=unit.id and prod.categoryId=cat.id";
        Connection.query(qry, (err: Error | null, data: [Product]) => {
            cb(err, { success: true, data });
        });
    }
    create(newRecord: CreateProduct, cb: Function) {
        const qry = "insert into product set ?";

        Connection.query(
            qry,
            [newRecord],
            (err: Error | null, data: ISQLResponseMutation) => {
                if (data.insertId <= 0)
                    return cb(err, {
                        success: false,
                        data: "error product not created..",
                    });
                else cb(err, { success: true, data });
            }
        );
    }
    getById(id: Product["id"], cb: Function) {
        const qry = "select * from product where id=?";
        Connection.query(qry, [id], (err: Error | null, data: [User]) => {
            cb(err, { success: true, data });
        });
    }
    getByCategory(id: Product["id"], cb: Function) {
        const qry = "select * from product where categoryId=?";
        Connection.query(qry, [id], (err: Error | null, data: [User]) => {
            cb(err, { success: true, count: data?.length, data });
        });
    }
    update(id: Product["id"], product: Product, cb: Function) {
        const qry = "update product set ? where id=?";
        Connection.query(
            qry,
            [product, id],
            (err: Error | null, data: ISQLResponseMutation) => {
                if (data.affectedRows <= 0)
                    return cb(err, {
                        success: false,
                        data: "error product not updated..",
                    });
                cb(err, { success: true, message: "updated successfully" });
            }
        );
    }
    //  this  update products which has been updated from frontend and
    // return back all the products which explicitly  may changed during the offline time
    sync(products: Product[], offLineTime: string, cb: Function) {
        const qry = "update  product set ? where id=?";
        const qry1 = "select * from product  where updatedAt> ?";

        for (let i = 0; i < products.length; i++) {
            Connection.query(
                qry,
                [products[0], products[0].id],
                (err: Error | null, data: ISQLResponseMutation) => {
                    if (data.affectedRows <= 0)
                        return cb(err, {
                            success: false,
                            data: "error product not updated..",
                        });
                }
            );
        }
        Connection.query(
            qry1,
            [offLineTime],
            (err: Error | null, data: Product[]) => {
                cb(err, { success: true, count: data?.length, data });
            }
        );
    }
}
