# Doctor's Appointment Booking System

This is a CRUD (Create, Read, Update, Delete) application built with MERN. The system allows users to create an account, book appointments with their preferred doctor, and leave reviews for the doctors. Doctors, on the other hand, can create profiles showcasing their experience, specialization, and availability for appointments. Once a doctor sets up their profile, they can log in to manage their appointments.
# Features

    User Authentication: Supports secure user authentication using JWT (JSON Web Tokens). Users and doctors can securely log in with multiple devices, and logging out on one device does not affect their session on other devices.

    Authorization: Implements role-based authorization to ensure that only authenticated users and doctors can access their respective functionalities.

    Profile Management: Users can upload a profile picture, and doctors can showcase their experience, specialization, and availability for appointments.

    Appointment Booking: Users can book appointments with their preferred doctors and view/manage their upcoming appointments.

    Review System: Users can leave reviews for doctors, allowing others to make informed decisions when choosing a doctor.

# Technology Stack
## Backend

    Node.js/Express: Handles server-side logic and provides RESTful APIs for frontend interaction.
    MongoDB: Utilized as the database to store user accounts, doctor profiles, appointments, and reviews.
    JWT (JSON Web Tokens): Implements authentication and authorization mechanisms using access tokens and refresh tokens.
    Firebase: Stores user profile pictures for improved user experience.

## Frontend


    React: Builds the user interface to interact with the backend APIs.
    React Router: Provides route protection and navigation within the application.
    Redux: Manages session data such as user profiles and authentication status.
    Axios and React Query: Efficiently consume backend APIs for seamless data retrieval and manipulation.
    Tailwind CSS: Utilized for styling and enhancing the overall user experience.

