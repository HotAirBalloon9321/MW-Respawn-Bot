# Environment Configuration

Download the code or clone the repo and follow the steps below:

To set up the environment variables for development, follow these steps:

## 1. Create the `.env.development` File

In the root of your project, create a new file named `.env.development` and add the following environment variables:

```
TP_TO_USERNAME=
MINECRAFT_BOT_USERNAME=
MINECRAFT_SERVER_URL=
```

Replace the empty values with the appropriate configuration details.

## 2. Run the Deployment Command

Once the `.env.development` file is set up, execute the following command in your terminal to deploy the development environment:

```sh
npm i # to install the node_modules, you do not need to run this in the future if you have all the right modules installed
npm run deployDev
```

This will ensure your application uses the correct environment variables for development.

## Notes
- Ensure that `.env.development` is included in your `.gitignore` file to prevent accidental commits.
- If you encounter any issues, verify that the file is correctly named and formatted.
- You may need to restart your application after modifying environment variables.

