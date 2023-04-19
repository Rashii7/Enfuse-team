import React from "react";

import { Text, Line, Img } from "components";

const Side = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col gap-7 items-center justify-start w-full">
          <div className="bg-bluegray_800 flex flex-col items-start justify-start w-full">
            <div className="border-b border-bluegray_100 border-solid flex flex-col gap-2 h-[100px] md:h-auto items-center justify-start pt-2 w-full">
              <div className="flex flex-col items-start justify-start px-5 w-full">
                <div className="flex flex-col items-start justify-end pt-1.5 px-1.5 w-auto md:w-full">
                  <Text
                    className="font-jost text-left text-white_A700 tracking-[0.10px] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Logo
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_200 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col h-[104px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col gap-2 h-[104px] md:h-auto items-start justify-start w-full">
                  <div className="flex flex-col h-12 md:h-auto items-start justify-start px-5 py-2.5 w-full">
                    <Text
                      className="font-archivo font-semibold text-left text-white_A700_93 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Menu
                    </Text>
                  </div>
                  <div className="bg-black_900 flex flex-row gap-2 h-11 md:h-auto items-start justify-start px-5 py-2.5 rounded w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <Img
                        src="images/img_ic24viewboxes.svg"
                        className="h-6 w-6"
                        alt="ic24viewboxes"
                      />
                      <Text
                        className="flex-1 font-archivo font-semibold text-blue_A700 text-left w-auto"
                        variant="body3"
                      >
                        Dashboard
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_blue_a700_24x24.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-row gap-2 h-5 md:h-auto items-center justify-start pl-3 w-full">
                      <div className="flex flex-1 flex-row gap-1 items-center justify-start w-full">
                        <Img
                          src="images/img_eye.svg"
                          className="h-4 w-4"
                          alt="eye"
                        />
                        <Text
                          className="font-archivo font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Lorem
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-4 max-h-4 w-auto"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-row gap-2 h-5 md:h-auto items-center justify-between pl-3 w-full">
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_eye.svg"
                          className="h-4 w-4"
                          alt="eye_One"
                        />
                        <Text
                          className="font-archivo font-normal not-italic text-left text-white_A700 w-auto"
                          variant="body4"
                        >
                          Lorem
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-4 w-auto"
                        alt="arrowright_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-row gap-2 items-center justify-between pl-3 w-full">
                      <div className="flex flex-row gap-1 items-center justify-start self-stretch w-auto">
                        <Img
                          src="images/img_arrowup.svg"
                          className="h-4 w-4"
                          alt="arrowup"
                        />
                        <Text
                          className="font-archivo font-normal not-italic text-blue_A700 text-left w-auto"
                          variant="body4"
                        >
                          Lorem
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowdown_blue_a700.svg"
                        className="h-4 w-auto"
                        alt="arrowdown_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-44 md:h-auto items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-col items-center justify-start sm:pl-5 pl-8 w-full">
                      <Text
                        className="font-archivo font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-col items-center justify-start sm:pl-5 pl-8 w-full">
                      <Text
                        className="font-archivo font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-col items-center justify-start sm:pl-5 pl-8 w-full">
                      <Text
                        className="font-archivo font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-col items-center justify-start sm:pl-5 pl-8 w-full">
                      <Text
                        className="font-archivo font-normal not-italic text-left text-white_A700_93 w-auto"
                        variant="body4"
                      >
                        Lorem
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-row gap-2 h-5 md:h-auto items-center justify-start pl-3 w-full">
                      <div className="flex flex-1 flex-row gap-1 items-center justify-start w-full">
                        <Img
                          src="images/img_eye.svg"
                          className="h-4 w-4"
                          alt="eye_Two"
                        />
                        <Text
                          className="flex-1 font-archivo font-normal not-italic text-bluegray_701 text-left w-auto"
                          variant="body4"
                        >
                          Lorem
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowright_bluegray_701.svg"
                        className="h-4 max-h-4 w-auto"
                        alt="arrowright_Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center px-5 py-3 w-full">
                    <div className="flex flex-row gap-2 h-5 md:h-auto items-center justify-start pl-3 w-full">
                      <div className="flex flex-1 flex-row gap-1 items-center justify-start w-full">
                        <Img
                          src="images/img_eye.svg"
                          className="h-4 w-4"
                          alt="eye_Three"
                        />
                        <Text
                          className="flex-1 font-archivo font-normal not-italic text-bluegray_701 text-left w-auto"
                          variant="body4"
                        >
                          Lorem
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowright_bluegray_701.svg"
                        className="h-4 max-h-4 w-auto"
                        alt="arrowright_Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col h-[156px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-col h-[156px] md:h-auto items-start justify-start w-full">
                  <div className="flex flex-row gap-2 h-11 md:h-auto items-center justify-start px-5 py-2.5 w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <Img
                        src="images/img_file.svg"
                        className="h-6 w-6"
                        alt="file"
                      />
                      <Text
                        className="flex-1 font-archivo font-semibold text-bluegray_701 text-left w-auto"
                        variant="body3"
                      >
                        File Manager
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_701_20x20.svg"
                      className="h-5 w-5"
                      alt="arrowright_Four"
                    />
                  </div>
                  <div className="flex flex-row gap-2 h-11 md:h-auto items-center justify-start px-5 py-2.5 w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <Img
                        src="images/img_file_bluegray_701.svg"
                        className="h-6 w-6"
                        alt="file_One"
                      />
                      <Text
                        className="flex-1 font-archivo font-semibold text-bluegray_701 text-left w-auto"
                        variant="body3"
                      >
                        Authentication
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_701_20x20.svg"
                      className="h-5 w-5"
                      alt="arrowright_Five"
                    />
                  </div>
                  <div className="flex flex-row gap-2 h-11 md:h-auto items-center justify-start px-5 py-2.5 w-full">
                    <div className="flex flex-1 flex-row gap-2 items-center justify-start w-full">
                      <Img
                        src="images/img_trophy.svg"
                        className="h-6 w-6"
                        alt="trophy"
                      />
                      <Text
                        className="flex-1 font-archivo font-semibold text-bluegray_701 text-left w-auto"
                        variant="body3"
                      >
                        Experiences
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_701_20x20.svg"
                      className="h-5 w-5"
                      alt="arrowright_Six"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Side.defaultProps = {};

export default Side;
