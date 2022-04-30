import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Grid } from '@mui/material';
import Typical from 'react-typical'

const Header = ({ basket}) => {
    const openNav = () => {
        document.getElementById("mySidenav").style.height = "80%";
    };
    return (
        <Grid container className=' appBar' raised  >
            <Grid item xs='10' md='11' >
                    <Typography className='text' style={{fontWeight:"bold",fontSize:"30px",color:"black",textShadow:"2px 2px #757279"}}>
                        MENU APP FOR INTERN
                    </Typography>
                    <Typography className='text'  >
                        <h3>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "If you want to avoid heartache, ",2000,
                                    "fall in love with food",2000,
                                    " It will never break your heart ",2000
                                ]}
                            />
                        </h3>
                </Typography>
            </Grid>
            <Grid item className='flex'>
                    <IconButton  className='onHover' color='inherit' onClick={openNav} >
                        <Badge badgeContent={basket}>
                            <FoodBankIcon/>
                        </Badge>
                    </IconButton>
            </Grid>
        </Grid>
    );
};

export default Header;
