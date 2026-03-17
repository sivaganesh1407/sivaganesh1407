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

// ATS-friendly: Times New Roman, 11-12pt, simple layout, no tables
const font = 'Times New Roman';
const tr = (opts) => new TextRun({ font, size: 22, ...opts }); // 11pt
const trB = (text) => tr({ text, bold: true });
const trN = (text) => tr({ text });

// Standard ATS-recognized section headings
const sectionHeading = (text) =>
  new Paragraph({
    children: [tr({ text, bold: true, size: 24 })],
    border: {
      bottom: { color: '000000', space: 1, style: BorderStyle.SINGLE, size: 6 },
    },
    spacing: { before: 120, after: 80 },
  });

function buildSkillsParagraph() {
  return new Paragraph({
    children: [trN(data.technicalSkills)],
    spacing: { after: 120 },
  });
}

function buildExperienceParagraphs() {
  const paras = [];
  data.experience.forEach((job) => {
    paras.push(
      new Paragraph({
        children: [
          trB(job.role),
          trN(', ' + job.company),
          tr({ text: '\t' + job.dates, italics: true }),
        ],
        spacing: { after: 60 },
        keepLines: true,
      })
    );
    job.bullets.forEach((bullet, i) => {
      paras.push(
        new Paragraph({
          children: [trN('• ' + bullet)],
          bullet: { level: 0 },
          spacing: i === job.bullets.length - 1 ? { after: 80 } : {},
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
          children: [tr({ text: data.header.name, bold: true, size: 44 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [tr({ text: data.header.title, size: 24 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [
            trN('Tampa, FL, USA  |  '),
            new ExternalHyperlink({
              children: [tr({ text: 'gsg1499@gmail.com', style: 'Hyperlink' })],
              link: 'mailto:' + data.header.email,
            }),
            trN('  |  '),
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

        sectionHeading('Professional Summary'),
        new Paragraph({
          children: [trN(data.summary)],
          spacing: { after: 120 },
        }),

        sectionHeading('Technical Skills'),
        buildSkillsParagraph(),

        sectionHeading('Professional Experience'),
        ...buildExperienceParagraphs(),

        sectionHeading('Certifications'),
        ...data.certifications.map((c, i) =>
          new Paragraph({
            children: [trB(c.name), trN(' (' + c.dates + ')')],
            bullet: { level: 0 },
            spacing: { after: i < data.certifications.length - 1 ? 60 : 120 },
          })
        ),

        sectionHeading('Education'),
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

        sectionHeading('Key Projects'),
        ...data.projects.map((p) =>
          new Paragraph({
            children: [trB(p.name), trN(' — ' + p.desc)],
            bullet: { level: 0 },
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
