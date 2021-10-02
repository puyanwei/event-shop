# Event Shop

<img src="https://user-images.githubusercontent.com/14803518/128614065-2a5bfb02-1c49-42c6-876e-79eada043c61.png" width="250"> <img src="https://user-images.githubusercontent.com/14803518/128614168-ef18ae6f-b2ae-4491-a65f-9796a23539e5.png" width="250">

This app allows a user to book an event between the dates of 5th August 2019 and 13th September 2019, excluding the days of August, 20 August and 1 September.

<img src="https://user-images.githubusercontent.com/14803518/128614207-6bc23f3a-6fef-4d42-ba23-71f3b3cb7915.png" width="250">

After filling out the compulsary fields a price summary will reveal itself and will show the total price of the event, and a buy button.

After clicking buy it will send the form data to a mock api and another success message will show to let the user know of the successful transaction.

<img src="https://user-images.githubusercontent.com/14803518/128614270-e261cb82-a1ed-4486-a5ee-1ea74e930ba0.png" width="250">

The app is only of mobile size for now, but is able to expand to larger sizes later on.

## Installation

```
git clone https://github.com/puyanwei/event-shop.git
cd event-shop
npm install
npm start
```

You can preview the app on your phone by coping the "On Your Network" url and copying that to your phone browser.

<img src="https://user-images.githubusercontent.com/14803518/128638557-58b4d322-759b-431d-b30a-9e255def4d15.png" width="250">

## Tech Stack

- React functional components ES6
- Typescript
- SCSS

## Planning

I approached this task by spending some time to plan out the details and the best ordering to do things in.

<img src="https://user-images.githubusercontent.com/14803518/128614054-38c17e83-bb33-43a9-8780-aa1b85411fcd.png" width="500">

Decisions would need to be made about how to split up the page, and how to componentise the app in a way which made sense. Drawing things down helps a lot to break down the problem.

Much thought was also considered on the folder structure for scalability, but making sure to keep a balance for doing only what makes sense now, with the flexibility of being able to expand it later if needs be.

## Sketch Issues

Once this was completed, I wanted to look at the Sketch file provided for the designs. I have used Sketch before and I really love the css conversion in the program, it allows the designer and developer to work in tandum accurately.

Unfortunately my Macbook Air (2011) is too old to download the program, and there seemed to be no way of uploading the file to their web app. As an alternative, I managed to find a Windows program called [Lunacy](https://icons8.com/lunacy) which seemed to do the job.

<img src="https://user-images.githubusercontent.com/14803518/128614299-c77b895e-06fd-4ba3-8e03-737749bcfc10.png" width="100%">

I could be using it incorrectly, but it seems to have a few issues;

- All auto generated CSS seemed to be put into ids rather then classes
- Auto generated CSS seemed to repeat itself and so there is much overlapping
- Spacing of elements seems to be difficult if not no way of knowing accurately how far away items are from each other

## Hurdles

Some of the things I found tougher then expected;

- Wrestling with Typescript in getting the correct event types
- Trying to find out what are the best practices
- Dealing the dates, namely trying to have a date comparison to validate that field is not the default value so that the Price Summary section can show. In the end just had it has a string type over a date type.
- Messy CSS, following Lunacy seems to repeat a lot of the properties over and over but copied it anyways. Not too familiar with best practices for scss in terms of file structure.

## Future Improvements?

- Add [Formik](https://formik.org/) for the form data validation. Since this was not needed I decided not to use it.
- A more formal reusable css library, or possibly expanding that out into using Storybook to create a design system.
- Testing, possibily with something like Cypress

## Feedback!

The following feedback was recieved and corrected afterwards;

- Common sense should have been used in using the Lunacy results for the css, height should not have been used. Just like ids, this was not used so blindly copying the css was a mistake.
- Careful in using css inside components that are not custom classes, they will still activate and be used in all locations. Example being the `label` or `input` css. You can use a custom class or create a custom class container outside of it using scss to target it instead.
- Minimise repeating css.
