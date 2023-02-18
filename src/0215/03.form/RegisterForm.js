import { useState } from 'react'

export default function RegisterForm() {
  //物件狀態的初始值
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })
  //報錯的內容
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    //當使用者修正並且回頭輸入時，先清空該欄位的錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
    //[e.target.name]計算得來的屬性名稱(ES6)
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //得到表單輸入值的方式1 - get from state
    console.log(user)

    //方法2 FormData物件
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )
    //做其他的客製化檢查與整合

    //送到伺服器
  }
  const handleInvalid = (e) => {
    e.preventDefault()
    // console.log(e.target.name, e.target.validationMessage)

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }
  return (
    <>
      <h1>會員註冊表單</h1>
      <form
        onSubmit={handleSubmit}
        //表單驗證錯誤時會發的
        onInvalid={handleInvalid}
      >
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            required
          />
          {fieldErrors.username}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            required
          />
          {fieldErrors.email}
        </div>
        <div>
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
            required
            maxLength={10}
            minLength={6}
          />
          {fieldErrors.password}
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  )
}
