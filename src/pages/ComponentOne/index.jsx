import React from "react";

import Header from "components/Header";
import { Text, Img, Button, Line, List } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ComponentOnePage = () => {
  return (
    <>
      <div className="flex flex-col font-archivo items-center justify-start mx-auto w-full">
        <div className="bg-black_900 flex flex-col items-center justify-start rounded-[20px] w-full">
          <Header className="bg-bluegray_800 flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-8 h-[798px] md:h-auto items-start justify-start max-w-[1390px] mt-3.5 mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <div className="sm:h-[302px] h-[350px] md:h-[585px] pb-5 relative w-full">
                <div className="absolute bg-gray_900 flex flex-col h-[333px] md:h-auto inset-x-[0] items-center justify-start mx-auto pb-5 rounded shadow-bs top-[0] w-full">
                  <div className="h-[68px] relative w-full">
                    <div className="bg-gray_900 h-12 mx-auto rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full"></div>
                    <div className="absolute flex flex-1 flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto p-5 w-full">
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
                        <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                          <div className="flex flex-col items-center justify-center self-stretch w-auto">
                            <Text
                              className="not-italic text-bluegray_900 text-left w-auto"
                              variant="body1"
                            ></Text>
                          </div>
                          <Img
                            src="images/img_arrowdown_white_a700.svg"
                            className="h-5 w-5"
                            alt="arrowdown"
                          />
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[21px] w-[21px]"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gray_900 bottom-[0] flex md:flex-col flex-row md:gap-5 h-[302px] md:h-auto inset-x-[0] items-start justify-start mx-auto px-5 w-full">
                  <div className="flex flex-col h-[285px] md:h-auto items-start justify-center w-[359px]">
                    <div className="flex flex-col gap-3 h-[131px] md:h-auto items-start justify-center p-5 w-full">
                      <Text
                        className="font-semibold text-gray_50 text-left w-auto"
                        variant="body3"
                      >
                        Lorem Ipsum:
                      </Text>
                      <Text
                        className="text-gray_400 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        9,542
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_50 text-left w-auto"
                        variant="body4"
                      >
                        From oct 20,2023 to dec,2023
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] h-[87px] md:h-auto items-center justify-start px-5 w-full">
                      <Img
                        src="images/img_graph.png"
                        className="flex-1 md:flex-none h-[86px] sm:h-auto max-h-[86px] object-cover w-auto"
                        alt="graph"
                      />
                      <div className="flex flex-col items-center justify-start w-[23%]">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[73px] px-2 w-auto"
                          leftIcon={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="mr-1"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed300"
                        >
                          <div className="font-bold text-left text-white_A700 text-xs">
                            16.3%
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="md:h-11 h-[53px] relative w-full">
                      <div className="absolute flex flex-row h-11 md:h-auto inset-x-[0] items-center justify-start mx-auto top-[0] w-[359px]">
                        <div className="flex flex-row gap-2 items-center justify-start pt-5 px-5 self-stretch w-auto">
                          <div className="bg-green_A100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                            <div className="bg-green_A700 h-1.5 rounded-[50%] w-1.5"></div>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                            variant="body3"
                          >
                            3,526.56
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start pt-5 px-5 self-stretch w-auto">
                          <div className="bg-red_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                            <div className="bg-red_500 h-1.5 rounded-[50%] w-1.5"></div>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                            variant="body3"
                          >
                            3,526.56
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-row h-5 md:h-auto inset-x-[0] items-center justify-start mx-auto pb-5 w-[359px]">
                        <div className="flex flex-col items-center justify-start pl-10 sm:pl-5 pr-5 self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-auto"
                            variant="body4"
                          >
                            Lorem
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:pl-10 sm:pl-5 pl-[47px] pr-5 w-[123px]">
                          <Text
                            className="font-normal not-italic text-right text-white_A700 w-auto"
                            variant="body4"
                          >
                            Lorem
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:h-[1286px] h-[278px] md:h-[296px] p-5 relative w-full">
                    <div className="absolute flex flex-col gap-11 md:h-auto h-max inset-[0] items-center justify-center m-auto p-5 w-full">
                      <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-start w-full">
                        <Text
                          className="not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          25k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start w-full">
                        <Text
                          className="not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          20k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-end w-full">
                        <Text
                          className="not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          15k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-end w-full">
                        <Text
                          className="not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          5k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-end w-full">
                        <Text
                          className="h-3.5 not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          0k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                    </div>
                    <div className="absolute bottom-[3%] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto md:pl-10 sm:pl-5 pl-[52px] pr-5 py-5 w-full">
                      <div className="flex flex-col h-[185px] md:h-auto items-center justify-start w-full">
                        <div className="sm:h-[1246px] md:h-[181px] h-full px-5 relative w-full">
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[92%]">
                            <List
                              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-6 justify-center w-full"
                              orientation="horizontal"
                            >
                              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start sm:ml-[0] w-full">
                                <Img
                                  src="images/img_bargroup.svg"
                                  className="h-[159px] w-full"
                                  alt="bargroup"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                                  variant="body4"
                                >
                                  Feb
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start sm:ml-[0] w-full">
                                <Img
                                  src="images/img_bargroup.svg"
                                  className="h-[159px] w-full"
                                  alt="bargroup"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                                  variant="body4"
                                >
                                  Mar
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start sm:ml-[0] w-full">
                                <Img
                                  src="images/img_bargroup.svg"
                                  className="h-[159px] w-full"
                                  alt="bargroup"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                                  variant="body4"
                                >
                                  Apr
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-1.5 h-[185px] md:h-auto items-center justify-start sm:ml-[0] w-full">
                                <Img
                                  src="images/img_bargroup.svg"
                                  className="h-[159px] w-full"
                                  alt="bargroup"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                                  variant="body4"
                                >
                                  May
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start sm:ml-[0] w-full">
                                <Img
                                  src="images/img_bargroup.svg"
                                  className="h-[159px] w-full"
                                  alt="bargroup"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                                  variant="body4"
                                >
                                  Jun
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col gap-1.5 items-center justify-start sm:ml-[0] w-full">
                                <Img
                                  src="images/img_bargroup.svg"
                                  className="h-[159px] w-full"
                                  alt="bargroup"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_300 text-left w-auto"
                                  variant="body4"
                                >
                                  Jul
                                </Text>
                              </div>
                            </List>
                          </div>
                          <Img
                            src="images/img_line.svg"
                            className="absolute bottom-[0] flex-1 h-full inset-x-[0] mx-auto w-[472px]"
                            alt="line"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:h-[298px] h-[433px] md:h-[688px] relative w-full">
                <div className="absolute md:h-52 sm:h-[126px] h-[425px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-gray_900 flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[983px] rounded shadow-bs w-full">
                    <div className="sm:h-[126px] h-[68px] relative w-full">
                      <div className="bg-gray_900 h-12 mx-auto rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full"></div>
                      <div className="absolute flex flex-1 sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto p-5 w-full">
                        <div className="flex flex-col items-center justify-start self-stretch w-auto">
                          <Text
                            className="font-semibold text-left text-white_A700_93 w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Lorem ipsum dolor sit{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-end self-stretch w-auto">
                          <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                            <div className="flex flex-col items-center justify-center self-stretch w-auto">
                              <Text
                                className="not-italic text-bluegray_900 text-left w-auto"
                                variant="body1"
                              ></Text>
                            </div>
                            <Img
                              src="images/img_arrowdown_black_902.svg"
                              className="h-5 w-5"
                              alt="arrowdown_One"
                            />
                          </div>
                          <Img
                            src="images/img_overflowmenu_bluegray_900.svg"
                            className="h-[21px] w-[21px]"
                            alt="overflowmenu_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-5 h-[100px] md:h-auto inset-x-[0] items-center justify-start max-w-[983px] mx-auto top-[11%] w-full">
                    <div className="md:h-[187px] sm:h-[60px] h-[86px] relative w-full">
                      <div className="absolute bg-gray_900 flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[983px] w-full">
                        <Line className="bg-bluegray_300 h-px w-full" />
                      </div>
                      <div className="absolute bottom-[8%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start max-w-[983px] mx-auto w-full">
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col h-full items-center justify-center px-5 w-full">
                            <div className="flex flex-row gap-[115px] items-center justify-end w-[74%] md:w-full">
                              <div className="flex flex-col gap-[7px] items-center justify-start w-[46%]">
                                <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700_93 w-auto"
                                    as="h6"
                                    variant="h6"
                                  >
                                    854{" "}
                                  </Text>
                                  <div className="flex flex-row gap-1 items-center justify-center pt-1 self-stretch w-auto">
                                    <Text
                                      className="font-bold text-green_A700 text-left w-auto"
                                      variant="body4"
                                    >
                                      24 %
                                    </Text>
                                    <Img
                                      src="images/img_ic16trendingup.svg"
                                      className="h-4 w-4"
                                      alt="ic16trendingup"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="font-bold text-center text-white_A700_93 w-auto"
                                  variant="body4"
                                >
                                  Lorem ipsum
                                </Text>
                              </div>
                              <Img
                                src="images/img_line_bluegray_300.svg"
                                className="h-[60px] w-px"
                                alt="line"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-full items-center justify-center px-5 w-full">
                            <div className="flex flex-row gap-[107px] items-center justify-end w-[77%] md:w-full">
                              <div className="flex flex-col gap-[7px] items-center justify-start w-[52%]">
                                <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700_93 w-auto"
                                    as="h6"
                                    variant="h6"
                                  >
                                    1,278
                                  </Text>
                                  <div className="flex flex-row gap-1 items-center justify-center pt-1 self-stretch w-auto">
                                    <Text
                                      className="font-bold text-green_A700 text-left w-auto"
                                      variant="body4"
                                    >
                                      60 %
                                    </Text>
                                    <Img
                                      src="images/img_ic16trendingup.svg"
                                      className="h-4 w-4"
                                      alt="ic16trendingup"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="font-bold text-center text-white_A700_93 w-auto"
                                  variant="body4"
                                >
                                  Lorem Ipsum
                                </Text>
                              </div>
                              <Img
                                src="images/img_line_bluegray_300.svg"
                                className="h-[60px] w-px"
                                alt="line"
                              />
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-1 flex-col gap-1 h-full items-center justify-center px-5 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              3m 40sec{" "}
                            </Text>
                            <div className="flex flex-row gap-1 items-center justify-center pt-1 self-stretch w-auto">
                              <Text
                                className="font-bold text-green_A700 text-left w-auto"
                                variant="body4"
                              >
                                37 %
                              </Text>
                              <Img
                                src="images/img_ic16trendingup.svg"
                                className="h-4 w-4"
                                alt="ic16trendingup"
                              />
                            </div>
                          </div>
                          <Text
                            className="font-bold text-center text-white_A700_93 w-auto"
                            variant="body4"
                          >
                            Lorem ipsum dolor{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-bluegray_300 h-px w-full" />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 h-[298px] md:h-auto inset-x-[0] items-center justify-start mx-auto pt-5 px-5 w-full">
                  <div className="flex flex-1 flex-col h-[269px] md:h-auto items-start justify-start p-5 w-full">
                    <div className="flex flex-col gap-11 h-64 md:h-auto items-start justify-center p-5 w-full">
                      <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-start w-full">
                        <Text
                          className="not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          25k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                      <div className="h-[190px] sm:h-[193px] relative w-full">
                        <div className="flex flex-col gap-11 h-full items-center justify-start mt-3 mx-auto w-[93%]">
                          <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start w-full">
                            <Text
                              className="not-italic text-bluegray_300 text-right w-auto"
                              variant="body6"
                            >
                              20k
                            </Text>
                            <Line className="bg-blue_50 h-px w-[94%]" />
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-end w-full">
                            <Text
                              className="not-italic text-bluegray_300 text-right w-auto"
                              variant="body6"
                            >
                              15k
                            </Text>
                            <Line className="bg-blue_50 h-px w-[94%]" />
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-end w-full">
                            <Text
                              className="not-italic text-bluegray_300 text-right w-auto"
                              variant="body6"
                            >
                              5k
                            </Text>
                            <Line className="bg-blue_50 h-px w-[94%]" />
                          </div>
                        </div>
                        <Img
                          src="images/img_graph_blue_a200.png"
                          className="absolute h-full inset-[0] m-auto object-cover w-[544px] sm:w-full"
                          alt="graph_One"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-end w-full">
                        <Text
                          className="h-3.5 not-italic text-bluegray_300 text-right w-auto"
                          variant="body6"
                        >
                          0k
                        </Text>
                        <Line className="bg-blue_50 h-px w-[94%]" />
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[258px] h-[279px] pb-[9px] pt-[18px] relative w-[359px]">
                    <div className="bg-gray_900 border border-bluegray_300 border-solid h-[258px] m-auto pb-[9px] pt-[18px] rounded w-full"></div>
                    <div className="absolute flex flex-col md:h-auto inset-[0] m-auto w-full">
                      <div className="flex flex-col mx-auto w-full">
                        <div className="flex flex-col mx-auto w-full">
                          <div className="flex flex-col gap-3 h-[114px] md:h-auto items-start justify-center mx-auto p-5 w-[359px]">
                            <Text
                              className="font-semibold text-left text-white_A700_93 w-auto"
                              variant="body3"
                            >
                              Lorem ipsum dolor sit amet:
                            </Text>
                            <Text
                              className="text-left text-white_A700_93 w-auto"
                              as="h5"
                              variant="h5"
                            >
                              9,542
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 w-auto"
                              variant="body4"
                            >
                              From Oct 20,2023 to Dec,2023
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[15px] h-[100px] md:h-auto items-center justify-evenly mt-[-4px] mx-auto px-5 w-[359px] z-[1]">
                            <Img
                              src="images/img_graph_blue_a200_75x237.png"
                              className="h-[75px] md:h-auto object-cover w-full"
                              alt="graph_Two"
                            />
                            <div className="flex flex-col items-center justify-start w-[23%]">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[71px] px-2 w-auto"
                                leftIcon={
                                  <Img
                                    src="images/img_arrowdown.svg"
                                    className="mr-1"
                                    alt="arrow_down"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillRed300"
                              >
                                <div className="font-normal not-italic text-left text-white_A700 text-xs">
                                  16.3%
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row h-11 md:h-auto items-center justify-start mt-[-4px] mx-auto w-[359px] z-[1]">
                          <div className="flex flex-row gap-2 items-center justify-start pt-5 px-5 self-stretch w-auto">
                            <div className="bg-green_A100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                              <div className="bg-green_A700 h-1.5 rounded-[50%] w-1.5"></div>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              3,526.56
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start pt-5 px-5 self-stretch w-auto">
                            <div className="bg-red_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                              <div className="bg-red_500 h-1.5 rounded-[50%] w-1.5"></div>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700_93 tracking-[0.10px] w-auto"
                              variant="body3"
                            >
                              3,526.56
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row items-start justify-start mt-[-11px] mx-auto pb-5 w-full z-[1]">
                        <div className="flex flex-col items-center justify-start pl-10 sm:pl-5 pr-5 self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_93 w-auto"
                            variant="body4"
                          >
                            Lorem
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:pl-10 sm:pl-5 pl-[47px] pr-5 self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-right text-white_A700_93 w-auto"
                            variant="body4"
                          >
                            Lorem
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[31px] h-[790px] md:h-auto items-start justify-start self-stretch w-auto sm:w-full">
              <div className="md:h-[472px] h-[517px] relative w-[375px] sm:w-full">
                <div className="absolute bg-gray_900 flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto rounded shadow-bs w-[375px] sm:w-full">
                  <div className="bg-gray_900 flex flex-col h-12 md:h-auto items-start justify-start p-5 rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start self-stretch w-auto">
                        <Text
                          className="font-semibold text-left text-white_A700 w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Lorem Ipsum
                        </Text>
                      </div>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[21px] w-[21px]"
                        alt="overflowmenu_Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-[273px] md:h-auto items-start justify-start py-[82px] self-stretch w-auto">
                    <div className="h-60 relative w-60">
                      <div className="h-60 m-auto w-60">
                        <div classname="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible"
                            value={21}
                            counterClockwise
                            strokeWidth={19}
                            styles={{
                              trail: { strokeWidth: 19, stroke: "#22c55e" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(270deg)",
                                stroke: "#eab308",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div classname="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible"
                            value={13}
                            counterClockwise
                            strokeWidth={19}
                            styles={{
                              trail: { strokeWidth: 19, stroke: "#22c55e" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(219deg)",
                                stroke: "#f97316",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div classname="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible"
                            value={10}
                            counterClockwise
                            strokeWidth={19}
                            styles={{
                              trail: { strokeWidth: 19, stroke: "#22c55e" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(0deg)",
                                stroke: "#ef4444",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div classname="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-60 absolute h-60 inset-[0] justify-center m-auto overflow-visible"
                            value={24}
                            counterClockwise
                            strokeWidth={19}
                            styles={{
                              trail: { strokeWidth: 19, stroke: "#22c55e" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(90deg)",
                                stroke: "#3b82f6",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-center justify-start left-[6%] top-[9%] w-4/5">
                        <div className="flex flex-col justify-start w-full">
                          <Text
                            className="md:ml-[0] ml-[53px] not-italic text-gray_900 text-left w-auto"
                            variant="body6"
                          >
                            10.93%
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[162px] mt-[7px] not-italic text-gray_900 text-left w-auto"
                            variant="body6"
                          >
                            25%
                          </Text>
                          <Text
                            className="leading-[16.00px] mt-[13px] not-italic text-gray_900 text-left w-[22%] sm:w-full"
                            variant="body6"
                          >
                            13.59%
                          </Text>
                          <div className="flex flex-row items-start justify-between ml-auto mt-[69px] w-[94%] md:w-full">
                            <Text
                              className="mb-3 not-italic text-gray_900 text-left w-auto"
                              variant="body6"
                            >
                              21.81%
                            </Text>
                            <Text
                              className="mt-3 not-italic text-gray_900 text-left w-auto"
                              variant="body6"
                            >
                              28.9%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="absolute bottom-[0] flex-col gap-3.5 grid inset-x-[0] items-start mx-auto p-5 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-blue_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                        <div className="bg-blue_A200 h-1.5 rounded-[50%] w-1.5"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-4 w-4"
                          alt="checkmark"
                        />
                        <Text
                          className="font-normal not-italic text-blue_A200 text-left w-auto"
                          variant="body4"
                        >
                          43.29%
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_701 text-right w-auto"
                      variant="body4"
                    >
                      lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-green_A100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                        <div className="bg-green_A700 h-1.5 rounded-[50%] w-1.5"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_ic16trendingup.svg"
                          className="h-4 w-4"
                          alt="ic16trendingup"
                        />
                        <Text
                          className="font-normal not-italic text-green_A700 text-left w-auto"
                          variant="body4"
                        >
                          36.16%
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_701 text-right w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-red_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                        <div className="bg-red_500 h-1.5 rounded-[50%] w-1.5"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_checkmark_red_500.svg"
                          className="h-4 w-4"
                          alt="checkmark"
                        />
                        <Text
                          className="font-normal not-italic text-left text-red_500 w-auto"
                          variant="body4"
                        >
                          40.22%
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_701 text-right w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-orange_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                        <div className="bg-yellow_900 h-1.5 rounded-[50%] w-1.5"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_checkmark_yellow_900.svg"
                          className="h-4 w-4"
                          alt="checkmark"
                        />
                        <Text
                          className="font-normal not-italic text-left text-yellow_900 w-auto"
                          variant="body4"
                        >
                          25.53%
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_701 text-right w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center justify-between my-0 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                      <div className="bg-yellow_A100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                        <div className="bg-amber_600 h-1.5 rounded-[50%] w-1.5"></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_upload.svg"
                          className="h-4 w-4"
                          alt="upload"
                        />
                        <Text
                          className="font-normal not-italic text-amber_600 text-left w-auto"
                          variant="body4"
                        >
                          25.53%
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_701 text-right w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                </List>
              </div>
              <div className="bg-gray_900 flex flex-col items-start justify-start rounded shadow-bs w-[375px] sm:w-full">
                <div className="bg-gray_900 flex flex-col h-[68px] md:h-auto items-start justify-start p-5 rounded-bl-none rounded-br-none rounded-tl rounded-tr w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="flex-1 font-semibold text-left text-white_A700_93 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum
                    </Text>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[21px] w-[21px]"
                      alt="overflowmenu_Three"
                    />
                  </div>
                  <div className="flex flex-col h-6 md:h-auto items-end justify-end pt-5 w-full">
                    <div className="flex flex-row gap-2 items-center justify-center self-stretch w-auto">
                      <div className="flex flex-col items-center justify-center self-stretch w-auto">
                        <Text
                          className="not-italic text-bluegray_900 text-left w-auto"
                          variant="body1"
                        ></Text>
                      </div>
                      <Img
                        src="images/img_arrowdown_white_a700.svg"
                        className="h-5 w-5"
                        alt="arrowdown_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[131px] md:h-auto items-center justify-between w-full">
                  <div className="flex flex-col h-60 items-center justify-start py-[60px] w-60">
                    <div className="h-[120px] relative w-full">
                      <div classname="!w-full absolute h-[120px] inset-[0] justify-center m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-full absolute h-[120px] inset-[0] justify-center m-auto overflow-visible"
                          value={43}
                          counterClockwise
                          strokeWidth={4}
                          styles={{
                            trail: { strokeWidth: 4, stroke: "#323a46" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#3b82f6",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div classname="!w-[84%] absolute bottom-[0] h-[100px] inset-x-[0] mx-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[84%] absolute bottom-[0] h-[100px] inset-x-[0] mx-auto overflow-visible"
                          value={36}
                          counterClockwise
                          strokeWidth={4}
                          styles={{
                            trail: { strokeWidth: 4, stroke: "#323a46" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#22c55e",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div classname="!w-[68%] absolute bottom-[0] h-[81px] inset-x-[0] mx-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[68%] absolute bottom-[0] h-[81px] inset-x-[0] mx-auto overflow-visible"
                          value={40}
                          strokeWidth={4}
                          styles={{
                            trail: { strokeWidth: 4, stroke: "#323a46" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(-90deg)",
                              stroke: "#ef4444",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div classname="!w-[53%] absolute bottom-[0] h-[63px] inset-x-[0] mx-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[53%] absolute bottom-[0] h-[63px] inset-x-[0] mx-auto overflow-visible"
                          value={25}
                          counterClockwise
                          strokeWidth={5}
                          styles={{
                            trail: { strokeWidth: 5, stroke: "#323a46" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#f97316",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-3 grid grid-cols-5 h-[54px] justify-center py-5 w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 md:flex-1 flex-row gap-1 items-center justify-start self-stretch w-auto md:w-full">
                    <div className="bg-blue_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                      <div className="bg-blue_A200 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-1 flex-row gap-1 items-center justify-start self-stretch w-auto md:w-full">
                    <div className="bg-green_A100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                      <div className="bg-green_A700 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-1 flex-row gap-1 items-center justify-start self-stretch w-auto md:w-full">
                    <div className="bg-yellow_A100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                      <div className="bg-amber_600 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-1 flex-row gap-1 items-center justify-start self-stretch w-auto md:w-full">
                    <div className="bg-orange_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                      <div className="bg-yellow_900 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                  <div className="flex flex-1 md:flex-1 flex-row gap-1 items-center justify-start self-stretch w-auto md:w-full">
                    <div className="bg-red_100 flex flex-col h-3 items-center justify-start p-[3px] rounded-[50%] w-3">
                      <div className="bg-red_500 h-1.5 rounded-[50%] w-1.5"></div>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_93 w-auto"
                      variant="body4"
                    >
                      Lorem
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-bluegray_800 flex flex-row font-opensans md:gap-10 items-center justify-between mt-1 p-[9px] w-full">
            <Text
              className="ml-10 text-bluegray_600 text-left tracking-[1.26px] uppercase w-auto"
              as="h1"
              variant="h1"
            >
              E-waste visualisation
            </Text>
            <Text
              className="mr-10 text-bluegray_600 text-right tracking-[1.26px] uppercase w-auto"
              as="h1"
              variant="h1"
            >
              2023
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentOnePage;
