# Fast Food Stanislavski #

<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

## Open questions and issues
None

## Features to Build (versions) ##
  - [x] Mongodb of Intentions with an array of their suggestions
  - [x] Hello world root page with express router
  - [x] Hello world root page returns JSON with express router
  - [x] Intention page with static data in html file
  - [x] Intention page with static data in JSX file
  - [x] Intention page loads Intention from React state
  - [x] Intention page displays a random suggestion from Intention
  - [x] Button on suggestion page label "New suggestion" displays a new random suggestion from Intention
  - [x] Button on suggestion page label "New Intention" returns to list of intentions
  - [x] App loads data from mongo
  - [x] Express routes to react app
  - [x] Compile suggestions from book
  - [x] Add more suggestions to db
  - [x] Bootstrap to make everything look nicer
  - [x] Deploy to Netlify
------ Likely MVP cutoff ------


  - [ ] Search button to choose an Intention (if they don't easily fit in page view)
  - [ ] Search button to find a suggestion and its Intention
  - [ ] Page for each suggestion /:Intention/:suggestion
  - [ ] intention-suggestion page shows inspiration for that suggestion
  - [ ] Button to load a random Intention on home page
  - [ ] 1 minute Timer to choose a new suggestion
  - [ ] Timer automatically chooses a new suggestion
  - [ ] Timer beeps for new suggestion
  - [ ] Timer you can set for one of many durations
  - [ ] Change Random button to shuffle which stores suggestions you've already used and offers a new one
  - [ ] Save state in cookie for a given device
  - [ ] Users can sign up and track their progress
  - [ ] Users can suggest new action ideas for each Intention
  - [ ] Users can suggest new Intentions
  - [ ] Users can suggest visual inspo for a Intention
  - [ ] Users can upvote or downvote suggestions for a Intention
  - [ ] App has vibes of Keith



## Tech Stack ##
  - React
  - Express
  - MongoDB
  - Bootstrap


