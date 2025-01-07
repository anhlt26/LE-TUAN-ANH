import axios from "axios";
let url = `http://localhost:8080/product`


// tìm tất cả asset trên json
export async function GetAllAsset() {
    try {
    const response = await axios.get(`${url}`);
    return response.data;
    } catch (e){
        console.log("khong lay du lieu",e);
        return[];
    }
};
// tìm 1 asset dựa trên id truyền qua url
export async function GetAssetById(id){
    try {
        const response = await axios.get(`${url}/`+id);
        console.log(response);
        return response.data;
    } catch(e){
        console.log("loi",e);
        return null
    }
};
// thêm mới asset
export async function AddNewAsset(asset) {
    try{
        const response = await axios.post(url,asset);
        console.log('---them moi ne ----')
    } catch (e){
        console.log('loi loi lol',e);
    }
};
// xóa 1 asset
export async function DelAssetById(id) {
    try {    
        console.log("ID to del :", id)
        const response = await axios.delete(`${url}/`+id);
        console.log('--xoa mat roi---')
    }catch (e){
        console.log('loi roi: ',e)
    }
}
//update asset
export async function UpdateAsset(id,asset) {
    try{
        const response = await axios.put(`${url}/`+id,asset);
        console.log('---Update ben function duoc roi nhe ----')
    } catch (e){
        console.log('loi ben function',e);
    }
};