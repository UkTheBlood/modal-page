// // import React, { useEffect, useRef, useState } from 'react'
// // import styled from 'styled-components';

// // function Modal2() {
// //     const [modalState, setModalState] = useState(false)

// //     const modalRef= useRef(null)

// //     const modalOutSideClick = (e) => {
// //         if(modalRef.current === e.target) {
// //             setModalState(false)
// //         }
// //     }


// //     return (
// //         <>
// //             <div>
// //                 <button onClick={() => setModalState(true)}>openModal</button>
// //                 {
// //                     modalState === true
// //                         ?
// //                         <Test>
// //                             <div onClick={(e) => modalOutSideClick(e)}>
// //                                 <Container>
// //                                     <p>닫기 버튼 1개가 있고, <br />
// //                                         외부 영역을 누르면 모달이 닫혀요.
// //                                     </p>
// //                                     <button onClick={() => setModalState(false)}> X </button>
// //                                 </Container>
// //                             </div>
// //                         </Test>
// //                         : null
// //                 }
// //             </div>
// //         </>
// //     )
// // }

// // export default Modal2;

// // const Container = styled.div`
// //     width: 300px;
// //     height: 300px;
// //     border: 1px solid lightgray;
// // `
// // const Test = styled.div`
// //     border: 1px solid red;
// // `

// import React, { useEffect, useRef, useState } from 'react'
// import styled from 'styled-components';

// function Modal2() {
//     const [modalState, setModalState] = useState(false);
//     const outsideRef = useRef(null);

//     const releasePopup = () => {
//         setModalState(true)
//         document.body.style.overflow = "hidden";
//     }

//     const closeReleasePopup = () => {
//         setModalState(false)
//         document.body.style.overflow = "unset"
//     }

//     return (
//         <>
//             <div>
//                 <button onClick={() => releasePopup()}>openModal</button>
//                 {modalState && <ReleaseModal outsideRef={outsideRef} closeReleasePopup={closeReleasePopup} />}
//             </div>
//         </>
//     )
// }



// function ReleaseModal({ closeReleasePopup, outsideRef }) {
//     useEffect(() => {
//         function handleClickOutside(event) {
//             if(outsideRef.current && !outsideRef.current.contains(event.target)) {
//                 console.log('div 외부 클릭 감지')
//             }
//         }
//         document.addEventListener("click", handleClickOutside);
//         return () => {
//             document.removeEventListener("click", handleClickOutside)
//         }

//     }, [outsideRef])
//     return (
//         <>
//             <div ref={outsideRef}>
//                 <Layer onClick={() => closeReleasePopup()}>
//                     <ModalLayer>
//                         <p>닫기 버튼 1개가 있고 <br />
//                             외부 영역을 누르면 모달이 닫혀요.
//                         </p>
//                         <button onClick={closeReleasePopup}> X </button>
//                     </ModalLayer>
//                 </Layer>
//             </div>
//         </>
//     )
// }

// export default Modal2

// const Layer = styled.div`
//     z-index: 1500;
//     display: block;
//     background: rgba(0,0,0,0.3);
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
// `
// const ModalLayer = styled.div`
//     z-index: 2000;
//     width: 300px;
//     height: 200px;
//     position:fixed;
//     top:50%;
//     left:50%;
//     transform: translate(-50%, -50%) !important;
//     background-color: white;
// `


// import { useState, useRef } from "react";
// import styled from "styled-components";

// const Modal2 = () => {
//     const [modalState, setModalState] = useState(false);

//     const outside = useRef();

//     return (
//         <>
//             <button onClick={() => setModalState(true)}>모달 열기</button>
//             {
//                 modalState &&
//                 <Container
//                     ref={outside}
//                     onClick={(e) => { if (e.target == outside.current) setModalState(false) }}
//                 >
//                     <div>
//                         모달 내용
//                         <button onClick={() => setModalState(false)}>취소</button>
//                     </div>
//                 </Container>
//             }
//         </>
//     )

// }

// export default Modal2;

// const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.15);
// `

// import React, { useRef, useState } from 'react'
// import styled from 'styled-components';

// function Modal2() {
//     const [modalState, setModalState] = useState(false);
//     const outside = useRef();

//     const modalOutSideClick = (e) => {
//         if (outside.current === e.target) {
//             setModalState(false)
//         }
//     }

//     return (
//         <>
//             <div>
//                 <Wrap>
//                     {
//                         modalState === true
//                         ? <All ref={outside} onClick={modalOutSideClick}/>
//                         : null
//                     }
//                     <button onClick={() => setModalState(true)}>openModal</button>
//                     {
//                         modalState === true
//                             ? <ModalContain>
//                                 <p>닫기 버튼 1개가 있고, <br />
//                                     외부 영역을 누르면 모달이 닫혀요.</p>
//                                 <button onClick={() => setModalState(false)}>X</button>
//                             </ModalContain>
//                             : null
//                     }
//                 </Wrap>
//             </div>
//         </>
//     )
// }

// export default Modal2
// const All = styled.div`
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.1);
//     left: 0;
//     top: 0;
// `

// const Wrap = styled.div`
//     width: 100vw;
//     height: 200px;
// `
// const ModalContain = styled.div`
//     border: 1px solid red;
// `


import React, { useState } from 'react'
import { useOutsideClickClose } from './hooks/useOutsideClickClose';

function Modal2() {
    const [modalState, setModalState] = useState(false);
    const modalref = useOutsideClickClose(() => {
        setModalState(false)
    });

    return (
        <>
            <div>
                <button onClick={() => setModalState(true)}>openModal</button>
                {
                    modalState === true
                    ? <div ref={modalref}>
                        <p>외부 영역을 클릭하거나, <br />
                        X 버튼을 누르면 닫혀요.</p>
                        <button onClick={() => setModalState(false)}>X</button>
                    </div>
                    : null
                }
            </div>
        </>
    )
}

export default Modal2