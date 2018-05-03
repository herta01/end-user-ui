export default
{
    en: {
        common: {
            errors: {
                notFound: 'Not Found',
                notFoundAdditional: 'Please send help'
            },
            form: {
                submit: 'Submit',
                agree: 'I Agree',
                logo: 'logo',
                signUp: 'Sign Up',
                cancel: 'Cancel',
                saveChanges: 'Save changes'
            },
            placeholders: {
                password: 'Password',
                retypePassword: 'Retype Password',
                emailAddress: 'Email address'
            },
            user: {
                kba: {
                    description: 'Select security question(s) below. These questions will help us verify your identity if you forget your password.',
                    selectQuestion: 'Select a security question...',
                    custom: 'Provide your own:',
                    question: 'Question',
                    answer: 'Answer'
                },
                profile: {
                    updateSuccess: 'Successfully updated your profile.',
                    userDetailsTitle: 'Edit your personal info',
                    preferencesSubtitle: 'Set your communications preferences.',
                    preferencesTitle: 'Preferences'
                }
            },
            policyValidationMessages: {
                'MIN_LENGTH': 'Must be {minLength} characters long',
                'AT_LEAST_X_CAPITAL_LETTERS': 'Must have at least {numCaps} capital letter(s)',
                'AT_LEAST_X_NUMBERS': 'Must have at least {numNums} number(s)',
                'CANNOT_CONTAIN_OTHERS': 'Must not share characters with {disallowedFields}',
                'test': 'succeed',
                policyServiceError: 'Unable to register. Please try again later.',
                successMessages: {
                    password: 'Your password is secure!'
                }
            }
        },
        pages: {
            app: {
                profile: 'Profile',
                dashboard: 'Dashboard',
                user: 'User',
                signOut: 'Sign Out'
            },
            login: {
                username: 'Username',
                password: 'Password',
                signIn: 'Sign In',
                newHere: 'New here?',
                createAccount: 'Create an account',
                badPassword: "Sorry, that password isn't right. We can help you ",
                recoverPassword: 'recover your password.',
                forgotUsername: 'Forgot username?',
                forgotPassword: 'Forgot password?'
            },
            selfservice: {
                signIn: 'Sign in',
                headers: {
                    username: {
                        title: 'Recover Your Username',
                        description: 'You can recover your username with the email address associated with your account.'
                    },
                    reset: {
                        title: 'Reset Password',
                        description: 'We will send you an email with instructions on how to reset your password',
                        emailSent: 'An email has been sent to your inbox with instructions on how to reset your password.'
                    }
                },
                registration: {
                    signUp: 'Sign Up',
                    haveAccount: 'Already have an account?',
                    signIn: 'Sign in',
                    signUpMsg: 'Signing up is fast and easy.',
                    createdAccount: 'User account has been created.',
                    termsAndConditions: {
                        title: 'Terms & Conditions',
                        singlePage: 'By clicking "Sign Up" you agree to our '
                    },
                    consent: {
                        title: 'Privacy & Consent',
                        agreement: 'I agree'
                    },
                    emailValidation: 'An email has been sent to the address you entered. Click the link in that email to proceed.'
                },
                forgotUsername: {
                    advanceStageButtonText: 'Recover Username',
                    yourUsername: 'Your username is',
                    unableToRetrieve: 'Unable to retrieve your username',
                    tryAgain: 'Try finding your username again',
                    emailSent: 'An email containing your username has been sent to your account.'
                },
                passwordReset: {
                    advanceStageButtonText: 'Send Reset Instructions',
                    tryAgain: 'Try resetting your password again',
                    errorMessage: 'Error resetting your password',
                    successMessage: 'Your password has been reset.',
                    newPassword: 'New password',
                    changePassword: 'Change Password'
                }
            },
            profile: {
                editPersonalInfo: 'Edit personal info',
                settings: 'Settings',
                activity: 'Activity'
            }
        }
    }
};
