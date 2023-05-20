Here is the readme.md format for hosting your React app as a static web app in Azure:

# Hosting your React app as a static web app in Azure

1. Go to the Azure portal.
2. Click Static Web Apps.
3. Click Create static web app.
4. Select any resource group (create one if you don’t have any).
5. Add your app name (this is the site’s public url).
6. Select any region.
7. Click Sign in with GitHub.
8. Click Authorize Azure-App-Service-Static-Web-Apps.
9. Choose your GitHub repository that contains your React app.
10. Choose your branch and build settings.
11. Click Review + Create.
12. Once the deployment is complete, you can access your React app using the URL provided by Azure.

For more detailed information on how to host your React app as a static web app in Azure, please follow this link .


Details of azure static web app

```
{
    "id": "/subscriptions/454b6d53-4f6b-4b36-95ed-e901a936f7e4/resourceGroups/VinayakTravelsStaticWebApp/providers/Microsoft.Web/staticSites/kashiTaxi",
    "name": "kashiTaxi",
    "type": "Microsoft.Web/staticSites",
    "location": "East Asia",
    "tags": {},
    "properties": {
        "defaultHostname": "yellow-tree-0be727a00.3.azurestaticapps.net",
        "repositoryUrl": "https://github.com/DEVAbhinav/Oreo",
        "branch": "AzureDeploy",
        "customDomains": [
            "kashitaxi.in",
            "www.kashitaxi.in"
        ],
        "stableInboundIP": "hidden IP"
        "privateEndpointConnections": [],
        "stagingEnvironmentPolicy": "Enabled",
        "allowConfigFileUpdates": true,
        "contentDistributionEndpoint": "https://content-hk1.infrastructure.3.azurestaticapps.net",
        "keyVaultReferenceIdentity": "SystemAssigned",
        "userProvidedFunctionApps": [],
        "linkedBackends": null,
        "provider": "GitHub",
        "enterpriseGradeCdnStatus": "Disabled",
        "publicNetworkAccess": null,
        "databaseConnections": [],
        "trafficSplitting": {
            "environmentDistribution": {
                "default": 100
            }
        },
        "areStaticSitesDistributedBackendsEnabled": false,
        "targetResourceGroupResourceId": null,
        "trialExpirationTimeUtc": null,
        "prettyNameStatus": null,
        "prettyName": null,
        "prettyNameHostname": null
    },
    "sku": {
        "name": "Free",
        "tier": "Free"
    }
}
```