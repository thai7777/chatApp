import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Kien Kien</h2>
        <p>nuoc cong hoa xa hoi chu nghia viet nam muon nam</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/461098290_122117001506405897_4784282388395313016_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEr3ipppZOFb6vTrPKIPrsn_zyejKlQvOT_PJ6MqVC85G_gALR6S_9Ar2678bPYmFeIbqoe_1mkZvgXYXdz3chC&_nc_ohc=XZL3oxzd60gQ7kNvgEaRc9s&_nc_ht=scontent.fhan5-8.fna&_nc_gid=A0Y18OohbXsWaYkeaiurR32&oh=00_AYB-iP6b4mRMyT3LSHvav-l2Rlh-sRfF8gGCGESj-Esqqw&oe=670473C7" alt="" />
              <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
          </div>
          <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        </div>
        <button>Block User</button>
        <button className="Logout">Logout</button>
      </div>
    </div>
  )
}

export default Detail