"use client";

import { signIn } from "@/app/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {

    const hendelGithubSignIn = async () => {
        const resData = await signIn.social({
            provider: "github",
        });
    };

    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        const { data: resData, error } = await signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/'
        })

    };

    return (
        <main className="relative isolate flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.22),_transparent_55%)]" />
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur sm:grid-cols-2">
                <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-10 sm:flex lg:p-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-white/10" />
                    <Link href="/" className="relative text-lg font-bold tracking-wide text-white">ACME</Link>
                    <div className="relative max-w-sm">
                        <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-100">
                            YOUR WORKSPACE, READY
                        </span>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                            Good to have you back.
                        </h1>
                        <p className="mt-5 text-base leading-7 text-blue-100/80">
                            Sign in to pick up where you left off and keep your work moving.
                        </p>
                    </div>
                    <p className="relative text-sm text-blue-100/60">Simple, secure access to everything you need.</p>
                </section>

                <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                    <Form className="flex w-full max-w-md flex-col gap-5" onSubmit={onSubmit}>
                        <div className="mb-1">
                            <p className="text-sm font-medium text-blue-400 sm:hidden">ACME</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Sign in</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Enter your details to access your account.
                            </p>
                        </div>

                        <TextField
                            className="w-full"
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >
                            <Label className="text-sm font-medium text-slate-200">Email address</Label>
                            <Input className="w-full" placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            className="w-full"
                            name="password"
                            isRequired
                            minLength={8}
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
                            <Label className="text-sm font-medium text-slate-200">Password</Label>
                            <InputGroup className="w-full">
                                <InputGroup.Input
                                    name="password"
                                    className="w-full"
                                    type={isVisible ? "text" : "password"}
                                />
                                <InputGroup.Suffix className="pe-0">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <Description className="text-xs text-slate-400">
                                At least 8 characters, including 1 uppercase letter and 1 number.
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="flex flex-col items-center justify-between gap-3 pt-1">
                            <Button
                                className="min-h-11 w-full flex-1 rounded-xl bg-blue-600 font-medium text-white transition hover:bg-blue-500"
                                type="submit"
                            >
                                <Check />
                                Sign in
                            </Button>
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                                <span className="text-slate-500">
                                    Forgot your password?
                                </span>

                                <Link
                                    href="/forgot-password"
                                    className="group inline-flex items-center gap-1 font-medium text-blue-400 transition-all duration-300 hover:text-blue-300"
                                >
                                    Reset it
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
                            <span className="h-px flex-1 bg-white/10" />
                            or continue with
                            <span className="h-px flex-1 bg-white/10" />
                        </div>
                        <Button
                            className="min-h-11 w-full rounded-xl border border-white/10 bg-white/5 font-medium text-slate-200 transition hover:bg-white/10"
                            onClick={hendelGithubSignIn}
                        >
                            Sign in with GitHub
                        </Button>
                        <p className="pt-1 text-center text-sm text-slate-400">
                            Don&apos;t have an account?{" "}
                            <Link className="font-medium text-blue-400 hover:text-blue-300" href="/sign-up">
                                Create account
                            </Link>
                        </p>
                    </Form>


                </section>
            </div>
        </main>
    );
}