import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";

function App() {
    return (
        <div className="App">
            <div className="sideBar">
                <div className="upperside">
                    <div className="upperSideTop">
                        <img src={gptLogo} alt="Logo" className="logo" />
                        <span className="brand">ChatGPT</span>
                        <button className="midBtn">
                            <img
                                src={addBtn}
                                alt="New Chat"
                                className="addBtn"
                            />
                            New Chat
                        </button>
                    </div>
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
                <div className="lowerside">
                    <div className="listItems">
                        <img src="" alt="" className="listitemsImg" />
                        Home
                    </div>
                    <div className="listItems">
                        <img src="" alt="" className="listitemsImg" />
                        Save
                    </div>
                    <div className="listItems">
                        <img src="" alt="" className="listitemsImg" />
                        Upgrade to Pro
                    </div>
                </div>
            </div>
            <div className="main"></div>
        </div>
    );
}

export default App;
