import * as React from 'react'

export interface AddUserState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type AddUserProps =StateProps&DispatchProps&OwnProps
export class AddUser extends React.Component<AddUserProps, AddUserState> {

    constructor(props: AddUserProps) {
        super(props)
        // this.routes = this.props.getRouteConfiguration()
        this.state = {}
    }

    render() {
        return (
            <div id='add-user' className='add-user'>
                AddUser
            </div>
        )
    }
}

export default AddUser