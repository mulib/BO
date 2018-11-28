import * as React from 'react'
import routesConfig from '../../../_router/routesConfig'
import { BrowserRouter as Router} from 'react-router-dom'
import { RouteWithSubRoutes } from '../../../_router/RouteWithSubRoutes'

export interface AppContainerState {
}

export interface StateProps {
}

export interface DispatchProps {
}
export interface OwnProps {
}

export type AppContainerProps = StateProps & DispatchProps & OwnProps
export class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
    constructor(props: AppContainerProps) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id='app-container' className='app-container'>
                App container
                <Router>
                    <RouteWithSubRoutes routes={routesConfig} />
                </Router>
            </div>
        )
    }
}

export default AppContainer