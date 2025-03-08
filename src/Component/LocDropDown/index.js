import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const LocDropDown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  return (
    <>
      <Button className="locdrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Gujrat</span>
        </div>
        <span className="ml-auto svg">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setisOpenModel(false)}
        className="locationModel"
      >
        <h5 className="mb-0">Choose your Delivery Location</h5>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <IoCloseSharp />
        </Button>
        <p>Enter your address and we will specify the offer for your area.</p>
        <div className="headerSearch2 w-100">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoSearch />
          </Button>
        </div>

        <ul className="countrylist mt-3">
          <li>
            <Button onClick={() => setisOpenModel(false)}>AHMADABAD</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>AMRELI</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>ANAND</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>ARAVALLI</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>BANASKANTHA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>BHARUCH</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>BHAVNAGAR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>BOTAD</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>CHHOTA UDEPUR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>DAHOD</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>DANGS</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>
              DEVBHUMI DWARKA
            </Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>GANDHINAGAR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>GIR SOMNATH</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>JAMNAGAR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>JUNAGADH</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>KACHCHH</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>KHEDA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>MAHESANA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>MAHISAGAR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>MORBI</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>NARMADA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>NAVSARI</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>PANCHMAHALS</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>PATAN</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>PORBANDAR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>RAJKOT</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>SABARKANTHA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>SURAT</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>SURENDRANAGAR</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>TAPI</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>VADODARA</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModel(false)}>VALSAD</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};
export default LocDropDown;
