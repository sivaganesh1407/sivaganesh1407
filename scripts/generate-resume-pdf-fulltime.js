const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const data = require('../data/resume-data-fulltime');

const doc = new PDFDocument({ margin: 40, size: 'A4', lineGap: 2 });
const outPath = path.join(__dirname, '..', 'public', 'Java_FullStack_FullTime_Resume.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const h1 = () => { doc.fontSize(22).font('Times-Bold'); };
const h2 = () => { doc.fontSize(12).font('Times-Bold'); };
const body = () => { doc.fontSize(10).font('Times-Roman'); };
const bullet = () => { doc.text('• ', { continued: true }); };

const sectionHeading = (text) => {
  doc.moveDown(0.5);
  h2();
  doc.text(text);
  doc.moveDown(0.3);
  doc.rect(40, doc.y, 515, 1).fill('#333333');
  doc.moveDown(0.5);
};

// Header
body();
doc.text(data.header.phone || '', { align: 'center' });
doc.moveDown(0.3);
h1();
doc.text(data.header.name, { align: 'center' });
doc.fontSize(11).font('Times-Roman').text(data.header.title, { align: 'center' });
doc.fontSize(10).text(data.header.contact, { align: 'center' });
doc.moveDown(1);

// PROFESSIONAL SUMMARY
sectionHeading('PROFESSIONAL SUMMARY');
body();
doc.text(data.summary, { align: 'justify' });
doc.moveDown(0.8);

// TECHNICAL SKILLS
sectionHeading('TECHNICAL SKILLS');
body();
doc.text(data.technicalSkills, { align: 'left' });
doc.moveDown(0.8);

// PROFESSIONAL EXPERIENCE (full-time format: Role – Company)
sectionHeading('PROFESSIONAL EXPERIENCE');
body();

(data.experience || []).forEach((job) => {
  doc.font('Times-Bold').text(job.role + ' – ' + job.company);
  doc.font('Times-Roman').text(job.dates);
  doc.moveDown(0.3);
  (job.bullets || []).forEach((item) => { bullet(); doc.text(item, { align: 'justify' }); });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

// CERTIFICATIONS
sectionHeading('CERTIFICATIONS');
body();
(data.certifications || []).forEach((c) => {
  bullet();
  doc.font('Times-Bold').text(c.name, { continued: true });
  doc.font('Times-Roman').text(' (' + c.dates + ')');
});
doc.moveDown(0.8);

// EDUCATION
sectionHeading('EDUCATION');
body();
(data.education || []).forEach((edu) => {
  doc.font('Times-Bold').text(edu.degree, { continued: true });
  doc.font('Times-Roman').text(', ' + edu.school);
  doc.text(edu.details || '', { indent: 15 });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

// KEY PROJECTS
sectionHeading('KEY PROJECTS');
body();
(data.projects || []).forEach((p) => {
  doc.font('Times-Bold').text(p.name);
  (p.bullets || []).forEach((b) => { bullet(); doc.font('Times-Roman').text(b, { align: 'justify' }); doc.moveDown(0.3); });
  doc.moveDown(0.5);
});

doc.end();
stream.on('finish', () => console.log('Generated public/Java_FullStack_FullTime_Resume.pdf'));
