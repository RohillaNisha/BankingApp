import React from "react";
import { Text } from "./..";

export default function CreditCardsRow({ text1 = "DBL Bank", text2 = "BRC Bank", ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 flex-1`}>
      <div className="flex w-[39%] items-center justify-center gap-3">
        <div className="h-[15px] w-[15px] rounded-[7px] bg-indigo-100" />
        <Text size="lg" as="p" className="!font-medium">
          {text1}
        </Text>
      </div>
      <div className="flex w-[40%] items-center justify-center gap-3">
        <div className="h-[15px] w-[15px] rounded-[7px] bg-indigo-500" />
        <Text size="lg" as="p" className="!font-medium">
          {text2}
        </Text>
      </div>
    </div>
  );
}
