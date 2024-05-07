import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button } from "../../components";
import AccountsRowapple2one from "../../components/AccountsRowapple2one";
import AccountsRowmoneytagone from "../../components/AccountsRowmoneytagone";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";

const data = [
  { storename: "Apple Store", timeago: "5h ago", price: "$450" },
  { storename: "Michael", timeago: "2 days ago", price: "$160" },
  { storename: "Playstation", timeago: "5 days ago", price: "$1085" },
  { storename: "William", timeago: "10 days ago", price: "$90" },
];

export default function AccountsPage() {
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
            <div className="flex w-[93%] flex-col gap-[23px] md:w-full">
              <div className="flex gap-[30px] md:flex-col">
                <AccountsRowmoneytagone mybalancetext="My Balance" pricetext="$12,750" />
                <AccountsRowmoneytagone mybalancetext="Income" pricetext="$5,600" />
                <AccountsRowmoneytagone mybalancetext="Expense" pricetext="$3,460" />
                <AccountsRowmoneytagone mybalancetext="Total Saving" pricetext="$7,920" />
              </div>
              <div className="flex items-center gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[19px] md:self-stretch">
                  <Heading as="h1">Last Transaction</Heading>
                  <div className="flex flex-col gap-2.5 self-stretch rounded-[25px] bg-white-A700 p-[25px] sm:p-5">
                    <div className="flex flex-1 items-center justify-between gap-5 md:flex-col">
                      <div className="flex items-center sm:flex-col">
                        <Button size="4xl" shape="round" className="w-[55px]">
                          <Img src="images/img_renew_1.svg" />
                        </Button>
                        <div className="ml-[25px] flex flex-col items-start gap-1 sm:ml-0">
                          <Text as="p" className="!font-medium !text-blue_gray-900">
                            Spotify Subscription
                          </Text>
                          <Text size="lg" as="p">
                            25 Jan 2021
                          </Text>
                        </div>
                        <Text as="p" className="ml-[31px] sm:ml-0">
                          Shopping
                        </Text>
                        <Text as="p" className="ml-[43px] sm:ml-0">
                          1234 ****
                        </Text>
                        <Text as="p" className="ml-[45px] sm:ml-0">
                          Pending
                        </Text>
                      </div>
                      <Text as="p" className="!font-medium !text-red-700">
                        -$150
                      </Text>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 sm:flex-col">
                      <div className="flex items-start gap-[25px]">
                        <Button size="4xl" shape="round" className="w-[55px]">
                          <Img src="images/img_settings_indigo_600_01.svg" />
                        </Button>
                        <div className="flex flex-col items-start gap-1.5">
                          <Text as="p" className="!font-medium !text-blue_gray-900">
                            Mobile Service
                          </Text>
                          <Text size="lg" as="p">
                            25 Jan 2021
                          </Text>
                        </div>
                      </div>
                      <Text as="p">Service</Text>
                      <div className="flex w-[44%] flex-wrap justify-between gap-5 sm:w-full">
                        <Text as="p" className="self-start">
                          1234 ****
                        </Text>
                        <Text as="p" className="self-end">
                          Completed
                        </Text>
                        <Text as="p" className="self-start !font-medium !text-red-700">
                          -$340
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 md:flex-col">
                      <div className="flex items-center gap-[25px]">
                        <Button size="4xl" shape="round" className="w-[55px]">
                          <Img src="images/img_settings_indigo_600_01_55x55.svg" />
                        </Button>
                        <div className="flex flex-col items-start gap-1">
                          <Text as="p" className="!font-medium !text-blue_gray-900">
                            Emilly Wilson
                          </Text>
                          <Text size="lg" as="p">
                            25 Jan 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex w-[61%] flex-wrap justify-between gap-5 md:w-full">
                        <Text as="p" className="self-start">
                          Transfer
                        </Text>
                        <Text as="p" className="self-start">
                          1234 ****
                        </Text>
                        <Text as="p" className="self-end">
                          Completed
                        </Text>
                        <Text as="p" className="self-start !font-medium !text-green-600">
                          +$780
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col gap-[17px] md:w-full">
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <Heading as="h2">My Card</Heading>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Heading size="md" as="h3">
                        See All
                      </Heading>
                    </a>
                  </div>
                  <div className="flex flex-col items-center rounded-[25px] bg-indigo-600_01 pt-6 sm:pt-5">
                    <div className="flex w-[86%] items-start justify-between gap-5 md:w-full md:p-5">
                      <div className="flex flex-col items-start gap-[3px]">
                        <Text size="xs" as="p" className="!text-white-A700">
                          Balance
                        </Text>
                        <Text size="4xl" as="p" className="!text-white-A700">
                          $5,756
                        </Text>
                      </div>
                      <Img src="images/img_chip_card.png" alt="chipcard" className="h-[34px] w-[34px] object-cover" />
                    </div>
                    <div className="ml-[26px] mt-[22px] flex w-[70%] justify-between gap-5 self-start md:ml-0 md:w-full md:p-5">
                      <div className="flex flex-col items-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          CARD HOLDER
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <Text size="xs" as="p" className="!text-white-A700_b2">
                          VALID THRU
                        </Text>
                        <Text size="lg" as="p" className="!text-white-A700">
                          12/22
                        </Text>
                      </div>
                    </div>
                    <div className="mt-[37px] flex items-center justify-between gap-5 self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient p-5">
                      <Text size="5xl" as="p" className="ml-1.5 self-end !text-white-A700 md:ml-0">
                        3778 **** **** 1234
                      </Text>
                      <Img src="images/img_contrast.svg" alt="contrast" className="h-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[19px] md:self-stretch">
                  <Heading as="h4">Debit & Credit Overview</Heading>
                  <div className="flex flex-col gap-[26px] self-stretch rounded-[25px] bg-white-A700 p-[26px] sm:p-5">
                    <div className="flex justify-between gap-5 sm:flex-col">
                      <Text as="p">
                        <span className="text-blue_gray_800_01">$7,560</span>
                        <span className="text-blue_gray-400">&nbsp;Debited &&nbsp;</span>
                        <span className="text-blue_gray_800_01">$5,420 Credited in this Week</span>
                      </Text>
                      <div className="flex w-[24%] justify-center gap-[25px] self-start sm:w-full">
                        <div className="flex w-full items-center justify-center gap-2.5">
                          <div className="h-[15px] w-[15px] rounded-[5px] bg-indigo-600_01 shadow-bs" />
                          <Text as="p">Debit</Text>
                        </div>
                        <div className="flex w-full items-center justify-center gap-2.5">
                          <div className="h-[15px] w-[15px] rounded-[5px] bg-indigo-200" />
                          <Text as="p">Credit</Text>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-end self-stretch md:flex-col">
                          <div className="h-[135px] w-[30px] rounded-[10px] bg-indigo-600_01" />
                          <div className="ml-2.5 h-[234px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                          <div className="ml-[30px] h-[106px] w-[30px] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                          <div className="ml-2.5 h-[186px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                          <div className="ml-[30px] h-[102px] w-[30px] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                          <div className="ml-2.5 h-[139px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                          <div className="ml-[30px] h-[212px] w-[30px] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                          <div className="ml-2.5 h-[123px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                          <div className="ml-[30px] h-[150px] w-[30px] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                          <div className="ml-2.5 h-[214px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                          <div className="ml-[30px] h-[158px] w-[30px] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                          <div className="ml-2.5 h-[105px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                          <div className="ml-[30px] h-[179px] w-[30px] rounded-[10px] bg-indigo-600_01 md:ml-0" />
                          <div className="ml-2.5 h-[216px] w-[30px] rounded-[10px] bg-indigo-200 md:ml-0" />
                        </div>
                        <div className="flex w-[93%] flex-wrap justify-between gap-5 md:w-full">
                          <Text size="md" as="p">
                            Sat
                          </Text>
                          <Text size="md" as="p">
                            Sun
                          </Text>
                          <Text size="md" as="p">
                            Mon
                          </Text>
                          <Text size="md" as="p">
                            Tue
                          </Text>
                          <Text size="md" as="p">
                            Wed
                          </Text>
                          <Text size="md" as="p">
                            Thu
                          </Text>
                          <Text size="md" as="p" className="h-[17px] w-[17px]">
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col items-start gap-[19px] md:w-full">
                  <Heading as="h5">Invoices Sent</Heading>
                  <div className="flex flex-col gap-[21px] self-stretch rounded-[25px] bg-white-A700 p-[25px] sm:p-5">
                    {data.map((d, index) => (
                      <AccountsRowapple2one {...d} key={"listapple2One" + index} className="mt-[5px] md:mt-0" />
                    ))}
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
