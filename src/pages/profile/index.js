import React, { Component, Fragment } from 'react'
import { Footer } from '../../components'
import PartProfile from '../../parts/Profile'

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <PartProfile />
                <Footer />
            </Fragment>
        )
    }
}

export default Profile
