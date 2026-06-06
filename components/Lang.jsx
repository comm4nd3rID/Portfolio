// components/Lang.jsx (optional - for backward compatibility)
"use client";
import { useLang } from "./LangProvider";
import HomePage from "../app/page";

const Lang = () => {
  const { currentLang } = useLang();
  return <HomePage currentLang={currentLang} />;
};

export default Lang;