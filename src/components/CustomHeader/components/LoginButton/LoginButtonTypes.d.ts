export interface LoginButtonProps {
  loginData: {
    loginText: string;
    loginButton: {
      link: string;
      text: string;
    };
    registerText: string;
    listLinks: LinksList[];
    mobileLogo: string;
    loggedOptions: LinksList[];
  };
  person: unknown;
}
export interface LinksList {
  link: string;
  text: string;
}
