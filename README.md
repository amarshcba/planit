# planit submission

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
