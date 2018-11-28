import * as React from 'react'
import { Link } from "react-router-dom";

export interface MainLayoutState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type MainLayoutProps = StateProps & DispatchProps & OwnProps
export class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {

    constructor(props: MainLayoutProps) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id='main-layout' className='main-layout'>
            MainLayout
                <ul>
                    <li>
                        <Link to="/auth/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/auth/add-user">Add user</Link>
                    </li>
                    <li>
                        <Link to="/guest/login">Log out</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainLayout