import {
Button,
ButtonProps,
styled,
} from "@mui/material";

const BtnAboutUs = styled(Button)<ButtonProps>({
  border: `2px solid rgb(255, 152, 0)`,
  color: `black`,
  ":hover": {
    color: "white",
    border: "2px solid rgb(255, 152, 0)",
    background: "rgb(255, 152, 0)",
  },
});

const AboutUsBtn = props => {
  return (
    <BtnAboutUs {...props}>AboutUsBtn</BtnAboutUs>
  )
}

export default AboutUsBtn