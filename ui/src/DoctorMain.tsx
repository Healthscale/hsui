
import React from 'react';
import Navbar from './Navbar';
import "./General.css"
import "./Login.css"
import "./DoctorMain.css"
import "./General.css"
import { useRef, useState } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea";
// import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import WebSocket from 'ws';

function DoctorMain(): JSX.Element {
    if (localStorage.getItem('username') == null) {
        window.location.href = "/login"
    }

    const ws = new WebSocket('wss://public.backend.medisearch.io:443/ws/medichat/api');

    // check if websocket open
    ws.onopen = () => {
        console.log('connected');
        // ws.send('something'); 
    };

    if (ws.readyState === WebSocket.OPEN) {
        console.log("ws is open")
    }

    // ws.('open', function open() {
    //     console.log('connected');
    //     // ws.send('something');
    // });

    const [inputValue, setInputValue] = useState('');
    const [responseValue, setResponseValue] = useState('');
    const [responseValue2, setResponseValue2] = useState('');
    // const [socket, setSocket] = useState<Socket | null>(null);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, inputValue);    
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = event.target?.value;
        setInputValue(event.target.value);
    };

    const userConversation = {
        event: "user_message",
        conversation: [
            "Is cancer transmissible?",
            "Yes, cancer can be transmissible, but it is extremely rare. [1, 2, 3, 4].",
            "How do I know if my dog has CTVT?"
        ],
        key: 'f566bfe3-006f-4f43-bfcc-13a92d54c85d',
        id: '1234',
        settings: {
            language: "English"
        }
    }

    const handleSubmit = () => {
        if (ws.readyState === WebSocket.OPEN) {
            // var message2 = inputValue + ". Please generate the differential diagnosis and clinical plan for this patient."
            // var message2 = inputValue
            userConversation.conversation = [inputValue]
            console.log("userConversation", userConversation)
            ws.send(JSON.stringify(userConversation));
        } else {
            console.log("ws is not open", ws.readyState)
        }
    };

    // ws.onmessage('message', function incoming(data) {
    //     console.log("data", data)
    //     setResponseValue(data.toLocaleString);
    // });

    ws.onmessage = (message) => {
        console.log("message", message)
        var parsedData = JSON.parse(message.data);
        console.log("parsedData", parsedData)

        var articles = ""
        if (parsedData.event === "articles") {
            console.log("Got articles");
            for (let i = 0; i < parsedData.articles.length; i++) {
                articles += "<a href='" + parsedData.articles[i].url + "'/>" + parsedData.articles[i].title + "<br>";
            }
            var content = "<p><span> " + articles + "</span></p>";
            setResponseValue2(content);
            // answer.append(content)
        } else if (parsedData.event === "llm_response") {
            console.log("Got llm response");
            var content = "<p><span> " + parsedData.text + "</span></p>";
            setResponseValue(content);
            // answer.html(content);
        } else if (parsedData.event === "error") {
            console.log("Got error");
        }
    };


    // const handleSubmit = () => {
    //     const client = new W3CWebSocket('wss://public.backend.medisearch.io:443/ws/medichat/api');

    //     client.onopen = () => {
    //         console.log('WebSocket Client Connected');
    //         userConversation.conversation = [inputValue]
    //         console.log("userConversation", userConversation)
    //         client.send(JSON.stringify(userConversation));
    //     };

    //     client.onmessage = (message) => {
    //         console.log("message", message)
    //         setResponseValue(message.data.toLocaleString);
    //     };
    // };

    // const handleSubmit = () => {
    //     if (socket) {
    //         userConversation.conversation = [inputValue]
    //         console.log("userConversation", userConversation)
    //         socket.emit('message', JSON.stringify(userConversation));
    //     }
    // };


    // React.useEffect(() => {
    //     // const newSocket = io('wss://public.backend.medisearch.io:443/ws/medichat/api', { transports: ["websocket"] });
    //     const newSocket = io('wss://public.backend.medisearch.io:443/ws/medichat/api');

    //     setSocket(newSocket);

    //     newSocket.on('connect', () => {
    //         console.log('WebSocket Client Connected');
    //     });

    //     newSocket.on('message', (message: string) => {
    //         console.log("message", message)
    //         setResponseValue(message);
    //     });

    //     return () => {
    //         newSocket.disconnect();
    //     };
    // }, []);

    return (
        <div>
            <Navbar />
            {/*  */}
            <div className="row">
                <div className="col-2 staff-page staff-page-left">
                    <div><h5><i className="bi bi-app-indicator"></i> Dashboard</h5></div>
                    <div><h5><i className="bi bi-app-indicator"></i> Therausus</h5></div>
                    <div><h5><i className="bi bi-app-indicator"></i> Community</h5></div>
                    <hr></hr>
                    <div><h5><i className="bi bi-app-indicator"></i> Patient directory</h5></div>
                    <div><h5><i className="bi bi-app-indicator"></i> Management</h5></div>
                    <div><h5><i className="bi bi-app-indicator"></i> Appointments</h5></div>
                </div>
                <div className="col-10 staff-page">
                    <br></br>
                    <div><h2>Hello Dr. Shikha</h2></div>
                    <div><i>Healthscale is intended to be used by an authorized medical professional. This does not dispense medically accredited and actionable results. All data is protected and any suggestions are to be validated by medical professional.</i></div>
                    <hr></hr>

                    <div>
                        <form>
                            <div><h3>Enter a patient information or general clinical problem to generate prognosis</h3></div>
                            <textarea 
                            // type="textarea" 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            ref={textAreaRef}
                            rows={1}
                            className="staff-textarea" 
                            placeholder="Enter patient prognosis or general clinical problem" />
                            <br></br>
                            <button type="button" onClick={handleSubmit} className="staff-button hs-button-dark">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* simple form with text box spanning vertically column length and submit button under it*/}

                    <div className="row">
                        <div className="col-10">
                            <div className="staff-card">
                                <div className="staff-card-title">Prognosis</div>
                                <div className="staff-card-text">
                                    {/* <textarea rows={4} value={responseValue} readOnly /> */}
                                    <div dangerouslySetInnerHTML={{ __html: responseValue }}></div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-5">
                            <div className="staff-card">
                                <div className="staff-card-title">Clinical Plan</div>
                                <div className="staff-card-text">Patient 1 prognosis</div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="staff-card">
                                <div className="staff-card-title">DDx</div>
                                <div className="staff-card-text">Patient 1 prognosis</div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <div className="staff-card">
                                <div className="staff-card-title">References</div>
                                <div className="staff-card-text">
                                    {/* <textarea rows={4} value={responseValue} readOnly /> */}
                                    <div dangerouslySetInnerHTML={{ __html: responseValue2 }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorMain;
