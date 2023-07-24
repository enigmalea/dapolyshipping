import React from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const nominationsOpen = dayjs.unix(1693152000).format("LLLL");
const nominationsClose = dayjs.unix(1694275200).format("LLLL");
const signUpsOpen = dayjs.unix(1694361600).format("LLLL");
const signUpsClose = dayjs.unix(1695571200).format("LLLL");
const assignments = dayjs.unix(1695772800).format("LLLL");
const worksDue = dayjs.unix(1699203600).format("LLLL");
const worksRevealed = dayjs.unix(1699808400).format("LLLL");
const creatorsRevealed = dayjs.unix(1700413200).format("LLLL");

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