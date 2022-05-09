{
  inputs.nixpkgs.url = "nixpkgs/nixos-21.11";

  outputs = { self, nixpkgs }:
  let
    system = "x86_64-linux";
    pkgs   = nixpkgs.legacyPackages.${system};
  in {
    devShell.${system} = pkgs.mkShell {
      nativeBuildInputs = with pkgs; [
        nodePackages.web-ext
      ];
    };
  };
}
