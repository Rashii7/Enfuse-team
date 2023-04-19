import React from "react";

import Header from "components/Header";
import Side from "components/Side";
import { List, Text, Img, Button, SelectBox } from "components";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-archivo items-center justify-start mx-auto pb-10 w-full">
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Header className="bg-bluegray_800 flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-jost md:gap-10 items-center justify-between w-full">
            <Side className="flex flex-col md:hidden items-start justify-start mb-2.5 md:px-5 w-[264px]" />
            <List
              className="md:flex-1 flex-col font-archivo md:gap-10 gap-[107px] grid md:px-5 w-[34%] md:w-full"
              orientation="vertical"
            >
              <div className="bg-gray_900 flex flex-col gap-3 items-start justify-start p-5 rounded shadow-bs w-[483px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      162
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      User activity this month
                    </Text>
                  </div>
                  <Img
                    src="images/img_car.svg"
                    className="h-[62px] max-h-[62px] w-auto sm:w-auto"
                    alt="car"
                  />
                </div>
                <div className="bg-gray-300 flex flex-col h-1 md:h-auto items-start justify-start rounded-sm w-full">
                  <Img
                    src="images/img_line_blue_a200.svg"
                    className="h-1 rounded-sm w-full"
                    alt="line"
                  />
                </div>
              </div>
              <div className="bg-gray_900 flex flex-col gap-3 items-start justify-start p-5 rounded shadow-bs w-[483px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      162
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      User activity this month
                    </Text>
                  </div>
                  <Img
                    src="images/img_car.svg"
                    className="h-[62px] max-h-[62px] w-auto sm:w-auto"
                    alt="car"
                  />
                </div>
                <div className="bg-gray-300 flex flex-col h-1 md:h-auto items-start justify-start rounded-sm w-full">
                  <Img
                    src="images/img_line_blue_a200.svg"
                    className="h-1 rounded-sm w-full"
                    alt="line"
                  />
                </div>
              </div>
              <div className="bg-gray_900 flex flex-col gap-3 items-start justify-start p-5 rounded shadow-bs w-[483px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      162
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      User activity this month
                    </Text>
                  </div>
                  <Img
                    src="images/img_car.svg"
                    className="h-[62px] max-h-[62px] w-auto sm:w-auto"
                    alt="car"
                  />
                </div>
                <div className="bg-gray-300 flex flex-col h-1 md:h-auto items-start justify-start rounded-sm w-full">
                  <Img
                    src="images/img_line_blue_a200.svg"
                    className="h-1 rounded-sm w-full"
                    alt="line"
                  />
                </div>
              </div>
              <div className="bg-gray_900 flex flex-col gap-3 items-start justify-start p-5 rounded shadow-bs w-[483px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      as="h4"
                      variant="h4"
                    >
                      162
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      User activity this month
                    </Text>
                  </div>
                  <Img
                    src="images/img_car.svg"
                    className="h-[62px] max-h-[62px] w-auto sm:w-auto"
                    alt="car"
                  />
                </div>
                <div className="bg-gray-300 flex flex-col h-1 md:h-auto items-start justify-start rounded-sm w-full">
                  <Img
                    src="images/img_line_blue_a200.svg"
                    className="h-1 rounded-sm w-full"
                    alt="line"
                  />
                </div>
              </div>
            </List>
            <div className="flex flex-1 flex-col font-archivo gap-2.5 items-center justify-start md:px-5 w-full">
              <div className="bg-gray_900 flex flex-col items-start justify-start rounded shadow-bs1 w-[615px] md:w-full">
                <div className="bg-gray_900 border-b border-bluegray_300 border-solid flex flex-col items-start justify-start rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between p-5 rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full">
                    <div className="flex flex-col items-center justify-start self-stretch w-auto">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Lorem ipsum
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-end self-stretch w-auto">
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Button
                          className="cursor-pointer font-semibold min-w-[49px] text-blue_A700 text-center text-sm w-auto"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray100"
                        >
                          1H
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-semibold text-blue_200 text-center w-auto"
                          variant="body4"
                        >
                          1D
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-semibold text-blue_200 text-center w-auto"
                          variant="body4"
                        >
                          7D
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="font-semibold text-blue_200 text-center w-auto"
                          variant="body4"
                        >
                          1M
                        </Text>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_900.svg"
                        className="h-[21px] w-[21px]"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col gap-px grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-full">
                    <div className="bg-gray_900 border-bluegray_300 border-solid border-t flex sm:flex-col flex-row gap-7 items-center justify-between px-5 py-3 w-full">
                      <div className="flex relative w-[62%] sm:w-full">
                        <div className="flex flex-col items-center justify-start my-auto w-full">
                          <div className="flex flex-col h-12 md:h-auto items-start justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-28px] my-auto w-full z-[1]">
                          <div className="flex flex-col gap-1 items-center justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem ipsum
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              24 Apr 2021
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-end w-full">
                        <div className="flex flex-col items-end justify-center w-full">
                          <Text
                            className="font-normal not-italic text-right text-white_A700_93 tracking-[0.10px] w-auto"
                            variant="body3"
                          >
                            15,999.06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-full">
                    <div className="bg-gray_900 border-bluegray_300 border-solid border-y flex sm:flex-col flex-row gap-7 items-center justify-between px-5 py-3 w-full">
                      <div className="flex relative w-[62%] sm:w-full">
                        <div className="flex flex-col items-center justify-start my-auto w-full">
                          <div className="flex flex-col h-12 md:h-auto items-start justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-28px] my-auto w-full z-[1]">
                          <div className="flex flex-col gap-1 items-center justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem ipsum
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              24 Apr 2021
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-end w-full">
                        <div className="flex flex-col items-end justify-center w-full">
                          <Text
                            className="font-normal not-italic text-right text-white_A700_93 tracking-[0.10px] w-auto"
                            variant="body3"
                          >
                            13,786.18
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start w-full">
                    <div className="bg-gray_900 border-b border-bluegray_300 border-solid flex sm:flex-col flex-row gap-7 items-center justify-between px-5 py-3 w-full">
                      <div className="flex relative w-[62%] sm:w-full">
                        <div className="flex flex-col items-center justify-start my-auto w-full">
                          <div className="flex flex-col h-12 md:h-auto items-start justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-28px] my-auto w-full z-[1]">
                          <div className="flex flex-col gap-1 items-center justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem ipsum
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-auto"
                              variant="body4"
                            >
                              24 Apr 2021
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-end w-full">
                        <div className="flex flex-col items-end justify-center w-full">
                          <Text
                            className="font-normal not-italic text-right text-white_A700_93 tracking-[0.10px] w-auto"
                            variant="body3"
                          >
                            10,604.27
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-left tracking-[0.10px] w-auto"
                    variant="body3"
                  >
                    Showing 3 of 25 Results
                  </Text>
                  <div className="flex flex-row items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-8 w-8"
                      alt="arrowleft"
                    />
                    <Button
                      className="cursor-pointer font-normal min-w-[32px] not-italic text-center text-sm text-white_A700 w-auto"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="FillBlueA200"
                    >
                      1
                    </Button>
                    <div className="flex flex-col items-center justify-start px-3 py-2 rounded self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-bluegray_701 text-left w-auto"
                        variant="body4"
                      >
                        2
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start px-3 py-2 rounded-[3px] self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-bluegray_701 text-left w-auto"
                        variant="body4"
                      >
                        3
                      </Text>
                    </div>
                    <Img
                      src="images/img_computer.svg"
                      className="h-9 rounded-[3px] w-7"
                      alt="computer"
                    />
                    <div className="flex flex-col items-center justify-start px-3 py-2 rounded-[3px] self-stretch w-auto">
                      <Text
                        className="font-normal h-4 not-italic text-bluegray_701 text-left w-auto"
                        variant="body4"
                      >
                        10
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_701.svg"
                      className="h-8 w-8"
                      alt="arrowright_Seven"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[410px] md:h-auto items-start justify-start max-w-[629px] w-full">
                <div className="md:h-[162px] sm:h-[220px] h-[410px] relative w-full">
                  <div className="absolute bg-gray_900 flex flex-col md:h-auto h-full inset-[0] items-center justify-start m-auto rounded shadow-bs w-[616px] md:w-full">
                    <div className="bg-gray_900 flex flex-col items-start justify-start rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between p-5 rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full">
                        <div className="flex flex-col items-center justify-start self-stretch w-auto">
                          <Text
                            className="font-semibold text-left text-white_A700 w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Top Sellers
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-end self-stretch w-auto">
                          <div className="flex flex-col items-start justify-start self-stretch w-auto">
                            <div className="flex flex-col h-[46px] md:h-auto items-start justify-start self-stretch w-auto sm:w-full">
                              <SelectBox
                                className="font-normal h-[46px] not-italic text-left text-lg text-white_A700_93 w-full"
                                placeholderClassName="text-white_A700_93"
                                name="fields"
                                placeholder="Report"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_white_a700.svg"
                                    className="h-6 w-6"
                                    alt="arrow_down"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillGray900"
                              ></SelectBox>
                            </div>
                          </div>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="h-[21px] w-[21px]"
                            alt="overflowmenu_One"
                          />
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex-col gap-px grid items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <div className="bg-gray_900 border-bluegray_300 border-solid border-t flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-5 py-3 w-full">
                          <div className="flex flex-col h-12 md:h-auto items-center justify-start w-[300px]">
                            <div className="flex flex-col gap-1 h-full items-start justify-center w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                Lorem ipsum
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                  variant="body3"
                                >
                                  Lorem ipsum
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="font-normal leading-[24.00px] max-w-[69px] md:max-w-full not-italic text-left text-white_A700_93 tracking-[0.10px]"
                                variant="body3"
                              >
                                Lorem ipsum
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-1 items-start justify-center w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                3470
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 w-auto"
                                variant="body4"
                              >
                                Lorem
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                {" "}
                                45600
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <div className="bg-gray_900 border-bluegray_300 border-solid border-t flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-5 py-3 w-full">
                          <div className="flex flex-col h-12 md:h-auto items-center justify-start w-[300px]">
                            <div className="flex flex-col gap-1 h-full items-start justify-center w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                Lorem ipsum
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                  variant="body3"
                                >
                                  Lorem ipsum
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="font-normal leading-[24.00px] max-w-[69px] md:max-w-full not-italic text-left text-white_A700_93 tracking-[0.10px]"
                                variant="body3"
                              >
                                Lorem ipsum
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-1 items-start justify-center w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                5488
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 w-auto"
                                variant="body4"
                              >
                                Lorem
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-center w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                29456
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left tracking-[0.10px] w-auto"
                        variant="body3"
                      >
                        Showing 3 of 25 Results
                      </Text>
                      <div className="flex flex-row items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="h-8 w-8"
                          alt="arrowleft_One"
                        />
                        <Button
                          className="cursor-pointer font-normal min-w-[32px] not-italic text-center text-sm text-white_A700 w-auto"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="FillBlueA200"
                        >
                          1
                        </Button>
                        <div className="flex flex-col items-center justify-start px-3 py-2 rounded self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-bluegray_701 text-left w-auto"
                            variant="body4"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start px-3 py-2 rounded-[3px] self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-bluegray_701 text-left w-auto"
                            variant="body4"
                          >
                            3
                          </Text>
                        </div>
                        <Img
                          src="images/img_computer.svg"
                          className="h-9 rounded-[3px] w-7"
                          alt="computer_One"
                        />
                        <div className="flex flex-col items-center justify-start px-3 py-2 rounded-[3px] self-stretch w-auto">
                          <Text
                            className="font-normal h-4 not-italic text-bluegray_701 text-left w-auto"
                            variant="body4"
                          >
                            10
                          </Text>
                        </div>
                        <Img
                          src="images/img_arrowright_bluegray_701.svg"
                          className="h-8 w-8"
                          alt="arrowright_Eight"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[26%] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="sm:h-40 h-[72px] px-5 py-3 relative w-full">
                      <div className="absolute bg-gray_900 border-bluegray_300 border-solid border-y flex flex-1 sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-center justify-start m-auto px-5 py-3 w-full">
                        <div className="flex flex-col h-12 md:h-auto items-center justify-start w-[300px]">
                          <div className="flex flex-col gap-1 h-full items-start justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem ipsum
                            </Text>
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                                variant="body3"
                              >
                                Lorem ipsum
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[145px]">
                          <div className="flex flex-col items-start justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              Lorem ipsum
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[74px]">
                          <div className="flex flex-col gap-1 items-start justify-center w-full">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              4100
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 w-auto"
                              variant="body4"
                            >
                              Lorem
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[90px]">
                        <div className="flex flex-col items-start justify-center w-full">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                            variant="body3"
                          >
                            11260
                          </Text>
                        </div>
                      </div>
                    </div>
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

export default DashboardPage;
