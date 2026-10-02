'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { resetPassword } from "@/app/lib/auth-client";

const ResetPasswordFrom = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const handelResetPassword = async (e) => {
        e.preventDefault();
        if (!token) {
            toast.error("This password reset link is invalid or has expired.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { error } = await resetPassword({
            newPassword: userData.password,
            token: token,
        });

        if (error) {
            toast.error(error.message || "Unable to reset your password.");
            return;
        }

        toast.success("Password reset successfully! You can now log in with your new password.");
    };
    return (
        <div>
            <Form className="flex w-96 m-18 flex-col gap-4" onSubmit={handelResetPassword}>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ResetPasswordFrom;