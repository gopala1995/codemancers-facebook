import "./style/Post.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { useState } from "react";
import { Gif } from '../component/Gif';

export const Post = () => {
  const [state,setState] = useState(0);
  const [gif,setGifs] = useState([])
  const [post,setPost] = useState([])
  const [check, setCheck] = useState(false)
  const handle=(value)=>{
    console.log(value)
    setState(0)
    setGifs(value)
  }

  const Handelpost =(e)=>{
    e.preventdefault = 1
    setCheck(true)
    
    console.log(post);
  }

  return (
    <div className="Post">
      <div className="navbar">
        <p> <BorderColorIcon fontSize="small"/>Compose Post</p>
        <p> <PhotoLibraryIcon fontSize="small"/> Photo/Video Album</p>
        <p> <VideoCallIcon fontSize="small"/> Live Video</p>
      </div>
      <div className="area">
      <AccountCircleIcon fontSize="large" style={{color:"rgb(216, 210, 210)"}}/>
      <TextField
        sx={{width: 500 }}
        multiline
        rows={2}
        variant="standard"
        placeholder= "Write Something here..."
         onChange={(e)=>setPost(e.target.value)}
        />
      </div>
      <img src={gif} alt="" className="d"/>
      
      <div className="but">
      <Button   sx={{fontSize:10,backgroundColor:"rgb(241, 238, 238)",color:"black"}}>
      <PersonAddIcon fontSize="small" style={{color:"rgb(121, 200, 243)"}}/> Tag friends
      </Button>
      <Button   sx={{fontSize:10,backgroundColor:"rgb(241, 238, 238)",color:"black"}}>
       <LocationOnIcon fontSize="small" style={{color:"rgb(243, 111, 111)"}}/>check in
      </Button>
      <Button   onClick={()=>{setState(1)}} sx={{fontSize:10,backgroundColor:"rgb(241, 238, 238)",color:"black"}}>
       <GifBoxIcon fontSize="small" style={{color:"rgb(213, 171, 250)"}}/> gif
      </Button>
      <Button   sx={{fontSize:10 ,backgroundColor:"rgb(241, 238, 238)",color:"black"}}>
      <CalendarMonthIcon fontSize="small" style={{color:"rgb(243, 111, 111)"}}/> Tag event
      </Button>
      </div>
      <div className="footer">
      <Button   sx={{fontSize:10,border:1,color:"black",}}>
      <LockIcon fontSize="small"/> Only me
      </Button>
      <Button onClick={Handelpost}  sx={{fontSize:10,color:"white",backgroundColor:"rgb(71, 172, 248)"}}>
       Post
      </Button>
      </div>
      {
        state? <Gif handle={handle}/>:""
      }
      <div>
        {check? post: ""}
      </div>
      <div>
        {check? <div>
          <img src={gif} alt="" className="d"/>
        </div> : ""}
      </div>
    </div>
  );
};
