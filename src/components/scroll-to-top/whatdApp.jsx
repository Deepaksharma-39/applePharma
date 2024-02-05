import { SvgIcon } from "@mui/material";
import useScrollTop from "../../hooks/use-scroll-top";
import Fab from '@mui/material/Fab';
import { Link } from "react-router-dom";
import {WhatsApp} from "@mui/icons-material"
const WhatsApp1 = () => {
    const { stick } = useScrollTop();

    const fabStyle = {
        position: 'sticky',
        bottom: 50,
        left: 40,
      };
    if (stick) {
        return (
            <Link to={"https://wa.me/9999 6678 03"}>
            <Fab className="scroll-top"
         sx={fabStyle} color="success" aria-label="add">
            
            <WhatsApp />

          </Fab>
          </Link>
        );
    }
    return null;
};

export default WhatsApp1;