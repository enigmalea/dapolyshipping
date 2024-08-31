import React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const nominationsOpen = dayjs.unix(1725206400).format("LLLL");
const nominationsClose = dayjs.unix(1725811200).format("LLLL");
const signUpsOpen = dayjs.unix(1725811200).format("LLLL");
const signUpsClose = dayjs.unix(1727020800).format("LLLL");
const assignments = dayjs.unix(1727222400).format("LLLL");
const worksDue = dayjs.unix(1731862800).format("LLLL");
const worksRevealed = dayjs.unix(1732467600).format("LLLL");
const creatorsRevealed = dayjs.unix(1733072400).format("LLLL");

export default function Schedule() {
  return (
    <ul>
      <li>
        <strong>Nominations Open: </strong> {nominationsOpen}
      </li>
      <li>
        <strong>Nominations Close: </strong> {nominationsClose}
      </li>
      <li>
        <strong>Sign-Ups Open: </strong> {signUpsOpen}
      </li>
      <li>
        <strong>Sign-Ups Close: </strong> {signUpsClose}
      </li>
      <li>
        <strong>Assignments Out: </strong> {assignments} (or earlier!)
      </li>
      <li>
        <strong>Works Due: </strong> {worksDue}
      </li>
      <li>
        <strong>Works Revealed: </strong> {worksRevealed}
      </li>
      <li>
        <strong>Creators Revealed: </strong> {creatorsRevealed}
      </li>
    </ul>
  );
}

function SignUpsOpen() {
  return <code>{signUpsOpen}</code>;
}

function SignUpsDate() {
  return <code>{signUpsClose}</code>;
}

function AssignmentsDate() {
  return <code>{assignments}</code>;
}

function DueDate() {
  return <code>{worksDue}</code>;
}

function RevealsDate() {
  return <code>{worksRevealed}</code>;
}

function CreatorsDate() {
  return <code>{creatorsRevealed}</code>;
}

export {
  SignUpsOpen,
  SignUpsDate,
  AssignmentsDate,
  DueDate,
  RevealsDate,
  CreatorsDate,
};
