"use client";

import { signIn } from "@/app/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

export default function SignInPage() {

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
        <Form className="flex w-96 m-18 flex-col gap-4" onSubmit={onSubmit}>

            <TextField
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
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </TextField>

            <TextField className="w-full max-w-[280px]" name="password" isRequired  minLength={8}>
                
                <Label>Password</Label>
                <InputGroup>
                    <InputGroup.Input
                        name="password"
                        className="w-full max-w-[280px]"
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
    );
}