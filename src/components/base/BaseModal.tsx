import React from "react";
import { Modal } from "react-native";

type Props = {
  isOpen?: boolean;
  title?: string;
  children?: React.ReactNode;
  handleClose: () => void;
};

export const BaseModal: React.FC<Props> = (props) => {
  return <Modal></Modal>;
};
