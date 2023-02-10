import data from './data/producst.json'
import './data/ProductTable.css'

function ProductTable() {
  return (
    <>
      <h1>產品列表</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} alt="" />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default ProductTable
