const Footer = () => {
  return (
    <>
      <footer className="flex flex-row flex-wrap justify-between p-8 w-full">
        <span className="uppercase">
          <a href="https://github.com/tapris-bot/tapris">Github</a> / {""}
          <a href="https://discord.com/api/oauth2/authorize?client_id=869088074758520832&scope=bot+applications.commands&permissions=294208515334">
            Invite
          </a>{" "}
          / {""}
          <a href="https://discord.gg/TwtSs7NY9t">Discord Server</a>
        </span>
        Copyright © 2023 Alexiy Rybin
      </footer>
    </>
  );
};

export default Footer;
