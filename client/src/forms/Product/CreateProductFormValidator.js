import { useFormik } from "formik";
import * as Yup from "yup";

export const CreateProductFormValidator = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            categoryId: "",
            price: "",
            qty: "",
            unityMesureId: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            categoryId: Yup.string().required("Required"),
            price: Yup.string().required("Required"),
            qty: Yup.string().required("Required"),
            unityMesureId: Yup.string().required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return formik;
};
