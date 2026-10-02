import React, { Suspense } from 'react';
import ResetPasswordFrom from './reset-password-from';

const page = () => {
    return (
        <div>
            <h1>Reset Password</h1>
            <Suspense fallback="Loading...">
                <ResetPasswordFrom />
            </Suspense>
        </div>
    );
};

export default page;