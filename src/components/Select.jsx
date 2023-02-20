import React, { useState } from 'react'
import styled from 'styled-components';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';

function Select() {
  const options = [
    { id: 1, title: "React"},
    { id: 2, title: "Java"},
    { id: 3, title: "Spring"},
    { id: 4, title: "React Native"}
  ]
  const [selectState, setSelectState] =useState(false);
  const [title, setTitle] = useState('react')


  const selectref = useOutsideClickClose(() => {
    setSelectState(false)
  });

  const stateTrue = () => {
    setSelectState(true)
  }  
  const stateFalse = (id) => {
    setSelectState(false)
    setTitle(id)
  }


  return (
    <>
      <StDivWrap>
        <Div ref={selectref}>
        <StBtnSet onClick={() => setSelectState(!selectState)}>{title}</StBtnSet>
        {
          selectState === true
          ? 
            options.map((item) => {
              return (
              <div key={item.id}>
                <div>
                  <StBtnSet onClick={() => stateFalse(item.title)}>{item.title}</StBtnSet>
                </div>
              </div>
            )
            })
          : null
        }
        </Div>
      </StDivWrap>
    </>
  )
}

export default Select

const StDivWrap = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.15);
  margin: 20px;
  padding: 20px;
  height: 100px;
`
const Div = styled.div`
  width: 300px;
`
const StBtnSet = styled.button`
  width: 300px;
  height: 35px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`














































// import React, { useState } from 'react'
// import styled from 'styled-components'

// const options = [
//   { value: 'React', label: 'React', id: 1},
//   { value: 'Java', label: 'Java', id: 2},
//   { value: 'Spring', label: 'Spring', id: 3},
//   { value: 'React Native', label: 'ReactNative', id: 4}
// ]

// function Select() {
//   const [hover, setHover] = useState(false);

//   const [firstTitle, setFirstTitle] = useState('React');
//   const [firstOpen, setFirstOpen] = useState(false);


//   return (
//     <>
//       <StParents>
//         <h1>Select</h1>
//         <div>
//           <button onClick={() => (setFirstOpen(!firstOpen))}>{firstTitle}</button> {/* button */}
//           {
//             firstOpen === true
//             ? options.map((item) => {
//               <div>{item.label}</div>
//             })
//             : null
//           }
//         </div>
//       </StParents>
//     </>
//   )
// }

// export default Select

// const StParents = styled.div`
//   padding: 10px;
//   margin: 10px;
//   width: 90%;
//   height: 200px;
//   border: 2px solid lightgray;
//   /* overflow: hidden; */
// `
// const StFirstValue = styled.button`
//   width: 300px;
//   height: 40px;
//   border-radius: 10px;
//   border: 1px solid gray;
//   background-color: white;
//   line-height: 40px;
//   text-align: left;
// `
// const ContainerSelect = styled.div`
//   border: 2px solid lightgray;
//   border-radius: 10px;
//   width: 300px;
//   /* display: none; */
// `
// const SelectValue = styled.div`
//   width: 300px;
//   height: 40px;
//   &:hover {
//     background-color: lightgray;
//   }
// `

// const StUl = styled.ul`
//   border: 2px solid lightgray;
//   width: 280px;
//   position: absolute;
//   border-radius: 10px;
// `
// const StLi = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   padding: 10px;
//   border-bottom: 20x solid lightgray;
//   border-top: none;
//   list-style: none;
  
//   &:hover {
//     background-color: lightgray;
//   }
// `