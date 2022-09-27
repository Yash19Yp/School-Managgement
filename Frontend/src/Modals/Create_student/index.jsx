import React from "react";
import ModalProvider from "react-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "../../Hooks/useForm";
import {
  Column,
  Text,
  Input,
  Row,
  Button,
  Img,
  Datepicker,
} from "../../components";
import * as yup from "yup";
import CancelIcon from "../../assets/icons/cancel.png";
const StudentModal = (props) => {
  return (
    <ModalProvider {...props}>
      <div className="bg-bluegray_50 h-[auto] w-[auto]">
        <Column className="lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius12 w-[90%%]">
          <Row className="w-[100%]">
            {" "}
            <Text className="justify-center text-center 3xl:ml-[98px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] w-[90%]">
              Create Student
            </Text>
            <Img
              src={CancelIcon}
              className="common-pointer mt-[3px] lg:h-[13px] xl:h-[15px] 2xl:h-[25px] 3xl:h-[25px] ml-[75px] lg:w-[12px] xl:w-[14px] 2xl:w-[25px] 3xl:w-[25px]"
              comptype="Image"
              onClick={props.onRequestClose}
              alt="Close Button"
            />
          </Row>
          <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mx-[auto] w-[96%]">
            <Row className="space-between items-center w-[100%]">
              <Text className="lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] w-[10%]">
                Name:
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[30%] xl:mt-[7px]"
                type="text"
                // onChange={(e) => {
                //   form.handleChange("isin", e.target.value);
                // }}
                // errors={form?.errors?.isin}
                // value={form?.values?.isin}
                name="firstName"
                placeholder="First Name"
              ></Input>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[30%] xl:mt-[7px]"
                type="text"
                // onChange={(e) => {
                //   form.handleChange("isin", e.target.value);
                // }}
                // errors={form?.errors?.isin}
                // value={form?.values?.isin}
                name="middlename"
                placeholder="Middle Name"
              ></Input>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[30%] xl:mt-[7px]"
                type="text"
                // onChange={(e) => {
                //   form.handleChange("isin", e.target.value);
                // }}
                // errors={form?.errors?.isin}
                // value={form?.values?.isin}
                name="lastName"
                placeholder="Last Name"
              ></Input>
            </Row>
            <Row className="w-[100%]">
              <Text className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] w-[10%]">
                Date of Birth:
              </Text>
              <Datepicker
                className="placeholder:bg-transparent bg-white_A700 border border-bluegray_901 border-solid font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius8 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                // onChange={(e) => {
                //   form.handleChange("expires_at", e);
                // }}
                // errors={form?.errors?.["expires_at"]}
                // value={form?.values?.["expires_at"]}
                name="Date of Birth"
                placeholder="Select Birth Date"
              ></Datepicker>
            </Row>
            <Row className="w-[100%]">
              {" "}
              <Text className=" lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] w-[10%]">
                Parent Name
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[40%] xl:mt-[7px]"
                name="parentName"
                placeholder="Parent Name"
              ></Input>
              <Text className="ml-[20px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] w-[10%]">
                Parent Number
              </Text>
              <Input
                className=" p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[40%] xl:mt-[7px]"
                name="parentNumber"
                type="number"
                placeholder="Mobile Number"
              ></Input>
            </Row>
            <Row className="w-[100%]">
              <Text className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] w-[10%]">
                Parent Email
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-black_900 w-[auto]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[90%] xl:mt-[7px]"
                // onChange={(e) => {
                //   form.handleChange("venue", e.target.value);
                // }}
                // value={form?.values?.venue}
                name="Group10198 Three"
                placeholder="Email ID"
              ></Input>
            </Row>
            <Row
              className="justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="4:5821"
              comptype="Row"
            >
              <Button
                className="bg-bluegray_400 common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[20%]"
                onClick={() => {
                  // form.handleSubmit(callApi1);
                }}
                size="md"
              >
                Submit
              </Button>
              <Button
                className="bg-bluegray_400 ml-[20px] common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[20%]"
                onClick={props.onRequestClose}
                size="md"
                variant="OutlineBluegray901"
              >
                Cancel
              </Button>
            </Row>
          </Column>
        </Column>
      </div>
    </ModalProvider>
  );
};

export default StudentModal;
