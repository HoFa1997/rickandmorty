import AboutUsBtn from "@/components/atoms/Buttons/AboutUs/AboutUsBtn"
import NavigationBtn from "@/components/atoms/Buttons/Navigation/NavigationBtn"
import { Box } from "@mui/material"

const HeaderNavigation = () => {
  return (
    <Box flexGrow={1} textAlign={"right"}>
        <NavigationBtn>Character</NavigationBtn>
        <NavigationBtn>Location</NavigationBtn>
        <NavigationBtn>Episode</NavigationBtn>
        <AboutUsBtn variant="outlined">About US</AboutUsBtn>
    </Box>
  )
}

export default HeaderNavigation