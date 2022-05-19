const { statement } = require("../features/statement");
const customer = require("../data/customer.json");
const movies = require("../data/movies.json");

test('match provided output', () => {
    expect(statement(customer, movies))
    .toBe(`Rental Record for Joe Schmoe
\tThe Fellowship of the Ring\t3.5
\tThe Two Towers\t15
\tThe Return of the King\t3
Amount owed is 21.5
You earned 4 frequent renter points\n`);
});