import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@chakra-ui/core";
import HomeContainer from "../Home/Home";
import TrendingsContainer from "../Trendings/Trendings";
import ProfileContainer from "../Profile/Profile";
import PinnedContainer from "../Pinned/Pinned";
import Footer from "../Footer/Footer";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Flex direction="column" h={"100vh"}>
        <Flex flex={1}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/trendings" component={TrendingsContainer} />
            <Route path="/pinned" component={PinnedContainer} />
            <Route path="/profile" component={ProfileContainer} />
          </Switch>
        </Flex>
        <Footer />
      </Flex>
    </Router>
  );
};

export default App;
