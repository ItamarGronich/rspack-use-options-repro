function wait() {
    return new Promise((resolve) => setTimeout(() => resolve('done'), 0));
}

export async function bundleMain() {
    const start = Date.now();
    const message = await wait();
    const end = Date.now();
    return `Waited for ${end - start}ms and got message: ${message}`;
}
