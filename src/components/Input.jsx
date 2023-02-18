import React, { useState } from 'react'

function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }
  const priceChangeHandler = (e) => {
    const value = e.target.value
    // value = Number(price).toLocaleString();
    const revalue = Number(value.replaceAll(",", "")).toLocaleString();
    if (revalue === "NaN") return
    setPrice(revalue)
  }

  return (

    <>
      <h1>Input</h1>
      이름 : 
      <input
        value={name}
        type="text"
        onChange={nameChangeHandler}
      />

      가격 : 
      <input
        value={price}
        // 숫자를 입력하면 toLocaleString에 오류 발생
        // 반점이 생기면 number가 아니라 NaN
        type="text"
        onChange={priceChangeHandler}
      />

      <button>저장</button>
    </>
  )
}

export default Input