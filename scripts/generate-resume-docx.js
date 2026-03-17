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
const data = require('../data/resume-data');

// ATS-friendly: Times New Roman, old resume format
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
        children: [trB(job.company + (job.location ? ' | ' + job.location : ''))],
        spacing: { after: 20 },
      })
    );
    paras.push(
      new Paragraph({
        children: [trN(job.role + ' | ' + job.dates)],
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
          children: [tr({ text: data.header.title + '  ', size: 24 }), tr({ text: data.header.email, size: 24 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [
            trN('Tampa, FL, USA  |  '),
            new ExternalHyperlink({
              children: [tr({ text: 'linkedin.com/in/ganeshg7', style: 'Hyperlink' })],
              link: data.header.linkedin,
            }),
            trN('  |  '),
            new ExternalHyperlink({
              children: [tr({ text: 'github.com/sivaganesh1407', style: 'Hyperlink' })],
              link: data.header.github,
            }),
          ],
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
        new Paragraph({
          children: [trB(data.education[0].degree), trN(', ' + data.education[0].school)],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [trN(data.education[0].details)],
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [trB(data.education[1].degree), trN(', ' + data.education[1].school)],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [trN(data.education[1].details)],
          spacing: { after: 200 },
        }),

        sectionHeading('KEY PROJECTS'),
        ...data.projects.map((p) =>
          new Paragraph({
            children: [trN('• '), trB(p.name), trN(' — ' + p.desc)],
            spacing: { after: 60 },
          })
        ),
      ],
    },
  ],
});

async function main() {
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(__dirname, '..', 'public', 'resume.docx');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log('Generated public/resume.docx');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
