import { GetAssetById } from "../function/listasset";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";

function DetailCom() {
    // khai báo asset và setAsset
    const { id } = useParams(); // Lấy id từ URL
    const [asset, setAsset] = useState({id:"",name:""});

    // Dùng useEffect để gọi API
    useEffect(() => {
        const fetchAsset = async () => {
            const data = await GetAssetById(id);
            setAsset(data);
        };
        fetchAsset();
    }, [id]);

    // // Nếu asset chưa có dữ liệu, hiển thị "Loading..."
    // if (!asset) {
    //     return <h3>Loading...</h3>;
    // }

    return (
        <>
    <Table class="table table-hover" >
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
      <tr>
          <td>{asset.id}</td>
          <td>{asset.AssetNumber}</td>
          <td>{asset.type}</td>
          <td>{asset.Brand}</td>
          <td>{asset.Model}</td>
          <td>{asset.ComputerName}</td>
          <td>{asset.CPU}</td>
          <td>{asset.hardisk}</td>
          <td>{asset.memorry}</td>
          <td>{asset.SerialNumber}</td>
          <td>{asset.Windows}</td>
          <td>{asset.Name}</td>
          <td>{asset.Userr}</td>
          <td>{asset.Dept}</td>
          <td>{asset.Status}</td>
          <td><Link to={'/list/edit/'+ asset.id} className= {'btn btn-warning btn-sm'}>Edit</Link></td>
        </tr>
      </tbody>
    </Table>
        </>
    );
}

export default DetailCom;
