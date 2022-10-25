// Note: This is a 'simple' way to create a vanilla JavaScript component.
//       A more correct way would follow https://www.section.io/engineering-education/how-to-create-a-web-component-with-vanilla-javascript/
//       A most correct way would be to use a component-based library, such as React! :)
const BOOK_HTML = `
<div class='col col-sm-12 col-md-6 col-lg-3 col-xl-3' style='margin-bottom:1rem'>
    <div class='card'>
        <div class='card-header'>
            <h3>{{name}} (\${{price}})</h3>
            <p>Written by {{author}}</p>
        </div>
        <div class='card-body'>
            <h4>{{rating}} stars</h4>
            <p>{{description}}</p>
        </div>
        <button type="button" class="btn btn-primary" name="checkout">Checkout</button>
    </div>
</div>
`

function constructBook(name, author, price, rating, description) {
    return BOOK_HTML
        .replace("{{name}}", name)
        .replace("{{author}}", author)
        .replace("{{price}}", Number(price).toFixed(2))
        .replace("{{rating}}", Number(rating).toFixed(1))
        .replace("{{description}}", description)
}
