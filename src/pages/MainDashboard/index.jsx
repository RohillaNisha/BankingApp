import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import MainDashboardColumnbalance from "../../components/MainDashboardColumnbalance";
import Sidebar1 from "../../components/Sidebar1";

export default function MainDashboardPage() {
  return (
    <>
      <Helmet>
        <title>bankingApp</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100 pb-[30px] sm:pb-5">
        <div className="flex items-start md:flex-col">
          <Sidebar1 />
          <div className="flex flex-1 flex-col items-center gap-[25px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col gap-[25px] md:w-full">
              <div className="flex items-center gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col gap-[17px] md:self-stretch">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <Heading as="h1">My Cards</Heading>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Heading size="md" as="h2">
                        See All
                      </Heading>
                    </a>
                  </div>
                  <div className="flex gap-[30px] md:flex-col">
                    {[...Array(2)].map((d, index) => (
                      <MainDashboardColumnbalance
                        balance="Balance"
                        price="$5,756"
                        cardholder="CARD HOLDER"
                        eddycusuma="Eddy Cusuma"
                        validthru="VALID THRU"
                        p12twentytwo="12/22"
                        cardnumber="3778 **** **** 1234"
                        key={"listbalance" + index}
                        className="bg-indigo-600_01"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex w-[32%] flex-col items-start gap-[19px] md:w-full">
                  <Heading as="h3">Recent Transaction</Heading>
                  <div className="self-stretch rounded-[25px] bg-white-A700 p-6 sm:p-5">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-[17px]">
                        <Button size="4xl" shape="circle" className="w-[55px] !rounded-[27px]">
                          <Img src="images/img_iconfinder_busi.svg" />
                        </Button>
                        <div className="flex items-start gap-[13px] self-end">
                          <div className="flex flex-col items-start gap-[5px]">
                            <Text as="p" className="!font-medium !text-blue_gray-600">
                              Deposit from my Card
                            </Text>
                            <Text size="lg" as="p">
                              28 January 2021
                            </Text>
                          </div>
                          <Text as="p" className="mt-2.5 !font-medium !text-red-700">
                            -$850
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button size="4xl" shape="circle" className="w-[55px] !rounded-[27px]">
                          <Img src="images/img_iconfinder_payp.svg" />
                        </Button>
                        <div className="ml-[17px] flex flex-col gap-[5px] self-end">
                          <Text as="p" className="!font-medium !text-blue_gray-600">
                            Deposit Paypal
                          </Text>
                          <Text size="lg" as="p">
                            25 January 2021
                          </Text>
                        </div>
                        <Text as="p" className="ml-[46px] !font-medium !text-green-600">
                          +$2,500
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <Button size="4xl" shape="circle" className="w-[55px] !rounded-[27px]">
                          <Img src="images/img_iconfinder_6_4753731.svg" />
                        </Button>
                        <div className="ml-[17px] flex flex-col items-start gap-[7px]">
                          <Text as="p" className="!font-medium !text-blue_gray-600">
                            Jemi Wilson
                          </Text>
                          <Text size="lg" as="p">
                            21 January 2021
                          </Text>
                        </div>
                        <Text as="p" className="ml-12 !font-medium !text-green-600">
                          +$5,400
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[30px] md:flex-col">
                <div className="flex flex-1 flex-col items-start gap-[15px] md:self-stretch">
                  <Heading as="h4">Weekly Activity</Heading>
                  <div className="self-stretch rounded-[25px] bg-white-A700 p-[26px] sm:p-5">
                    <div className="flex flex-col items-end gap-5">
                      <div className="flex w-[30%] gap-[30px] md:w-full">
                        <div className="flex w-[45%] items-center gap-2.5 self-end">
                          <div className="h-[15px] w-[15px] self-start rounded-[7px] bg-indigo-200" />
                          <Text size="lg" as="p">
                            Diposit
                          </Text>
                        </div>
                        <div className="flex flex-1 items-center gap-2.5 self-start">
                          <div className="h-[15px] w-[15px] self-end rounded-[7px] bg-indigo-600_01" />
                          <Text size="lg" as="p">
                            Withdraw
                          </Text>
                        </div>
                      </div>
                      <div className="self-stretch">
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                            <div className="flex flex-col items-center gap-[21px]">
                              <Text size="s" as="p">
                                500
                              </Text>
                              <Text size="s" as="p">
                                400
                              </Text>
                              <Text size="s" as="p">
                                300
                              </Text>
                              <Text size="s" as="p">
                                200
                              </Text>
                              <Text size="s" as="p" className="self-start">
                                100
                              </Text>
                              <Text size="s" as="p" className="self-end">
                                0
                              </Text>
                            </div>
                            <Img src="images/img_group_899.svg" alt="image" className="h-[186px] w-[96%] md:w-full" />
                          </div>
                          <div className="mr-[37px] flex w-[89%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                            <Text size="s" as="p">
                              Sat
                            </Text>
                            <Text size="s" as="p">
                              Sun
                            </Text>
                            <Text size="s" as="p">
                              Mon
                            </Text>
                            <Text size="s" as="p">
                              Tue
                            </Text>
                            <Text size="s" as="p">
                              Wed
                            </Text>
                            <Text size="s" as="p">
                              Thu
                            </Text>
                            <Text size="s" as="p" className="h-[16px] w-[16px]">
                              Fri
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col items-start gap-[15px] md:w-full">
                  <Heading as="h5">Expense Statistics</Heading>
                  <div className="self-stretch rounded-[25px] bg-white-A700 p-[31px] sm:p-5">
                    <div className="relative h-[259px]">
                      <div className="absolute left-[20.00px] top-[0.00px] m-auto flex h-[129px] w-[69%] items-start justify-center bg-[url(/public/images/img_group_900.svg)] bg-cover bg-no-repeat p-[33px] md:h-auto sm:p-5">
                        <Text
                          size="s"
                          as="p"
                          className="mb-[22px] w-[84%] text-center !font-medium leading-[18px] !text-white-A700"
                        >
                          <span className="text-base font-bold text-white-A700">
                            <>
                              30%
                              <br />
                            </>
                          </span>
                          <span className="font-bold text-white-A700">Entertainment</span>
                        </Text>
                      </div>
                      <div className="absolute bottom-[11.00px] left-[0.00px] m-auto h-[189px] w-[40%] bg-[url(/public/images/img_group_903.svg)] bg-cover bg-no-repeat p-3.5 md:h-auto">
                        <Text
                          size="s"
                          as="p"
                          className="mb-[60px] mt-[59px] text-center !font-medium leading-[18px] !text-white-A700"
                        >
                          <span className="text-base font-bold text-white-A700">
                            <>
                              20%
                              <br />
                            </>
                          </span>
                          <span className="font-bold text-white-A700">Investment</span>
                        </Text>
                      </div>
                      <div className="absolute right-[0.00px] top-[28.14px] m-auto flex h-[102px] w-[54%] items-end justify-center bg-[url(/public/images/img_group_901.svg)] bg-cover bg-no-repeat p-1.5 md:h-auto">
                        <Text
                          size="s"
                          as="p"
                          className="mt-12 w-[64%] text-center !font-medium leading-[18px] !text-white-A700"
                        >
                          <span className="text-base font-bold text-white-A700">
                            <>
                              15%
                              <br />
                            </>
                          </span>
                          <span className="font-bold text-white-A700">Bill Expense</span>
                        </Text>
                      </div>
                      <div className="absolute bottom-[0.00px] right-[12%] m-auto flex w-[44%] flex-col items-center bg-indigo-200 p-[23px] sm:p-5">
                        <Text
                          size="s"
                          as="p"
                          className="mb-[33px] w-[66%] text-center !font-medium leading-[18px] !text-white-A700 md:w-full"
                        >
                          <span className="text-base font-bold text-white-A700">
                            <>
                              35%
                              <br />
                            </>
                          </span>
                          <span className="font-bold text-white-A700">Others</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[30px] md:flex-col">
                <div className="flex w-[41%] flex-col items-start gap-[19px] md:w-full">
                  <Heading as="h6" className="!text-blue_gray-800">
                    Quick Transfer
                  </Heading>
                  <div className="flex flex-col gap-[27px] self-stretch rounded-[25px] bg-white-A700 p-[25px] sm:p-5">
                    <div className="mt-2.5 flex items-center justify-between gap-5 sm:flex-col">
                      <div className="flex w-[79%] items-center justify-between gap-5 sm:w-full">
                        <div className="flex w-[27%] flex-col items-center gap-[13px]">
                          <Img
                            src="images/img_ellipse_18.png"
                            alt="circleimage"
                            className="h-[70px] w-[70px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-center gap-1">
                            <Heading size="s" as="h6" className="!text-indigo-700">
                              Livia Bator
                            </Heading>
                            <Heading size="xs" as="p" className="!text-blue_gray-400">
                              CEO
                            </Heading>
                          </div>
                        </div>
                        <div className="flex w-[30%] flex-col items-center gap-[15px]">
                          <Img
                            src="images/img_ellipse_19.png"
                            alt="circleimage"
                            className="h-[70px] w-[70px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-center gap-0.5">
                            <Text as="p" className="!text-blue_gray-800">
                              Randy Press
                            </Text>
                            <Text size="lg" as="p">
                              Director
                            </Text>
                          </div>
                        </div>
                        <div className="flex w-[23%] flex-col gap-3.5">
                          <Img
                            src="images/img_ellipse_17.png"
                            alt="circleimage"
                            className="h-[70px] w-[70px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-center gap-[5px]">
                            <Text as="p" className="!text-blue_gray-800">
                              Workman
                            </Text>
                            <Text size="lg" as="p">
                              Designer
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button shape="circle" className="w-[50px] !rounded-[25px]">
                        <Img src="images/img_arrow_right_blue_gray_400.svg" />
                      </Button>
                    </div>
                    <div className="mb-2.5 flex items-center gap-[27px]">
                      <Text as="p">Write Amount</Text>
                      <div className="flex flex-1 items-center justify-between gap-5 rounded-[25px] bg-gray-100_04 pl-[30px] sm:pl-5">
                        <Heading size="s" as="h6" className="!text-indigo-700">
                          525.50
                        </Heading>
                        <Button
                          size="2xl"
                          rightIcon={<Img src="images/img_save.svg" alt="save" className="h-[24px] w-[24px]" />}
                          className="min-w-[125px] gap-3 rounded-[25px] font-medium sm:px-5"
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[17px] md:self-stretch">
                  <Heading as="h5">Balance History</Heading>
                  <div className="self-stretch rounded-[25px] bg-white-A700 p-[23px] sm:p-5">
                    <div className="relative h-[220px] md:h-auto">
                      <Img src="images/img_group_gray_100_02.svg" alt="image" className="mt-[7px] h-[185px] w-[93%]" />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center sm:relative sm:flex-col">
                        <div className="flex w-[7%] flex-col items-end gap-[30px] sm:w-full">
                          <div className="flex items-center gap-2 self-stretch">
                            <Text size="s" as="p">
                              800
                            </Text>
                            <div className="h-px w-[6px] bg-blue_gray-400" />
                          </div>
                          <div className="flex items-center gap-2 self-stretch">
                            <Text size="s" as="p">
                              600
                            </Text>
                            <div className="h-px w-[6px] bg-blue_gray-400" />
                          </div>
                          <div className="flex items-center gap-2 self-stretch">
                            <Text size="s" as="p">
                              400
                            </Text>
                            <div className="h-px w-[6px] bg-blue_gray-400" />
                          </div>
                          <div className="flex items-center gap-[7px] self-stretch">
                            <Text size="s" as="p">
                              200
                            </Text>
                            <div className="h-px w-[6px] bg-blue_gray-400" />
                          </div>
                          <div className="flex w-[58%] items-center gap-2 md:w-full">
                            <Text size="xs" as="p">
                              0
                            </Text>
                            <div className="mb-1.5 h-px w-[6px] self-end bg-blue_gray-400" />
                          </div>
                        </div>
                        <div className="relative ml-[-1px] mt-3 flex flex-1 flex-col gap-1 sm:ml-0 sm:self-stretch">
                          <Img
                            src="images/img_vector_indigo_600_01.png"
                            alt="vector_eleven"
                            className="h-[177px] object-cover"
                          />
                          <div className="flex w-[90%] flex-col gap-1 md:w-full">
                            <div className="flex justify-between gap-5">
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                              <Img src="images/img_group_blue_gray_400.svg" alt="image" className="h-[4px]" />
                            </div>
                            <div className="flex justify-between gap-5 sm:flex-col">
                              <div className="flex w-[19%] flex-wrap justify-between gap-5 sm:w-full">
                                <Text size="md" as="p" className="h-[17px] w-[18px] self-start">
                                  Jul
                                </Text>
                                <Text size="md" as="p" className="self-end">
                                  Aug
                                </Text>
                              </div>
                              <div className="flex w-[68%] flex-wrap justify-between gap-5 sm:w-full">
                                <Text size="md" as="p" className="self-end">
                                  Sep
                                </Text>
                                <Text size="md" as="p" className="self-start">
                                  Oct
                                </Text>
                                <Text size="md" as="p" className="self-start">
                                  Nov{" "}
                                </Text>
                                <Text size="md" as="p" className="self-start">
                                  Dec
                                </Text>
                                <Text size="md" as="p" className="self-start">
                                  Jan
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
