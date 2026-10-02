import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from "resend";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db();

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,

        sendResetPassword: async ({ user, url }) => {
            console.log("🔐 RESET USER:", user.email);
            console.log("🔗 RESET URL:", url);

            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [user.email],
                subject: "Reset your password",
                html: `
                    <h2>Reset your password</h2>

                    <p>
                        Click the button below to reset your password.
                    </p>

                    <p>
                        <a href="${url}">
                            Reset Password
                        </a>
                    </p>
                `,
            });

            console.log("📨 RESET EMAIL DATA:", data);
            console.log("❌ RESET EMAIL ERROR:", error);

            if (error) {
                throw new Error(error.message);
            }
        },
    },

    // IMPORTANT:
    // emailVerification is TOP LEVEL
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            console.log("📧 VERIFICATION USER:", user.email);
            console.log("🔗 VERIFICATION URL:", url);

            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [user.email],
                subject: "Verify your email address",
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 30px;">
                        <h2>Verify your email</h2>

                        <p>
                            Thanks for signing up!
                            Please verify your email address by clicking
                            the button below.
                        </p>

                        <a
                            href="${url}"
                            style="
                                display: inline-block;
                                padding: 12px 20px;
                                background: #2563eb;
                                color: white;
                                text-decoration: none;
                                border-radius: 6px;
                            "
                        >
                            Verify Email
                        </a>

                        <p style="margin-top: 20px; color: #666;">
                            If you didn't create this account, you can ignore
                            this email.
                        </p>
                    </div>
                `,
            });

            console.log("📨 VERIFICATION EMAIL DATA:", data);
            console.log("❌ VERIFICATION EMAIL ERROR:", error);

            if (error) {
                throw new Error(error.message);
            }
        },

        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        expiresIn: 3600,
    },

    user: {
        additionalFields: {
            bio: {
                type: "string",
                required: false,
                input: true,
                returned: true,
            },
        },
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },

        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});