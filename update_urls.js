import fs from 'fs';

// 1. Update recommendations.ts
let recs = fs.readFileSync('X:\\src\\data\\recommendations.ts', 'utf8');

recs = recs.replace(
  /url:\s*"https:\/\/langwang\.net\/#\/register"/g,
  'url: "https://yinxing4.wavenetaff.com/#/?code=XMK38sdf"'
);
recs = recs.replace(
  /url:\s*"https:\/\/vg5d\.quanttt\.club\/#\/\?code=iww0JG0R"/g,
  'url: "https://vnjg4ckga.quanqiugttt1.club/#/?code=NKII9ZkH"'
);
recs = recs.replace(
  /url:\s*"https:\/\/invisibles\.cloud\/#\/register"/g,
  'url: "https://yinxingren1.invisibleaff.com/#/register?code=Gcp1CRso"'
);
recs = recs.replace(
  /url:\s*"https:\/\/laddercloud\.org\/#\/register"/g,
  'url: "https://asfeoasf.ladderttt.sbs/#/?code=rhKeiJTM"'
);

fs.writeFileSync('X:\\src\\data\\recommendations.ts', recs, 'utf8');
console.log('Updated recommendations.ts');

// 2. Update articles.ts
let arts = fs.readFileSync('X:\\src\\data\\articles.ts', 'utf8');

arts = arts.replace(
  /https:\/\/langwang\.net\/#\/register/g,
  'https://yinxing4.wavenetaff.com/#/?code=XMK38sdf'
);
arts = arts.replace(
  /https:\/\/vg5d\.quanttt\.club\/#\/\?code=iww0JG0R/g,
  'https://vnjg4ckga.quanqiugttt1.club/#/?code=NKII9ZkH'
);
arts = arts.replace(
  /https:\/\/invisibles\.cloud\/#\/register/g,
  'https://yinxingren1.invisibleaff.com/#/register?code=Gcp1CRso'
);
arts = arts.replace(
  /https:\/\/laddercloud\.org\/#\/register/g,
  'https://asfeoasf.ladderttt.sbs/#/?code=rhKeiJTM'
);

fs.writeFileSync('X:\\src\\data\\articles.ts', arts, 'utf8');
console.log('Updated articles.ts');
