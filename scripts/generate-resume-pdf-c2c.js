const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const data = require('../data/resume-data-c2c');

/** Enterprise ATS: white page, black body, navy (#1F3A5F) name / section headers / rules. */
const NAVY = '#1F3A5F';
const BLACK = '#000000';

const doc = new PDFDocument({ margin: 40, size: 'A4', lineGap: 3 });
const outPath = path.join(__dirname, '..', 'public', 'resume-c2c.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const body = () => {
  doc.fillColor(BLACK).fontSize(10).font('Helvetica');
};

const bullet = () => {
  doc.fillColor(BLACK).font('Helvetica').text('• ', { continued: true });
};

const sectionHeading = (text) => {
  doc.moveDown(0.5);
  doc.fillColor(NAVY).fontSize(12).font('Helvetica-Bold');
  doc.text(text);
  doc.moveDown(0.3);
  doc.rect(40, doc.y, 515, 1).fill(NAVY);
  doc.fillColor(BLACK);
  doc.moveDown(0.5);
};

// Header (optional phone line if not already included in contact)
body();
if (data.header.phone && String(data.header.phone).trim()) {
  doc.text(data.header.phone, { align: 'center' });
  doc.moveDown(0.3);
}
doc.fillColor(NAVY).fontSize(22).font('Helvetica-Bold');
doc.text(data.header.name, { align: 'center' });
doc.fillColor(BLACK).fontSize(11).font('Helvetica');
doc.text(data.header.title, { align: 'center' });
doc.fontSize(10).text(data.header.contact, { align: 'center' });
doc.moveDown(1);

// PROFESSIONAL SUMMARY
sectionHeading('PROFESSIONAL SUMMARY');
body();
if (data.summaryLead && data.summaryBody) {
  doc.text(data.summaryLead, { align: 'justify' });
  doc.moveDown(0.35);
  doc.text(data.summaryBody, { align: 'justify' });
} else {
  doc.text(data.summary, { align: 'justify' });
}
doc.moveDown(0.8);

// TECHNICAL SKILLS
sectionHeading('TECHNICAL SKILLS');
body();
const skillsParts = (data.technicalSkills || '').split(' | ').filter(Boolean);
if (skillsParts.length > 0) {
  doc.text(skillsParts.slice(0, 5).join(' | '), { align: 'left' });
  if (skillsParts.length > 5) doc.text(skillsParts.slice(5).join(' | '), { align: 'left' });
}
doc.moveDown(0.8);

// PROFESSIONAL EXPERIENCE
sectionHeading('PROFESSIONAL EXPERIENCE');
body();

(data.experience || []).forEach((job) => {
  doc.fillColor(BLACK).font('Helvetica-Bold').text('Client: ' + job.client);
  doc.font('Helvetica').text('Role: ' + job.role + '  |  Duration: ' + job.dates);
  doc.moveDown(0.3);
  (job.bullets || []).forEach((item) => {
    bullet();
    doc.fillColor(BLACK).font('Helvetica').text(item, { align: 'justify' });
  });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

// CERTIFICATIONS
sectionHeading('CERTIFICATIONS');
body();
(data.certifications || []).forEach((c) => {
  bullet();
  doc.fillColor(BLACK).font('Helvetica-Bold').text(c.name, { continued: true });
  doc.font('Helvetica').text(' (' + c.dates + ')');
});
doc.moveDown(0.8);

// EDUCATION
sectionHeading('EDUCATION');
body();
(data.education || []).forEach((edu) => {
  doc.fillColor(BLACK).font('Helvetica-Bold').text(edu.degree, { continued: true });
  doc.font('Helvetica').text(', ' + edu.school);
  doc.text(edu.details || '', { indent: 15 });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

doc.end();
stream.on('finish', () => console.log('Generated public/resume-c2c.pdf'));
