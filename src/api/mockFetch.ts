export interface MockResponse<T> {
    ok: boolean;
    status: number;
    json: () => Promise<T>;
}

export interface LoginResponse {
    token: string;
    user: {
        email: string;
        name: string;
    };
}

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mocks the global fetch API for the login endpoint.
 * Simulations:
 * - Network latency (500ms - 1500ms)
 * - 401 Unauthorized for wrong credentials
 * - 400 Bad Request for invalid email format (backend validation simulation)
 * - 500 Network Error (random 5% chance)
 */
// Simple in-memory mock database
const registeredUsers: Record<string, { password: string; name: string }> = {};

export async function mockFetch(url: string, options: RequestInit): Promise<MockResponse<any>> {
    const latency = 500 + Math.random() * 1000;
    await delay(latency);

    if (Math.random() < 0.05) throw new Error("Network Error: Failed to fetch");

    if (url === '/api/login' && options.method === 'POST') {
        const { email, password } = JSON.parse(options.body as string);

        if (!email || !email.includes('@')) {
            return { ok: false, status: 400, json: async () => ({ message: "Invalid email format" }) };
        }

        // Check against "DB" first, then fallback to hardcoded demo user
        const storedUser = registeredUsers[email];

        if ((storedUser && storedUser.password === password) || (!storedUser && password === 'password')) {
            return {
                ok: true,
                status: 200,
                json: async () => ({
                    token: "fake-jwt-token-123456",
                    user: {
                        email,
                        name: storedUser ? storedUser.name : "Martian User"
                    }
                })
            };
        }

        return { ok: false, status: 401, json: async () => ({ message: "Invalid credentials" }) };
    }

    if (url === '/api/join' && options.method === 'POST') {
        const { email, fullName, password } = JSON.parse(options.body as string);

        if (!email || !email.includes('@')) {
            return { ok: false, status: 400, json: async () => ({ message: "Invalid email format" }) };
        }
        if (!fullName) {
            return { ok: false, status: 400, json: async () => ({ message: "Full name is required" }) };
        }
        if (!password || password.length < 8) {
            return { ok: false, status: 400, json: async () => ({ message: "Password must be at least 8 characters" }) };
        }

        // Save to "DB"
        registeredUsers[email] = { password, name: fullName };

        return {
            ok: true,
            status: 201,
            json: async () => ({
                token: "fake-jwt-token-joined-789",
                user: { email, name: fullName }
            })
        };
    }

    return {
        ok: false,
        status: 404,
        json: async () => ({ message: "Not Found" })
    };
}
