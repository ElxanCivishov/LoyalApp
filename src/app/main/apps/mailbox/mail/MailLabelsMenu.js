import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { Menu } from "@mui/material";
import _ from "@lodash";
import Tooltip from "@mui/material/Tooltip";
import { selectLabels } from "../store/labelsSlice";

function MailLabelsMenu(props) {
  const { className, onChange, labels } = props;
  const [selectedLabels, setSelectedLabels] = useState(labels);
  const labelsAll = useSelector(selectLabels);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setSelectedLabels(labels);
  }, [labels]);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return <></>;
}

export default MailLabelsMenu;
