import React from "react";
import "./App.scss"

class App extends React.Component {
    render() {
        return (
            <div className={"content_wrapper"}>
                <div className="content_title">quitovsky</div>
                <div className="content_subtitle">// Fullstack developer</div>
                <div className="content_links">
                    <a href={"https://github.com/quitovsky/"} className="content_links_item">GitHub</a>
                    <div className="content_links_item">|</div>
                    <a href={"https://vk.com/quitovsky/"} className="content_links_item">VK </a>
                    <div className="content_links_item">|</div>
                    <a href={"https://yumi-team.ru/"} className="content_links_item">Yumi</a>
                </div>
            </div>
        );
    }
}
export default App;