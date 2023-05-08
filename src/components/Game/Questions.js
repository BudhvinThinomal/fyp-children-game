import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Box,
} from "@mui/material";
import "./Questions.css";
import wand from "../../assets/Wand.png";
import Q2_1 from "../../assets/Answer Images/Q2/tree.png";
import Q2_2 from "../../assets/Answer Images/Q2/necklace.png";
import Q2_3 from "../../assets/Answer Images/Q2/news.jpg";
import Q4_1 from "../../assets/Answer Images/Q4/Flower.png";
import Q4_2 from "../../assets/Answer Images/Q4/Document.png";
import Q4_3 from "../../assets/Answer Images/Q4/Computer.png";
import Q9 from "../../assets/Answer Images/Q8 and Q9/Boy runnig fast.png";
import Q10_1 from "../../assets/Answer Images/Q10/rock.png";
import Q10_2 from "../../assets/Answer Images/Q10/leg.png";
import Q10_3 from "../../assets/Answer Images/Q10/Pianist.png";
import Q11_1 from "../../assets/Answer Images/Q11/Horn.png";
import Q12_1 from "../../assets/Answer Images/Q12/handkerchief.png";
import Q13_1 from "../../assets/Answer Images/Q13/gift.png";
import Q15_1 from "../../assets/Answer Images/Q15/flag.png";
import Q15_2 from "../../assets/Answer Images/Q15/Jewelry.png";
import Q15_3 from "../../assets/Answer Images/Q15/music festival.png";
import Q17_1 from "../../assets/Answer Images/Q17/wheel.png";
import Q17_2 from "../../assets/Answer Images/Q17/flipflop.png";
import Q17_3 from "../../assets/Answer Images/Q17/boatman.png";
import Q18_1 from "../../assets/Answer Images/Q18/oil lamp.png";
import Q18_2 from "../../assets/Answer Images/Q18/comb.png";
import Q18_3 from "../../assets/Answer Images/Q18/ball.png";
import Q18_4 from "../../assets/Answer Images/Q18/star.png";
import Q18_5 from "../../assets/Answer Images/Q18/cupboard.png";
import Q18_6 from "../../assets/Answer Images/Q18/Rabana.png";
import Q19_1 from "../../assets/Answer Images/Q19/Six.png";
import Q19_2 from "../../assets/Answer Images/Q19/Four.png";
import Q19_3 from "../../assets/Answer Images/Q19/Fox.png";
import Q19_4 from "../../assets/Answer Images/Q19/Ship.png";
import Q19_5 from "../../assets/Answer Images/Q19/newspaper.png";
import Q19_6 from "../../assets/Answer Images/Q19/hospital.png";
import Q20_1 from "../../assets/Answer Images/Q20/Ring.png";
import Q20_2 from "../../assets/Answer Images/Q20/Face.png";
import Q20_3 from "../../assets/Answer Images/Q20/clock.png";
import Q20_4 from "../../assets/Answer Images/Q20/Camel.png";
import Q20_5 from "../../assets/Answer Images/Q20/Egg.png";
import Q20_6 from "../../assets/Answer Images/Q20/bank.png";

