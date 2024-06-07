This is a doctor's appointment booking system. Users can create an account, book an appointment with their preferred doctor and leave a review of the doctor. Doctors can also create their profile, show their experience, specilization and days when they're open to take appointments. Once a doctor sets up their profile, they can log in to see and manage their list of appointments.  

The system is built with Node.js/Express and MongoDB for the server and database and React, tailwindCSS for the frontend. It supports multiple logins i.e users and doctors can securely login with multiple devices and log out on one device without affecting their session on the other device. All athorization and authentication is implemented using JWT - accessToken and refreshToken. The accessToken for verify user identity and refreshToken for enabling isssuance of new accessToken once the first one expires. The refreshToken is stored in httpOnly cookie for improved security. The accessToken is stored in memory/session and accessed in the frontend for authorization. Firebase is used to store the users profile picture.

The frontend is built with react and users react-router-dom for route protection and redux to store session data such as username and profile.Axios and react tanstack query to consume the backend api effieciently.