export const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
};
