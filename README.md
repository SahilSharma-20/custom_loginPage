## Application Details

📋 Project Overview

This project is a custom SAP UI5 / Fiori application built as a prototype for demonstrating a login and password-reset flow with mock data.
It replicates the look-and-feel of the SAP Fiori Launchpad login page with a blurred background image and centered input fields.

**🚀 Features**

**_Login page_**

User authentication against mock JSON data
Simple credentials validation

**_Forgot-password flow_**

Collects User ID, Date of Birth, and registered email
Verifies user details and simulates sending an OTP

**_Reset-password flow_**

Verifies OTP (current password in mock data)
Allows user to set a new password (updates mock JSON model)

**_Navigation_**

Back button available on every sub-page
Navigates to a success page (“U DID IT”) after login or password reset

_**UI / UX**_

Replicates Fiori Launchpad-style blurred background image with ~70% opacity
Center-aligned login and reset forms
Simple, clean responsive design

**_Mock Data_**

Stored locally in /model/mockData.json
Contains user ID, password, email, and date of birth for testing

**🛠️ Tech Stack**

**_Frontend Framework:_** SAP UI5 (v1.140.0) with Fiori look-and-feel
**_Language:_** JavaScript (no TypeScript)
**_Views:_** XML Views (Main.view.xml, Success.view.xml)
**_Controllers:_** JS Controllers (Main.controller.js, Success.controller.js)
**_Data Binding:_** sap.ui.model.json.JSONModel for mock data
**_UI Components:_** sap.m controls (Page, VBox, Button, Input, DatePicker, etc.)
**_Routing:_** Configured in manifest.json for navigation between pages
**_Styling:_** Custom CSS in /webapp/css/style.css for background blur, layout, and button styling
**_Development Environment:_** SAP Business Application Studio (SAP BAS)


<img width="1366" height="607" alt="image" src="https://github.com/user-attachments/assets/0ad94165-1eec-49e1-9c25-4186a0a45392" />
<img width="1366" height="601" alt="image" src="https://github.com/user-attachments/assets/1c52cb7a-9ae7-482e-a6d0-10943b53c230" />
<img width="1364" height="513" alt="image" src="https://github.com/user-attachments/assets/60e92670-e6b1-4e3c-90d9-63d76cad7fac" />
<img width="1365" height="607" alt="image" src="https://github.com/user-attachments/assets/1eeb8846-9b33-46ae-9b84-321abbf1a31c" />
<img width="1363" height="505" alt="image" src="https://github.com/user-attachments/assets/83d61713-d32d-4059-8a3f-4640672ddbaf" />

|               |
| ------------- |
|**Generation Date and Time**<br>Tue Sep 30 2025 06:56:06 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.19.0|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>Basic|
|**Service Type**<br>None|
|**Service URL**<br>N/A|
|**Module Name**<br>login_page|
|**Application Title**<br>Custom Login Page|
|**Namespace**<br>log.pg|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.140.0|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## login_page

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


