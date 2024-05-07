import React from "react";
import { Heading, Text, Button, Img } from "./..";

export default function AccountsRowmoneytagone({ mybalancetext = "My Balance", pricetext = "$12,750", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]`}
    >
      <Button size="6xl" shape="circle" className="w-[70px] !rounded-[35px]">
        <Img src="images/img_money_tag_1.svg" />
      </Button>
      <div className="flex flex-col items-start gap-[5px]">
        <Text as="p">{mybalancetext}</Text>
        <Heading size="3xl" as="h4" className="!text-indigo-600_01">
          {pricetext}
        </Heading>
      </div>
    </div>
  );
}
