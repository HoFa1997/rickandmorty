import {
Button,
ButtonProps,
styled,
} from "@mui/material";

const BtnOther = styled(Button)<ButtonProps>({
  color: `black`,
  background: "transparent",
  ":hover": {
    color: "rgb(255, 152, 0)",
    background: "transparent",
  },
});

const NavigationBtn = props => {
  return (
    <BtnOther {...props}>{props.children}</BtnOther>
  )
}

export default NavigationBtn