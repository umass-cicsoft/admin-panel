# CICSoft Admin Panel #

## Planned Features (as of February 6, 2023) ##

![20220930_204953](https://user-images.githubusercontent.com/20084950/216988402-6a73a6e0-dc36-4b7c-b340-5d0e64a0d8c1.png)

### 1. Member Management ###

- Get a list of members (applicants) filtered by status (accepted/undecided/waitlisted/rejected) with appropriate details (as columns)
- Get a list of members (applicants) filtered by inactivity (either graduation year passed or low attendance) with appropriate details (as columns)
- Update applicant statuses (accept/waitlist/reject) with ability to mass select applicants
- Notify (email) selected members (applicants) using predefined email templates or custom email template

### 2. Attendance Tracking ###

- Get a list of members/attendees with their attendance across sessions and tech hours
- Mark attendance for members and attendees alike

**NOTE: Attendees are defined as people who attend our sessions, but are not necessarily members. The attendance tracking should track for both attendees (including members) and members who are not attendees.**

## Technology Stack ##

- **React** (TypeScript): Ideal tooling for building web applications, especially in context of future projects. Usage of TypeScript ensures strong typing, with added work for creating custom typings for non-typed npm packages.
- **Firebase Cloud Functions** (TypeScript): CICapi is built on Flask, so we could either integrate it into this (monolith), or deploy as microservices. Using Firebase Functions allow us to not worry about deploying CICapi on ~~Heroku~~ Render anymore, while providing easier interfacing with Firebase Realtime Database.
- **Firebase Realtime Database** (Firebase): Currently, the members are stored on a Firebase Realtime Database instance.
