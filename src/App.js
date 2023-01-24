import React from "react";
import Header from "./components/Header";
import Alert from "./components/Main/Alert";
import Avatar from "./components/Main/Avatar";
import Buttons from "./components/Main/Buttons";
import Cards from "./components/Main/Cards";
import CheckBox from "./components/Main/CheckBox";
import Grid from "./components/Main/Grid";
import Process from "./components/Main/Process";
import Progress from "./components/Main/Progress";
import Radio from "./components/Main/Radio";
import Segment from "./components/Main/Segment";
import Tabs from "./components/Main/Tabs";
import Toggles from "./components/Main/Toggles";
import ToolTip from "./components/Main/ToolTip";
import Sidebar from "./components/Sidebar";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <aside id="row">
        <Sidebar />
        <main class="column-9 component-list">
          <Alert />
          <Avatar />
          <Buttons />
          <Cards />
          <CheckBox />

          <Grid />
          <Radio />
          <Tabs />
          <Toggles />
          <Process />
          <Progress />
          <Segment />
          <ToolTip />
        </main>
      </aside>
    </>
  );
}

export default App;
