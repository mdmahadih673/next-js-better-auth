import React, { Suspense } from 'react';
import ResetPasswordFrom from './reset-password-from';

const page = () => {
    return (
        <Suspense
            fallback={
                <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-950 px-4 text-slate-300">
                    Loading password reset form...
                </main>
            }
        >
                <ResetPasswordFrom />
        </Suspense>
    );
};

export default page;