// import { data } from './data/students'

//導入json檔案，會自動轉為js的資料型態，而且算是預設導入
import data from './data/student.json'

function Student() {
  return (
    <>
      <h1>學生資料範例</h1>

      <ul>
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default Student
