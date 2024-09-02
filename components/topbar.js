import Head from 'next/head';
import { CiDesktop } from "react-icons/ci";
import { MdOutlinePhoneIphone } from "react-icons/md";

const topBar = () => {
  return (
    <div className='layoutSwitch'>
    <CiDesktop />
    <MdOutlinePhoneIphone />
    </div>
  );
};

export default topBar;