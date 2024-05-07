import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, SelectBox, Img, Text, Input } from "../../components";
import CreditCardsRow from "../../components/CreditCardsRow";
import CreditCardsRow001blockOne from "../../components/CreditCardsRow001blockOne";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";

const data = [
  { blockcardtext: "Block Card", instantlyblocktext: "Instantly block your card" },
  { blockcardtext: "Change Pin Code", instantlyblocktext: "Choose another pin code" },
  { blockcardtext: "Add to Google Pay", instantlyblocktext: "Withdraw without any card" },
  { blockcardtext: "Add to Apple Pay", instantlyblocktext: "Withdraw without any card" },
  { blockcardtext: "Add to Apple Store", instantlyblocktext: "Withdraw without any card" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CreditCardsPage() {
  return (
    <>
      <Helmet>
        <title>bankingApp</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100 pb-[30px] sm:pb-5">
        <div className="flex items-start md:flex-col">
          <Sidebar11 />
          <div className="flex flex-1 flex-col items-center gap-[27px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col gap-6 md:w-full">
              <div className="flex flex-col items-start gap-4">
                <Heading as="h1">My Cards</Heading>
                <div className="flex gap-[30px] self-stretch md:flex-col">
                  <div className="flex w-full flex-col items-center gap-[33px] rounded-[25px] bg-indigo-600_01 pt-6 sm:pt-5">
                    <div className="flex w-[86%] flex-col gap-[26px] md:w-full md:p-5">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex flex-col items-start gap-[3px]">
                          <Text size="xs" as="p" className="!text-white-A700">
                            Balance
                          </Text>
                          <Text size="4xl" as="p" className="!text-white-A700">
                            $5,756
                          </Text>
                        </div>
                        <Img src="images/img_chip_card.png" alt="balance" className="h-[34px] w-[34px] object-cover" />
                      </div>
                      <div className="flex w-[76%] justify-between gap-5 md:w-full">
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
                    </div>
                    <div className="flex items-center justify-between gap-5 self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient p-5">
                      <Text size="5xl" as="p" className="self-end !text-white-A700">
                        3778 **** **** 1234
                      </Text>
                      <Img src="images/img_contrast.svg" alt="image" className="h-[30px]" />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[29px] rounded-[25px] bg-indigo-500 pt-6 sm:pt-5">
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
                    <div className="ml-[26px] flex w-[70%] justify-between gap-5 self-start md:ml-0 md:w-full md:p-5">
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
                    <div className="flex items-center justify-between gap-5 self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient p-5">
                      <Text size="5xl" as="p" className="self-end !text-white-A700">
                        3778 **** **** 1234
                      </Text>
                      <Img src="images/img_contrast.svg" alt="contrast" className="h-[30px]" />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[29px] rounded-[25px] border border-solid border-gray-100_02 bg-indigo-300_02 pt-6 sm:pt-5">
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
                    <div className="ml-[26px] flex w-[70%] justify-between gap-5 self-start md:ml-0 md:w-full md:p-5">
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
                    <div className="flex items-center justify-between gap-5 self-stretch rounded-bl-[25px] rounded-br-[25px] bg-gradient p-5">
                      <Text size="5xl" as="p" className="self-end !text-white-A700">
                        3778 **** **** 1234
                      </Text>
                      <Img src="images/img_contrast.svg" alt="contrast" className="h-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[30px] md:flex-col">
                <div className="flex w-[32%] flex-col items-start gap-[17px] md:w-full">
                  <Heading as="h2">Card Expense Statistics</Heading>
                  <div className="flex flex-col items-center justify-center gap-3.5 self-stretch rounded-[25px] bg-white-A700 p-[27px] sm:p-5">
                    <Img src="images/img_group_346_chart.png" alt="image" className="h-[186px] w-[64%] object-cover" />
                    <div className="flex w-[85%] flex-col gap-3 md:w-full md:flex-row sm:flex-col">
                      {[...Array(2)].map((d, index) => (
                        <CreditCardsRow text1="DBL Bank" text2="BRC Bank" key={"listview" + index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[19px] md:self-stretch">
                  <Heading as="h3">Card List</Heading>
                  <div className="flex flex-col gap-5 self-stretch">
                    <div className="flex flex-1 items-center justify-center rounded-[20px] bg-white-A700 p-[15px] md:flex-col">
                      <Button size="5xl" shape="round" className="w-[60px] md:p-5">
                        <Img src="images/img_credit_card_1_indigo_600_01.svg" />
                      </Button>
                      <div className="ml-[15px] flex flex-col gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Card Type
                        </Text>
                        <Text size="lg" as="p">
                          Secondary
                        </Text>
                      </div>
                      <div className="ml-[43px] flex flex-col items-start gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Bank
                        </Text>
                        <Text size="lg" as="p">
                          DBL Bank
                        </Text>
                      </div>
                      <div className="ml-11 flex flex-col gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Card Number
                        </Text>
                        <Text size="lg" as="p">
                          **** **** 5600
                        </Text>
                      </div>
                      <div className="ml-[47px] flex w-[40%] items-center justify-between gap-5 md:ml-0 md:w-full">
                        <div className="flex flex-col items-start gap-[5px]">
                          <Text as="p" className="!font-medium !text-blue_gray-900">
                            Namain Card
                          </Text>
                          <Text size="lg" as="p">
                            William{" "}
                          </Text>
                        </div>
                        <Text size="lg" as="p" className="!font-medium !text-indigo-500">
                          View Details
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center rounded-[20px] bg-white-A700 p-[15px] md:flex-col">
                      <Button size="5xl" shape="round" className="w-[60px] md:p-5">
                        <Img src="images/img_credit_card_1_indigo_600_01.svg" />
                      </Button>
                      <div className="ml-[15px] flex flex-col gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Card Type
                        </Text>
                        <Text size="lg" as="p">
                          Secondary
                        </Text>
                      </div>
                      <div className="ml-[43px] flex flex-col items-start gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Bank
                        </Text>
                        <Text size="lg" as="p">
                          BRC Bank
                        </Text>
                      </div>
                      <div className="ml-[43px] flex flex-col gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Card Number
                        </Text>
                        <Text size="lg" as="p">
                          **** **** 4300
                        </Text>
                      </div>
                      <div className="ml-[46px] flex flex-col items-start gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-indigo-600_01">
                          Namain Card
                        </Text>
                        <Text size="lg" as="p">
                          Michel
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="ml-[34px] !font-medium !text-indigo-500 md:ml-0">
                        View Details
                      </Text>
                    </div>
                    <div className="flex items-center rounded-[20px] bg-white-A700 p-[15px] md:flex-col">
                      <Button size="5xl" shape="round" className="w-[60px] md:p-5">
                        <Img src="images/img_credit_card_1_indigo_600_01.svg" />
                      </Button>
                      <div className="ml-[15px] flex flex-col gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Card Type
                        </Text>
                        <Text size="lg" as="p">
                          Secondary
                        </Text>
                      </div>
                      <div className="ml-[43px] flex flex-col items-start gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Bank
                        </Text>
                        <Text size="lg" as="p">
                          ABM Bank
                        </Text>
                      </div>
                      <div className="ml-10 flex flex-col gap-[5px] md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Card Number
                        </Text>
                        <Text size="lg" as="p">
                          **** **** 7560
                        </Text>
                      </div>
                      <div className="ml-12 flex flex-col items-start gap-1.5 md:ml-0">
                        <Text as="p" className="!font-medium !text-blue_gray-900">
                          Namain Card
                        </Text>
                        <Text size="lg" as="p">
                          Edward
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="ml-[34px] !font-medium !text-indigo-500 md:ml-0">
                        View Details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[19px] md:self-stretch">
                  <Heading as="h4">Add New Card</Heading>
                  <div className="flex flex-col items-start gap-[29px] self-stretch rounded-[25px] bg-white-A700 p-[27px] sm:p-5">
                    <Text as="p" className="w-[94%] leading-7 md:w-full">
                      Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a
                      Cardholder, with a credit limit, that can be used to purchase goods and services on credit or
                      obtain cash advances.
                    </Text>
                    <div className="flex flex-col gap-[21px] self-stretch">
                      <div className="flex items-center gap-[30px] md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[9px]">
                          <Text as="p">Card Type</Text>
                          <Input
                            shape="round"
                            name="classic"
                            placeholder={`Classic`}
                            className="self-stretch border border-solid border-gray-300 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-2.5">
                          <Text as="p">Name On Card</Text>
                          <Input
                            shape="round"
                            name="name"
                            placeholder={`My Cards`}
                            className="self-stretch border border-solid border-gray-300 sm:pr-5"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-[30px] md:flex-col">
                        <div className="flex w-full flex-col items-start gap-2.5">
                          <Text as="p">Card Number</Text>
                          <Input
                            shape="round"
                            type="password"
                            name="cardNumber"
                            placeholder={`**** **** **** ****`}
                            className="self-stretch border border-solid border-gray-300 sm:pr-5"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[9px]">
                          <Text as="p">Expiration Date</Text>
                          <SelectBox
                            shape="round"
                            indicator={
                              <Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[24px] w-[24px]" />
                            }
                            name="expirationDate"
                            placeholder={`25 January 2025`}
                            options={dropDownOptions}
                            className="gap-px self-stretch border border-solid border-gray-300 sm:pr-5"
                          />
                        </div>
                      </div>
                    </div>
                    <Button size="2xl" className="mb-[11px] min-w-[160px] rounded-[9px] font-medium sm:px-5">
                      Add Card
                    </Button>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col items-start gap-[17px] md:w-full">
                  <Heading as="h5">Card Setting</Heading>
                  <div className="flex flex-col gap-5 self-stretch rounded-[25px] bg-white-A700 p-[30px] sm:p-5">
                    {data.map((d, index) => (
                      <CreditCardsRow001blockOne {...d} key={"list001Block" + index} />
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
