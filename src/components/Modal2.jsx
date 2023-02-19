import React, { useState } from 'react'

function Modal2() {
    const [modalState, setModalState] = useState(false)
    return (
        <>
            <button onClick={() => setModalState(true)}>openModal</button>
            {
                modalState === true
                    ? <div>
                        <p>닫기 버튼 1개가 있고, <br />
                        외부 영역을 누르면 모달이 닫혀요.</p>
                        <button onClick={() => setModalState(false)}> X </button>
                    </div>
                    : null
            }
        </>
    )
}

export default Modal2;