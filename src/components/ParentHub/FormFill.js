import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Typography,
  SnackbarContent,
} from "@mui/material";
import "./FormFill.css";

const FormFill = () => {
  const [open, setOpen] = useState(false);
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
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  };

  const handleImageChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: reader.result,
      }));
    };
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000); // Close Snackbar after 2 seconds
    }
  }, [open]);

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

        <div className="form-input">
          <label htmlFor="Q_P_1" className="form-label">
            {"8 jk m%Yakhg wod< jk mska;+r we;=<;a lrkak( "}
          </label>
          <input
            type="file"
            name="Q_P_21"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="Q_P_2" className="form-label">
            {"9 jk m%Yakhg wod< jk mska;+r we;=<;a lrkak( "}
          </label>
          <input
            type="file"
            name="Q_P_22"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="Q_P_3" className="form-label">
            {"16 jk m%Yakhg wod< jk mska;+r we;=<;a lrkak( "}
          </label>
          <input
            type="file"
            name="Q_P_23"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="submitButton">
          <Typography variant="h5" className="submitLabel">
            ;yjqre lrkak
            {/* Submit */}
          </Typography>
        </button>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        style={{
          marginBottom: "10rem",
        }}
      >
        <SnackbarContent
          message={
            <Typography
              style={{
                color: "#fff",
                fontFamily: "Sinhala",
                fontSize: "26px",
                fontWeight: 600,
              }}
            >
              {"id¾:lj wdodkh isÿ l<dææ"}
            </Typography>
          }
          style={{ backgroundColor: "#000" }}
        />
      </Snackbar>
    </div>
  );
};

export default FormFill;
