const data = [
  { id: 1, name: '王建凱' },
  { id: 2, name: '楊小安' },
]

function Student() {
  //map一定要對「陣列」使用
  //   const display = data.map((v, i) => {
  //     return <li>{v.name}</li>
  //   })
  return (
    <>
      <h1>學生資料範例</h1>
      {/* <ul>{display}</ul> */}
      <ul>
        {/* {參考的map結果} */}
        {/* {[<li>張小花</li>, <li>陳小草</li>]} */}
        {/* 真正寫法 */}

        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default Student
