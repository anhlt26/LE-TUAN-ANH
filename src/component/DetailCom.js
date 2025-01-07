import { GetAssetById } from "../function/listasset";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DetailCom() {
  const { id } = useParams(); // Lấy id từ URL
  const [asset, setAsset] = useState({ id: "", title: "", description: "", price: "" });

  useEffect(() => {
    const fetchAsset = async () => {
      const data = await GetAssetById(id);
      setAsset(data);
    };
    fetchAsset();
  }, [id]);

  return (
    <div className="container mt-5">
      <Card style={{ maxWidth: '600px', margin: 'auto' }}>
        <Card.Header as="h5">Chi tiết sản phẩm</Card.Header>
        <Card.Body>
          <Card.Title>Tên sản Phẩm: {asset.title}</Card.Title>
          <Card.Text>
            <strong>Mô tả:</strong> {asset.description}
          </Card.Text>
          <Card.Text>
            <strong>Giá:</strong> {asset.price} VND
          </Card.Text>
          <Link to={'/list'}>
            <Button variant="primary">Trở lại</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailCom;
