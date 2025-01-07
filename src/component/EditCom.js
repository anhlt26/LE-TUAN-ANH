import React, { useEffect, useState } from "react";
import { GetAssetById, UpdateAsset } from "../function/listasset";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { Button, Card } from 'react-bootstrap';

export default function EditCom() {
    const { id } = useParams();
    const [asset, setAsset] = useState(null);
    useEffect(() => {
        const fetchAsset = async () => {
            const asset = await GetAssetById(id);
            setAsset(asset);
        }
        fetchAsset();
    }, [id]);

    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        console.log(value);
        const newValueAsset = { ...value };
        await UpdateAsset(id, newValueAsset);
        console.log("----update roi day----")
        navigate('/');
    };

    const handleValidate = Yup.object({
        title: Yup.string().required("Tên không được để trống"),
        price: Yup.string().required("Phải chọn")
    });

    if (asset == null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <Card style={{ maxWidth: '600px', margin: 'auto' }}>
                <Card.Header as="h5">Chỉnh sửa sản phẩm</Card.Header>
                <Card.Body>
                    <Formik initialValues={asset} onSubmit={handleSubmit} validationSchema={handleValidate}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Tên Sản Phẩm</label>
                                <Field type="text" name="title" id="title" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Giá</label>
                                <Field type="text" name="price" id="price" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Mô Tả</label>
                                <Field type="text" name="description" id="description" className="form-control" />
                            </div>
                            <div className="d-flex">
                                <Button variant="primary" type="submit">Lưu</Button>
                                <Link to="/">
                                    <Button variant="secondary" className="ms-2">Trở lại</Button>
                                </Link>
                            </div>
                        </Form>
                    </Formik>
                </Card.Body>
            </Card>
        </div>
    );
}
