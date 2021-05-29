In this assignment let's build a **Authentication Functionality** App by
applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-output-v2.gif" alt="authentication-functionality-desktop-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details close>
<summary>Click to view the Design Files</summary>

- [Login Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-login-output.png)
- [Home Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-home-output-v2.png)
- [About Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-about-output-v2.png)
- [Not Found Route](https://assets.ccbp.in/frontend/content/react-js/authentication-functionality-lg-not-found-output.png)
</details>

### Project Set Up Instructions

<details close>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`

</details>

### Project Completion Instructions

<details close>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- When an unauthenticated user tries to access the `HomeRoute` or `AboutRoute`
  then the page should be redirected to the `LoginRoute`.
- When an authenticated user tries to access the `HomeRoute`, or `AboutRoute`
  then the page should be navigated to the respective route.
- When an authenticated user tries to access the `LoginRoute` then the page
  should be redirected to `HomeRoute`
- When the Logout button is clicked then the page should be navigated to the
  `LoginRoute`.
- When an undefined path is provided in the URL then the page should be
navigated to the `NotFoundRoute`
</details>

<details close>
<summary>Click to view the Example response</summary>

- Success response from the URL `https://apis.ccbp.in/login` will be

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

</details>

<details close>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of

  - `src/App.js`
  - `src/components/Login/index.js`
  - `src/components/Login/index.css`
  - `src/components/Header/index.js`
  - `src/components/Header/index.css`
  - `src/components/Home/index.js`
  - `src/components/Home/index.css`
  - `src/components/About/index.js`
  - `src/components/About/index.css`
  - `src/components/LogoutButton/index.js`
  - `src/components/LogoutButton/index.css`
  - `src/components/NotFound/index.js`
  - `src/components/NotFound/index.css`
  - `src/components/ProtectedRoute/index.js`

</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> - `HomeRoute` should consist of "/" in URL path
> - `LoginRoute` should consist of "/login" in URL path
> - `AboutRoute` should consist of "/about" in URL path
> - No need to use the `BrowserRouter` in `App.js` as we have already included
>   in `index.js`
> - As this assignment is mainly designed for Authentication Functionality and
>   does not contain any input fields, use the below sample credentials to login
>
>   - Sample credentials
>
>     ```
>      username: rahul
>      password: rahul@2021
>     ```
>
> </details>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
