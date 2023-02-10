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

function ShoppingCart2() {
  const [products, setProducts] = useState(initProducts)

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.name}(<b>{product.count}</b>)
            <button
              onClick={() => {
                const newProducts = products.map((v) => {
                  if (v.id === product.id) return { ...v, count: v.count + 1 }
                  else return { ...v }
                })
                setProducts(newProducts)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (product.count === 1) {
                  const newProducts = products.filter((v, i) => {
                    return product.id !== v.id
                  })
                  setProducts(newProducts)
                  return //不跳出函式的話，還是會繼續執行以下的加減功能
                }

                const newProducts = products.map((v) => {
                  if (v.id === product.id) return { ...v, count: v.count - 1 }
                  else return { ...v }
                })
                setProducts(newProducts)
              }}
            >
              -
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ShoppingCart2
