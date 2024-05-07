import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input, Heading } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch items-center p-5 border-gray-300 border-b border-solid bg-white-A700`}
    >
      <div className="mx-auto flex w-full max-w-[1110px] items-center justify-between gap-5 md:flex-col">
        <Heading size="4xl" as="h3" className="!text-gray-900">
          Overview
        </Heading>
        <div className="flex w-[46%] items-center justify-center gap-[30px] md:w-full sm:flex-col">
          <Input
            name="search"
            placeholder={`Search for something`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e)}
            prefix={
              <Img
                src="images/img_search_blue_gray_400.svg"
                alt="search"
                className="h-[20px] w-[20px] cursor-pointer"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#888ea2ff" />
              ) : null
            }
            className="w-full gap-[15px] rounded-[25px] text-blue_gray-400 sm:w-full sm:px-5"
          />
          <div className="flex w-full items-center justify-between gap-5 sm:w-full">
            <a href="#">
              <Button shape="circle" className="w-[50px] !rounded-[25px]">
                <Img src="images/img_settings_1.svg" />
              </Button>
            </a>
            <a href="#">
              <Button shape="circle" className="w-[50px] !rounded-[25px]">
                <Img src="images/img_002_notification_1.svg" />
              </Button>
            </a>
            <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
          </div>
        </div>
      </div>
    </header>
  );
}
