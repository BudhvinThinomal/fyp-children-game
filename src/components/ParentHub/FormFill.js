import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
} from "@mui/material";
import "./FormFill.css";

const FormFill = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" className="form-fieldset">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#000",
            }}
          >
            {"01' Tnf.a orejdf.a$ YsIHhdf.a w;a wl=re wmeyeÈ,so@"}
          </Typography>
          <RadioGroup
            aria-label="Q_P_1"
            name="Q_P_1"
            value={formValues?.Q_P_1}
            onChange={handleRadioChange}
            style={{ marginLeft: "2rem" }}
          >
            <FormControlLabel
              value="True"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"Tõ"}
                </Typography>
              }
            />
            <FormControlLabel
              value="False"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"ke;"}
                </Typography>
              }
            />
            <FormControlLabel
              value="False2"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"iuyrúg"}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="form-fieldset">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#000",
            }}
          >
            {"02' orejdg$ YsIHhdg ;u woyia m;%hl$ fmd;l ,sùfï wmyiqjla mj;So@"}
          </Typography>
          <RadioGroup
            aria-label="Q_P_2"
            name="Q_P_2"
            value={formValues?.Q_P_2}
            onChange={handleRadioChange}
            style={{ marginLeft: "2rem" }}
          >
            <FormControlLabel
              value="True"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"Tõ"}
                </Typography>
              }
            />
            <FormControlLabel
              value="False"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"ke;"}
                </Typography>
              }
            />
            <FormControlLabel
              value="False2"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"iuyrúg"}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="form-fieldset">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#000",
            }}
          >
            {
              "03' orejd$ YsIHhd ,ndfok l%shdldrlï isÿ lsÍug wiu;a jk ksid tu l%shdldrlï kej; kej; isÿlsÍug isÿfõo@"
            }
          </Typography>
          <RadioGroup
            aria-label="Q_P_3"
            name="Q_P_3"
            value={formValues?.Q_P_3}
            onChange={handleRadioChange}
            style={{ marginLeft: "2rem" }}
          >
            <FormControlLabel
              value="True"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"Tõ"}
                </Typography>
              }
            />
            <FormControlLabel
              value="False"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"ke;"}
                </Typography>
              }
            />
            <FormControlLabel
              value="False2"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"iuyrúg"}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="form-fieldset">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#000",
            }}
          >
            {
              '04\' mdi,a jev i`oyd orejdg ;sfnk Wkkaÿj" wjOdkh ,nd§u" orejdf.a ,sùfï fõ.h iy Wmfoia ms<sme§u ms<sn`o orejdg .eg¨ ;sfíoehs Tn is;fkao@'
            }
          </Typography>
          <RadioGroup
            aria-label="Q_P_4"
            name="Q_P_4"
            value={formValues?.Q_P_4}
            onChange={handleRadioChange}
            style={{ marginLeft: "2rem" }}
          >
            <FormControlLabel
              value="0"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"ke;"}
                </Typography>
              }
            />
            <FormControlLabel
              value="1"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {'Tõ" iq¿ jYfhka'}
                </Typography>
              }
            />
            <FormControlLabel
              value="2"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {'Tõ" idudkH uÜgfuka'}
                </Typography>
              }
            />
            <FormControlLabel
              value="3"
              control={<Radio required />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {'Tõ" ;Èkau'}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="form-fieldset">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#000",
            }}
          >
            {
              "05' by; m%Yakhg ms<s;=r zzTõZZ kï\" fuu .eg¨j fldmuK ld,hl isg mj;So@"
            }
          </Typography>
          <RadioGroup
            aria-label="Q_P_5_1"
            name="Q_P_5_1"
            value={formValues?.Q_P_5_1}
            onChange={handleRadioChange}
            style={{ marginLeft: "2rem" }}
          >
            <FormControlLabel
              value="0"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"i;s lsysmhla"}
                </Typography>
              }
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"udi 1 - 6 ;a w;r"}
                </Typography>
              }
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"udi 6 - 12  ;a w;r"}
                </Typography>
              }
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#000",
                  }}
                >
                  {"wjqreoaog jvd jeä ld,hla"}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>

        <button type="submit" className="submitButton">
          <Typography variant="h5" className="submitLabel">
            ;yjqre lrkak
            {/* Submit */}
          </Typography>
        </button>
      </form>
    </div>
  );
};

export default FormFill;
