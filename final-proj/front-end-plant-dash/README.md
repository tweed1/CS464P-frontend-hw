## Journal (work in progress)


#### Topic Research

TODO: project proposal info

<hr>

#### Set up

> ##### app creation with vite
> https://vite.dev/guide/

>`npm create vite@latest`
>
> select `react-ts`

##### react router
[React Router Docuementation](https://reactrouter.com/start/modes#framework)

> using framework mode in react router



##### CSS frameworks and resource links

https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout

> Bootstrap and React Bootstrap 
>
> `npm install react-bootstrap bootstrap`

https://react-bootstrap.netlify.app/docs/getting-started/introduction
https://getbootstrap.com/docs/4.0/getting-started/introduction/

<hr> 

# Session Journal

### Week 1

>Primarily set up. I explored how to set up a react app with vite, which mode of react router I wanted to use, and what CSS framework I wanted to go with. 
During this week I implemented a working navbar to ensure my routing was working. I based it off of my navbar for Homework 3.

### Week 2

>During this week I got the very basic color styling implemented and start to see what I could do with bootstrap and react bootstrap. I ran into some issues with trying to figure out bootstrap grid system and wether I should use the CSS Grid instead. This question came up because of how I originally imagined my homepage looking I was having a hard time achieving with bootstrap. 
I decided to put a pin in that for the time being and pivot to my search page. I used react bootstrap form elements in combination with basic html tags to create a search bar that works on click.

Trefle API is the first API I tried to fetch on button click from the search bar. 
https://docs.trefle.io/docs/guides/getting-started
I ran into this error 
> `Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at <https:api link> (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.`

And it would not return a response. This took some googling. mainly reading through stack overflow and looking through the github for trefle https://github.com/treflehq/documentation

Through some messing around with the cors mode settings I was able to get a response but there was still a CORS error and it would go no further in my code.

Perenual API is the next one I tried. Using `mode: cors` It worked immediately without any further errors. https://perenual.com/docs/api
That is the one I used to experiment with listing items on the screen this week.

### Week 3

Footer reference: https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade

font source: https://fonts.google.com/selection