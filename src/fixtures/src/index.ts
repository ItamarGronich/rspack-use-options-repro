interface Greeter {
    message: string;
}

export const greet = (g: Greeter): string => `Hello, ${g.message}`;
export const result: string = greet({ message: 'World' });
