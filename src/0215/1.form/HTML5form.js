import { useState } from 'react'

export default function HTML5form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const cities = [
    { label: '台北市', value: '1' },
    { label: '新北市', value: '2' },
    { label: '桃園市', value: '3' },
    { label: '台中市', value: '4' },
    { label: '台南市', value: '5' },
  ]
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // checkbox-single
  const [agree, setAgree] = useState(false)

  // checkbox group
  const [pets, setPets] = useState(['貓', '狗'])
  const petOptions = ['狗', '貓', '金魚', '守宮']
  return (
    <>
      <h1>表單元件範例（可控）</h1>
      <section id="input-text">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="text-area">
        <h2>文字輸入區域</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
          rows="8"
          cols="30"
        />
      </section>
      <section id="select">
        <h2>下拉清單</h2>
        {/* value為預設選項 */}
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value)
          }}
        >
          <option>--請選取居住城市--</option>
          {cities.map((v, i) => {
            return (
              <option key={i} value={v.value}>
                {v.label}
              </option>
            )
          })}
        </select>
      </section>
      <section id="radio-button">
        <h1>選項按鈕</h1>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                checked={v === gender}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="checkbox-single">
        <h1>核取方塊(單一)</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
            // setAgree(!agree)
            // console.log(typeof e.target.checked)
          }}
        />
        <label>我同意會員註冊條款</label>
      </section>
      <section id="checkbox-group">
        <h1>核取方塊(群組)</h1>
        {petOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={pets.includes(v)}
                onChange={(e) => {
                  if (pets.includes(v)) {
                    // 在pets陣列中 => 移除
                    const newPets = pets.filter((v2, i2) => {
                      return v2 !== v
                    })

                    setPets(newPets)
                  } else {
                    // 不在pets陣列中 => 加入
                    setPets([...pets, v])
                  }
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
    </>
  )
}
