import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Stack,
  Grid,
  Button,
  Input,
} from "components";

const DesktopThreePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter justify-start mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="bg-yellow_100 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
            <Row className="items-start justify-center 3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[88px] pr-[1px] pt-[1px] w-[28%]">
              <Img
                src="images/img_reply.svg"
                className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                alt="reply"
              />
              <Text
                className="lg:mr-[123px] xl:mr-[153px] 2xl:mr-[173px] 3xl:mr-[207px] mt-[3px] left"
                variant="body4"
              >
                Fast, Easy and Free Returns
              </Text>
            </Row>
            <List
              className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[58%]"
              orientation="horizontal"
            >
              <Row className="items-center p-[1px] w-[100%]">
                <Img
                  src="images/img_car.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="car"
                />
                <Text className="left" variant="body4">
                  <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    Free shipping on order above ₹1000{" "}
                  </span>
                  <span className="text-bluegray_900 font-inter font-normal underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    Learn More
                  </span>
                </Text>
              </Row>
              <Row className="items-center justify-end pl-[1px] py-[1px] w-[100%]">
                <Img
                  src="images/img_computer.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="computer"
                />
                <Text className="left" variant="body4">
                  Secure Payments
                </Text>
              </Row>
            </List>
          </Row>
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] shadow-bs w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[9%]"
                alt="logo"
              />
              <Row className="items-start justify-center lg:ml-[153px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] w-[31%]">
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold font-normal hover:justify-center my-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                  variant="body2"
                >
                  New arrival
                </Text>
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                  variant="body2"
                >
                  Featured
                </Text>
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                  variant="body2"
                >
                  Men
                </Text>
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold font-normal hover:justify-center mb-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                  variant="body2"
                >
                  Women
                </Text>
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold font-normal hover:justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[1px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                  variant="body2"
                >
                  Sale
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_500 border-solid items-center justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[24%]">
                <Img
                  src="images/img_contrast.svg"
                  className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] user"
                  alt="contrast"
                />
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mr-[18px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] AboutUsOutSt"
                  variant="body2"
                >
                  Search for products, categories, etc
                </Text>
              </Row>
              <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] w-[9%]">
                <Row className="absolute bottom-[0] items-center justify-between left-[0] w-[91%]">
                  <Img src="images/img_user.svg" className="user" alt="user" />
                  <Img
                    src="images/img_favorite.svg"
                    className="user"
                    alt="favorite"
                  />
                  <Img src="images/img_file.svg" className="user" alt="file" />
                </Row>
                <Text
                  className="hover:absolute absolute bg-gray_800 cursor-pointer hover:font-bold font-bold p-[4px] right-[0] rounded-radius4 hover:text-gray_500 text-yellow_100 top-[0] w-[23px]"
                  variant="body4"
                >
                  12
                </Text>
              </Stack>
            </Row>
          </header>
          <Column className="font-lato items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[92%]">
            <Text
              className="font-extrabold text-gray_900 tracking-ls1 uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              SHOP BY CATAGORIES
            </Text>
            <Grid className="font-inter lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-6 lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop by men
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_186X200.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop by women
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_1.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop by sport
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_2.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop sports
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_3.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop new arrivals
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_4.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen_five" variant="body2">
                    Shop collaborations
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_5.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop by men
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_6.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop by women
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_7.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop by sport
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_8.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop sports
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_9.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen" variant="body2">
                    Shop new arrivals
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius24 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_categorycard_10.png')",
                }}
              >
                <Column className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius24 w-[100%]">
                  <Text className="columnshopbymen_five" variant="body2">
                    Shop collaborations
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Stack className="font-montserrat lg:h-[1605px] xl:h-[2008px] 2xl:h-[2259px] 3xl:h-[2710px] w-[100%]">
            <Stack className="absolute bottom-[0] lg:h-[1148px] xl:h-[1435px] 2xl:h-[1615px] 3xl:h-[1937px] w-[100%]">
              <Row className="absolute items-start justify-between left-[8%] top-[38%] w-[48%]">
                <Row className="bg-white_A700 border border-gray_301 border-solid items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius32 w-[20%]">
                  <Text
                    className="font-semibold ml-[2px] text-black_900 w-[auto]"
                    variant="body2"
                  >
                    ₹
                  </Text>
                  <Text
                    className="font-extrabold lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    2,900
                  </Text>
                </Row>
                <Column className="items-end justify-start w-[7%]">
                  <Img
                    src="images/img_grid.svg"
                    className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] w-[67%]"
                    alt="grid"
                  />
                  <Text
                    className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    Colour
                  </Text>
                </Column>
              </Row>
              <Column className="absolute bg-white_A700 font-lato justify-start lg:pl-[37px] xl:pl-[47px] 2xl:pl-[53px] 3xl:pl-[63px] lg:py-[37px] xl:py-[47px] 2xl:py-[53px] 3xl:py-[63px] rounded-bl-[0] rounded-br-[0] rounded-tl-[96px] rounded-tr-[96px] w-[100%]">
                <Column className="justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] w-[99%]">
                  <Row className="items-end justify-end ml-[auto] w-[88%]">
                    <Text
                      className="leading-[normal] lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] text-black_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[21%]"
                      as="h3"
                      variant="h3"
                    >
                      Hand Picked
                      <br />
                      for You.
                    </Text>
                    <Text
                      className="font-bold leading-[normal] mb-[2px] lg:ml-[298px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-gray_800 tracking-ls1 w-[33%]"
                      as="h6"
                      variant="h6"
                    >
                      {`For us, comfort isn't rocket science -`}
                      <br />
                      Ist Standard
                    </Text>
                    <Row className="items-center justify-between lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[9%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock"
                      />
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock One"
                      />
                    </Row>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                    <Img
                      src="images/img_rectangle13.png"
                      className="RectangleThirteen"
                      alt="RectangleThirteen"
                    />
                    <Img
                      src="images/img_rectangle14.png"
                      className="RectangleThirteen"
                      alt="RectangleFourteen"
                    />
                    <Img
                      src="images/img_rectangle15.png"
                      className="RectangleThirteen"
                      alt="RectangleFifteen"
                    />
                    <Img
                      src="images/img_rectangle16.png"
                      className="lg:h-[382px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] rounded-bl-[64px] rounded-br-[0] rounded-tl-[64px] rounded-tr-[0] w-[3%]"
                      alt="RectangleSixteen"
                    />
                  </Row>
                </Column>
                <Stack className="lg:h-[507px] xl:h-[634px] 2xl:h-[713px] 3xl:h-[855px] lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[87%]">
                  <Row className="absolute items-start justify-between right-[0] w-[73%]">
                    <Row className="items-center justify-between lg:mt-[295px] xl:mt-[369px] 2xl:mt-[415px] 3xl:mt-[498px] w-[12%]">
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Two"
                      />
                      <Img
                        src="images/img_clock.svg"
                        className="clock"
                        alt="clock Three"
                      />
                    </Row>
                    <Img
                      src="images/img_rectangle29.png"
                      className="lg:h-[507px] xl:h-[634px] 2xl:h-[713px] 3xl:h-[855px] rounded-radius64 w-[60%]"
                      alt="RectangleTwentyNine"
                    />
                    <Column className="items-center justify-start rounded-radius48 w-[22%]">
                      <Img
                        src="images/img_rectangle30.png"
                        className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius48 w-[100%]"
                        alt="RectangleThirty"
                      />
                      <Img
                        src="images/img_rectangle31.png"
                        className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius48 w-[100%]"
                        alt="RectangleThirtyOne"
                      />
                      <Img
                        src="images/img_rectangle32.png"
                        className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius48 w-[100%]"
                        alt="RectangleThirtyTwo"
                      />
                      <Column className="bg-gray_200 border border-gray_801 border-solid items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius48 shadow-bs w-[100%]">
                        <Text
                          className="lg:my-[19px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] text-gray_900 tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          View All
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                  <Column className="absolute items-center justify-start left-[0] pt-[3px] top-[0] w-[35%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-bold ml-[1px] text-gray_800 tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        The Sneakers Edit
                      </Text>
                      <Text
                        className="font-extrabold leading-[normal] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-black_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        White Sneakers
                        <br />
                        craze.
                      </Text>
                    </Column>
                    <Text
                      className="leading-[132.02%] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] not-italic text-gray_802 tracking-ls1 w-[100%]"
                      variant="body1"
                    >
                      Ineffable fashions has a great collection of vibrant and
                      creative collection of casual wear. All of them are found
                      in many styles, patterns and sizes.
                    </Text>
                  </Column>
                </Stack>
              </Column>
            </Stack>
            <Img
              src="images/img_blackflagcrea.png"
              className="absolute lg:h-[459px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] top-[0] w-[100%]"
              alt="BlackFlagCrea"
            />
          </Stack>
          <Row
            className="bg-cover bg-repeat font-lato items-start justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group62.png')" }}
          >
            <Column className="justify-start lg:mb-[130px] xl:mb-[162px] 2xl:mb-[183px] 3xl:mb-[219px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[34%]">
              <Text
                className="font-extrabold text-yellow_100 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
                as="h2"
                variant="h2"
              >
                Our Story
              </Text>
              <Text
                className="leading-[132.02%] ml-[1px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic text-gray_101 tracking-ls1 w-[89%]"
                variant="body1"
              >
                Ineffable fashions has a great collection of vibrant and
                creative collection of casual wear. All of them are found in
                many styles, patterns and sizes.
              </Text>
            </Column>
            <Stack className="bg-black_900_bf border-bw11 border-solid border-white_A700 lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[107px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] lg:px-[36px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[106px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
              <Img
                src="images/img_play.svg"
                className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[28%]"
                alt="play"
              />
            </Stack>
            <Row className="items-center justify-center lg:ml-[114px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] lg:mr-[25px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] lg:mt-[271px] xl:mt-[339px] 2xl:mt-[382px] 3xl:mt-[458px] rounded-radius35 w-[30%]">
              <Button className="font-black lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[53%]">
                Watch Film
              </Button>
              <Button
                className="font-black lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[42%]"
                variant="FillBlueA100"
              >
                Our Story
              </Button>
            </Row>
          </Row>
        </Column>
        <Column className="font-lato items-end lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:pl-[42px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] w-[100%]">
          <div className="overflow-x-auto w-[100%]">
            <Stack className="lg:h-[565px] xl:h-[707px] 2xl:h-[795px] 3xl:h-[954px] overflow-auto w-[100%]">
              <Stack className="absolute bottom-[0] lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] left-[0] w-[31%]">
                <Column className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Text
                    className="leading-[normal] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_902 uppercase w-[75%]"
                    as="h5"
                    variant="h5"
                  >
                    The Streetwear
                    <br />
                    Selection
                  </Text>
                  <Text className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers">
                    Casual Jackets
                  </Text>
                  <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                    <Text className="mt-[1px] rowbaggyjoggers">
                      Baggy Joggers
                    </Text>
                    <Text className="mb-[1px] rowbaggyjoggers">
                      Sports Jackets
                    </Text>
                  </Row>
                  <Row className="items-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]">
                    <Text className="mt-[2px] rowbaggyjoggers">Round Caps</Text>
                    <Text className="mb-[2px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers">
                      Accessories
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle41.png"
                  className="RectangleFortyOne"
                  alt="RectangleFortyOne"
                />
              </Stack>
              <Stack className="absolute bottom-[0] lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] left-[32%] w-[31%]">
                <Column className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Text
                    className="leading-[normal] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_902 uppercase w-[46%]"
                    as="h5"
                    variant="h5"
                  >
                    The Tee
                    <br />
                    Selection
                  </Text>
                  <Text className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers">
                    Casual Jackets
                  </Text>
                  <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                    <Text className="mt-[1px] rowbaggyjoggers">
                      Baggy Joggers
                    </Text>
                    <Text className="mb-[1px] rowbaggyjoggers">
                      Sports Jackets
                    </Text>
                  </Row>
                  <Row className="items-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]">
                    <Text className="mt-[2px] rowbaggyjoggers">Round Caps</Text>
                    <Text className="mb-[2px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers">
                      Accessories
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle56.png"
                  className="RectangleFortyOne"
                  alt="RectangleFiftySix"
                />
              </Stack>
              <Stack className="absolute bottom-[0] lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] right-[12%] w-[23%]">
                <Column className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Text
                    className="leading-[normal] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_902 uppercase w-[68%]"
                    as="h5"
                    variant="h5"
                  >
                    The Tee
                    <br />
                    Selection
                  </Text>
                  <Text className="lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowbaggyjoggers">
                    Sports Tee
                  </Text>
                  <Text className="lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowbaggyjoggers">
                    Sports Shorts
                  </Text>
                  <Text className="xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rowbaggyjoggers">
                    Sports Joggers
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle57.png"
                  className="RectangleFortyOne"
                  alt="RectangleFiftySeven"
                />
              </Stack>
              <Column className="absolute justify-end xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] right-[0] w-[100%]">
                <Row className="items-start mr-[auto] w-[85%]">
                  <Text
                    className="font-extrabold text-black_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Also Explore
                  </Text>
                  <Row className="items-center justify-between 3xl:ml-[1057px] lg:ml-[626px] xl:ml-[783px] 2xl:ml-[881px] mt-[1px] w-[8%]">
                    <Img
                      src="images/img_clock.svg"
                      className="clock"
                      alt="clock Four"
                    />
                    <Img
                      src="images/img_clock.svg"
                      className="clock"
                      alt="clock Five"
                    />
                  </Row>
                </Row>
                <Stack className="lg:h-[493px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] xl:ml-[1095px] 2xl:ml-[1232px] 3xl:ml-[1479px] lg:ml-[876px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[20%]">
                  <Column className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[25px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text
                      className="leading-[normal] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_902 uppercase w-[68%]"
                      as="h5"
                      variant="h5"
                    >
                      The Tee
                      <br />
                      Selection
                    </Text>
                    <Text className="lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rowbaggyjoggers">
                      Sports Tee
                    </Text>
                    <Text className="lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rowbaggyjoggers">
                      Sports Shorts
                    </Text>
                    <Text className="xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rowbaggyjoggers">
                      Sports Joggers
                    </Text>
                  </Column>
                  <Img
                    src="images/img_rectangle59.png"
                    className="absolute lg:h-[256px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] left-[0] rounded-radius24 top-[0] w-[82%]"
                    alt="RectangleFiftyNine"
                  />
                </Stack>
              </Column>
            </Stack>
          </div>
        </Column>
        <Column className="font-lato items-center lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
          <Stack className="lg:h-[402px] xl:h-[502px] 2xl:h-[565px] 3xl:h-[678px] w-[92%]">
            <Text
              className="absolute font-extrabold left-[0] text-black_900 top-[0] lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
              as="h2"
              variant="h2"
            >
              They Say it, We don't!
            </Text>
            <Column className="absolute items-end justify-start top-[0] w-[100%]">
              <Row className="items-center justify-end ml-[auto] w-[8%]">
                <Img
                  src="images/img_clock.svg"
                  className="clock"
                  alt="clock Six"
                />
                <Img
                  src="images/img_clock.svg"
                  className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] clock"
                  alt="clock Seven"
                />
              </Row>
              <Row className="items-center justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                <Img
                  src="images/img_rectangle52.png"
                  className="RectangleFiftyTwo"
                  alt="RectangleFiftyTwo"
                />
                <Img
                  src="images/img_rectangle57.png"
                  className="RectangleFiftyTwo"
                  alt="RectangleFiftyThree"
                />
                <Img
                  src="images/img_rectangle54.png"
                  className="RectangleFiftyTwo"
                  alt="RectangleFiftyFour"
                />
                <Img
                  src="images/img_rectangle55.png"
                  className="RectangleFiftyTwo"
                  alt="RectangleFiftyFive"
                />
              </Row>
            </Column>
          </Stack>
          <Column
            className="bg-cover bg-repeat items-center justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:p-[42px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group72.png')" }}
          >
            <Text
              className="font-bold lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-yellow_100 tracking-ls1 w-[auto]"
              as="h6"
              variant="h6"
            >
              Making of a Shoe
            </Text>
            <Stack className="bg-black_900_bf border-bw11 border-solid border-white_A700 lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mb-[158px] xl:mb-[198px] 2xl:mb-[223px] 3xl:mb-[267px] lg:mt-[111px] xl:mt-[139px] 2xl:mt-[157px] 3xl:mt-[188px] lg:px-[36px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[106px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
              <Img
                src="images/img_play.svg"
                className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[28%]"
                alt="play One"
              />
            </Stack>
          </Column>
          <Column className="justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rounded-radius24 w-[92%]">
            <Column className="justify-start ml-[1px] w-[64%]">
              <Text
                className="font-bold font-lato text-gray_800 tracking-ls1 w-[auto]"
                as="h6"
                variant="h6"
              >
                Only @Rapidbox. Not seen anywhere else
              </Text>
              <Text
                className="font-rubik ml-[4px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-black_900 uppercase w-[auto]"
                as="h1"
                variant="h1"
              >
                Newest in the town
              </Text>
            </Column>
            <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius24 w-[100%]">
              <Img
                src="images/img_rectangle29.png"
                className="lg:h-[241px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[41%]"
                alt="RectangleFortyFour"
              />
              <Img
                src="images/img_rectangle30.png"
                className="lg:h-[241px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[24%]"
                alt="RectangleFortyFive"
              />
              <Img
                src="images/img_rectangle31.png"
                className="lg:h-[241px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[32%]"
                alt="RectangleFortySix"
              />
            </Row>
          </Column>
          <Column className="bg-white_A700 items-center justify-start lg:p-[45px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] rounded-bl-[0] rounded-br-[0] rounded-tl-[96px] rounded-tr-[96px] w-[100%]">
            <Column className="items-center justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] rounded-radius8 w-[49%]">
              <Column className="items-center justify-start w-[71%]">
                <Text
                  className="font-black text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Stay in Touch
                </Text>
                <Text
                  className="font-bold lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-gray_800 tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Only @Rapidbox. Not seen anywhere else
                </Text>
              </Column>
              <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius8 w-[100%]">
                <Stack className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] w-[65%]">
                  <Text
                    className="absolute bottom-[2%] font-bold left-[8%] text-gray_500 tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Enter Email
                  </Text>
                  <Input
                    className="absolute font-bold p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                    wrapClassName="absolute w-[100%]"
                    type="email"
                    name="GroupFifteen"
                    placeholder="Enter Email"
                  ></Input>
                </Stack>
                <Button
                  className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[31%]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="FillGray900"
                >
                  Subscribe
                </Button>
              </Row>
            </Column>
          </Column>
          <footer className="bg-gray_903 font-inter w-[100%]">
            <Row className="items-center 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[71px] xl:mr-[88px] lg:my-[22px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] w-[87%]">
              <Column className="w-[68%]">
                <Column className="justify-start w-[97%]">
                  <Img
                    src="images/img_logo_40X128.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[15%]"
                    alt="logo One"
                  />
                  <Row className="items-start justify-evenly xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[98%]">
                    <Column className="justify-start pr-[4px] pt-[4px] w-[26%]">
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        variant="body4"
                      >
                        About Rapidbox
                      </Text>
                      <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pr-[4px] pt-[4px] w-[90%]">
                        <Text className="AboutUsOutSt" variant="body2">
                          About Us/Out Story
                        </Text>
                        <Text className="font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-yellow_400 underline w-[auto]">
                          Why Rapidbox
                        </Text>
                        <Text className="AboutUsOutSt_One" variant="body2">
                          Founding Team
                        </Text>
                        <Text className="AboutUsOutSt_One" variant="body2">
                          Our Journey
                        </Text>
                        <Text className="AboutUsOutSt_One" variant="body2">
                          Making of Our Shoes
                        </Text>
                        <Text className="AboutUsOutSt_Four" variant="body2">
                          We Care - Social Causes
                        </Text>
                        <Text className="AboutUsOutSt_Five" variant="body2">
                          Community
                        </Text>
                      </Column>
                    </Column>
                    <Column className="justify-start pr-[4px] pt-[4px] w-[26%]">
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        variant="body4"
                      >
                        Need help?
                      </Text>
                      <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pr-[4px] pt-[4px] w-[90%]">
                        <Text className="AboutUsOutSt" variant="body2">
                          Help Center
                        </Text>
                        <Text className="AboutUsOutSt_Four" variant="body2">
                          Size Guide
                        </Text>
                        <Text className="AboutUsOutSt_Five" variant="body2">
                          Shipping & Delivery
                        </Text>
                        <Text className="AboutUsOutSt_One" variant="body2">
                          Returns & Exchange
                        </Text>
                        <Text className="AboutUsOutSt_One" variant="body2">
                          Order Tracking
                        </Text>
                        <Text className="AboutUsOutSt_Four" variant="body2">
                          Gift Cards
                        </Text>
                        <Text className="AboutUsOutSt_Five" variant="body2">
                          Site Map
                        </Text>
                      </Column>
                    </Column>
                    <Column className="justify-start pr-[2px] pt-[2px] w-[26%]">
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        variant="body4"
                      >
                        Our E-stores
                      </Text>
                      <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] pr-[3px] py-[3px] w-[89%]">
                        <Text className="AboutUsOutSt" variant="body2">
                          The Sneaker Store
                        </Text>
                        <Text
                          className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] AboutUsOutSt"
                          variant="body2"
                        >
                          The Athleisure Store
                        </Text>
                        <Text className="AboutUsOutSt_Five" variant="body2">
                          The Sports Shoes Store
                        </Text>
                        <Text
                          className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] AboutUsOutSt"
                          variant="body2"
                        >
                          The Streetwear Store
                        </Text>
                        <Text
                          className="mb-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] AboutUsOutSt"
                          variant="body2"
                        >
                          The Jacket Store
                        </Text>
                      </Column>
                    </Column>
                    <Column className="justify-start pt-[2px] w-[23%]">
                      <Text
                        className="font-normal text-gray_400 w-[auto]"
                        variant="body4"
                      >
                        Social Media
                      </Text>
                      <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-end w-[54%]">
                          <Img
                            src="images/img_camera.svg"
                            className="camera"
                            alt="camera"
                          />
                          <Text
                            className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] defaultlinkic1"
                            variant="body2"
                          >
                            Instagram
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[53%]">
                          <Img
                            src="images/img_facebook.svg"
                            className="camera"
                            alt="facebook"
                          />
                          <Text className="defaultlinkic1" variant="body2">
                            Facebook
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[48%]">
                          <Img
                            src="images/img_play_22X22.svg"
                            className="camera"
                            alt="play Two"
                          />
                          <Text className="defaultlinkic1" variant="body2">
                            Youtube
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="justify-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[37%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    © 2022 Rapidbox®, Inc.
                  </Text>
                  <Text
                    className="font-normal lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-white_A700 w-[auto]"
                    variant="body4"
                  >
                    <span className="text-white_A700 font-inter font-medium underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      Privacy Policy
                    </span>
                    <span className="text-white_A700 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      {" "}
                      /{" "}
                    </span>
                    <span className="text-white_A700 font-inter font-medium underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      Terms of Use
                    </span>
                    <span className="text-white_A700 font-inter font-medium lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      {" "}
                      /{" "}
                    </span>
                    <span className="text-white_A700 font-inter font-medium underline lg:text-[9px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                      Cookie Preferences
                    </span>
                  </Text>
                </Column>
              </Column>
              <Column className="w-[32%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="font-normal text-yellow_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Stay in loop
                  </Text>
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        Sign up for email updates today.
                      </Text>
                      <Row className="bg-white_A700 items-center justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius16 w-[100%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="user"
                          alt="checkmark"
                        />
                        <Text
                          className="font-inter lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] AboutUsOutSt"
                          variant="body2"
                        >
                          Enter email address
                        </Text>
                        <Button
                          className="font-medium font-rubik 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[23%]"
                          shape="RoundedBorder12"
                          size="sm"
                          variant="FillYellowA400"
                        >
                          Sign up
                        </Button>
                      </Row>
                    </Column>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pr-[4px] pt-[4px] w-[99%]">
                      <Text
                        className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] not-italic text-gray_500 w-[93%]"
                        variant="body4"
                      >
                        By providing your email, you agree to the Terms of Use
                        and Privacy Policy.
                      </Text>
                      <Text
                        className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] AboutUsOutSt"
                        variant="body4"
                      >
                        You may unsubscribe later.
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[81%]">
                  <Text
                    className="font-normal text-gray_400 w-[auto]"
                    variant="body4"
                  >
                    Accepted Payment Methods
                  </Text>
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                    <Stack className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius348 w-[10%]">
                      <Img
                        src="images/img_visalogo.svg"
                        className="absolute lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] inset-[0] justify-center m-[auto] w-[69%]"
                        alt="visalogo"
                      />
                    </Stack>
                    <Stack className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius3 w-[10%]">
                      <Img
                        src="images/img_videocamera.svg"
                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[53%]"
                        alt="videocamera"
                      />
                    </Stack>
                    <Stack className="bg-blue_700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[2px] rounded-radius348 w-[10%]">
                      <Img
                        src="images/img_amex.svg"
                        className="absolute lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] inset-[0] justify-center m-[auto] w-[81%]"
                        alt="AMEX"
                      />
                    </Stack>
                    <Stack className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius3 w-[10%]">
                      <Img
                        src="images/img_mastercard.svg"
                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[72%]"
                        alt="Mastercard"
                      />
                    </Stack>
                    <Stack className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius3 w-[10%]">
                      <Img
                        src="images/img_volume.svg"
                        className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[69%]"
                        alt="volume"
                      />
                    </Stack>
                    <Stack className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[3px] rounded-radius3 w-[10%]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className="absolute bottom-[9%] lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] inset-x-[0] mx-[auto] w-[78%]"
                        alt="lightbulb"
                      />
                    </Stack>
                    <Stack className="bg-white_A700 border-bw139 border-gray_801 border-solid lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius3 w-[10%]">
                      <Img
                        src="images/img_location.svg"
                        className="absolute bottom-[5%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] inset-x-[0] mx-[auto] w-[69%]"
                        alt="location"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default DesktopThreePage;
