# Keep in Tech

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

This is a news website that uses APIs from Hacker News.

**You can try it here -> [keep-in-tech](https://keep-in-tech.netlify.app/)**

## Screenshots

![Desktop Starting Page](https://user-images.githubusercontent.com/110642673/214722436-91b8cdf5-5a2d-469a-b118-a50604716da7.png)

![Desktop Gif](https://user-images.githubusercontent.com/110642673/214722838-da54d6c6-fcc2-4235-af6d-51128cbae1ae.gif)

![Mobile Starting page](https://user-images.githubusercontent.com/110642673/214722533-f684c585-867c-4a1f-8b88-93c8ae0f8979.png)

![Mobile Gif](https://user-images.githubusercontent.com/110642673/214722917-1cf0a951-32ff-43e4-98d4-cb3579ca3330.gif)

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
installed the dependencies and set the webpack.config file i created all the
content i needed in the template html file.

The next step was to put the API keys into a .env file and with a webpack
plug-in i managed to reach those keys.

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
