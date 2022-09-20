//Higher Order Component => a component that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state



import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is the info:{props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAauthenticated && <p>This is from withAdminWarning!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}



const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>

            {props.isAauthenticated && <div>
                <p>Please log in to make changes</p>
                <AdminInfo {...props} info="props....this is the info" />
            </div>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAauthenticated={true} />, document.getElementById('app'))

