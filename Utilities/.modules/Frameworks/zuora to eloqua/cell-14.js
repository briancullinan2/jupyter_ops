
module.exports = {
    "createTemplate": {
        "name": "Renewals Micro-service - Bulk Import",
        "mapDataCards": "true",
        "mapDataCardsEntityField": "{{Contact.Field(C_EmailAddress)}}",
        "mapDataCardsSourceField": "EmailAddress",
        "mapDataCardsEntityType": "Contact",
        "mapDataCardsCaseSensitiveMatch": "false",
        "updateRule": "always",
        "fields": {
            "AccountId": "{{CustomObject[60].Field(Account_ID1)}}",
            "ActProduct": "{{CustomObject[60].Field(Act_Product1)}}",
            "EmailAddress": "{{CustomObject[60].Field(Email_Address1)}}",
            "Last4DigitsOfCard": "{{CustomObject[60].Field(Last_4_Digits_of_Card1)}}",
            "Quantity": "{{CustomObject[60].Field(Quantity1)}}",
            "Support": "{{CustomObject[60].Field(Support1)}}",
            "SupportQuantity": "{{CustomObject[60].Field(Support_Quantity1)}}",
            "RenewalDate": "{{CustomObject[60].Field(Renewal_Date1)}}",
            "RenewalsStatus": "{{CustomObject[60].Field(Renewal_Status1)}}",
            "RepName": "{{CustomObject[60].Field(Rep_Name1)}}",
            "RORName": "{{CustomObject[60].Field(ROR_Name1)}}",
            "RORNumber": "{{CustomObject[60].Field(ROR_Number1)}}",
            "CardExpiration": "{{CustomObject[60].Field(Card_Expiration1)}}",
            "State": "{{CustomObject[60].Field(State1)}}",
            "Country": "{{CustomObject[60].Field(Country1)}}"
        },
        "identifierFieldName": "EmailAddress"
    }
}
