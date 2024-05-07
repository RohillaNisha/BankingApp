import React from "react";
import { Img, Text } from "./..";

export default function MainDashboardColumnbalance({
  balance = "Balance",
  price = "$5,756",
  cardholder = "CARD HOLDER",
  eddycusuma = "Eddy Cusuma",
  validthru = "VALID THRU",
  p12twentytwo = "12/22",
  cardnumber = "3778 **** **** 1234",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full pt-6 gap-[30px] sm:pt-5 rounded-[25px]`}
    >
      <div className="flex w-[86%] items-start justify-between gap-5">
        <div className="flex flex-col items-start gap-0.5">
          <Text size="xs" as="p" className="!font-lato !text-white-A700">
            {balance}
          </Text>
          <Text size="4xl" as="p" className="!text-white-A700">
            {price}
          </Text>
        </div>
        <Img src="images/img_chip_card.png" alt="balance" className="h-[34px] w-[34px] object-cover" />
      </div>
      <div className="ml-[26px] flex w-[70%] justify-between gap-5 self-start md:ml-0">
        <div className="flex flex-col items-start gap-1">
          <Text size="xs" as="p" className="!text-white-A700_b2">
            {cardholder}
          </Text>
          <Text size="lg" as="p" className="!text-white-A700">
            {eddycusuma}
          </Text>
        </div>
        <div className="flex flex-col items-start gap-1">
          <Text size="xs" as="p" className="!text-white-A700_b2">
            {validthru}
          </Text>
          <Text size="lg" as="p" className="!text-white-A700">
            {p12twentytwo}
          </Text>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient p-5">
        <Text size="5xl" as="p" className="self-end !text-white-A700">
          {cardnumber}
        </Text>
        <Img src="images/img_contrast.svg" alt="image" className="h-[30px]" />
      </div>
    </div>
  );
}
