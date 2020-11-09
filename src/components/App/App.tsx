import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@chakra-ui/core";
import HomeContainer from "../Home/Home";
import TrendingContainer from "../Trending/Trending";
import ProfileContainer from "../Profile/Profile";
import PinnedContainer from "../Pinned/Pinned";
import Footer from "../Footer/Footer";
import HashtagContainer from "../Hashtag/Hashtag";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Flex direction="column" h={"100vh"}>
        <Flex flex={1}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/trending" component={TrendingContainer} />
            <Route path="/pinned" component={PinnedContainer} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/hashtag" component={HashtagContainer} />
          </Switch>
        </Flex>
        <Footer />
      </Flex>
    </Router>
  );
};

export default App;
