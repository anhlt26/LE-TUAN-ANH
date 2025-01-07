import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { GetAllAsset, DelAssetById } from "../function/listasset";
import { Link } from "react-router-dom";
import { Pagination, Modal, Button } from "react-bootstrap";

function ListCom() {
  const [asset, setAsset] = useState([]);
  const [searchAssetNumber, setSearchAssetNumber] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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
      setAsset(asset.filter((a) => a.id !== assetToDelet.id))
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
  }

  const filteredAssets = asset.filter(
    (a) =>
      a.AssetNumber.toLowerCase().includes(searchAssetNumber.toLowerCase()) &&
      a.Brand.toLowerCase().includes(searchBrand.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAssets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by AssetNumber"
              value={searchAssetNumber}
              onChange={(e) => setSearchAssetNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Brand"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
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
          {currentItems.map((a, i) => (
            <tr key={i + 1}>
              <td>{indexOfFirstItem + i + 1}</td>
              <td>{a.AssetNumber}</td>
              <td>{a.type}</td>
              <td>{a.Brand}</td>
              <td>{a.Model}</td>
              <td>{a.ComputerName}</td>
              <td>{a.CPU}</td>
              <td>{a.hardisk}</td>
              <td>{a.memorry}</td>
              <td>{a.SerialNumber}</td>
              <td>{a.Windows}</td>
              <td>{a.Name}</td>
              <td>{a.Userr}</td>
              <td>{a.Dept}</td>
              <td>{a.Status}</td>
              <td>
                <Link
                  to={"/list/detail/" + a.id}
                  className={"btn btn-primary btn-sm"}
                >
                  Detail
                </Link>
              </td>
              <td>
                <Link
                  to={"/list/edit/" + a.id}
                  className={"btn btn-warning btn-sm"}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleShowModal(a)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton><Modal.Title>Xác Nhận Xóa</Modal.Title></Modal.Header>
        <Modal.Body>    {assetToDelet ? (
          <>
            Bạn Chắc Chắn Muốn Xóa: <b>{assetToDelet.AssetNumber}</b>?
          </>
        ) : (
          "Đang tải thông tin tài sản..."
        )}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Hủy</Button>
          <Button variant="danger" onClick={handleDeletConfirm}>Xóa</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ListCom;