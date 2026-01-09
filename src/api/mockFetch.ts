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
export async function mockFetch(url: string, options: RequestInit): Promise<MockResponse<any>> {
    // Simulate network latency
    const latency = 500 + Math.random() * 1000;
    await delay(latency);

    // Random network failure (5% chance)
    if (Math.random() < 0.05) {
        throw new Error("Network Error: Failed to fetch");
    }

    if (url === '/api/login' && options.method === 'POST') {
        const body = JSON.parse(options.body as string);
        const { email, password } = body;

        // Backend validation simulation
        if (!email || !email.includes('@')) {
            return {
                ok: false,
                status: 400,
                json: async () => ({ message: "Invalid email format" })
            };
        }

        // Success path (Hardcoded for demo)
        if (password === 'password') {
            return {
                ok: true,
                status: 200,
                json: async () => ({
                    token: "fake-jwt-token-123456",
                    user: {
                        email,
                        name: "Martian User"
                    }
                })
            };
        }

        // Auth failure
        return {
            ok: false,
            status: 401,
            json: async () => ({ message: "Invalid credentials" })
        };
    }

    return {
        ok: false,
        status: 404,
        json: async () => ({ message: "Not Found" })
    };
}
