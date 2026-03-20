const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  ExternalHyperlink,
} = require('docx');
const data = require('../data/resume-data-c2c');

// ATS-friendly: Times New Roman
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

function buildSkillsParagraphs() {
  const parts = data.technicalSkills.split(' | ');
  return [
    new Paragraph({ children: [trN(parts.slice(0, 5).join(' | '))], spacing: { after: 40 } }),
    new Paragraph({ children: [trN(parts.slice(5).join(' | '))], spacing: { after: 120 } }),
  ];
}

function buildExperienceParagraphs() {
  const paras = [];
  data.experience.forEach((job) => {
    paras.push(
      new Paragraph({
        children: [trB('Client: ' + job.client)],
        spacing: { after: 20 },
      })
    );
    paras.push(
      new Paragraph({
        children: [trN('Role: ' + job.role + '  |  Duration: ' + job.dates)],
        spacing: { after: 40 },
      })
    );
    job.bullets.forEach((bullet, i) => {
      paras.push(
        new Paragraph({
          children: [trN('• ' + bullet)],
          spacing: { after: i === job.bullets.length - 1 ? 80 : 20 },
        })
      );
    });
  });
  return paras;
}

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
          children: [tr({ text: data.header.title, size: 22 })],
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
        ...buildSkillsParagraphs(),
        new Paragraph({ children: [trN('')], spacing: { after: 80 } }),

        sectionHeading('PROFESSIONAL EXPERIENCE'),
        ...buildExperienceParagraphs(),

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
          const bullets = p.bullets || [];
          if (bullets.length > 0) {
            bullets.forEach((b, i) => {
              paras.push(new Paragraph({
                children: [trN('• ' + b)],
                spacing: { after: i === bullets.length - 1 ? 60 : 20 },
              }));
            });
          } else if (p.desc) {
            paras.push(new Paragraph({ children: [trN('• ' + p.desc)], spacing: { after: 60 } }));
          }
          return paras;
        }),
      ],
    },
  ],
});

async function main() {
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(__dirname, '..', 'public', 'resume-c2c.docx');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log('Generated public/resume-c2c.docx');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
