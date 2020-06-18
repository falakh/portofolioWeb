import React from "react";
import PortofolioProps from "../dataType/portofolio";

export function LinkIconComponent(portofolio: PortofolioProps) {
  var icon = [];
  if (portofolio.github != null) {
    icon.push(GitHubIconComponent(portofolio.github));
  }
  if (portofolio.link != null) {
    icon.push(PlayStoreIcon(portofolio.link));
  }
  return icon;
}

export function GitHubIconComponent(gitHubLink: string) {
  return (
    <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
      <img
        alt={gitHubLink}
        src="https://cdn.brandicons.org/icons/github.svg"
        width={32}
        height={32}
      />
    </a>
  );
}

export function PlayStoreIcon(playStoreLink: string) {
  return (
    <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
      <img
        alt={playStoreLink}
        src="https://img.icons8.com/ios-filled/50/000000/google-play.png"
        width={32}
        height={32}
      />{" "}
    </a>
  );
}
