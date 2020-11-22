# REACT PWA

## Instructions

- [x] Pick a partner in class who is someone that you do not normally work with.
- [ ] You will be doing Pairs Programming with this person.
- [ ] Tell your instructor who your partner is.
- [ ] Use Create React App with the PWA template to scaffold your application.
- [ ] Use the Google Workbox library to augment the service-worker. Part of this assignment will be researching how to use WorkBox – hence the partner.
- [ ] You will want to use the LightHouse tool in Chrome DevTools to check for correct PWA compliance.

## Minimum Requirements

### App features/behaviour

- [x] At least two pages with a summary/detail navigation using React Router
- [ ] The main page should feature an image
- [ ] The app should use a custom Google Font
- [ ] All UI assets should be pre-cached
- [ ] The app should display some dynamic data retrieved from an external API. Make sure that the data you are fetching will be different on a regular basis. Think of something like weather, stocks, crypto currencies, etc.
- [ ] API data should be cached using a StaleWhileRevalidate strategy
  - When the first call to the API is made, cache the response JSON file.
  - When the app is offline, use the cached version of the last JSON file fetched.
- [ ] Other image assets that might be fetched from external sources should be cached using a CacheFirst strategy. This cache should be limited to 50 items and all items should expire after 14 days.
- [ ] After the user has visited the main page of the app three times, prompt to install. See Patterns for promoting PWA installation for design ideas.

### Code management

- [x] Your main branch should be protected
- [x] All development should be done on a dev branch or a feature branch
- [ ] When each feature is complete and ready to merge into the main branch, create a pull request and have your partner review the code and approve the pull request.

### Submission

- [x] Create a private repo on GitHub with the name mad9135-f20-c4-react-pwa.
- [x] Your pair programming partner should be a collaborator on your repo.
- [ ] Deploy the production build to Netlify.
- [ ] Refer to the React production deployment guide.
- [ ] Invite GitHub user rlmckenney as a collaborator on your private repo.
- [ ] Submit both the URL of the GitHub code repo and the Netlify public URL to the Brightspace assignment folder.
- [ ] Only one partner needs to submit on Brightspace.
