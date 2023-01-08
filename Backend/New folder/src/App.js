import logo from './logo.svg';
import './App.css';
import { Signup } from './component/signup';
import { Login } from './component/login';
import { MainRoutes } from './component/MainRoutes';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function App() {

  const videoRef = useRef(null);
  const photoRef=useRef(null)

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 500 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const takePhoto = () => {
    let photo = photoRef.current;
   // let strip = stripRef.current;
   let video = videoRef.current;
   
    let ctx = photo.getContext("2d");
    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;
    ctx.drawImage(video, 0, 0, width, height);

    //const data = photo.toDataURL("image/jpeg");
    console.log(ctx)

  }



  return (
    <div className="App">
        
     
     {/* <div style={{display:"flex", gap:"50px" ,justifyContent:"space-around" }}>

    <Link to="/"> <h2>Signup</h2></Link> 
    <Link to="/login"><h2>Login</h2></Link> 
     <Link to={"/task"}> <h2>Task</h2>
    </Link>
 </div> */}


  
 
 <h1>Sanket</h1>


 <div>
        <button onClick={takePhoto}>Take a photo</button>
        <video ref={videoRef} />
      </div>
    {/* ///<MainRoutes/> */}
   
    </div>
  );
}

export default App;
