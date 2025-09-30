sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("log.pg.loginpage.controller.Main", {

        // ---------------- Helper to clear all fields ----------------
        _clearFields: function () {
            // Login section
            this.byId("userIdInput").setValue("");
            this.byId("passwordInput").setValue("");

            // Forgot password verification
            this.byId("fpUserId").setValue("");
            this.byId("fpDob").setValue(null);
            this.byId("fpEmail").setValue("");

            // Reset password section
            this.byId("currentOtp").setValue("");
            this.byId("newPassword").setValue("");
            this.byId("retypePassword").setValue("");
        },

        // ---------------- Login ----------------
        onLogin: function () {
            var oUserId = this.byId("userIdInput").getValue().trim();
            var oPass = this.byId("passwordInput").getValue();

            if (!oUserId || !oPass) {
                MessageToast.show("Please enter your User ID and Password");
                return;
            }

            var oModel = this.getView().getModel("mockData");
            var aUsers = oModel.getProperty("/users");

            var bValid = aUsers.some(function (u) {
                return u.userId === oUserId && u.password === oPass;
            });

            if (bValid) {
                MessageToast.show("Login Successful");
                this._clearFields();
                this.getOwnerComponent().getRouter().navTo("Success");
            } else {
                MessageBox.error("Invalid User ID or Password");
            }
        },

        // ---------------- Forgot Password ----------------
        onForgotPassword: function () {
            this.byId("loginSection").setVisible(false);
            this.byId("forgotSection").setVisible(true);
            this.byId("resetSection").setVisible(false);
            this.byId("backButton").setVisible(true); // show on forgot/reset
        },

        // ---------------- Back Button ----------------
        onBackToLogin: function () {
            this.byId("loginSection").setVisible(true);
            this.byId("forgotSection").setVisible(false);
            this.byId("resetSection").setVisible(false);
            this.byId("backButton").setVisible(false); // hide on login page
        },
        // ---------------- Forgot Password - Verify User ----------------
        onProceedVerification: function () {
            var sUser = this.byId("fpUserId").getValue().trim();
            var oDate = this.byId("fpDob").getDateValue();
            var sEmail = this.byId("fpEmail").getValue().trim();

            if (!sUser || !oDate || !sEmail) {
                MessageToast.show("All fields are mandatory");
                return;
            }

            var sDob = oDate.getFullYear() + "-" +
                       String(oDate.getMonth() + 1).padStart(2, "0") + "-" +
                       String(oDate.getDate()).padStart(2, "0");

            var oModel = this.getView().getModel("mockData");
            var aUsers = oModel.getProperty("/users");

            var oUser = aUsers.find(function (u) {
                return u.userId === sUser && u.email === sEmail && u.dob === sDob;
            });

            if (!oUser) {
                MessageBox.error("User details do not match");
                return;
            }

            // Generate OTP (simulate email)
            var sOtp = Math.floor(100000 + Math.random() * 900000).toString();
            oModel.setProperty("/otp", sOtp);
            MessageToast.show("OTP sent to registered email (" + sEmail + ")");
            console.log("Simulated OTP:", sOtp);

            this.byId("forgotSection").setVisible(false);
            this.byId("resetSection").setVisible(true);
            this.byId("backButton").setVisible(true); // keep it visible
        },

        // ---------------- Reset Password & Login ----------------
        onResetLogin: function () {
            var sOtpInput = this.byId("currentOtp").getValue().trim();
            var sNewPass = this.byId("newPassword").getValue();
            var sRetype = this.byId("retypePassword").getValue();

            var oModel = this.getView().getModel("mockData");
            var sActualOtp = oModel.getProperty("/otp");

            if (!sOtpInput || !sNewPass || !sRetype) {
                MessageToast.show("All fields are mandatory");
                return;
            }

            if (sOtpInput !== sActualOtp) {
                MessageBox.error("Invalid OTP. Please enter the correct OTP sent to your email.");
                return;
            }

            if (sNewPass !== sRetype) {
                MessageBox.error("New passwords do not match");
                return;
            }

            var sUser = this.byId("fpUserId").getValue().trim();
            var aUsers = oModel.getProperty("/users");
            var oUser = aUsers.find(function (u) { return u.userId === sUser; });

            if (oUser) {
                oUser.password = sNewPass; // update password in memory
                oModel.setProperty("/otp", "");
                MessageToast.show("Password reset successful");

                this._clearFields();
                this.byId("loginSection").setVisible(true);
                this.byId("forgotSection").setVisible(false);
                this.byId("resetSection").setVisible(false);

                this.getOwnerComponent().getRouter().navTo("Success");
            } else {
                MessageBox.error("User not found");
            }
        }

    });
});
