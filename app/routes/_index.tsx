import type { MetaFunction } from "@remix-run/node";
import "../styles/global.css";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import MobileHeader from "../components/MobileHeader";
import MobileDropdown from "../components/MobileDropdown";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "RapidTri" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [open, setOpen] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubble");
  return (
    <div className="outer-container">
      <MobileHeader open={open} setOpen={setOpen} />
      {(!open && (
        <div className="main-container">
          <SideBar algorithm={algorithm} setAlgorithm={setAlgorithm} />
          <Content />
        </div>
      )) || (
        <>
          <MobileDropdown algorithm={algorithm} setAlgorithm={setAlgorithm} />
        </>
      )}
    </div>
  );
}
