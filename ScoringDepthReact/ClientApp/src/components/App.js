import React from "react";
import HomePage from "./HomePage";
import LeaguesPage from "./LeaguesPage";
import RegionsPage from "./RegionsPage";
import RankingsPage from "./RankingsPage";
import AboutPage from "./AboutPage";
import FeedbackPage from "./FeedbackPage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/season/:yearId" component={RegionsPage} />
                <Route path="/league/:seasonId" component={LeaguesPage} />
                <Route path="/ranking/:seasonLeagueId" component={RankingsPage} />
                <Route path="/feedback" component={FeedbackPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;