import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataContextProvider from "./contexts/DataContext";
import EightQues from "./pages/EightQues/EightQues";
import FifthQues from "./pages/FifthQues/FifthQues";
import FifthQuesSun from "./pages/FifthQues/FifthQuesSun";
import FirstQues from "./pages/FirstQues/FirstQues";
import FourthQues from "./pages/FourthQues/FourthQues";
import FourthQuesTwo from "./pages/FourthQues/FourthQuesTwo";
import Main from "./pages/Main/Main";
import MessagePage from "./pages/MessagePage/MessagePage";
import NinthQues from "./pages/NinthQues/NinthQues";
import SecondQues from "./pages/SecondQues/SecondQues";
import SeventhQues from "./pages/SeventhQues/SeventhQues";
import SixthQuesBoth from "./pages/SixthQues/SixthQuesBoth";
import SixthQuesMan from "./pages/SixthQues/SixthQuesMan";
import SixthQuesWoman from "./pages/SixthQues/SixthQuesWoman";
import TenthQues from "./pages/TenthQues/TenthQues";
import ThirdQues from "./pages/ThirdQues/ThirdQues";
import ThirdQuesTwo from "./pages/ThirdQues/ThirdQuesTwo";
const MyRoutes = ({ url }) => {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/first" exact element={<FirstQues url={url} />} />
          <Route path="/second" exact element={<SecondQues />} />
          <Route path="/third" exact element={<ThirdQues />} />
          <Route path="/thirdtwo" exact element={<ThirdQuesTwo />} />
          <Route path="/fourth" exact element={<FourthQues />} />
          <Route path="/fourthtwo" exact element={<FourthQuesTwo />} />
          <Route path="/fifth" exact element={<FifthQues />} />
          <Route path="/fifthsun" exact element={<FifthQuesSun />} />
          <Route path="/sixthman" exact element={<SixthQuesMan />} />
          <Route path="/sixthwoman" exact element={<SixthQuesWoman />} />
          <Route path="/sixthboth" exact element={<SixthQuesBoth />} />
          <Route path="/seventh" exact element={<SeventhQues />} />
          <Route path="/eighth" exact element={<EightQues />} />
          <Route path="/ninth" exact element={<NinthQues />} />
          <Route path="/tenth" exact element={<TenthQues />} />
          <Route
            path="/firstmessage"
            exact
            element={
              <MessagePage
                message={"Let's get to know you!"}
                isFinish={false}
              />
            }
          />
          <Route
            path="/secondmessage"
            exact
            element={
              <MessagePage
                message={"No worries, we’ve got you!"}
                isFinish={false}
              />
            }
          />
          <Route
            path="/finish"
            exact
            element={
              <MessagePage
                message={"We've found some awesome frames for you!"}
                isFinish={true}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
};

export default MyRoutes;
