# REACT PWA

## Nelify Build: https://eloquent-kilby-c4b0fd.netlify.app/

## To Do:

- [x] add a randomize button to give a new set of drinks
- [x] show cocktail of the day of the main page
- [ ] show loader when the search is happening
- [ ] prompt user for the install after clicking the main page 3 times
- [x] get a custom google font for the app (Serif: Sans-Serif: ) | we use materilize-css which already calls google fonts
- [x] use code splitting to improve lighthouse score

## Instructions

- [x] Pick a partner in class who is someone that you do not normally work with.
- [x] You will be doing Pairs Programming with this person. | Anatolie, Ben, Ravi
- [x] Tell your instructor who your partner is.
- [x] Use Create React App with the PWA template to scaffold your application.
- [x] Use the Google Workbox library to augment the service-worker. Part of this assignment will be researching how to use WorkBox – hence the partner.
- [x] You will want to use the LightHouse tool in Chrome DevTools to check for correct PWA compliance.

## Minimum Requirements

### App features/behaviour

- [x] At least two pages with a summary/detail navigation using React Router
- [x] The main page should feature an image
- [x] The app should use a custom Google Font
- [x] All UI assets should be pre-cached
- [x] The app should display some dynamic data retrieved from an external API. Make sure that the data you are fetching will be different on a regular basis. Think of something like weather, stocks, crypto currencies, etc.
- [x] API data should be cached using a StaleWhileRevalidate strategy
  - When the first call to the API is made, cache the response JSON file.
  - When the app is offline, use the cached version of the last JSON file fetched.
- [x] Other image assets that might be fetched from external sources should be cached using a CacheFirst strategy. This cache should be limited to 50 items and all items should expire after 14 days.
- [x] After the user has visited the main page of the app three times, prompt to install. See Patterns for promoting PWA installation for design ideas.

### Code management

- [x] Your main branch should be protected
- [x] All development should be done on a dev branch or a feature branch
- [x] When each feature is complete and ready to merge into the main branch, create a pull request and have your partner review the code and approve the pull request.

### Submission

- [x] Create a private repo on GitHub with the name mad9135-f20-c4-react-pwa.
- [x] Your pair programming partner should be a collaborator on your repo.
- [x] Deploy the production build to Netlify.
- [x] Refer to the React production deployment guide.
- [x] Invite GitHub user rlmckenney as a collaborator on your private repo.
- [ ] Submit both the URL of the GitHub code repo and the Netlify public URL to the Brightspace assignment folder.
- [ ] Only one partner needs to submit on Brightspace.
