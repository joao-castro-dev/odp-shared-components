import React from "react";
import styles from "./ContactUs.module.scss";
import draftToHtml from "draftjs-to-html";
import type { RawDraftContentState } from "draft-js";
import { Link } from "@faststore/ui";

import { ContactUsItem, ContactUsProps } from "./ContactUsTypes";
import Button from "../../../Button";

export function ContactUs({
  variation = "desktop",
  contactUs,
}: ContactUsProps) {
  if (!contactUs) return null;

  return (
    <>
      <div className={styles.contactUs__gapCloser} />
      <aside className={`${styles.contactUs__wrapper} ${styles[variation]}`}>
        {contactUs.map((section: ContactUsItem, i: number) => {
          const parsedContent = JSON.parse(
            section.richText
          ) as RawDraftContentState;

          return (
            <>
              <section key={section.title} data-testid="fs-contactUs-section">
                <header data-fs-contactUs-subheader>{section.title}</header>
                <div
                  className={styles.contactUs__richText}
                  dangerouslySetInnerHTML={{
                    __html: draftToHtml(parsedContent),
                  }}
                />
                <Link
                  data-fs-contactUs-link
                  href={section.buttonLink}
                  data-testid="fs-contactUs-link"
                  target="_blank"
                >
                  <Button variant="primary">{section.buttonText}</Button>
                </Link>
              </section>
              {i !== contactUs.length - 1 && <hr data-fs-contactUs-divider />}
            </>
          );
        })}
      </aside>
    </>
  );
}
