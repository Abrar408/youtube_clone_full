import { Link } from "react-router-dom"
import { Typography,CardContent,CardMedia,Box } from "@mui/material"
import { Check, CheckCircle } from "@mui/icons-material"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channel,snippet}) => {
  return (
    <Box sx={{boxShadow:'none',borderRadius:'20px',width:{xs:'356px',md:'320px'},
    height:'326px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column', justifyContent:'center', textAlign:'center', 
                                color: 'white'}}>
                            <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                                        alt={channel?.snippet?.title} 
                                        sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}}
                                        />
                            <Typography variant='h6'>
                                {channel?.snippet?.title}
                                <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
                            </Typography>
                            {channel?.statistics?.subscriberCount && (
                                <Typography variant='body2' color='text.secondary'>
                                    {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subcribers
                                </Typography>
                            )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard