const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
} = require('docx');
const data = require('../data/resume-data-fulltime');

const font = 'Times New Roman';
const tr = (opts) => new TextRun({ font, size: 22, ...opts });
const trB = (text) => tr({ text, bold: true });
const trN = (text) => tr({ text });

const sectionHeading = (text) =>
  new Paragraph({
    children: [tr({ text, bold: true, size: 24 })],
    border: {
      bottom: { color: '000000', space: 1, style: BorderStyle.SINGLE, size: 6 },
    },
    spacing: { before: 120, after: 80 },
  });

const doc = new Document({
  sections: [
    {
      properties: { page: { margin: { top: 576, right: 576, bottom: 576, left: 576 } } },
      children: [
        new Paragraph({
          children: [trN(data.header.phone || '')],
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
        }),
        new Paragraph({
          children: [tr({ text: data.header.name, bold: true, size: 44 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [tr({ text: data.header.title, size: 24 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [trN(data.header.contact || '')],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),

        sectionHeading('PROFESSIONAL SUMMARY'),
        new Paragraph({
          children: [trN(data.summary)],
          spacing: { after: 120 },
        }),

        sectionHeading('TECHNICAL SKILLS'),
        new Paragraph({
          children: [trN(data.technicalSkills)],
          spacing: { after: 120 },
        }),

        sectionHeading('PROFESSIONAL EXPERIENCE'),
        ...data.experience.flatMap((job) => {
          const paras = [
            new Paragraph({
              children: [trB(job.role + ' – ' + job.company)],
              spacing: { after: 20 },
            }),
            new Paragraph({
              children: [trN(job.dates)],
              spacing: { after: 40 },
            }),
          ];
          job.bullets.forEach((b, i) => {
            paras.push(new Paragraph({
              children: [trN('• ' + b)],
              spacing: { after: i === job.bullets.length - 1 ? 80 : 20 },
            }));
          });
          return paras;
        }),

        sectionHeading('CERTIFICATIONS'),
        ...data.certifications.map((c, i) =>
          new Paragraph({
            children: [trN('• '), trB(c.name), trN(' (' + c.dates + ')')],
            spacing: { after: i < data.certifications.length - 1 ? 60 : 120 },
          })
        ),

        sectionHeading('EDUCATION'),
        ...data.education.flatMap((edu, i) => [
          new Paragraph({
            children: [trB(edu.degree), trN(', ' + edu.school)],
            spacing: { after: 60 },
          }),
          new Paragraph({
            children: [trN(edu.details)],
            spacing: { after: i < data.education.length - 1 ? 120 : 200 },
          }),
        ]),

        sectionHeading('KEY PROJECTS'),
        ...data.projects.flatMap((p) => {
          const paras = [new Paragraph({ children: [trB(p.name)], spacing: { after: 20 } })];
          (p.bullets || []).forEach((b, i) => {
            paras.push(new Paragraph({
              children: [trN('• ' + b)],
              spacing: { after: i === (p.bullets || []).length - 1 ? 60 : 20 },
            }));
          });
          return paras;
        }),
      ],
    },
  ],
});

async function main() {
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(__dirname, '..', 'public', 'Java_FullStack_FullTime_Resume.docx');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log('Generated public/Java_FullStack_FullTime_Resume.docx');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
