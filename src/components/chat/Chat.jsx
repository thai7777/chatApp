import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmoJiPicker from "emoji-picker-react"

const Chat = () => {
 const [open,setOpen] = useState(false);
 const [text,setText] = useState("");
 const endRef = useRef(null)
  useEffect(()=>{
      endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])
 const handleEmoji = (e) =>{
  setText((prev) => prev + e.emoji);
  setOpen(false)
   
 };
  console.log(text)
    return (
      <div className='chat'>
        <div className="top">
          <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <span>Kien Cho</span>
              <p>em yeu anh kien</p>
            </div>
          </div>
          <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
        </div>
        <div className="center">
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                nuoc cong hoa xa hoi chu nghia viet nam muon nam
              </p>
              <span>1 phut truoc</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
            <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <p>
                nuoc cong hoa xa hoi chu nghia viet nam muon nam
              </p>
              <span>1 phut truoc</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                nuoc cong hoa xa hoi chu nghia viet nam muon nam
              </p>
              <span>1 phut truoc</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
            <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <p>
                nuoc cong hoa xa hoi chu nghia viet nam muon nam
              </p>
              <span>1 phut truoc</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                nuoc cong hoa xa hoi chu nghia viet nam muon nam
              </p>
              <span>1 phut truoc</span>
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <p>
                nuoc cong hoa xa hoi chu nghia viet nam muon nam
              </p>
              <span>1 phut truoc</span>
            </div>
          </div>
          <div ref={endRef}></div>
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
          <input type="text" placeholder="Type a message...." value={text}
          onChange={e=>setText(e.target.value)} />
          <div className="emoji">
            <img src="./emoji.png" alt="" 
            onClick={()=>setOpen(prev=>!prev)} />
            <div className="picker">
            <EmoJiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button>
        </div>
      </div>
    )
  }
  
  export default Chat