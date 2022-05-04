import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Header } from "./components/header/header.component";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/theme';
import UserList from "./pages/user/user-list/user-list.component";
import { RoomList } from "./pages/room/room-list/room-list.component";

export default function AppRouting() {
    return (
        <Router>
            <div>
                <nav>                   
                    <Header message="Hi, Welome to HostelMe"/>
                </nav>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup} />
                    <Route path="/users" component={UserList} />
                    <Route path="/rooms" component={RoomList} />
                    <Route path="/" component={Home} />
                    <AuthenticatedRoute path="/data" component={Data} />
                </Switch>
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
function Home() {
    return <div>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <div>
          <h2>Welome to Home</h2>
        </div>
      </>
    </ThemeProvider>
    </div>;
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
            if(1 !== 1) {
                return <Route {...this.props} />
            } else {
                return <Redirect to="/" />
            }
        // <div>Hi</div>
    }
}