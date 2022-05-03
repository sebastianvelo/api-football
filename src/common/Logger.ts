const bgColors = {
    n: "",
    reset: "\x1b[0m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m"
};

const textColors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

const logAndReset = (message: any) => {
    console.log(`${message}${bgColors.reset}`)
}

const log = (message: any, color: keyof typeof textColors, bgColor: keyof typeof bgColors) => {
    logAndReset(`${textColors[color]}${bgColors[bgColor]}${message}`)
}

export const logTitle = (message: any) => {
    log(message, "yellow", "n");
};

export const logSubtitle = (message: any) => {
    log(message, "blue", "n");
};

export const logInfo = (message: any) => {
    log(message, "cyan", "n");
};

export const logAccent = (message: any) => {
    log(message, "magenta", "n");
}