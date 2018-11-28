import * as React from 'react'

export interface RegisterState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type RegisterProps =StateProps&DispatchProps&OwnProps
export class Register extends React.Component<RegisterProps, RegisterState> {

    constructor(props: RegisterProps) {
        super(props)
        // this.routes = this.props.getRouteConfiguration()
        this.state = {}
    }

    render() {
        return (
            <div id='Register' className='Register'>
                Register
            </div>
        )
    }
}

export default Register