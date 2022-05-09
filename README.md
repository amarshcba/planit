# planit submission

# Instructions for running these tests

1. Clone this repo by entering the following:

```
% git clone https://github.com/XiaochunSong/planit.git
```

2. Install npm

Follow instructions on https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Ensure that you se something similar to the following:

```
% npm --version
6.14.14
```

3. Install Cypress command line tool

Follow instructions at https://docs.cypress.io/guides/getting-started/installing-cypress

Ensure that you see something similar to the following:

```
% npx cypress --version
Cypress package version: 9.6.0
Cypress binary version: 9.6.0
Electron version: 15.5.1
Bundled Node version: 16.5.0
```

4. Run the test from Chrome browser

```
# from root dir of this project
% npx cypress open
```

This will open the Chrome browser instance and the tests can be run from the UI

5. Run the tests from command line

Follow instructions at https://docs.cypress.io/guides/guides/command-line#How-to-run-commands

```
# from root dir of this project
% npx cypress run
```

You should see something like the following:

```
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        9.6.0                                                                          │
  │ Browser:        Electron 94 (headless)                                                         │
  │ Node Version:   v14.17.5 (/Users/amarshanand/.nvm/versions/node/v14.17.5/bin/node)             │
  │ Specs:          3 found (0-planit-tests/test-1.spec.js, 0-planit-tests/test-2.spec.js, 0-plani │
  │                 t-tests/test-3.spec.js)                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  0-planit-tests/test-1.spec.js                                                   (1 of 3)
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating


  Test Case 1 - Form filling and error removal
    ✓ should display errors if submit is clicked without filling mandatory fields (2929ms)
    ✓ should not display errors anymore after the mandatory fields are filled in (922ms)


  2 passing (6s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     6 seconds                                                                        │
  │ Spec Ran:     0-planit-tests/test-1.spec.js                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /Users/amarshanand/planit/cypress/videos/0-planit-tests/tes    (0 seconds)
                          t-1.spec.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  0-planit-tests/test-2.spec.js                                                   (2 of 3)


  Test Case 2 - Successful form submission - repeat 5 times
    ✓ trial #1 should submit a valid form and expect response within 10 sec (18615ms)
    ✓ trial #2 should submit a valid form and expect response within 10 sec (18323ms)
    ✓ trial #3 should submit a valid form and expect response within 10 sec (18776ms)
    ✓ trial #4 should submit a valid form and expect response within 10 sec (18156ms)
    ✓ trial #5 should submit a valid form and expect response within 10 sec (18292ms)


  5 passing (2m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      5                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 minute, 33 seconds                                                             │
  │ Spec Ran:     0-planit-tests/test-2.spec.js                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /Users/amarshanand/planit/cypress/videos/0-planit-tests/tes    (5 seconds)
                          t-2.spec.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  0-planit-tests/test-3.spec.js                                                   (3 of 3)


  Test Case 3 - Successful buying
    ✓ it should allow user to buy multiple items (3590ms)
    ✓ it should allow user to preview their shopping cart (339ms)


  2 passing (5s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     5 seconds                                                                        │
  │ Spec Ran:     0-planit-tests/test-3.spec.js                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /Users/amarshanand/planit/cypress/videos/0-planit-tests/tes    (0 seconds)
                          t-3.spec.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  0-planit-tests/test-1.spec.js            00:06        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  0-planit-tests/test-2.spec.js            01:33        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  0-planit-tests/test-3.spec.js            00:05        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        01:45        9        9        -        -        -
```

# Specifications

As asked, the three tests are presented here:

## Test case 1:

From the home page go to contact page

- Click submit button
- Verify error messages
- Populate mandatory fields
- Validate errors are gone

## Test case 2:

- From the home page go to contact page
- Populate mandatory fields
- Click submit button
- Validate successful submission message

- Note: Run this test 5 times to ensure 100% pass rate

## Test case 3:

- Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear
- Go to the cart page
- Verify the subtotal for each product is correct
- Verify the price for each product
- Verify that total = sum(sub totals)

# Improvements:

1. All of these are positive cases. We must include negative scenarios - what should "not" happen
2. Think of "false positives" etc
3. Think of NFRs - Non-Functional Requirements
4. Put the code in CI/CD pipeline - DevOps people can do that
5. Run tests in parallel - how is what DevOs people can do, by using -parallel flag
6. Build more functions
7. Code reuse
8. Adding setup and teardown methods
