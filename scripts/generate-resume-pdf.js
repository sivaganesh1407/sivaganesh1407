const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const data = require('./resume-data');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outPath = path.join(__dirname, '..', 'public', 'resume.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

// ATS-friendly: Times-Roman, clean layout, sentence case, section borders
const h1 = () => { doc.fontSize(22).font('Times-Bold'); };
const h2 = () => { doc.fontSize(12).font('Times-Bold'); };
const body = () => { doc.fontSize(10).font('Times-Roman'); };
const bullet = () => { doc.text('• ', { continued: true }); };
const sectionHeading = (text) => {
  h2();
  doc.text(text);
  doc.moveDown(0.3);
  doc.rect(40, doc.y, 515, 1).fill('#333333');
  doc.moveDown(0.5);
};

h1();
doc.text(data.header.name, { align: 'center' });
doc.fontSize(12).font('Times-Roman').text(data.header.title, { align: 'center' });
doc.fontSize(10).text(data.header.contact, { align: 'center' });
doc.moveDown(1);

sectionHeading('Professional Summary');
body();
doc.text(data.summary, { align: 'justify' });
doc.moveDown(0.8);

sectionHeading('Technical Skills');
body();
doc.text(data.technicalSkills, { align: 'justify' });
doc.moveDown(0.8);

sectionHeading('Professional Experience');
body();

data.experience.forEach((job) => {
  doc.font('Times-Bold').text(job.role, { continued: true });
  doc.font('Times-Roman').text(', ' + job.company);
  doc.font('Times-Italic').text(job.dates, { align: 'right' });
  doc.font('Times-Roman');
  job.bullets.forEach((item) => { bullet(); doc.text(item); });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

sectionHeading('Certifications');
body();
data.certifications.forEach((c) => {
  bullet();
  doc.font('Times-Bold').text(c.name, { continued: true });
  doc.font('Times-Roman').text(' (' + c.dates + ')');
});
doc.moveDown(0.8);

sectionHeading('Education');
body();
data.education.forEach((edu) => {
  doc.font('Times-Bold').text(edu.degree, { continued: true });
  doc.font('Times-Roman').text(', ' + edu.school);
  doc.text(edu.details, { indent: 15 });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

sectionHeading('Key Projects');
body();
data.projects.forEach((p) => {
  bullet();
  doc.font('Times-Bold').text(p.name, { continued: true });
  doc.font('Times-Roman').text(' — ' + p.desc);
});

doc.end();
stream.on('finish', () => console.log('Generated public/resume.pdf'));
