import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button';

function Modal() {
  const [modalState, setModalState] = useState(false)
  return (
    <>
      <h1>Modal</h1>
      <OpenButton onClick={() => setModalState(true)}>openModal</OpenButton>
      {
        modalState === true
          ? <div>
            <Container>
              <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요</p>
              <button onClick={() => setModalState(false)}>닫기</button>
              <button>확인</button>
            </Container>
          </div>
          : null
      }
    </>
  )
}

export default Modal

const OpenButton = styled.button`
  width: 150px;
  height: 40px;
  border: 1px solid rgb(85, 239, 196) ;
  background-color: rgb(85, 239, 196);
  border-radius: 10px;
`

const Container = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  height: 300px;
  background-color: white;
`