import { useState } from 'react'
import './List.css'
import { purePush, pureUnshift, searchFilter } from './api'

const data = [
  {
    id: 1,
    text: 'a',
    count: 0,
  },
  {
    id: 2,
    text: 'b',
    count: 0,
  },
  {
    id: 3,
    text: 'c',
    count: 0,
  },
  {
    id: 4,
    text: 'aa',
    count: 0,
  },
]

function List() {
  // 與呈現有關必需先成為state
  const [items, setItems] = useState(data)

  // 傳入一個id值，依id值作操作
  // 返回一個新陣列，其中id相等傳入id值的物件值的，count屬性+1
  const plusCount = (arr, id) => {
    return arr.map((v, i) => {
      // 用條件判所是否為id=傳入id值，是的話回傳拷貝+修改過的新物件
      if (v.id === id) return { ...v, count: v.count + 1 }
      // 不是的話，就拷貝後回傳新物件
      else return { ...v }
    })
  }

  const myTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Count</th>
          <th>Add</th>
          <th>Del</th>
        </tr>
      </thead>
      <tbody>
        {items.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.text}</td>
              <td>{v.count}</td>
              <td>
                <button
                  onClick={() => {
                    // const newItems = items.map((v2, i2) => {
                    //   if (v.id === v2.id) return { ...v2, count: v2.count + 1 }
                    //   else return { ...v2 }
                    // })
                    setItems(plusCount(items, v.id))
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    const newItems = items.map((v2, i2) => {
                      if (v.id === v2.id) return { ...v2, count: v2.count - 1 }
                      else return { ...v2 }
                    })
                    setItems(newItems)
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  const note = (
    <p>
      <strong>
        注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
      </strong>
      因有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上
      <strong>務必確保 key不能重覆</strong>。
    </p>
  )

  const add2Head = (arr, obj) => {
    return [obj, ...arr]
  }
  const add2Tail = (arr, obj) => {
    return [...arr, obj]
  }

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      {myTable}
      <hr />
      {note}
      <h2>基本操作</h2>
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newItem = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝（deep copy）出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newItems = [newItem, ...items]

          //3
          setItems(newItems)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          setItems(add2Head(items, { id: 99, text: 'xxx' }))
        }}
      >
        1-2. 列表最前面，新增一個物件值id為99與文字為xxx的物件（pure寫法）
      </button>
      <br />
      <button
        onClick={() => {
          const newItem = { id: 88, text: 'yyy' }

          //1 //2
          const newItems = [...items, newItem]

          //3
          setItems(newItems)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          //id可以用：
          // 1. DateTime 時間日期物件的毫秒值
          // const newId = +new Date() //Number(new Date())
          // 2.使用隨機函式or隨機函式庫（uuid/nanoid）

          // 3.利用目前所有資料的id，產生不重複id
          const ids = items.map((v) => v.id)
          const newId = Math.max(...ids) + 1
          const newItem = { id: newId, text: 'xxa', count: 0 }
          const newItems = [newItem, ...items]

          setItems(newItems)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const ids = items.map((v) => v.id)
          const newId = Math.max(...ids) + 1
          const newItem = { id: newId, text: 'yyy', count: 0 }
          const newItems = [...items, newItem]

          setItems(newItems)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newItems = items.filter((v, i) => {
            return v.text.includes('a')
          })
          setItems(newItems)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          const newItems = items.filter((v, i) => {
            return v.text !== 'b'
          })
          setItems(newItems)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          const newItems = items.filter((v, i) => {
            return v.id !== 4
          })
          setItems(newItems)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          //我寫的
          // const newItem = { id: 5, text: 'bbb' }
          // const newItem1 = items.slice(0, 2)
          // const newItem2 = items.slice(2, 4)
          // const newItems = [...newItem1, newItem, ...newItem2]
          // setItems(newItems)

          //老師寫的
          //尋找id=2的索引值
          const index = items.findIndex((v, i) => {
            return v.id === 2
          })
          //if有找到
          if (index !== -1) {
            //建立物件
            const newItem = { id: 5, text: 'bbb', count: 0 }
            const newItem1 = items.slice(0, index + 1)
            const newItem2 = items.slice(index + 1, items.length)
            const newItems = [...newItem1, newItem, ...newItem2]
            // setItems(newItems)

            setItems(newItems)
          }
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          //1.深拷貝，多拷貝一階層的語法（針對陣列中是一層物件的狀態）
          const newItems = items.map((v, i) => {
            return { ...v }
          })
          // const newData = [JSON.parse(JSON.stringify(data))]
          //2. 修改拷貝出來的陣列的物件變數
          const index = newItems.findIndex((v, i) => {
            return v.id === 3
          })
          if (index) {
            newItems[index].text = 'cccc'
            setItems(newItems)
          }
        }}
      >
        9. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          //老師介紹9-1的縮寫寫法，要打的字比較少‘
          const newItems = items.map((v, i) => {
            // 用條件判所是否為id=3，是的話回傳拷貝+修改過的新物件
            if (v.id === 3) return { ...v, text: 'ccc2' }
            else return { ...v }
          })

          setItems(newItems)
        }}
      >
        9-2. 取代id為3的文字為ccc2
      </button>
      <br />
      <button
        onClick={() => {
          //1.深拷貝，多拷貝一階層的語法（針對陣列中是一層物件的狀態）
          // const newItems = items.map((v, i) => {
          //   return { ...v }
          // })
          const newItems = JSON.parse(JSON.stringify(data))
          const index = newItems.findIndex((v, i) => {
            return v.id === 3
          })
          if (index) {
            newItems[index].text = 'ccc3'
            setItems(newItems)
          }
          //2. 修改拷貝出來的陣列的物件變數
        }}
      >
        9-3. 取代id為3的文字為ccc3
      </button>
      <br />
      <hr />
      <h2>純粹化(Purify)練習</h2>
      <ul>
        <li>
          10. 將上述練習所有處理函式進行純粹化(Purify)，即改為純粹函式(pure
          function)另外寫出。
        </li>
      </ul>
      <hr />
      <h2>連續操作練習</h2>
      <ul>
        <li>
          11-1.
          所有項目均加入一個新的`count:0`屬性，並在另個表格呈出來(寫出另個表格)
        </li>
        <li>11-2. 所有項目新增一個`+`按鈕，並在另個表格呈出來(寫出另個表格)</li>
        <li>
          11-3. 讓每個項目的`+`按鈕可以獨立運作，每按一次可讓每個的項目的`count`
          屬性加1
        </li>
      </ul>
    </>
  )
}

export default List
