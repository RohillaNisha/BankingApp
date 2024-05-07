import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar11 from "../../components/Sidebar11";
import TransactionColumnbalance from "../../components/TransactionColumnbalance";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    description: "Spotify Subscription",
    transactionid: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: "-$2,500",
    receipt: "Download",
  },
  {
    description: "Freepik Sales",
    transactionid: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: "+$750",
    receipt: "Download",
  },
  {
    description: "Mobile Service",
    transactionid: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: "-$150",
    receipt: "Download",
  },
  {
    description: "Wilson",
    transactionid: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: "-$1050",
    receipt: "Download",
  },
  {
    description: "Emilly",
    transactionid: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: "+$840",
    receipt: "Download",
  },
];

export default function TransactionPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("description", {
        cell: (info) => (
          <div className="flex items-center gap-3.5">
            <Button
              size="sm"
              variant="outline"
              shape="circle"
              color="undefined_undefined"
              className="w-[30px] !rounded-[15px]"
            >
              <Img src="images/img_arrow.svg" />
            </Button>
            <Text as="p" className="self-end !text-blue_gray-900">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 pl-[30px] pt-px !font-medium sm:pl-5">
            Description
          </Text>
        ),
        meta: { width: "259px" },
      }),
      tableColumnHelper.accessor("transactionid", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-[11px] !font-medium">
            Transaction ID
          </Text>
        ),
        meta: { width: "154px" },
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-2.5 pt-px !font-medium">
            Type
          </Text>
        ),
        meta: { width: "125px" },
      }),
      tableColumnHelper.accessor("card", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-[11px] pt-px !font-medium">
            Card
          </Text>
        ),
        meta: { width: "134px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-[11px] pt-px !font-medium">
            Date
          </Text>
        ),
        meta: { width: "198px" },
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text as="p" className="!font-medium !text-red-700">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-[11px] pt-px !font-medium">
            Amount
          </Text>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("receipt", {
        cell: (info) => (
          <div className="flex-1 md:self-stretch">
            <Button size="lg" variant="outline" color="undefined_undefined" className="w-full rounded-[17px]">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-2.5 pt-px !font-medium">
            Receipt
          </Text>
        ),
        meta: { width: "130px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>bankingApp</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex items-start md:flex-col">
          <Sidebar11 />
          <div className="flex flex-1 flex-col items-center gap-[27px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col gap-6 md:w-full">
              <div className="flex gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col gap-[17px] md:self-stretch">
                  <div className="flex items-start justify-between gap-5">
                    <Heading as="h1">My Cards</Heading>
                    <Button size="xs" shape="square" className="min-w-[93px] font-semibold text-blue_gray-900">
                      + Add Card
                    </Button>
                  </div>
                  <div className="flex gap-[30px] md:flex-col">
                    {[...Array(2)].map((d, index) => (
                      <TransactionColumnbalance
                        balance="Balance"
                        price="$5,756"
                        cardholder="CARD HOLDER"
                        eddycusuma="Eddy Cusuma"
                        validthru="VALID THRU"
                        p12twentytwo="12/22"
                        cardnumber="3778 **** **** 1234"
                        key={"transaction" + index}
                        className="bg-indigo-600_01"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex w-[32%] flex-col items-start gap-[17px] md:w-full">
                  <Heading as="h2">My Expense</Heading>
                  <div className="self-stretch rounded-[25px] bg-white-A700 p-[22px] sm:p-5">
                    <div className="flex items-end">
                      <div className="flex flex-1 flex-col items-center gap-2.5">
                        <div className="h-[93px] w-[37px] self-stretch rounded-[10px] bg-gray-100_04" />
                        <Text size="s" as="p">
                          Aug
                        </Text>
                      </div>
                      <div className="ml-[15px] flex flex-1 flex-col items-center gap-2.5">
                        <div className="h-[142px] w-[37px] self-stretch rounded-[10px] bg-gray-100_04" />
                        <Text size="s" as="p">
                          Sep
                        </Text>
                      </div>
                      <div className="ml-[15px] flex flex-1 flex-col items-center gap-[9px]">
                        <div className="h-[96px] w-[37px] self-stretch rounded-[10px] bg-gray-100_04" />
                        <Text size="s" as="p">
                          Oct
                        </Text>
                      </div>
                      <div className="ml-[15px] flex flex-1 flex-col items-center gap-[9px]">
                        <div className="h-[49px] w-[37px] self-stretch rounded-[10px] bg-gray-100_04" />
                        <Text size="s" as="p">
                          Nov
                        </Text>
                      </div>
                      <div className="ml-1.5 flex w-[23%] flex-col items-center gap-2">
                        <Text size="md" as="p" className="!font-medium !text-blue_gray-800">
                          $12,500
                        </Text>
                        <div className="h-[137px] w-[37px] rounded-[10px] bg-indigo-600_01" />
                        <Text size="s" as="p">
                          Dec
                        </Text>
                      </div>
                      <div className="ml-1.5 flex flex-1 flex-col items-center gap-[9px]">
                        <div className="h-[88px] w-[37px] self-stretch rounded-[10px] bg-gray-100_04" />
                        <Text size="s" as="p">
                          Jan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Heading as="h3" className="self-start">
                  Recent Transactions
                </Heading>
                <div className="mt-[25px] flex flex-col items-start self-stretch">
                  <div className="relative z-[1] flex w-[38%] items-start justify-between gap-5 md:w-full">
                    <div className="flex w-[34%] flex-col items-center gap-[7px]">
                      <Text as="p" className="!font-medium !text-blue-A700">
                        All Transactions
                      </Text>
                      <div className="h-[3px] w-full self-stretch rounded-tl-[1px] rounded-tr-[1px] bg-blue-A700" />
                    </div>
                    <Text as="p" className="!font-medium">
                      Income
                    </Text>
                    <Text as="p" className="!font-medium">
                      Expense
                    </Text>
                  </div>
                  <div className="relative mt-[-1px] h-px w-full self-stretch bg-gray-300" />
                </div>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "flex-wrap" }}
                  rowDataProps={{ className: "md:flex-col" }}
                  className="mt-[45px] self-stretch rounded-[25px] bg-white-A700"
                  columns={tableColumns}
                  data={tableData}
                />
                <div className="mt-[41px] flex items-center self-end">
                  <div className="flex items-center gap-1">
                    <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px]" />
                    <Text size="lg" as="p" className="self-start !font-medium !text-indigo-600_01">
                      Previous
                    </Text>
                  </div>
                  <Button size="xl" className="ml-3 min-w-[40px] rounded-[10px] font-medium">
                    1
                  </Button>
                  <Text size="lg" as="p" className="ml-[11px] !font-medium !text-indigo-600_01">
                    2
                  </Text>
                  <Text size="lg" as="p" className="ml-[27px] !font-medium !text-indigo-600_01">
                    3
                  </Text>
                  <Text size="lg" as="p" className="ml-[27px] !font-medium !text-indigo-600_01">
                    4
                  </Text>
                  <div className="ml-7 flex items-center gap-1">
                    <Text size="lg" as="p" className="self-start !font-medium !text-indigo-600_01">
                      Next
                    </Text>
                    <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
