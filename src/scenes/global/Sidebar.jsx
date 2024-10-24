import { useState  } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./Sidebar.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.cinza[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed ] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
          sx={{
            "& .pro-sidebar-inner": {
              background: `${colors.laranja[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            },
          }}
        >
          <Sidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
              {/* LOGO AND MENU ICON */}
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.azulEscuro[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.cinza[100]}>
                      ADMINIS
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
             {/* USER */}
              {!isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={`/assets/user.png`}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      color={colors.cinza[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      Rebeca Brito
                    </Typography>
                    <Typography variant="h5" color={colors.azulClaro[500]}>
                      Software Developer Jr
                    </Typography>
                  </Box>
                </Box>
              )}
    
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
    
                <Typography
                  variant="h6"
                  color={colors.cinza[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                    Páginas
                </Typography>
                <Item
                    title="Fardamentos"
                    to="/fardamentos"
                    icon={<CheckroomOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Cantina"
                    to="/cantina"
                    icon={<LunchDiningOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                </Box>
            </Menu>
        </Sidebar>
    </Box>
    );
};

export default SidebarComponent;