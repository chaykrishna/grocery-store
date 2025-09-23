const fs = require('fs');

const content = fs.readFileSync('ProductItem.jsx', 'utf-8');

// Match each product block
const productRegex = /<div className="col fade-zoom">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;

const products = [];
let match;

while ((match = productRegex.exec(content)) !== null) {
    const block = match[1];

    // Extract image variable
    const imgMatch = block.match(/<img\s+src={(.*?)}/);
    const imageVar = imgMatch ? imgMatch[1].trim() : '';

    // Extract category
    const catMatch = block.match(/<small>(.*?)<\/small>/);
    const category = catMatch ? catMatch[1].replace(/&amp;/g, '&').trim() : '';

    // Extract name
    const nameMatch = block.match(/<h2 className="fs-6">[\s\S]*?<Link[^>]*>(.*?)<\/Link>/);
    const name = nameMatch ? nameMatch[1].trim() : '';

    // Extract prices (current and original)
    const priceMatch = block.match(/<span className="text-dark">\$(\d+)<\/span>/);
    const currentPrice = priceMatch ? Number(priceMatch[1]) : 0;

    const originalPriceMatch = block.match(/<span className="text-decoration-line-through text-muted">\$(\d+)<\/span>/);
    const originalPrice = originalPriceMatch ? Number(originalPriceMatch[1]) : currentPrice;

    products.push({
        name,
        category,
        price: currentPrice,
        originalPrice,
        stock: 50, // default
        image: imageVar
    });
}

fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
console.log(`Extracted ${products.length} products!`);
