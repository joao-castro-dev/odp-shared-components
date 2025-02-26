import { LinksList } from "./LoginButtonTypes";
import styles from "./login.module.scss";

export default function LoggedButton({
  LoggedButtonProps,
}: {
  LoggedButtonProps: LinksList[];
}) {
  return (
    <div className={styles.loginButton__listLinksContainer}>
      {LoggedButtonProps?.map((item: LinksList, index: number) => (
        <a href={item.link} aria-label={`link to ${item.text}`} key={index}>
          <div className={styles.loginButton__listLink}>{item.text}</div>
        </a>
      ))}
    </div>
  );
}
