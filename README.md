# Keep in Tech

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

This is a news website that uses APIs from Hacker News.

**You can try it here -> [keep-in-tech]()**
<!--Aggiungere link sito una volta riuscito il deploy -->

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
<!--Fare screenshot e gif una volta riuscito il deploy -->

## Lessons Learned

Doing this project i learned how to make a call for API and how to use them, how
to keep my keys secret thanks to a .env file and last but not least how to
initialize a project with webpack.

## API Reference

All the API you need are here [Hacker News](https://github.com/HackerNews/API)

## Environment Variables

In the repo you can find a .env_example file. You have to put your api there and
save the file as .env

## Features

- Responsive design
- 5 different sections of news
- Load more button to read 10 more news each time

## Makin the Project

First of all i started initializing the project with webpack, so once i
installed the dependencies and set the webpac.config file i created all the
content i needed in the template html file.

The nest step was to make the API keys secret, so i put them in a .env file,
which is not committed to github, and with a webpack plug-in i managed to reach
those keys without making them public.

After that i created all the necessary functions in the index.js file: one to
call the API and manage the data received, one to display the data as news as we
intend them, one to implement a working button that takes more news. I also
implemented a UnixTime to Date converter to know when the article where
published.

The next step was to modify the style a little bit, to make the site more
beautiful. To accomplish that i used bootstrap, not only for the style, but even
to make the site responsive.

Finally once the app was ready i deployed it with netlify.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mejrimo.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/mohamed-mejri-925157234)

## Support

For support or any information contact me on
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discordapp.com/users/936580101586423828)
