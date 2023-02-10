import { useState } from 'react'

const initProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

function ShoppingCart() {
  const [shopCarts, setShopCart] = useState(initProducts)

  const countPlus = (arr, id) => {
    return arr.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count + 1 }
      else return { ...v }
    })
  }
  const countMinus = (arr, id) => {
    return arr.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count - 1 }
      else return { ...v }
    })
  }
  return (
    <ul>
      {
        /* .filter((v) => v.count > 0) //連鎖迭代API */
        shopCarts.map((v) => {
          return (
            <li key={v.id}>
              {v.name}(<b>{v.count}</b>)
              <button
                onClick={() => {
                  setShopCart(countPlus(shopCarts, v.id))
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  //預期: 目前商品數量是1了，再按下去-按鈕，數量會變0 -> 即刪除它
                  if (v.count === 1) {
                    const newShopCart = shopCarts.filter((v2, i2) => {
                      return v2.id !== v.id
                    })
                    setShopCart(newShopCart)
                    return //跳出函式，下方不執行
                  }
                  const newShopCart = shopCarts.map((v3, i3) => {
                    if (v3.id === v.id) return { ...v3, count: v3.count - 1 }
                    else {
                      return { ...v3 }
                    }
                  })
                  setShopCart(newShopCart)
                }}
              >
                -
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ShoppingCart
