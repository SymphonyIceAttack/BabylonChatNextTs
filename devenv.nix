{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  dotenv.enable = true;
  # https://devenv.sh/packages/
  packages = [
    pkgs.git
  ];

  # https://devenv.sh/tasks/
  tasks = {
    "pnpm:install" = {
      exec = "pnpm i";
      after = [ "devenv:enterShell" ];
    };
  };

  # https://devenv.sh/git-hooks/

  # See full reference at https://devenv.sh/reference/options/
}
