import React from "react";
import { theme, Icon, IconProps } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { css } from "@emotion/react";

export const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const customTheme = {
  ...theme,
  styles: {
    global: {
      // This app will be dark by default for now
      // both modes will be the same
      "html, body": {
        color: theme.colors.whiteAlpha[900],
        bg: theme.colors.gray[800],
        borderColor: theme.colors.whiteAlpha[300],
        placeholderColor: theme.colors.whiteAlpha[400],
        fontFamily: "Montserrat, sans-serif",
      },
    },
  },
};

// ICONS !
export const Layout4Icon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
    />
  </Icon>
);

export const Layout3Icon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M0 2.5A1.5 1.5 0 0 1 1.5 1h13A1.5 1.5 0 0 1 16 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-11zM1.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-13z"
      />
      <path fillRule="evenodd" d="M5 15V1h1v14H5zm5 0V1h1v14h-1z" />
    </g>
  </Icon>
);

export const Layout2Icon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
      />
      <path fillRule="evenodd" d="M7.5 14V2h1v12h-1z" />
    </g>
  </Icon>
);

export const HomeSolidIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z"
    />
  </Icon>
);

export const HomeOutlineIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"
    />
  </Icon>
);

export const TrendingSolidIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z" />
    </g>
  </Icon>
);

export const TrendingOutlineIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z" />
    </g>
  </Icon>
);

export const PlusSquareIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M5,21h14c1.104,0,2-0.896,2-2V5c0-1.104-0.896-2-2-2H5C3.896,3,3,3.896,3,5v14C3,20.104,3.896,21,5,21z M7,11h4V7h2v4h4v2 h-4v4h-2v-4H7V11z"></path>
    </g>
  </Icon>
);

export const PinnedSolidIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3z" />
    </g>
  </Icon>
);

export const PinnedOutlineIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3h12zM9 5v6.606L7.404 14h9.192L15 11.606V5H9z" />
    </g>
  </Icon>
);

export const ProfileSolidIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
    </g>
  </Icon>
);

export const ProfileOutlineIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
      />
    </g>
  </Icon>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M11,6.914V2.586L6.293,7.293l-3.774,3.774l3.841,3.201L11,18.135V13.9c8.146-0.614,11,4.1,11,4.1 c0-2.937-0.242-5.985-2.551-8.293C16.765,7.022,12.878,6.832,11,6.914z"></path>
    </g>
  </Icon>
);
