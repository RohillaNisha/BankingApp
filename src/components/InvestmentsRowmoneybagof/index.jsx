import React from "react";
import { Heading, Text, Button, Img } from "./..";

export default function InvestmentsRowmoneybagof({
  totalinvestedtext = "Total Invested Amount",
  pricetext = "$150,000",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]`}
    >
      <Button size="6xl" shape="circle" className="w-[70px] !rounded-[35px]">
        <Img src="images/img_money_bag_of_dollars.svg" />
      </Button>
      <div className="flex flex-col items-start gap-[7px]">
        <Text as="p">{totalinvestedtext}</Text>
        <Heading size="xl" as="h5" className="!text-indigo-600_01">
          {pricetext}
        </Heading>
      </div>
    </div>
  );
}
