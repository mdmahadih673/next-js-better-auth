"use client";
import { requestPasswordReset } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";


const ForgotPasswordPage = () => {
    const handelForgotPassword = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const resData = await requestPasswordReset({
            email: userData.email,
            redirectTo: "http://localhost:3000/reset-password"
        });

        console.log("RESET PASSWORD RESPONSE:", resData);

    }

    return (
        <div>
            <h1>Forgot Password</h1>

            <Form className="flex w-96 flex-col gap-4" onSubmit={handelForgotPassword}>
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

export default ForgotPasswordPage;