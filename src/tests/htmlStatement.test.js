const { htmlStatement } = require("../features/htmlStatement");
const customer = require("../data/customer.json");
const movies = require("../data/movies.json");

test('match provided output', () => {
    expect(htmlStatement(customer, movies))
    .toBe(`<h1>Rental Record for <em>Joe Schmoe</em></h1>
<ul>
\t<li>The Fellowship of the Ring - 3.5</li>
\t<li>The Two Towers - 15</li>
\t<li>The Return of the King - 3</li>
</ul>
<p>Amount owed is <em>21.5</em></p>
<p>You earned <em>4</em> frequent renter points</p>\n`);
});