const MTRO = document.getElementById('MTRO');
const MTR = document.getElementById('contenantMTR');
const MTRF = document.getElementById('MTRF');
const ondo = document.getElementById('ondo');
const ondc = document.getElementById('ondc');
const ondf = document.getElementById('ondf');
const partieho = document.getElementById('partieho');
const partiehc = document.getElementById('partiehc');
const partiehf = document.getElementById('partiehf');
const partieso = document.getElementById('partieso');
const partiesc = document.getElementById('partiesc');
const partiesf = document.getElementById('partiesf');
const CoupAUXo = document.getElementById('CoupAUXo');
const CoupAUXc = document.getElementById('CoupAUXc');
const CoupAUXf = document.getElementById('CoupAUXf');
const Coupeuseo = document.getElementById('Coupeuseo');
const Coupeusec = document.getElementById('Coupeusec');
const Coupeusef = document.getElementById('Coupeusef');
const Empileuro = document.getElementById('Empileuro');
const Empileurc = document.getElementById('Empileurc');
const Empileurf = document.getElementById('Empileurf');
const SF2o = document.getElementById('SF2o');
const SF2c = document.getElementById('SF2c');
const SF2f = document.getElementById('SF2f');
const DFo = document.getElementById('DFo');
const DFc = document.getElementById('DFc');
const DFf = document.getElementById('DFf');
const Platerollo = document.getElementById('Platerollo');
const Platerollc = document.getElementById('Platerollc');
const Platerollf = document.getElementById('Platerollf');
const Devidoiro = document.getElementById('Devidoiro');
const Devidoirc = document.getElementById('Devidoirc');
const Devidoirf = document.getElementById('Devidoirf');
const MFo = document.getElementById('MFo')
const MFc = document.getElementById('MFc')
const MFf = document.getElementById('MFf')
const GUo = document.getElementById('GUo')
const GUc = document.getElementById('GUc')
const GUf = document.getElementById('GUf')
const splicero = document.getElementById('splicero')
const splicerc = document.getElementById('splicerc')
const splicerf = document.getElementById('splicerf')
const derouleuro = document.getElementById('derouleuro')
const derouleurc = document.getElementById('derouleurc')
const derouleurf = document.getElementById('derouleurf')
const cylindreso = document.getElementById('cylindreso')
const cylindresc = document.getElementById('cylindresc')
const cylindresf = document.getElementById('cylindresf')
const canneléo = document.getElementById('canneléo')
const canneléc = document.getElementById('canneléc')
const canneléf = document.getElementById('canneléf')
const Ponto = document.getElementById('Ponto')
const Pontc = document.getElementById('Pontc')
const Pontf = document.getElementById('Pontf')
const ZDSo = document.getElementById('ZDSo')
const ZDSc = document.getElementById('ZDSc')
const ZDSf = document.getElementById('ZDSf')
// Events
MTRO.addEventListener('click', ouvrirMTR);
MTRF.addEventListener('click', fermerMTR);
ondo.addEventListener('click', ouvrirond);
ondf.addEventListener('click', fermerond);
partieho.addEventListener('click', ouvrirpartieh);
partiehf.addEventListener('click', fermerpartieh);
partieso.addEventListener('click', ouvrirparties);
partiesf.addEventListener('click', fermerparties);
CoupAUXo.addEventListener('click', ouvrirCoupAUX);
CoupAUXf.addEventListener('click', fermerCoupAUX);
Coupeuseo.addEventListener('click', ouvrirCoupeuse);
Coupeusef.addEventListener('click', fermerCoupeuse);
Empileuro.addEventListener('click', ouvrirEmpileur);
Empileurf.addEventListener('click', fermerEmpileur);
SF2o.addEventListener('click', ouvrirSF2);
SF2f.addEventListener('click', fermerSF2);
DFo.addEventListener('click', ouvrirDF);
DFf.addEventListener('click', fermerDF);
Platerollo.addEventListener('click', ouvrirPlateroll);
Platerollf.addEventListener('click', fermerPlateroll);
Devidoiro.addEventListener('click', ouvrirDevidoir);
Devidoirf.addEventListener('click', fermerDevidoir);
MFo.addEventListener('click', ouvrirMF);
MFf.addEventListener('click', fermerMF);
GUo.addEventListener('click', ouvrirGU);
GUf.addEventListener('click', fermerGU);
splicero.addEventListener('click', ouvrirsplicer);
splicerf.addEventListener('click', fermersplicer);
derouleuro.addEventListener('click', ouvrirderouleur);
derouleurf.addEventListener('click', fermerderouleur);
cylindreso.addEventListener('click', ouvrircylindres);
cylindresf.addEventListener('click', fermercylindres);
canneléo.addEventListener('click', ouvrircannelé);
canneléf.addEventListener('click', fermercannelé);
Ponto.addEventListener('click', ouvrirPont);
Pontf.addEventListener('click', fermerPont);
ZDSo.addEventListener('click', ouvrirZDS);
ZDSf.addEventListener('click', fermerZDS);

