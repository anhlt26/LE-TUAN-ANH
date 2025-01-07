import React, { useEffect, useState } from "react";
import { AddNewAsset, GetAllAsset } from "../function/listasset";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

function AddCom() {
    const [asset, setAsset] = useState({
        AssetNumber: "",
        type: "",
        Brand: "",
        Model: "",
        ComputerName: "",
        CPU: "",
        hardisk: "",
        memorry: "",
        SerialNumber: "",
        Windows: "",
        Name: "",
        Userr: "",
        Dept: "",
        Status: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        console.log(value);
        const asset = { ...value };
        await AddNewAsset(asset);
        console.log("----them dươc ne----")
        navigate('/list');
    };
    const handleValidate = Yup.object({
        AssetNumber: Yup.string().required("Tên không được để trống"),
        type: Yup.string().required("Phải chọn"),
        Brand: Yup.string().required("K de trong"),
        Model: Yup.string().required("Model không được để trống"),
        ComputerName: Yup.string().required("Tên máy tính không được để trống"),
    });
    return (
        <>
            <Formik initialValues={asset} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>AssetNumber</th>
                                    <th>type</th>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>ComputerName</th>
                                    <th>CPU</th>
                                    <th>hardisk</th>
                                    <th>memorry</th>
                                    <th>SerialNumber</th>
                                    <th>Windows</th>
                                    <th>Name</th>
                                    <th>Userr</th>
                                    <th>Dept</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Field type='text' name='AssetNumber' /></td>
                                    <td><Field type='text' name='type' /></td>
                                    <td><Field type='text' name='Brand' /></td>
                                    <td><Field type='text' name='Model' /></td>
                                    <td><Field type='text' name='ComputerName' /></td>
                                    <td><Field type='text' name='CPU' /></td>
                                    <td><Field type='number' name='hardisk' /></td>
                                    <td><Field type='number' name='memorry' /></td>
                                    <td><Field type='text' name='SerialNumber' /></td>
                                    <td><Field type='text' name='Windows' /></td>
                                    <td><Field type='text' name='Name' /></td>
                                    <td><Field type='text' name='Userr' /></td>
                                    <td><Field type='text' name='Dept' /></td>
                                    <td><Field type='text' name='Status' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button type={'submit'}>Save</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default AddCom;
