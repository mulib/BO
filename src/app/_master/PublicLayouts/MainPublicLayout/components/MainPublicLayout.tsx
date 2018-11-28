import * as React from 'react'
import { Link } from "react-router-dom";

export interface MainPublicLayoutState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type MainPublicLayoutProps = StateProps & DispatchProps & OwnProps
export class MainPublicLayout extends React.Component<MainPublicLayoutProps, MainPublicLayoutState> {

    constructor(props: MainPublicLayoutProps) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id='main-public-layout' className='main-public-layout'>
            MainPublicLayout
                <ul>
                    <li>
                        <Link to="/tacos/bus">Bus</Link>
                    </li>
                    <li>
                        <Link to="/tacos/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainPublicLayout