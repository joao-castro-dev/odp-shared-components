import React, { useEffect, useRef } from "react";

import Icons from "../Icons";

import { Modal as FSModal, IconButton, ModalBody } from "@faststore/ui";

import { ModalProps } from "./ModalTypes";
import styles from "./Modal.module.scss";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeButtonColor,
  shouldShowCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`${styles.modal__overlay}`}>
      <FSModal>
        {() => (
          <ModalBody>
            <div className={`${styles.modal__content}`} ref={modalRef}>
              {shouldShowCloseButton && (
                <IconButton
                  icon={
                    <Icons
                      icon="close"
                      data-fs-menu-icon
                      data-icon="closeIcon"
                      className={styles.close__modal}
                      color={closeButtonColor ? closeButtonColor : "#fff"}
                    />
                  }
                  aria-label="Close Modal"
                  onClick={onClose}
                  className={`${styles.modal__close__button}`}
                />
              )}
              {children}
            </div>
          </ModalBody>
        )}
      </FSModal>
    </div>
  );
};

export { Modal };
