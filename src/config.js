const { readFileSync } = require('fs');

module.exports = {
	dest: "./draft/target.pdf",
	pdf_options: {
		displayHeaderFooter: true,
		headerTemplate: readFileSync('./src/header.html', 'utf8'),
		footerTemplate: readFileSync('./src/footer.html', 'utf8'),
		format: 'A4',
		margin: '20mm 20mm',
		printBackground: true
	}
};