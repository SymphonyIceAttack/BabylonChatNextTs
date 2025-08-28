{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.biome
  ];

  # https://devenv.sh/tasks/
  tasks = {
    "pnpm:install" = {
      exec = "pnpm i";
      after = [ "devenv:enterShell" ];
    };
  };

  # https://devenv.sh/git-hooks/
  git-hooks.hooks.biome = {
    enable = true;
    settings = {
      binPath = "./node_modules/.bin/biome";
    };
  };

  # See full reference at https://devenv.sh/reference/options/
}
