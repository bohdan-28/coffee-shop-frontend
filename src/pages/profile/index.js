import React, { Component, Fragment } from 'react'
import { Footer } from '../../components'
import PartProfile from '../../parts/Profile'

class Profile extends Component {
    state = {
        data: [],
        email: '',
        password: '',
        phoneNumber: '',
        username: '',
        firstname: '',
        lastname: '',
        address: '',
        gender: '',
        dateOfBirth: '',
        image: '',
        selectedFile: null,
        insert: ''
    }




    handleChangePicture = (e) => {
        console.log(e.target.files[0]);
        this.setState({
            insert: e.target.files[0].name,
            image: URL.createObjectURL(e.target.files[0]),
            selectedFile: e.target.files[0]
        })
    }
    render() {


        return (
            <Fragment>
                <PartProfile
                    changePicture={this.handleChangePicture}
                />
                <Footer />
            </Fragment>
        )
    }
}

export default Profile
