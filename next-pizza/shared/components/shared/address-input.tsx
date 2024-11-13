"use client"

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="a02eadfe0b7c3e6d4c7a47e8fe52a5ba5a33eb96"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