const Questions = (props) => {
  const { handleResetClick, quesSet } = props;
  const [formValues, setFormValues] = useState({
    Q_P_1: "",
    Q_P_2: "",
    Q_P_3: "",
    Q_P_4: "",
    Q_P_5_1: "",
  });

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  // Define an array of question objects
  const questions = [
    {
      id: "Q1",
      mainHeading:
        "01' my; ioyka jpk b,lalfuka ,shq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q1_1",
          question: "1' zz yeg folZZ",
          options: [
            {
              label: "26",
              name: "Q1_1",
              value: "1",
            },
            {
              label: (
                <span className="option">
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    2
                  </span>
                  <span className="label" style={{ fontSize: "24px" }}>
                    6
                  </span>
                </span>
              ),
              name: "Q1_1",
              value: "2",
            },
            {
              label: "62",
              name: "Q1_1",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q1_2",
          question: "2' zz;=kaish ye;a; y;rZZ",
          options: [
            {
              label: "473",
              name: "Q1_2",
              value: "3",
            },
            {
              label: (
                <span className="option">
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    3
                  </span>
                  <span className="label" style={{ fontSize: "24px" }}>
                    74
                  </span>
                </span>
              ),
              name: "Q1_2",
              value: "2",
            },
            {
              label: "374",
              name: "Q1_2",
              value: "1",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q1_3",
          question: "3' zz kjoyia mkaish wiq tlZZ",
          options: [
            {
              label: (
                <span className="option">
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    9
                  </span>
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    5
                  </span>
                  <span className="label" style={{ fontSize: "24px" }}>
                    8
                  </span>
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    1
                  </span>
                </span>
              ),
              name: "Q1_3",
              value: "2",
            },
            {
              label: "9581",
              name: "Q1_3",
              value: "1",
            },
            {
              label: (
                <span className="option">
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    1
                  </span>
                  <span className="label" style={{ fontSize: "24px" }}>
                    859
                  </span>
                </span>
              ),
              name: "Q1_3",
              value: "3",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q2",
      mainHeading:
        "02' my; oelafjk rEm yඳුkajk kduhka jpkfhka ,shq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q2_1",
          question: "",
          options: [
            {
              label: "i.",
              name: "Q2_1",
              value: "2",
            },
            {
              label: ".i",
              name: "Q2_1",
              value: "1",
            },
            {
              label: (
                <span className="option">
                  <span className="label" style={{ fontSize: "24px" }}>
                    .
                  </span>
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    i
                  </span>
                </span>
              ),
              name: "Q2_1",
              value: "3",
            },
          ],
          imageUrl: Q2_1,
        },
        {
          questionId: "Q2_2",
          question: "",
          options: [
            {
              label: "h,ud",
              name: "Q2_2",
              value: "3",
            },
            {
              label: (
                <span className="option">
                  <span className="label" style={{ fontSize: "24px" }}>
                    ud
                  </span>
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    ,
                  </span>
                  <span className="label" style={{ fontSize: "24px" }}>
                    h
                  </span>
                </span>
              ),
              name: "Q2_2",
              value: "2",
            },
            {
              label: "ud,h",
              name: "Q2_2",
              value: "1",
            },
          ],
          imageUrl: Q2_2,
        },
        {
          questionId: "Q2_3",
          question: "",
          options: [
            {
              label: "hr;;am",
              name: "Q2_3",
              value: "3",
            },
            {
              label: (
                <span className="option">
                  <span className="label" style={{ fontSize: "24px" }}>
                    m;a;
                  </span>
                  <span className="mirror-label" style={{ fontSize: "24px" }}>
                    r
                  </span>
                  <span className="label" style={{ fontSize: "24px" }}>
                    h
                  </span>
                </span>
              ),
              name: "Q2_3",
              value: "2",
            },
            {
              label: "m;a;rh",
              name: "Q2_3",
              value: "1",
            },
          ],
          imageUrl: Q2_3,
        },
      ],
    },
    {
      id: "Q3",
      mainHeading:
        "03' my; i`oyka jpk b,lalfuka ,shq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q3_1",
          question: "1' zz yeg my ZZ",
          options: [
            {
              label: "r.",
              name: "Q3_1",
              value: "3",
            },
            {
              label: "r5",
              name: "Q3_1",
              value: "2",
            },
            {
              label: "65",
              name: "Q3_1",
              value: "1",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q3_2",
          question: "2' zz;=kaish oy wgZZ",
          options: [
            {
              label: "*18",
              name: "Q3_2",
              value: "2",
            },
            {
              label: "318",
              name: "Q3_2",
              value: "1",
            },
            {
              label: "*16",
              name: "Q3_2",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q3_3",
          question: "3' zzydroyia y;aish wiQfolZZ",
          options: [
            {
              label: "4e82",
              name: "Q3_3",
              value: "3",
            },
            {
              label: "478H",
              name: "Q3_3",
              value: "2",
            },
            {
              label: "4782",
              name: "Q3_3",
              value: "1",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q4",
      mainHeading:
        "04' my; oelafjk rEm yඳුkajk kduhka jpkfhka ,shq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q4_1",
          question: "",
          options: [
            {
              label: "u,",
              name: "Q4_1",
              value: "1",
            },
            {
              label: "u<",
              name: "Q4_1",
              value: "2",
            },
            {
              label: "ï,",
              name: "Q4_1",
              value: "3",
            },
          ],
          imageUrl: Q4_1,
        },
        {
          questionId: "Q4_2",
          question: "",
          options: [
            {
              label: "f,alkh",
              name: "Q4_2",
              value: "3",
            },
            {
              label: "f,aLKh",
              name: "Q4_2",
              value: "2",
            },
            {
              label: "f,aLkh",
              name: "Q4_2",
              value: "1",
            },
          ],
          imageUrl: Q4_2,
        },
        {
          questionId: "Q4_3",
          question: "",
          options: [
            {
              label: "mß>klh",
              name: "Q4_3",
              value: "2",
            },
            {
              label: "mrs.Klh",
              name: "Q4_3",
              value: "1",
            },
            {
              label: "mß>KlH",
              name: "Q4_3",
              value: "3",
            },
          ],
          imageUrl: Q4_3,
        },
      ],
    },
    {
      id: "Q5",
      mainHeading: "05' my; i`oyka jdlH i`oyd iqÿiq úrdu ,l=Kq f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q5_1",
          question: "1' Tn iqfjka isákafkao ''''''",
          options: [
            {
              label: "'",
              name: "Q5_1",
              value: "2",
            },
            {
              label: "@",
              name: "Q5_1",
              value: "1",
            },
            {
              label: '"',
              name: "Q5_1",
              value: "3",
            },
            ,
            {
              label: "(",
              name: "Q5_1",
              value: "4",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q5_2",
          question: "2' Tng blauka iqjh ,efíjd ''''''",
          options: [
            {
              label: "æ",
              name: "Q5_2",
              value: "1",
            },
            {
              label: "$",
              name: "Q5_2",
              value: "2",
            },
            {
              label: "z",
              name: "Q5_2",
              value: "3",
            },
            {
              label: "@",
              name: "Q5_2",
              value: "4",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q5_3",
          question:
            "3' mdif,ka wmg fmd; '''''' mEka iy mekai,a ,nd ÿkafkah  ''''''",
          options: [
            {
              label: '" iy æ',
              name: "Q5_3",
              value: "3",
            },
            {
              label: `' iy "`,
              name: "Q5_3",
              value: "2",
            },
            {
              label: `" iy '`,
              name: "Q5_3",
              value: "1",
            },
            {
              label: "( iy '",
              name: "Q5_3",
              value: "4",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q6",
      mainHeading: "06' my; i`oyka .‚; .eg¨ i`oyd ksjerÈ ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q6_1",
          question: "1' 8 ¬ 12 }",
          options: [
            {
              label: "92",
              name: "Q6_1",
              value: "2",
            },
            {
              label: "20",
              name: "Q6_1",
              value: "1",
            },
            {
              label: "29",
              name: "Q6_1",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q6_2",
          question: "2' 25 ¬ 64 }",
          options: [
            {
              label: "89",
              name: "Q6_2",
              value: "1",
            },
            {
              label: "116",
              name: "Q6_2",
              value: "2",
            },
            {
              label: "119",
              name: "Q6_2",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q6_3",
          question: "3' 369 ¬ 257 }",
          options: [
            {
              label: "394",
              name: "Q6_3",
              value: "3",
            },
            {
              label: "653",
              name: "Q6_3",
              value: "2",
            },
            {
              label: "626",
              name: "Q6_3",
              value: "1",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q7",
      mainHeading:
        "07' my; i`oyka jpk ksjerÈ .,md ,sÅ; NdIdfjka ieliq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q7_1",
          question: "1' l=Uqr$ fldghs$ f.dúhd",
          options: [
            {
              label: "fldghs l=Uqr f.dúhd'",
              name: "Q7_1",
              value: "3",
            },
            {
              label: "f.dúhd fldghs l=Uqr'",
              name: "Q7_1",
              value: "2",
            },
            {
              label: "f.dúhd l=Uqr fldghs'",
              name: "Q7_1",
              value: "1",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q7_2",
          question: "2' fmryef¾$ .uka$ we;a;=$ lr;",
          options: [
            {
              label: ".uka fmryef¾ we;a;= lr;s'",
              name: "Q7_2",
              value: "2",
            },
            {
              label: "we;a;= fmryef¾ .uka lr;s'",
              name: "Q7_2",
              value: "1",
            },
            {
              label: "fmryef¾ we;a;= .uka lr;s'",
              name: "Q7_2",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q7_3",
          question: "3' wms$ i;=ka$ .iaje,a$ yd$ iqrlsuq",
          options: [
            {
              label: "wms .iaje,a yd i;=ka iqrlsuq'",
              name: "Q7_3",
              value: "1",
            },
            {
              label: "wms iqrlsuq .iaje,a yd i;=ka'",
              name: "Q7_3",
              value: "2",
            },
            {
              label: "wms yd .iaje,a i;=ka iqrlsuq'",
              name: "Q7_3",
              value: "3",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q8",
      mainHeading: (
        <span>
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "32px",
            }}
          >
            {`08' my; i\`oyka jdlH kej; n,d ,shkak'`}
          </span>
          <br />
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "28px",
            }}
          >
            {` imhd we;s lvodisfha ^`}
          </span>
          <span
            style={{
              fontFamily: "Roboto",
              fontSize: "32px",
            }}
          >
            *
          </span>
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "28px",
            }}
          >
            {`& ,l=K fhdod we;s ia:dkfha ms<s;=r i\`oyka lrkAk'`}
          </span>
        </span>
      ),
      mainImageUrl: "",
      questionType: "QuestionOnly",
      secondHeading: "l=re,af,da lEu fidhd mshdU;s'",
      sub: [],
    },
    {
      id: "Q9",
      mainHeading: (
        <span>
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "32px",
            }}
          >
            {`09' my; oelafjk rEmh ms<sn\`oj úia;rhla ,shkak' ^Wmßu jpk 3 hs&`}
          </span>
          <br />
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "28px",
            }}
          >
            {` imhd we;s lvodisfha ^`}
          </span>
          <span
            style={{
              fontFamily: "Roboto",
              fontSize: "32px",
            }}
          >
            *
          </span>
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "28px",
            }}
          >
            {`& ,l=K fhdod we;s ia:dkfha ms<s;=r i\`oyka lrkAk'`}
          </span>
        </span>
      ),
      mainImageUrl: Q9,
      questionType: "QuestionOnly",
      secondHeading: "",
      sub: [],
    },
    {
      id: "Q10",
      mainHeading:
        "10' my; oelafjk rEm yඳුkajk kduhka jpkfhka ,shq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q10_1",
          question: "",
          options: [
            {
              label: "r.",
              name: "Q10_1",
              value: "3",
            },
            {
              label: "r5",
              name: "Q10_1",
              value: "2",
            },
            {
              label: "65",
              name: "Q10_1",
              value: "1",
            },
          ],
          imageUrl: Q10_1,
        },
        {
          questionId: "Q10_2",
          question: "",
          options: [
            {
              label: "*18",
              name: "Q10_2",
              value: "2",
            },
            {
              label: "318",
              name: "Q10_2",
              value: "1",
            },
            {
              label: "*16",
              name: "Q10_2",
              value: "3",
            },
          ],
          imageUrl: Q10_2,
        },
        {
          questionId: "Q10_3",
          question: "",
          options: [
            {
              label: "4e82",
              name: "Q10_3",
              value: "3",
            },
            {
              label: "478H",
              name: "Q10_3",
              value: "2",
            },
            {
              label: "4782",
              name: "Q10_3",
              value: "1",
            },
          ],
          imageUrl: Q10_3,
        },
      ],
    },
    {
      id: "Q11",
      mainHeading:
        "11' my; oelafjk rEmh yඳුkajk kduh jpkfhka ,shQ úg ,efnk ms<s;=rg wod< m<uq wl=r f;darkak'",
      mainImageUrl: Q11_1,
      questionType: "RadioBtnRow",
      secondHeading: "",
      sub: [
        {
          questionId: "Q11_1",
          question: "",
          options: [
            {
              label: ";",
              name: "Q11_1",
              value: "2",
            },
            {
              label: "k",
              name: "Q11_1",
              value: "1",
            },
            {
              label: "l",
              name: "Q11_1",
              value: "3",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q12",
      mainHeading:
        "12' my; oelafjk rEmh yඳුkajk kduh jpkfhka ,shQ úg ,efnk ms<s;=rg wod< m<uq wl=re fol f;darkak'",
      mainImageUrl: Q12_1,
      questionType: "RadioBtnRow",
      secondHeading: "",
      sub: [
        {
          questionId: "Q12_1",
          question: "",
          options: [
            {
              label: "f,aka",
              name: "Q12_1",
              value: "1",
            },
            {
              label: "f<aKa",
              name: "Q12_1",
              value: "2",
            },
            {
              label: "f,aKa",
              name: "Q12_1",
              value: "3",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q13",
      mainHeading: (
        <span>
          <span
            style={{
              fontFamily: "Sinhala",
            }}
          >
            {`13' my; oelafjk rEmh yඳුkajk kduh jpkfhka ,shQ úg ,efnk ms<s;=rg wod< `}
          </span>
          <br />
          <span
            style={{
              fontFamily: "Sinhala",
            }}
          >
            {`fojk yd f;jk wl=re fol f;darkak'`}
          </span>
        </span>
      ),
      mainImageUrl: Q13_1,
      questionType: "RadioBtnRow",
      secondHeading: "",
      sub: [
        {
          questionId: "Q13_1",
          question: "",
          options: [
            {
              label: "hd.",
              name: "Q13_1",
              value: "3",
            },
            {
              label: "HdY",
              name: "Q13_1",
              value: "2",
            },
            {
              label: "Hd.",
              name: "Q13_1",
              value: "1",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q14",
      mainHeading:
        "14' my; i`oyka jdlH i`oyd fhdod we;s úrdu ,l=Kq fudkjdo hkak f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q14_1",
          question: "1' uu ;rÕh ch.%yKh lf<ñ'",
          options: [
            {
              label: "kej;Sfï ;s;",
              name: "Q14_1",
              value: "1",
            },
            {
              label: "fldudj",
              name: "Q14_1",
              value: "2",
            },
            {
              label: "úYauhd¾: ,l=K",
              name: "Q14_1",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q14_2",
          question: (
            <span>
              <span
                style={{
                  fontFamily: "Sinhala",
                }}
              >
                {`2' <uhs .S .hñka\" kgñka yd jdokh `}
              </span>
              <br />
              <span
                style={{
                  fontFamily: "Sinhala",
                }}
              >
                {`lrñka úfkdao fj;s'`}
              </span>
            </span>
          ),
          options: [
            {
              label: 'kej;Sfï ;s;" m%Yakd¾: ,l=K',
              name: "Q14_2",
              value: "2",
            },
            {
              label: 'fldudj" kej;Sfï ;s;',
              name: "Q14_2",
              value: "1",
            },
            {
              label: 'fo;s;" kej;Sfï ;s; ',
              name: "Q14_2",
              value: "3",
            },
          ],
          imageUrl: "",
        },
        {
          questionId: "Q14_3",
          question: "3' zzwïudf.a w;a.=Kh úYañ;hs!ZZ hkqfjka iShd mejiqfõh'",
          options: [
            {
              label: 'i`., jryk" m%Yakd¾: ,l=K" kej;Sfï ;s;dfdd',
              name: "Q14_3",
              value: "2",
            },
            {
              label: 'Wvq fldud" úYauhd¾: ,l=K" kej;Sfï ;s;',
              name: "Q14_3",
              value: "1",
            },
            {
              label: 'fldudj" úYauhd¾: ,l=K" kej;Sfï ;s;',
              name: "Q14_3",
              value: "3",
            },
          ],
          imageUrl: "",
        },
      ],
    },
    {
      id: "Q15",
      mainHeading:
        "15' my; oelafjk rEm yඳුkajk kduhka jpkfhka ,shq úg ,efnk ms<s;=re f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q15_1",
          question: "",
          options: [
            {
              label: "Ohc",
              name: "Q15_1",
              value: "2",
            },
            {
              label: "Och",
              name: "Q15_1",
              value: "1",
            },
            {
              label: "Ooch",
              name: "Q15_1",
              value: "3",
            },
          ],
          imageUrl: Q15_1,
        },
        {
          questionId: "Q15_2",
          question: "",
          options: [
            {
              label: "wdrNK",
              name: "Q15_2",
              value: "3",
            },
            {
              label: "wdnrK",
              name: "Q15_2",
              value: "2",
            },
            {
              label: "wdNrK",
              name: "Q15_2",
              value: "1",
            },
          ],
          imageUrl: Q15_2,
        },
        {
          questionId: "Q15_3",
          question: "",
          options: [
            {
              label: "ikao¾kYh",
              name: "Q15_3",
              value: "3",
            },
            {
              label: "ixo¾ykh",
              name: "Q15_3",
              value: "2",
            },
            {
              label: "ixo¾Ykh",
              name: "Q15_3",
              value: "1",
            },
          ],
          imageUrl: Q15_3,
        },
      ],
    },
    {
      id: "Q16",
      mainHeading: (
        <span>
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "32px",
            }}
          >
            {`16' wid ,sùu' ^jpk j,g ijka § imhd we;s lvodisfha 1" 2 iy 3 hk b,lalï `}
          </span>
          <br />
          <span
            style={{
              fontFamily: "Sinhala",
              fontSize: "32px",
            }}
          >
            {`fhdod we;s ia:dk j, ms<s;=re i\`oyka lrkAk&`}
          </span>
        </span>
      ),
      mainImageUrl: "",
      questionType: "QuestionOnly",
      secondHeading: "",
      sub: [],
    },
    {
      id: "Q17",
      mainHeading: "17' my; oelafjk rEmj,g wod< ksjerÈ kduhka f;darkak'",
      mainImageUrl: "",
      questionType: "Normal",
      secondHeading: "",
      sub: [
        {
          questionId: "Q17_1",
          question: "",
          options: [
            {
              label: "froh",
              name: "Q17_1",
              value: "2",
            },
            {
              label: "frdaoh",
              name: "Q17_1",
              value: "1",
            },
            {
              label: "frdoh",
              name: "Q17_1",
              value: "3",
            },
          ],
          imageUrl: Q17_1,
        },
        {
          questionId: "Q17_2",
          question: "",
          options: [
            {
              label: "firmamqqj",
              name: "Q17_2",
              value: "2",
            },
            {
              label: "fifrmamqqj",
              name: "Q17_2",
              value: "1",
            },
            {
              label: "fidfrmmqj",
              name: "Q17_2",
              value: "3",
            },
          ],
          imageUrl: Q17_2,
        },
        {
          questionId: "Q17_3",
          question: "",
          options: [
            {
              label: "fndÜgqlre",
              name: "Q17_3",
              value: "3",
            },
            {
              label: "fndÜglre",
              name: "Q17_3",
              value: "2",
            },
            {
              label: "fndaÜgqlre",
              name: "Q17_3",
              value: "1",
            },
          ],
          imageUrl: Q17_3,
        },
      ],
    },
    {
      id: "Q18",
      mainHeading:
        "18' tlu wl=frka mgka .kakd rEm kduhkag wod< rEm hq.,h f;darkak'",
      mainImageUrl: "",
      questionType: "ImageRow",
      secondHeading: "",
      sub: [
        {
          questionId: "Q18_1",
          question: "",
          options: [
            {
              label: "",
              name: "Q18_1",
              value: "1",
              imageUrl1: Q18_1,
              imageUrl2: Q18_2,
            },
            {
              label: "",
              name: "Q18_1",
              value: "2",
              imageUrl1: Q18_3,
              imageUrl2: Q18_4,
            },
            {
              label: "",
              name: "Q18_1",
              value: "3",
              imageUrl1: Q18_5,
              imageUrl2: Q18_6,
            },
          ],
        },
      ],
    },
    {
      id: "Q19",
      mainHeading:
        "19' fjkia wl=rej,ska mgka .kakd rEm kduhkag wod< rEm hq.,h f;darkak'",
      mainImageUrl: "",
      questionType: "ImageRow",
      secondHeading: "",
      sub: [
        {
          questionId: "Q19_1",
          question: "",
          options: [
            {
              label: "",
              name: "Q19_1",
              value: "3",
              imageUrl1: Q19_1,
              imageUrl2: Q19_2,
            },
            {
              label: "",
              name: "Q19_1",
              value: "2",
              imageUrl1: Q19_3,
              imageUrl2: Q19_4,
            },
            {
              label: "",
              name: "Q19_1",
              value: "1",
              imageUrl1: Q19_5,
              imageUrl2: Q19_6,
            },
          ],
        },
      ],
    },
    {
      id: "Q20",
      mainHeading:
        "20' fjkia wl=rej,ska mgka .kakd rEm kduhkag wod< rEm hq.,h f;darkak'",
      mainImageUrl: "",
      questionType: "ImageRow",
      secondHeading: "",
      sub: [
        {
          questionId: "Q20_1",
          question: "",
          options: [
            {
              label: "",
              name: "Q20_1",
              value: "2",
              imageUrl1: Q20_1,
              imageUrl2: Q20_2,
            },
            {
              label: "",
              name: "Q20_1",
              value: "1",
              imageUrl1: Q20_3,
              imageUrl2: Q20_4,
            },
            {
              label: "",
              name: "Q20_1",
              value: "3",
              imageUrl1: Q20_5,
              imageUrl2: Q20_6,
            },
          ],
        },
      ],
    },
  ];

  // Split the questions into groups
  const questionGroups = [];

  questionGroups.push(questions.slice(0, 2));
  questionGroups.push(questions.slice(2, 4));
  questionGroups.push(questions.slice(4, 6));
  questionGroups.push(questions.slice(6, 8));
  questionGroups.push(questions.slice(8, 10));
  questionGroups.push(questions.slice(10, 12));
  questionGroups.push(questions.slice(12, 14));
  questionGroups.push(questions.slice(14, 16));
  questionGroups.push(questions.slice(16, 18));
  questionGroups.push(questions.slice(18, 20));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    handleResetClick();
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      textAlign="center"
      height="100%"
      marginTop="6rem"
      marginBottom="auto"
    >
      <form onSubmit={handleSubmit}>
        {questionGroups[quesSet]?.map((group) => (
          <Box key={group.id} marginY="40px">
            <Typography
              variant="h4"
              style={{
                fontFamily: "Sinhala",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {group.mainHeading}
            </Typography>
            {group.mainImageUrl && (
              <img src={group.mainImageUrl} alt="" width={100} height={100} />
            )}

            {group.secondHeading && (
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Sinhala",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                {group.secondHeading}
              </Typography>
            )}

            {group.questionType === "ImageRow" && (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
                marginY="25px"
              >
                {group.sub.map((question) => (
                  <FormControl
                    component="fieldset"
                    key={question.questionId}
                    style={{ marginRight: "5rem" }}
                  >
                    <RadioGroup
                      aria-label={question.question}
                      name={question.questionId}
                      value={formValues[question.questionId]}
                      onChange={handleRadioChange}
                      row
                    >
                      {question.options.map((option, index) => (
                        <>
                          <FormControlLabel
                            key={index}
                            value={option.value}
                            control={<Radio required />}
                            label={
                              <Typography
                                style={{
                                  fontFamily: "Sinhala",
                                  fontWeight: 600,
                                  color: "#fff",
                                  fontSize: "24px",
                                }}
                              >
                                {option.label}
                              </Typography>
                            }
                            style={{ display: "block" }}
                          />
                          {option.imageUrl1 && (
                            <img
                              src={option.imageUrl1}
                              alt=""
                              width={100}
                              height={100}
                              style={{ marginRight: "2rem" }}
                            />
                          )}
                          {option.imageUrl2 && (
                            <img
                              src={option.imageUrl2}
                              alt=""
                              width={100}
                              height={100}
                              style={{ marginRight: "2rem" }}
                            />
                          )}
                        </>
                      ))}
                    </RadioGroup>
                  </FormControl>
                ))}
              </Box>
            )}

            {(group.questionType === "Normal" ||
              group.questionType === "RadioBtnRow") && (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                textAlign="center"
                marginY="25px"
              >
                {group.sub.map((question) => (
                  <FormControl
                    component="fieldset"
                    key={question.questionId}
                    style={{ marginRight: "5rem" }}
                  >
                    {question.imageUrl && (
                      <img
                        src={question.imageUrl}
                        alt=""
                        width={100}
                        height={100}
                      />
                    )}
                    {question.question && (
                      <Typography
                        variant="h5"
                        style={{
                          fontFamily: "Sinhala",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        {question.question}
                      </Typography>
                    )}
                    <RadioGroup
                      aria-label={question.question}
                      name={question.questionId}
                      value={formValues[question.questionId]}
                      onChange={handleRadioChange}
                      row={group.questionType === "RadioBtnRow" ? true : false}
                    >
                      {question.options.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          value={option.value}
                          control={<Radio required />}
                          label={
                            <Typography
                              style={{
                                fontFamily: "Sinhala",
                                fontWeight: 600,
                                color: "#fff",
                                fontSize: "24px",
                              }}
                            >
                              {option.label}
                            </Typography>
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                ))}
              </Box>
            )}
          </Box>
        ))}
        <button type="submit" className="submitButton">
          <Typography
            variant="h4"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            ;yjqre lrkak
            {/* Submit */}
          </Typography>
        </button>
      </form>
    </Box>
  );
};

export default Questions;