//ouvrir
function ouvrirMTR() {
  MTR.style.display = 'flex';
}
//fermer
function fermerMTR() {
  MTR.style.display = 'none';
}

function ouvrirond() {
  ondc.style.display = 'flex';
}
function fermerond() {
  ondc.style.display = 'none';
}

function ouvrirpartieh() {
  partiehc.style.display = 'flex';
}
function fermerpartieh() {
  partiehc.style.display = 'none';
}

function ouvrirparties() {
  partiesc.style.display = 'flex';
}
function fermerparties() {
  partiesc.style.display = 'none';
}

function ouvrirCoupAUX() {
  CoupAUXc.style.display = 'flex';
}
function fermerCoupAUX() {
  CoupAUXc.style.display = 'none';
}

function ouvrirCoupeuse() {
  Coupeusec.style.display = 'flex';
}
function fermerCoupeuse() {
  Coupeusec.style.display = 'none';
}

function ouvrirEmpileur() {
  Empileurc.style.display = 'flex';
}
function fermerEmpileur() {
  Empileurc.style.display = 'none';
}

function ouvrirSF2() {
  SF2c.style.display = 'flex';
}
function fermerSF2() {
  SF2c.style.display = 'none';
}

function ouvrirDF() {
  DFc.style.display = 'flex';
}
function fermerDF() {
  DFc.style.display = 'none';
}

function ouvrirPlateroll() {
  Platerollc.style.display = 'flex';
}
function fermerPlateroll() {
  Platerollc.style.display = 'none';
}

function ouvrirDevidoir() {
  Devidoirc.style.display = 'flex';
}
function fermerDevidoir() {
  Devidoirc.style.display = 'none';
}

function ouvrirMF() {
  MFc.style.display = 'flex';
}
function fermerMF() {
  MFc.style.display = 'none';
}

function ouvrirGU() {
  GUc.style.display = 'flex';
}
function fermerGU() {
  GUc.style.display = 'none';
}

function ouvrirsplicer() {
  splicerc.style.display = 'flex';
}
function fermersplicer() {
  splicerc.style.display = 'none';
}

function ouvrirderouleur() {
  derouleurc.style.display = 'flex';
}
function fermerderouleur() {
  derouleurc.style.display = 'none';
}

function ouvrircylindres() {
  cylindresc.style.display = 'flex';
}
function fermercylindres() {
  cylindresc.style.display = 'none';
}

function ouvrircannelé() {
  canneléc.style.display = 'flex';
}
function fermercannelé() {
  canneléc.style.display = 'none';
}

function fermerPont() {
  Pontc.style.display = 'none';
}
function ouvrirPont() {
  Pontc.style.display = 'flex';
}
function fermerZDS() {
  ZDSc.style.display = 'none';
}
function ouvrirZDS() {
  ZDSc.style.display = 'flex';
}
