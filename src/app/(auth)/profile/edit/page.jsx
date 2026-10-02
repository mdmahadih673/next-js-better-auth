"use client";

import {FloppyDisk} from "@gravity-ui/icons";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const shell =
  "w-full rounded-2xl border border-gray-800 bg-gray-900/90 p-6 shadow-2xl shadow-black/20 sm:p-8";

const field =
  "rounded-xl border border-gray-700 bg-gray-950 text-white shadow-sm transition-[box-shadow,border-color] placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500/30";

export default function EditProfilePage() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white sm:py-14">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <Link
            href="/profile"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            ← Back to profile
          </Link>
          <div className="mt-6">
            <p className="text-sm font-medium text-blue-400">ACCOUNT SETTINGS</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Edit your profile
            </h1>
            <p className="mt-2 text-gray-400">
              Keep your personal information up to date.
            </p>
          </div>
        </div>

        <Form className="w-full" onSubmit={onSubmit}>
          <Fieldset className={shell}>
            <Fieldset.Legend className="text-lg font-semibold text-white">
              Profile information
            </Fieldset.Legend>
            <Description className="mb-6 text-gray-400">
              Update the details displayed on your profile.
            </Description>
            <FieldGroup className="gap-5">
              <TextField
                isRequired
                name="name"
                defaultValue="Md. Mahadi Hasan"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }

                  return null;
                }}
              >
                <Label className="text-gray-200">Full name</Label>
                <Input className={field} placeholder="Your name" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                name="email"
                type="email"
                defaultValue="mahadi@example.com"
              >
                <Label className="text-gray-200">Email address</Label>
                <Input className={field} placeholder="you@example.com" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                name="bio"
                defaultValue="I am a passionate web developer who loves building modern, responsive and user-friendly web applications using React, Next.js and TypeScript."
                validate={(value) => {
                  if (value.length < 10) {
                    return "Bio must be at least 10 characters";
                  }

                  return null;
                }}
              >
                <Label className="text-gray-200">About me</Label>
                <TextArea className={field} placeholder="Tell us about yourself..." />
                <Description className="text-gray-500">
                  Share a short introduction (at least 10 characters).
                </Description>
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions className="mt-7 border-t border-gray-800 pt-5">
              <Button type="submit" color="primary">
                <FloppyDisk />
                Save changes
              </Button>
              <Button type="reset" variant="secondary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </main>
  );
}