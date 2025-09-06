import dayjs from "dayjs";
import exchange from "../config/exchange.json";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const nominationsOpen = dayjs.unix(exchange.nominationsOpen).format("LLLL");
const nominationsClose = dayjs.unix(exchange.nominationsClose).format("LLLL");
const signUpsOpen = dayjs.unix(exchange.signUpsOpen).format("LLLL");
const signUpsClose = dayjs.unix(exchange.signUpsClose).format("LLLL");
const assignments = dayjs.unix(exchange.assignments).format("LLLL");
const worksDue = dayjs.unix(exchange.worksDue).format("LLLL");
const worksRevealed = dayjs.unix(exchange.worksRevealed).format("LLLL");
const creatorsRevealed = dayjs.unix(exchange.creatorsRevealed).format("LLLL");

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

export { SignUpsDate, AssignmentsDate, DueDate, RevealsDate, CreatorsDate };
