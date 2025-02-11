import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Videopage = ()=>{

    const {id} = useParams(); 

    const roomID = id;

    let myMeeting = async (element) => {
   // generate Kit Token
    const appID = 396849576;
    const serverSecret = "14071b5d46d4cfc7c51eaa77d4d02b2e";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  " ");

  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    const date = new Date();
    const meetingDuration = 2 * 60 * 1000; // 2 minutes in milliseconds
    const meetingEndTime = new Date(date.getTime() + meetingDuration);

    console.log("Current Time: ", date);
    console.log("Meeting End Time: ", meetingEndTime);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
          window.location.protocol + '//' + 
          window.location.host + window.location.pathname +'?roomID=' + roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
    // Set a timer to close the meeting after 2 minutes
setTimeout(() => {
  zp.leaveRoom(); // Close the meeting
  alert("The meeting has ended.");
}, meetingDuration);
    };
    return (
     <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }}>
         
     </div>
   )
}

export default Videopage