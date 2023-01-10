This is a weather app that shows you the current weather as well as the weather forecast for the upcoming 5 days. The app is built using ReactJS and NextJS, and makes use of the [OpenWeatherMap API](https://openweathermap.org/api) for fetching weather data.

## Features
- Uses the [useSWR hook](https://swr.vercel.app/) for data fetching
- Shows a nice graph of today's weather data using [nivo](https://nivo.rocks/)
- Uses [luxon](https://moment.github.io/luxon/) for formatting dates and times
- Hosted on [Vercel](https://vercel.com/)
- Built with [TypeScript](https://www.typescriptlang.org/) for type checking
- Uses icons from [Iconscout](https://iconscout.com/)
- All styling is done using [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To get started with this project, you will need to have the following prerequisites installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (or you can use npm instead)

Once you have these prerequisites installed, you can clone the repository and install the dependencies by running the following commands:

```
git clone https://github.com/adienox/cloudwise.git
cd cloudwise
yarn install
```


Next, you will need to get an API key from [OpenWeatherMap](https://openweathermap.org/api). Once you have your API key, create a file called `.env.local` in the root of the project and add the following line:

```
API_KEY=your-api-key
```

Replace `your-api-key` with the actual API key you received from OpenWeatherMap.

Finally, you can start the development server by running the following command:

```
yarn dev
```


This will start the development server at http://localhost:3000. You can now make changes to the code and the app will automatically reload in the browser.

## Deployment

To deploy the app to Vercel, you will need to [create a Vercel account](https://vercel.com/) and [connect your GitHub repository](https://vercel.com/docs/v2/git-integrations/vercel-for-github). Once you have done this, you can simply push your changes to the `main` branch of your repository and Vercel will automatically build and deploy your app.

