
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [

    {
        fieldName: 'firstName',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, 

    {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, 

    {fieldName: 'typyear',
        fieldLabel: 'TYP Year',
        inputType: 'text',
        visible: true,
    },
     {

        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});

