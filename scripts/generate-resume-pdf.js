const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const data = require('../data/resume-data');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outPath = path.join(__dirname, '..', 'public', 'resume.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

// Old resume format: Times-Roman, section headings
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

// Header: Phone, Name, Title, Email
body();
doc.text(data.header.phone || '', { align: 'center' });
doc.moveDown(0.3);
h1();
doc.text(data.header.name, { align: 'center' });
doc.fontSize(12).font('Times-Roman').text(data.header.title + '  ' + data.header.email, { align: 'center' });
doc.fontSize(10).text(data.header.contact, { align: 'center' });
doc.moveDown(1);

// PROFILE SUMMARY
sectionHeading('PROFILE SUMMARY');
body();
doc.text(data.summary, { align: 'justify' });
doc.moveDown(0.8);

// TECHNICAL SKILLS (old format - categorized grid)
sectionHeading('TECHNICAL SKILLS');
body();
if (data.technicalSkillsGrid) {
  data.technicalSkillsGrid.forEach((row) => {
    doc.font('Times-Bold').text(row.category + ': ', { continued: true });
    doc.font('Times-Roman').text(row.items);
    doc.moveDown(0.2);
  });
} else {
  doc.text(data.technicalSkills, { align: 'left' });
}
doc.moveDown(0.8);

// WORK EXPERIENCE (old format: Company | Location, Role | Dates, Description, Responsibilities, Environment)
sectionHeading('WORK EXPERIENCE');
body();

data.experience.forEach((job) => {
  doc.font('Times-Bold').text(job.company + (job.location ? ' | ' + job.location : ''));
  doc.font('Times-Roman').text(job.role + ' | ' + job.dates);
  doc.moveDown(0.3);
  if (job.description) {
    doc.font('Times-Italic').text('Description: ', { continued: true });
    doc.font('Times-Roman').text(job.description);
    doc.moveDown(0.3);
  }
  doc.font('Times-Bold').text('Responsibilities:');
  job.bullets.forEach((item) => { bullet(); doc.text(item, { align: 'justify' }); });
  doc.moveDown(0.2);
  if (job.environment) {
    doc.font('Times-Bold').text('Environment: ', { continued: true });
    doc.font('Times-Roman').text(job.environment);
  }
  doc.moveDown(0.6);
});
doc.moveDown(0.3);

// CERTIFICATIONS
sectionHeading('CERTIFICATIONS');
body();
data.certifications.forEach((c) => {
  bullet();
  doc.font('Times-Bold').text(c.name, { continued: true });
  doc.font('Times-Roman').text(' (' + c.dates + ')');
});
doc.moveDown(0.8);

// EDUCATION (old format: Degree, School | Dates)
sectionHeading('EDUCATION');
body();
data.education.forEach((edu) => {
  doc.font('Times-Bold').text(edu.degree, { continued: true });
  doc.font('Times-Roman').text(', ' + edu.school);
  doc.text(edu.details, { indent: 15 });
  doc.moveDown(0.5);
});
doc.moveDown(0.3);

// KEY PROJECTS
sectionHeading('KEY PROJECTS');
body();
data.projects.forEach((p) => {
  bullet();
  doc.font('Times-Bold').text(p.name, { continued: true });
  doc.font('Times-Roman').text(' — ' + p.desc);
});

doc.end();
stream.on('finish', () => console.log('Generated public/resume.pdf'));
