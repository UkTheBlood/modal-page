import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import Modal from './components/Modal';
import Input from './components/Input';
import Button from './components/Button';
import { MdArrowForwardIos, MdAddAlert } from 'react-icons/md'
import Modal2 from './components/Modal2';

const largePrimary = () => {
  alert('버튼을 만들어보세요')
}
const largeNegative = () => {
  prompt('어렵나요?')
}

function App() {
  return (
    <>
      <div>
        <h1>Button</h1>
        <Button click={largePrimary} wd={"200px"} hg={"60px"} bor="2px solid rgb(85, 239, 196)" bgColor="white">Large Primary Button {<MdArrowForwardIos />}</Button>
        <Button wd={"100px"} hg={"50px"} bor="2px solid rgb(85, 239, 196)" bgColor="rgb(85, 239, 196)">Medium</Button>
        <Button wd={"80px"} hg={"30px"} bor="2px solid rgb(85, 239, 196)" bgColor="rgb(85, 239, 196)">Small</Button>
      </div>
      <div>
        <Button click={largeNegative} wd={"200px"} hg={"60px"} bor="2px solid rgb(250, 177, 160)" bgColor="white">Large Negative Button {<MdAddAlert />}</Button>
        <Button wd={"100px"} hg={"50px"} bor="2px solid rgb(250, 177, 160)" bgColor="rgb(250, 177, 160)">Medium</Button>
        <Button wd={"80px"} hg={"30px"} bor="2px solid rgb(250, 177, 160)" bgColor="rgb(250, 177, 160)">Small</Button>
      </div>
      <Input />
      <Modal /><Modal2 />
      <Select />
    </>
  );
}

export default App;
