import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Header } from "./components/header/header.component";
import { UserList } from "./pages/user/user-list/user-list.component";
import { RoomList } from "./pages/room/room-list/room-list.component";
import { Home } from "./pages/home/home.component";

export default function AppRouting() {
    return (
        <Router>
            <div>
                <header>                   
                    <Header message="Hi, Welome to HostelMe"/>
                </header>
                <main>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup} />
                        <Route path="/users" component={UserList} />
                        <Route path="/rooms" component={RoomList} />
                        <Route path="/" component={Home} />
                        <AuthenticatedRoute path="/data" component={Data} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

function Login() {
    return <h2>Login</h2>;
}

function Signup() {
    return <h2>Signup</h2>;
}

function Data() {
    return <h2>Data</h2>;
}


interface AuthProps {
    path: string,
    component: React.ComponentType
};
class AuthenticatedRoute extends Component<AuthProps, {}> {
    render() {
            // if(1 !== 1) {
            //     return <Route {...this.props} />
            // } else {
                return <Redirect to="/" />
            // }
        // <div>Hi</div>
    }
}