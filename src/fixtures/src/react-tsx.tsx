type AppProps = { message: string };
export function App({ message }: AppProps): JSX.Element {
    return <h1>Hello {message}</h1>;
}
