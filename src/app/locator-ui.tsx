"use client";

import { useEffect } from "react";
import setupLocatorUI from "@locator/runtime";

export default function LocatorUI() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setupLocatorUI();
    }
  }, []);

  return null;
}
