module.exports = (app) => {
  const RED_LINE = '\x1b[31m%s\x1b[0m';

  if (!process.env.TOKEN) {
    console.error(RED_LINE, "You didn't specify the TOKEN\n");
    process.exit(1);
  }
};
