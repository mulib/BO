import * as React from 'react'

export interface Error404State {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type Error404Props = StateProps & DispatchProps & OwnProps
export class Error404 extends React.Component<Error404Props, Error404State> {

    constructor(props: Error404Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id='main-layout' className='main-layout'>
                <h1>Error 404. this page not exists...</h1>
            </div>
        )
    }
}

export default Error404