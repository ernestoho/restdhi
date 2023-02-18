import React from "react";

import { Img, Text, Line, List, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const EKYCIntroductionStepFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[492px] md:w-[100%] sm:w-[100%] w-[88%]">
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[71%]"
                  onClick={() => navigate("/dashboardone")}
                >
                  <Img
                    src="images/img_grid_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[66%]"
                  onClick={() => navigate("/customer")}
                >
                  <Img
                    src="images/img_save.svg"
                    className="h-[20px] w-[20px]"
                    alt="save"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between mt-[32px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="sort"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-bold h-[24px] items-center justify-center rounded-radius50 text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[32px] md:w-[100%] sm:w-[100%] w-[39%]"
                  onClick={() => navigate("/filemanagementdefault")}
                >
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[63%]"
                  onClick={() => navigate("/calendermonth")}
                >
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[46%]"
                  onClick={() => navigate("/shippinginfo")}
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[43%]"
                  onClick={() => navigate("/cartproductlist")}
                >
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="mail"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[62%]"
                  onClick={() => navigate("/settings")}
                >
                  <div className="bg-white_A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-bluegray_400 h-[20px] rounded-radius50 w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 flex-1 md:h-[100%] sm:h-[100%] h-[950px] mb-[74px] w-[100%]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex flex-col items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[75px] mt-[15px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[58px] items-center justify-start p-[80px] sm:px-[20px] md:px-[40px] rounded-radius4 shadow-bs w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Introduction
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[60px] md:w-[100%] sm:w-[100%] w-[46%]">
                    <List
                      className="flex-col gap-[20px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="border border-indigo_51 border-solid flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] rounded-radius4 w-[auto]">
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[28px] w-[28px]"
                            alt="laptop"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[70%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 1:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Scan ID Card
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="border border-indigo_51 border-solid flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] rounded-radius4 w-[auto]">
                          <Img
                            src="images/img_settings_28X28.svg"
                            className="h-[28px] w-[28px]"
                            alt="settings One"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[65%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 2:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Scan Face
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="checkmark One"
                        />
                      </div>
                      <div className="border border-indigo_51 border-solid flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-radius4 shadow-bs2 w-[100%]">
                        <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start ml-[7px] rounded-radius4 w-[auto]">
                          <div className="md:h-[28px] sm:h-[28px] h-[30px] relative w-[13%]">
                            <Img
                              src="images/img_02essential.svg"
                              className="absolute h-[28px] left-[0] top-[0] w-[86%]"
                              alt="02essential"
                            />
                            <div className="absolute bottom-[0] flex flex-col h-[16px] items-center justify-start right-[0] w-[16px]">
                              <Button
                                className="flex h-[13px] items-center justify-center w-[13px]"
                                shape="icbRoundedBorder6"
                                size="smIcn"
                                variant="icbOutlineBluegray800"
                              >
                                <Img
                                  src="images/img_checkmark_3.svg"
                                  className="h-[9px]"
                                  alt="checkmark Two"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[12px] items-start justify-start pr-[3px] py-[3px] w-[79%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 3:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Confirm Information
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="checkmark One"
                        />
                      </div>
                      <div
                        className="common-pointer bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-radius4 shadow-bs2 w-[100%]"
                        onClick={() => navigate("/ekycsignature")}
                      >
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                          <Img
                            src="images/img_reply_28X28.svg"
                            className="h-[28px] w-[28px]"
                            alt="reply"
                          />
                          <div className="flex flex-col gap-[13px] items-start justify-start pr-[3px] pt-[3px] w-[65%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 4:
                            </Text>
                            <Text
                              className="font-bold text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Signature
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="flex h-[24px] items-center justify-center mr-[7px] my-[13px] w-[24px]"
                          shape="icbRoundedBorder4"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_arrowright_bluegray_900_24X24.svg"
                            className="h-[16px]"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCIntroductionStepFourPage;
