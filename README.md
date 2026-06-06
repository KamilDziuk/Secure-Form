# Contact Form Implementation and Maintenance

## Project Overview

This repository contains work performed after taking over maintenance and further development of an existing website built with React, Vite, and TypeScript.

The main goal of this task was to design, implement, and secure a contact form while maintaining consistency with the existing user interface and user experience of the website.

## Implemented Features

### Frontend

A fully responsive contact form was added with the following fields:

* First Name
* Last Name
* Phone Number
* Email Address
* Message

The form was integrated into the existing design system to ensure a consistent user experience across the website.

### Form Validation

Client-side validation was implemented using:

* React Hook Form
* Zod
* @hookform/resolvers

Validation rules include:

* Required field validation
* Email format validation
* Minimum and maximum character limits
* Message length restrictions
* Phone number length validation

All validation errors are displayed directly below the corresponding form fields.

### Form Submission

Form data is submitted asynchronously using Axios.

Features:

* Prevents page reload during submission
* Displays submission state ("Sending...")
* Automatically resets the form after successful submission
* Handles request errors gracefully

## Backend Implementation

A dedicated PHP endpoint (`form.php`) was created to process form submissions.

Server-side validation includes:

* Verification that all required fields are present
* Email format validation using `FILTER_VALIDATE_EMAIL`
* Input sanitization using `trim()`
* JSON request handling
* JSON response generation

This additional validation layer ensures that requests bypassing frontend validation are still verified before processing.

## Security Considerations

Several security measures were implemented:

* Frontend validation using Zod
* Backend validation using PHP
* Email format verification
* Required field verification
* Sanitization of incoming data
* Controlled request handling through JSON payloads
* Error handling with appropriate HTTP status codes

The dual validation approach helps protect the application against invalid or malformed submissions.

## Technologies Used

### Frontend

* React
* TypeScript
* Vite
* React Hook Form
* Zod
* Axios
* Tailwind CSS

### Backend

* PHP
* JSON API
* PHP mail()

## Project Structure

```text
src/
├── comps/
│   └── Form/
│       ├── Form.tsx
│       ├── contactSchema.ts
│       └── formBehavior.ts

server/
└── src/
    └── form.php
```

## Responsibilities

After taking ownership of this project, the following tasks were completed:

* Maintenance of the existing codebase
* Contact form implementation
* Frontend and backend validation
* UX alignment with the existing website
* Security improvements
* API communication setup
* Error handling implementation
* Form submission workflow development

## Demo 
[sensualbeauty.pl/kontakt](https://sensualbeauty.pl/kontakt)
