import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { GetAllAsset, DelAssetById } from "../function/listasset";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function ListCom() {
  const [asset, setAsset] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [assetToDelet, setAssetToDelet] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      const data = await GetAllAsset();
      setAsset(data);
    };
    fetchAsset();
  }, []);

  const handleDeletConfirm = async () => {
    if (assetToDelet) {
      await DelAssetById(assetToDelet.id);
      setAsset(asset.filter((a) => a.id !== assetToDelet.id));
      setShowModal(false);
    }
  };

  const handleShowModal = (asset) => {
    setAssetToDelet(asset);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setAssetToDelet(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="container my-3">
        <div className="justify-content-between mb-3">
          <div><h3>Danh sách sản phẩm</h3></div>
          <Link to="/list/add">
            <button className="btn btn-success">Thêm Mới</button>
          </Link>
        </div>
        <Table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
              <th>Mô Tả</th>
            </tr>
          </thead>
          <tbody>
            {asset.map((a, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>
                  <Link to={"/list/detail/" + a.id} className="text-primary">
                    {a.title}
                  </Link>
                </td>
                <td>{a.price}</td>
                <td>{a.description}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleShowModal(a)}
                  >
                    Delete
                  </button>
                  <Link
                    to={"/list/edit/" + a.id}
                    className={"btn btn-primary btn-sm ms-2"}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          {assetToDelet ? (
            <>
              Bạn Chắc Chắn Muốn Xóa sản phẩm này?
            </>
          ) : (
            "Đang tải thông tin tài sản..."
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button  onClick={handleDeletConfirm}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListCom;
