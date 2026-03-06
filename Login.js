exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { password } = JSON.parse(event.body);

    // Replace this with the password you actually want to use!
    const mySecurePassword = "ExchangeAdmin2026!";

    if (password === mySecurePassword) {
        return {
            statusCode: 200,
            headers: {
                // Set a secure cookie that expires in 8 hours (28800 seconds)
                "Set-Cookie": "auth_token=verified_user_token; Path=/; HttpOnly; Secure; Max-Age=28800",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ success: true })
        };
    }

    // Wrong password
    return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Invalid password" })
    };
};