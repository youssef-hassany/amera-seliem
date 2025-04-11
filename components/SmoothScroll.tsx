"use client";

import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function SmoothScroll() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return null;
}
