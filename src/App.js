import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
    return (
        <div className="App">
            <div className="sideBar">
                <div className="upperSide">
                    <div className="upperSideTop">
                        <img src={gptLogo} alt="Logo" className="logo" />
                        <span className="brand">ChatGPT</span>
                    </div>
                    <button className="midBtn">
                        <img src={addBtn} alt="New Chat" className="addBtn" />
                        New Chat
                    </button>

                    <div className="upperSideBottom">
                        <button className="query">
                            <img src={msgIcon} alt="Message Icon" />
                            What is Programming?
                        </button>
                        <button className="query">
                            <img src={msgIcon} alt="Message Icon" />
                            How to use an API?
                        </button>
                    </div>
                </div>
                <div className="lowerSide">
                    <div className="listItems">
                        <img src={home} alt="Home" className="listItemsImg" />
                        Home
                    </div>
                    <div className="listItems">
                        <img src={saved} alt="Saved" className="listItemsImg" />
                        Save
                    </div>
                    <div className="listItems">
                        <img
                            src={rocket}
                            alt="Upgrade"
                            className="listItemsImg"
                        />
                        Upgrade to Pro
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="chats">
                    <div className="chat">
                        <img src={userIcon} alt="" />
                        <p className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos repellat, facere alias magni rerum
                            dolores! Autem ipsam perferendis quam labore?
                        </p>
                    </div>
                    <div className="chat">
                        <img src={gptImgLogo} alt="" />
                        <p className="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos repellat, facere alias magni rerum
                            dolores! Autem ipsam perferendis quam labore?
                        </p>
                    </div>
                </div>
                <div className="chatFooter">
                    <div className="inp">
                        <input type="text" placeholder="Send a Message" />
                        <button className="send">
                            <img src={sendBtn} alt="Send" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
