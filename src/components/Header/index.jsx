import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="h-[35px] md:h-[45px] mb-[11px] md:ml-[0] ml-[55px] md:mt-0 mt-1 relative w-[44%] md:w-full">
          <div className="absolute bg-black_901 bottom-[0] flex flex-col items-end justify-start p-[3px] right-[0] rounded-md w-[69%]">
            <Img
              src="images/img_search.svg"
              className="h-5 mr-0.5 w-5"
              alt="search"
            />
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-end left-[0] my-auto pr-[3px] py-[3px] w-auto">
            <Text
              className="font-archivo mt-[9px] not-italic text-left text-white_A700 w-auto"
              variant="body2"
            >
              E-waste recycling
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-[67px] items-center justify-start md:ml-[0] ml-[93px] md:mt-0 my-[15px] self-stretch w-auto sm:w-full">
          <Text
            className="font-opensans not-italic text-bluegray_200 text-left tracking-[0.37px] w-auto"
            variant="body5"
          >
            Statistics
          </Text>
          <Text
            className="font-opensans not-italic text-left text-white_A700_93 tracking-[0.37px] w-auto"
            variant="body5"
          >
            Overview
          </Text>
          <Text
            className="font-opensans not-italic text-left text-white_A700 tracking-[0.37px] w-auto"
            variant="body5"
          >
            Dashboard
          </Text>
          <Text
            className="font-opensans not-italic text-left text-white_A700_93 tracking-[0.37px] w-auto"
            variant="body5"
          >
            Analytics
          </Text>
        </div>
        <Img
          src="images/img_user.svg"
          className="h-5 md:ml-[0] ml-[101px] md:mt-0 my-[15px] w-5"
          alt="user"
        />
        <Img
          src="images/img_settings.svg"
          className="h-5 md:ml-[0] ml-[15px] mr-[50px] md:mt-0 my-[15px] w-5"
          alt="settings"
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
