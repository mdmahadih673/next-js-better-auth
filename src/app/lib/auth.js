import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from "resend";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db();

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },

    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [user.email],
                subject: "Verify your email address",
                html: `
            <h2>Verify your email</h2>
            <p>Please click the button below to verify your email.</p>
            <a href="${url}">Verify Email</a>
        `,
            });

            console.log("RESEND DATA:", data);
            console.log("RESEND ERROR:", error);

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

    database: mongodbAdapter(db, {
        client,
    }),
});