'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { resetPassword } from "@/app/lib/auth-client";
import Link from "next/link";

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
        <main className="relative isolate flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.22),_transparent_55%)]" />
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur sm:min-h-[520px] sm:grid-cols-2">
                <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-10 sm:flex lg:p-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-white/10" />
                    <Link href="/" className="relative text-lg font-bold tracking-wide text-white">ACME</Link>
                    <div className="relative max-w-sm">
                        <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-100">
                            ACCOUNT SECURITY
                        </span>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                            A fresh start for your account.
                        </h1>
                        <p className="mt-5 text-base leading-7 text-blue-100/80">
                            Choose a strong password to secure your account and get back to what matters.
                        </p>
                    </div>
                    <p className="relative text-sm text-blue-100/60">Your account, protected.</p>
                </section>

                <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                    <Form className="flex w-full max-w-md flex-col gap-5" onSubmit={handelResetPassword}>
                        <div className="mb-1">
                            <p className="text-sm font-medium text-blue-400 sm:hidden">ACME</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Reset password</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Create a new password for your account.
                            </p>
                        </div>

                        <TextField
                            className="w-full"
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
                            <Label className="text-sm font-medium text-slate-200">New password</Label>
                            <Input className="w-full" placeholder="Enter your new password" />
                            <Description className="text-xs text-slate-400">
                                At least 8 characters, including 1 uppercase letter and 1 number.
                            </Description>
                            <FieldError />
                        </TextField>

                        <Button
                            className="min-h-11 w-full rounded-xl bg-blue-600 font-medium text-white transition hover:bg-blue-500"
                            type="submit"
                        >
                            <Check />
                            Save new password
                        </Button>
                        <p className="pt-1 text-center text-sm text-slate-400">
                            Remembered your password?{" "}
                            <Link className="font-medium text-blue-400 hover:text-blue-300" href="/sign-in">
                                Sign in
                            </Link>
                        </p>
                    </Form>
                </section>
            </div>
        </main>
    );
};

export default ResetPasswordFrom;