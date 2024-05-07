import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import InvestmentsRowmoneybagof from "../../components/InvestmentsRowmoneybagof";
import { ReactTable } from "../../components/ReactTable";
import Sidebar11 from "../../components/Sidebar11";
import { createColumnHelper } from "@tanstack/react-table";

const data = [
  { totalinvestedtext: "Total Invested Amount", pricetext: "$150,000" },
  { totalinvestedtext: "Number of Investments", pricetext: "1,250" },
  { totalinvestedtext: "Rate of Return", pricetext: "+5.80%" },
];
const table1Data = [
  { slno: "01.", name: "Trivago", price: "$520", return: "+5%" },
  { slno: "02.", name: "Canon", price: "$480", return: "+10%" },
  { slno: "03.", name: "Uber Food", price: "$350", return: "-3%" },
  { slno: "04.", name: "Nokia", price: "$940", return: "+2%" },
  { slno: "05.", name: "Tiktok", price: "$670", return: "-12%" },
];

export default function InvestmentsPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("slno", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2 pl-[30px] pt-px !font-medium sm:pl-5">
            SL No
          </Text>
        ),
        meta: { width: "112px" },
      }),
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2 pt-px !font-medium">
            Name
          </Text>
        ),
        meta: { width: "131px" },
      }),
      table1ColumnHelper.accessor("price", {
        cell: (info) => (
          <Text as="p" className="!text-blue_gray-900">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2 !font-medium">
            Price
          </Text>
        ),
        meta: { width: "104px" },
      }),
      table1ColumnHelper.accessor("return", {
        cell: (info) => (
          <Text as="p" className="!font-medium !text-green-600">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2 pt-px !font-medium">
            Return
          </Text>
        ),
        meta: { width: "98px" },
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
          <div className="flex flex-1 flex-col items-center gap-[31px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col gap-[26px] md:w-full">
              <div className="flex gap-[30px] md:flex-col">
                {data.map((d, index) => (
                  <InvestmentsRowmoneybagof {...d} key={"listmoneybagof" + index} />
                ))}
              </div>
              <div className="flex gap-[30px] md:flex-col">
                <div className="flex w-full flex-col items-start gap-[17px]">
                  <Heading as="h1">Yearly Total Investment</Heading>
                  <div className="self-stretch rounded-[25px] bg-white-A700 p-[26px] sm:p-5">
                    <div className="flex items-start justify-between gap-5 sm:flex-col">
                      <div className="flex flex-col items-end gap-[31px]">
                        <Text size="s" as="p">
                          $40,000
                        </Text>
                        <Text size="s" as="p">
                          $30,000
                        </Text>
                        <Text size="s" as="p">
                          $20,000
                        </Text>
                        <Text size="s" as="p">
                          $10,000
                        </Text>
                        <Text size="s" as="p" className="h-[16px] w-[16px]">
                          $0
                        </Text>
                      </div>
                      <div className="mt-[13px] flex flex-1 flex-col items-center sm:self-stretch">
                        <div className="h-px w-full self-stretch bg-gray-100_02" />
                        <Img src="images/img_statistics.svg" alt="statistics" className="mt-1.5 h-[161px] w-[92%]" />
                        <div className="mt-[22px] h-px w-full self-stretch bg-gray-100_02" />
                        <div className="mt-[7px] flex flex-wrap justify-between gap-5 self-stretch">
                          <Text size="s" as="p">
                            2016
                          </Text>
                          <Text size="s" as="p">
                            2017
                          </Text>
                          <Text size="s" as="p">
                            2018
                          </Text>
                          <Text size="s" as="p">
                            2019
                          </Text>
                          <Text size="s" as="p">
                            2020
                          </Text>
                          <Text size="s" as="p">
                            2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-[17px]">
                  <Heading as="h2">Monthly Revenue</Heading>
                  <div className="flex items-start justify-between gap-5 self-stretch rounded-[25px] bg-white-A700 p-[26px] sm:flex-col sm:p-5">
                    <div className="flex flex-col items-end gap-[31px]">
                      <Text size="s" as="p">
                        $40,000
                      </Text>
                      <Text size="s" as="p">
                        $30,000
                      </Text>
                      <Text size="s" as="p">
                        $20,000
                      </Text>
                      <Text size="s" as="p">
                        $10,000
                      </Text>
                      <Text size="s" as="p" className="h-[16px] w-[17px]">
                        $0
                      </Text>
                    </div>
                    <div className="mt-[13px] flex-1 sm:self-stretch">
                      <div className="h-px bg-gray-100_02" />
                      <div className="relative mt-[25px] h-[111px]">
                        <div className="absolute left-0 right-0 top-[22.00px] m-auto flex w-full flex-col gap-[47px]">
                          <div className="h-px bg-gray-100_02" />
                          <div className="h-px bg-gray-100_02" />
                        </div>
                        <Img
                          src="images/img_vector_6.svg"
                          alt="vectorsix"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[111px] w-full"
                        />
                      </div>
                      <div className="mt-[7px] h-px bg-gray-100_02" />
                      <div className="mt-[45px] h-px bg-gray-100_02" />
                      <div className="mt-[7px] flex flex-wrap justify-between gap-5">
                        <Text size="s" as="p">
                          2016
                        </Text>
                        <Text size="s" as="p">
                          2017
                        </Text>
                        <Text size="s" as="p">
                          2018
                        </Text>
                        <Text size="s" as="p">
                          2019
                        </Text>
                        <Text size="s" as="p">
                          2020
                        </Text>
                        <Text size="s" as="p">
                          2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[15px] md:self-stretch">
                  <Heading as="h3">My Investment</Heading>
                  <div className="flex flex-col gap-[15px] self-stretch">
                    <div className="flex items-center rounded-[20px] bg-white-A700 p-[15px] sm:flex-col">
                      <Button size="5xl" shape="round" className="w-[60px] sm:p-5">
                        <Img src="images/img_favorite.svg" />
                      </Button>
                      <div className="ml-5 flex flex-col items-start gap-[5px] sm:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Apple Store
                        </Text>
                        <Text size="lg" as="p">
                          E-commerce, Marketplace
                        </Text>
                      </div>
                      <div className="ml-14 flex flex-col items-start gap-[5px] sm:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          $54,000
                        </Text>
                        <Text size="lg" as="p">
                          Envestment Value
                        </Text>
                      </div>
                      <div className="ml-11 flex flex-col items-start gap-[5px] sm:ml-0">
                        <Text as="p" className="!font-medium !text-green-600">
                          +16%
                        </Text>
                        <Text size="lg" as="p">
                          Return Value
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center rounded-[20px] bg-white-A700 p-[15px] sm:flex-col">
                      <Button size="5xl" shape="round" className="w-[60px] sm:p-5">
                        <Img src="images/img_contrast_indigo_600_01.svg" />
                      </Button>
                      <div className="ml-5 flex flex-col items-start gap-[5px] sm:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Samsung Mobile
                        </Text>
                        <Text size="lg" as="p">
                          E-commerce, Marketplace
                        </Text>
                      </div>
                      <div className="ml-14 flex flex-col items-start gap-[5px] sm:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          $25,300
                        </Text>
                        <Text size="lg" as="p">
                          Envestment Value
                        </Text>
                      </div>
                      <div className="ml-11 flex flex-col items-start gap-[5px] sm:ml-0">
                        <Text as="p" className="!font-medium !text-red-700">
                          -4%
                        </Text>
                        <Text size="lg" as="p">
                          Return Value
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 rounded-[20px] bg-white-A700 p-[15px] sm:flex-col">
                      <div className="flex items-center gap-5">
                        <Button size="5xl" shape="round" className="w-[60px]">
                          <Img src="images/img_settings_indigo_600_01_60x60.svg" />
                        </Button>
                        <div className="flex flex-col items-start gap-[5px]">
                          <Text as="p" className="!font-medium !text-blue_gray-900">
                            Tesla Motors
                          </Text>
                          <Text size="lg" as="p">
                            Electric Vehicles
                          </Text>
                        </div>
                      </div>
                      <div className="mr-[21px] flex w-[45%] justify-between gap-5 md:mr-0 sm:w-full">
                        <div className="flex flex-col items-start gap-[5px]">
                          <Text as="p" className="!font-medium !text-blue_gray-900">
                            $8,200
                          </Text>
                          <Text size="lg" as="p">
                            Envestment Value
                          </Text>
                        </div>
                        <div className="flex flex-col items-start gap-[5px]">
                          <Text as="p" className="!font-medium !text-green-600">
                            +25%
                          </Text>
                          <Text size="lg" as="p">
                            Return Value
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[41%] flex-col items-start gap-[41px] md:w-full">
                  <Heading as="h4">Trending Stock</Heading>
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "flex-wrap" }}
                    rowDataProps={{ className: "flex-wrap" }}
                    className="self-stretch rounded-[25px] bg-white-A700"
                    columns={table1Columns}
                    data={table1Data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
