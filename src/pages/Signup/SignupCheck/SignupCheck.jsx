import React from 'react';
import SignupHeaderLayout from '../../../components/Layouts/SignupHeaderLayout/SignupHeaderLayout';
import SignupContainer from '../../../components/Containers/SignupContainer/SignupContainer';
import SignupBottomLayout from '../../../components/Layouts/SignupBottomLayout/SignupBottomLayout';

function SignupCheck(props) {
    return (
        <>
            <SignupHeaderLayout />
            <SignupContainer />
            <SignupBottomLayout />
        </>
    );
}

export default SignupCheck;