import React from "react";
import { Heading, Text, Button, Img } from "./..";

export default function AccountsRowapple2one({
  storename = "Apple Store",
  timeago = "5h ago",
  price = "$450",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-5 flex-1`}>
      <Button size="5xl" shape="round" className="w-[60px]">
        <Img src="images/img_apple_2_1.svg" />
      </Button>
      <div className="flex flex-1 items-start justify-between gap-5">
        <div className="flex flex-col items-start gap-[5px]">
          <Text as="p" className="!font-medium !text-blue_gray-900">
            {storename}
          </Text>
          <Text size="lg" as="p">
            {timeago}
          </Text>
        </div>
        <Heading size="s" as="h6" className="mt-[11px] !text-indigo-600_01">
          {price}
        </Heading>
      </div>
    </div>
  );
}
