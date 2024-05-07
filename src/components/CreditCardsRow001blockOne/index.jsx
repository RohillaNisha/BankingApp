import React from "react";
import { Text, Button, Img } from "./..";

export default function CreditCardsRow001blockOne({
  blockcardtext = "Block Card",
  instantlyblocktext = "Instantly block your card",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-5`}>
      <Button size="5xl" shape="round" className="w-[60px]">
        <Img src="images/img_001_block_credit_card.svg" />
      </Button>
      <div className="flex flex-col items-start gap-[7px]">
        <Text as="p" className="!font-medium !text-blue_gray-900">
          {blockcardtext}
        </Text>
        <Text size="lg" as="p">
          {instantlyblocktext}
        </Text>
      </div>
    </div>
  );
}
