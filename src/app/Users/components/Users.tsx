import * as React from 'react'

export interface UsersState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type UsersProps =StateProps&DispatchProps&OwnProps
export class Users extends React.Component<UsersProps, UsersState> {

    constructor(props: UsersProps) {
        super(props)
        // this.routes = this.props.getRouteConfiguration()
        this.state = {}
    }

    render() {
        return (
            <div id='Users' className='Users'>
                Users
            </div>
        )
    }
}

export default Users