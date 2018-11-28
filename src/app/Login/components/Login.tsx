import * as React from 'react'

export interface LoginState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type LoginProps =StateProps&DispatchProps&OwnProps
export class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props)
        // this.routes = this.props.getRouteConfiguration()
        this.state = {}
    }

    render() {
        return (
            <div id='login' className='login'>
                Login
            </div>
        )
    }
}

export default Login