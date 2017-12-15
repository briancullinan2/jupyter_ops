# Zuora/Eloqua export/import service

## Table of Contents
1. Zuora export service, responsible for exporting any object SQL-style call in CSV/JSON format
More on that here: https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL
2. Zuora integration tests
3. Zuora query, an example query that retrieves the entire list of zuora subscriptions between two dates (start, end)
The resulting JSON is passed directly to the API: https://www.zuora.com/developer/api-reference/#operation/Object_POSTExport
4. eloqua import service, responsible for importing mapped JSON data in to eloqua
5. eloqua create template, this template should match the the output from the eloqua customobject/:id/fields REST call:
More on that here: https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/api-Application-2.0-Custom%20object%20data.html
6. eloqua integration tests
7. mock zuora and eloqua endpoints using express router

