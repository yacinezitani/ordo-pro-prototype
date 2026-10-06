/**
 * OrdoPro V3 - Senior Product UX & Interaction Engine
 * Windows / Flutter Desktop Prototype
 * Strictly conforms to OrdoPro_UI_UX_Design_Spec_V3.md & OrdoPro_Design_Tokens_V3.json
 */

// Application State
const AppState = {
  currentView: 'home', // 'home' | 'prescription' | 'patients' | 'presets' | 'certificates' | 'medicines'
  
  // Fixed Doctor Identity (Spec #1, #4, #22)
  doctor: {
    name: 'Dr. Ahmed Benali',
    title: 'Médecin généraliste',
    nameAr: 'د. أحمد بن علي',
    specAr: 'طب عام',
    faculty: "Diplômé de la Faculté de Médecine d'Alger",
    orderNum: '16/4892',
    agreementNum: '2018/MS/094',
    address: '14 Boulevard Colonel Amirouche, Alger',
    phone: '021 63 45 78 / 0550 12 34 56'
  },

  // Active Patient for Prescription Workspace
  activePatient: {
    id: 1,
    nomComplet: 'Ahmed Benali',
    age: 40,
    sexe: 'Homme'
  },

  // Current Prescription being composed
  activePrescription: {
    id: 'ord-current',
    date: '05/10/2026',
    medicines: [
      { id: 1, nom: 'Doliprane 1000 mg', pathologie: 'Fièvre', quantite: 20 },
      { id: 2, nom: 'Amoxicilline 1 g', pathologie: 'Infection', quantite: 14 },
      { id: 3, nom: 'Oméprazole 20 mg', pathologie: 'Gastrite', quantite: 7 }
    ]
  },

  // Print & Document Generation Settings (Spec #21, #22)
  printSettings: {
    paper: 'A4',
    includeSignature: false,
    includeStamp: false
  },

  // Patients Database
  patients: [
    { id: 1, nomComplet: 'Ahmed Benali', age: 40, sexe: 'Homme', derniereOrdo: '05/10/2026' },
    { id: 2, nomComplet: 'Sara Haddad', age: 29, sexe: 'Femme', derniereOrdo: '02/10/2026' },
    { id: 3, nomComplet: 'Mohamed Ali', age: 65, sexe: 'Homme', derniereOrdo: '28/09/2026' },
    { id: 4, nomComplet: 'Fatima Zohra Mansouri', age: 52, sexe: 'Femme', derniereOrdo: '15/09/2026' },
    { id: 5, nomComplet: 'Karim Belkacem', age: 18, sexe: null, derniereOrdo: '10/09/2026' },
    { id: 6, nomComplet: 'Yasmine Khelil', age: null, sexe: 'Femme', derniereOrdo: '01/09/2026' }
  ],

  // Previous Prescriptions for Ahmed Benali (Patient 1)
  previousPrescriptions: [
    {
      id: 'ord-hist-1',
      patientId: 1,
      date: '05/10/2026',
      medicines: [
        { nom: 'Doliprane 1000 mg', pathologie: 'Fièvre', quantite: 20 },
        { nom: 'Amoxicilline 1 g', pathologie: 'Infection', quantite: 14 },
        { nom: 'Oméprazole 20 mg', pathologie: 'Gastrite', quantite: 7 }
      ]
    },
    {
      id: 'ord-hist-2',
      patientId: 1,
      date: '21/09/2026',
      medicines: [
        { nom: 'Doliprane 1000 mg', pathologie: 'Céphalées', quantite: 20 },
        { nom: 'Spasfon', pathologie: 'Douleurs abdominales', quantite: 30 },
        { nom: 'Flagyl 500 mg', pathologie: 'Colite', quantite: 20 },
        { nom: 'Oméprazole 20 mg', pathologie: 'Reflux', quantite: 14 }
      ]
    },
    {
      id: 'ord-hist-3',
      patientId: 1,
      date: '10/08/2026',
      medicines: [
        { nom: 'Doliprane 500 mg', pathologie: 'Fièvre', quantite: 16 },
        { nom: 'Zyrtec 10 mg', pathologie: 'Rhinite allergique', quantite: 10 }
      ]
    }
  ],

  // Ordonnances Types (Presets - Spec #17)
  treatmentPresets: [
    {
      id: 'preset-1',
      nom: 'Fièvre & Syndrome Grippal',
      pathologieDefaut: 'Fièvre / Courbatures',
      medicines: [
        { nom: 'Doliprane 1000 mg', pathologie: 'Fièvre', quantite: 20 },
        { nom: 'Spasfon', pathologie: 'Douleurs', quantite: 30 },
        { nom: 'Zyrtec 10 mg', pathologie: 'Rhinorrhée', quantite: 10 }
      ]
    },
    {
      id: 'preset-2',
      nom: 'Infection Respiratoire Haute',
      pathologieDefaut: 'Infection bactérienne',
      medicines: [
        { nom: 'Augmentin 1 g/125 mg', pathologie: 'Infection', quantite: 14 },
        { nom: 'Doliprane 1000 mg', pathologie: 'Fièvre / Douleur', quantite: 20 },
        { nom: 'Célestène 2 mg', pathologie: 'Inflammation oropharyngée', quantite: 10 }
      ]
    },
    {
      id: 'preset-3',
      nom: 'Gastrite & Reflux Gastro-Œsophagien',
      pathologieDefaut: 'Gastrite / RGO',
      medicines: [
        { nom: 'Oméprazole 20 mg', pathologie: 'Gastrite', quantite: 28 },
        { nom: 'Spasfon', pathologie: 'Spasmes gastriques', quantite: 30 }
      ]
    },
    {
      id: 'preset-4',
      nom: 'Lumbago / Douleurs Ostéoarticulaires',
      pathologieDefaut: 'Lumbago aigu',
      medicines: [
        { nom: 'Voltarène 50 mg', pathologie: 'Inflammation & Douleur', quantite: 20 },
        { nom: 'Doliprane 1000 mg', pathologie: 'Douleur', quantite: 20 },
        { nom: 'Oméprazole 20 mg', pathologie: 'Protection gastrique', quantite: 14 }
      ]
    }
  ],

  // Medicine Formulary Database (Spec #19)
  medicinesDb: [
    { id: 'm1', nom: 'Doliprane 1000 mg', dci: 'Paracétamol', pathologieDefaut: 'Fièvre', quantiteDefaut: 20 },
    { id: 'm2', nom: 'Doliprane 500 mg', dci: 'Paracétamol', pathologieDefaut: 'Fièvre', quantiteDefaut: 16 },
    { id: 'm3', nom: 'Amoxicilline 1 g', dci: 'Amoxicilline', pathologieDefaut: 'Infection', quantiteDefaut: 14 },
    { id: 'm4', nom: 'Augmentin 1 g/125 mg', dci: 'Amoxicilline / Acide clavulanique', pathologieDefaut: 'Infection bactérienne', quantiteDefaut: 14 },
    { id: 'm5', nom: 'Oméprazole 20 mg', dci: 'Oméprazole', pathologieDefaut: 'Gastrite', quantiteDefaut: 28 },
    { id: 'm6', nom: 'Spasfon', dci: 'Phloroglucinol', pathologieDefaut: 'Douleurs abdominales', quantiteDefaut: 30 },
    { id: 'm7', nom: 'Voltarène 50 mg', dci: 'Diclofénac sodique', pathologieDefaut: 'Lumbago / Arthralgies', quantiteDefaut: 20 },
    { id: 'm8', nom: 'Célestène 2 mg', dci: 'Bétaméthasone', pathologieDefaut: 'Inflammation', quantiteDefaut: 10 },
    { id: 'm9', nom: 'Zyrtec 10 mg', dci: 'Cétirizine', pathologieDefaut: 'Rhinite allergique', quantiteDefaut: 10 },
    { id: 'm10', nom: 'Inexium 40 mg', dci: 'Ésoméprazole', pathologieDefaut: 'Reflux gastro-œsophagien', quantiteDefaut: 28 },
    { id: 'm11', nom: 'Flagyl 500 mg', dci: 'Métronidazole', pathologieDefaut: 'Infection amibienne / dentaire', quantiteDefaut: 20 },
    { id: 'm12', nom: 'Azithromycine 500 mg', dci: 'Azithromycine', pathologieDefaut: 'Infection respiratoire', quantiteDefaut: 3 },
    { id: 'm13', nom: 'Kardegic 160 mg', dci: 'Acétylsalicylate de DL-lysine', pathologieDefaut: 'Prévention cardiovasculaire', quantiteDefaut: 30 },
    { id: 'm14', nom: 'Ventoline 100 µg', dci: 'Salbutamol', pathologieDefaut: 'Crise d\'asthme', quantiteDefaut: 1 }
  ],

  // Certificate Templates (Spec #20 & Complete Workflow)
  certificateTemplates: [
    {
      id: 'tpl-repos',
      nom: 'Certificat de repos',
      type: 'repos',
      badge: 'Arrêt de travail',
      description: 'Arrêt de travail / repos médical avec calcul de reprise d\'activité.',
      defaultDuration: 7,
      defaultMotif: 'Syndrome infectieux fébrile avec altération de l\'état général',
      templateText: "Je soussigné, {{doctor.nom}}, certifie avoir examiné ce jour {{patient.nom}}, âgé(e) de {{patient.age}} ans.\n\nSon état de santé nécessite un arrêt de travail et un repos médical à domicile de {{cert.duree}} jours, sauf complication, du {{cert.date_debut}} au {{cert.date_reprise}} inclus.\n\nMotif médical : {{cert.motif}}.\nObservations : {{cert.observations}}."
    },
    {
      id: 'tpl-aptitude',
      nom: 'Certificat d\'aptitude physique',
      type: 'aptitude',
      badge: 'Aptitude physique',
      description: 'Aptitude au sport, compétition ou activité professionnelle.',
      defaultActivityType: 'Sport',
      defaultActivity: 'Pratique de la natation',
      defaultResult: 'Apte sans contre-indication apparente',
      templateText: "Je soussigné, {{doctor.nom}}, certifie avoir examiné ce jour {{patient.nom}}, âgé(e) de {{patient.age}} ans.\n\nAprès examen clinique complet, je constate l'absence de contre-indication médicale apparente à la : {{cert.activite}}.\n\nConclusion : {{cert.resultat}} pour l'année en cours.\nObservations : {{cert.observations}}."
    },
    {
      id: 'tpl-descriptif',
      nom: 'Certificat médical descriptif',
      type: 'descriptif',
      badge: 'Constat médical',
      description: 'Constat médical de blessures, état de santé ou séquelles.',
      defaultMotif: 'Constatation de lésions traumatiques superficielles',
      templateText: "Je soussigné, {{doctor.nom}}, certifie avoir examiné ce jour {{patient.nom}}, âgé(e) de {{patient.age}} ans.\n\nExamen clinique du {{cert.date_constat}} (Motif : {{cert.motif}}) :\n{{cert.constat}}\n\nConclusion médicale : {{cert.conclusion}}."
    },
    {
      id: 'tpl-reprise',
      nom: 'Certificat de reprise',
      type: 'reprise',
      badge: 'Reprise d\'activité',
      description: 'Reprise d\'activité professionnelle après un arrêt médical.',
      defaultAvis: 'Apte à la reprise de ses fonctions sans restriction',
      templateText: "Je soussigné, {{doctor.nom}}, certifie avoir examiné ce jour {{patient.nom}}, âgé(e) de {{patient.age}} ans, précédemment en arrêt de travail depuis le {{cert.date_arret}}.\n\nL'examen de ce jour permet d'autoriser la reprise de son activité professionnelle à compter du {{cert.date_reprise}}.\n\nAvis médical : {{cert.avis}}.\nRecommandations : {{cert.recommandations}}."
    },
    {
      id: 'tpl-custom',
      nom: 'Certificat médical personnalisé',
      type: 'custom',
      badge: 'Modèle libre',
      description: 'Certificat médical à rédaction libre pour situations particulières.',
      templateText: "Je soussigné, {{doctor.nom}}, certifie que l'état de santé de {{patient.nom}}, âgé(e) de {{patient.age}} ans, examiné ce jour au cabinet, justifie les constatations suivantes :\n\n{{cert.texte_libre}}\n\nCertificat délivré à la demande de l'intéressé(e) pour servir et valoir ce que de droit."
    }
  ],

  // Recent Certificate Instances (Spec #20)
  recentCertificates: [
    {
      id: 'cert-inst-1',
      templateId: 'tpl-repos',
      templateNom: 'Certificat de repos',
      type: 'repos',
      patientId: 1,
      patientNom: 'Ahmed Benali',
      patientAge: 40,
      patientSexe: 'Homme',
      patient: {
        id: 1,
        nomComplet: 'Ahmed Benali',
        age: 40,
        sexe: 'Homme'
      },
      date: '05/10/2026',
      title: 'CERTIFICAT MÉDICAL DE REPOS',
      status: 'Créé',
      data: {
        dateDebut: '05/10/2026',
        duree: 7,
        dateReprise: '12/10/2026',
        motif: 'Syndrome infectieux fébrile aigu avec courbatures',
        observations: 'Repos strict à domicile, hydratation abondante'
      },
      customText: "Je soussigné, Dr. Ahmed Benali, certifie avoir examiné ce jour Ahmed Benali, âgé(e) de 40 ans.\n\nSon état de santé nécessite un arrêt de travail et un repos médical à domicile de 7 jours, sauf complication, du 05/10/2026 au 12/10/2026 inclus.\n\nMotif médical : Syndrome infectieux fébrile aigu avec courbatures.\nObservations : Repos strict à domicile, hydratation abondante."
    },
    {
      id: 'cert-inst-2',
      templateId: 'tpl-aptitude',
      templateNom: 'Certificat d\'aptitude physique',
      type: 'aptitude',
      patientId: 2,
      patientNom: 'Sara Haddad',
      patientAge: 29,
      patientSexe: 'Femme',
      patient: {
        id: 2,
        nomComplet: 'Sara Haddad',
        age: 29,
        sexe: 'Femme'
      },
      date: '03/10/2026',
      title: 'CERTIFICAT D\'APTITUDE PHYSIQUE',
      status: 'Créé',
      data: {
        activityType: 'Sport',
        activity: 'Pratique de la natation',
        resultat: 'Apte sans contre-indication apparente',
        observations: 'Examen cardio-vasculaire et pleuropulmonaire sans anomalie'
      },
      customText: "Je soussigné, Dr. Ahmed Benali, certifie avoir examiné ce jour Sara Haddad, âgé(e) de 29 ans.\n\nAprès examen clinique complet, je constate l'absence de contre-indication médicale apparente à la : Pratique de la natation.\n\nConclusion : Apte sans contre-indication apparente pour l'année en cours.\nObservations : Examen cardio-vasculaire et pleuropulmonaire sans anomalie."
    },
    {
      id: 'cert-inst-3',
      templateId: 'tpl-descriptif',
      templateNom: 'Certificat médical descriptif',
      type: 'descriptif',
      patientId: 3,
      patientNom: 'Mohamed Ali',
      patientAge: 65,
      patientSexe: 'Homme',
      patient: {
        id: 3,
        nomComplet: 'Mohamed Ali',
        age: 65,
        sexe: 'Homme'
      },
      date: '28/09/2026',
      title: 'CERTIFICAT MÉDICAL DESCRIPTIF',
      status: 'Créé',
      data: {
        dateConstat: '28/09/2026',
        motif: 'Chute mécanique à domicile',
        constat: 'Présence d\'une ecchymose de 4 cm sur la face antérieure de l\'épaule droite, associée à une douleur à la palpation sans déformation ni signe d\'embarrure osseuse.',
        conclusion: 'Lésions bénignes compatibles avec un traumatisme direct, ITT de 4 jours.'
      },
      customText: "Je soussigné, Dr. Ahmed Benali, certifie avoir examiné ce jour Mohamed Ali, âgé(e) de 65 ans.\n\nExamen clinique du 28/09/2026 (Motif : Chute mécanique à domicile) :\nPrésence d'une ecchymose de 4 cm sur la face antérieure de l'épaule droite, associée à une douleur à la palpation sans déformation ni signe d'embarrure osseuse.\n\nConclusion médicale : Lésions bénignes compatibles avec un traumatisme direct, ITT de 4 jours."
    },
    {
      id: 'cert-inst-4',
      templateId: 'tpl-reprise',
      templateNom: 'Certificat de reprise',
      type: 'reprise',
      patientId: 5,
      patientNom: 'Karim Belkacem',
      patientAge: 18,
      patientSexe: null,
      patient: {
        id: 5,
        nomComplet: 'Karim Belkacem',
        age: 18,
        sexe: null
      },
      date: '10/09/2026',
      title: 'CERTIFICAT MÉDICAL DE REPRISE',
      status: 'Créé',
      data: {
        dateArret: '01/09/2026',
        dateReprise: '11/09/2026',
        avis: 'Apte à la reprise de ses fonctions sans restriction',
        recommandations: 'Reprise progressive normale'
      },
      customText: "Je soussigné, Dr. Ahmed Benali, certifie avoir examiné ce jour Karim Belkacem, précédemment en arrêt de travail depuis le 01/09/2026.\n\nL'examen de ce jour permet d'autoriser la reprise de son activité professionnelle à compter du 11/09/2026.\n\nAvis médical : Apte à la reprise de ses fonctions sans restriction.\nRecommandations : Reprise progressive normale."
    }
  ],

  // Currently active certificate being composed/viewed in the editor
  activeCertificate: null,

  // Track item currently being edited
  editingMedicineIndex: null
};

// ==========================================================================
// LocalStorage Persistence & Data Reset Engine
// ==========================================================================

function saveToStorage() {
  try {
    const dataToSave = {
      doctor: AppState.doctor,
      patients: AppState.patients,
      activePatient: AppState.activePatient,
      activePrescription: AppState.activePrescription,
      previousPrescriptions: AppState.previousPrescriptions,
      treatmentPresets: AppState.treatmentPresets,
      medicinesDb: AppState.medicinesDb,
      certificateTemplates: AppState.certificateTemplates,
      recentCertificates: AppState.recentCertificates
    };
    localStorage.setItem('ordopro_v3_state', JSON.stringify(dataToSave));
  } catch (err) {
    console.warn('Storage save error:', err);
  }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem('ordopro_v3_state');
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved.doctor) AppState.doctor = saved.doctor;
      if (saved.patients) AppState.patients = saved.patients;
      if (saved.activePatient) AppState.activePatient = saved.activePatient;
      if (saved.activePrescription) AppState.activePrescription = saved.activePrescription;
      if (saved.previousPrescriptions) AppState.previousPrescriptions = saved.previousPrescriptions;
      if (saved.treatmentPresets) AppState.treatmentPresets = saved.treatmentPresets;
      if (saved.medicinesDb) AppState.medicinesDb = saved.medicinesDb;
      if (saved.certificateTemplates) AppState.certificateTemplates = saved.certificateTemplates;
      if (saved.recentCertificates) AppState.recentCertificates = saved.recentCertificates;
    }
  } catch (err) {
    console.warn('Storage load error:', err);
  }
}

function resetDemoData() {
  if (confirm('Voulez-vous réinitialiser toutes les données aux valeurs par défaut de démonstration ? Vos ajouts, modifications et suppressions seront réinitialisés.')) {
    localStorage.removeItem('ordopro_v3_state');
    location.reload();
  }
}

// ==========================================================================
// Doctor Cabinet Identity & Profile Engine (Spec #1, #4, #22)
// ==========================================================================

function openEditDoctorModal() {
  const doc = AppState.doctor;
  const nameInput = document.getElementById('doc-edit-name');
  if (nameInput) nameInput.value = doc.name || '';
  const nameArInput = document.getElementById('doc-edit-name-ar');
  if (nameArInput) nameArInput.value = doc.nameAr || '';
  const titleInput = document.getElementById('doc-edit-title');
  if (titleInput) titleInput.value = doc.title || '';
  const specArInput = document.getElementById('doc-edit-spec-ar');
  if (specArInput) specArInput.value = doc.specAr || '';
  const facInput = document.getElementById('doc-edit-faculty');
  if (facInput) facInput.value = doc.faculty || '';
  const ordInput = document.getElementById('doc-edit-ordernum');
  if (ordInput) ordInput.value = doc.orderNum || '';
  const agrInput = document.getElementById('doc-edit-agreement');
  if (agrInput) agrInput.value = doc.agreementNum || '';
  const addrInput = document.getElementById('doc-edit-address');
  if (addrInput) addrInput.value = doc.address || '';
  const phoneInput = document.getElementById('doc-edit-phone');
  if (phoneInput) phoneInput.value = doc.phone || '';

  openModal('modal-edit-doctor');
}

function saveDoctorProfile() {
  const name = document.getElementById('doc-edit-name').value.trim();
  const nameAr = document.getElementById('doc-edit-name-ar').value.trim();
  const title = document.getElementById('doc-edit-title').value.trim();
  const specAr = document.getElementById('doc-edit-spec-ar').value.trim();
  const faculty = document.getElementById('doc-edit-faculty').value.trim();
  const orderNum = document.getElementById('doc-edit-ordernum').value.trim();
  const agreementNum = document.getElementById('doc-edit-agreement').value.trim();
  const address = document.getElementById('doc-edit-address').value.trim();
  const phone = document.getElementById('doc-edit-phone').value.trim();

  if (!name) {
    alert('Le nom du praticien est requis.');
    return;
  }

  AppState.doctor = {
    ...AppState.doctor,
    name,
    nameAr: nameAr || name,
    title: title || 'Médecin généraliste',
    specAr: specAr || 'طب عام',
    faculty: faculty || "Diplômé de la Faculté de Médecine",
    orderNum: orderNum || '16/4892',
    agreementNum: agreementNum || '2018/MS/094',
    address: address || 'Cabinet Médical',
    phone: phone || ''
  };

  updateDoctorUI();
  saveToStorage();
  closeModal('modal-edit-doctor');
  renderA4Preview();
  if (AppState.currentView === 'certificates' && document.getElementById('cert-editor-view') && document.getElementById('cert-editor-view').style.display !== 'none') {
    renderCertificateA4Preview();
  }
  showToast('Coordonnées du cabinet mises à jour avec succès.');
}

function updateDoctorUI() {
  const doc = AppState.doctor;
  const rawClean = doc.name.replace(/^Dr\.?\s*/i, '').trim();
  const initials = rawClean.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || 'DR';
  
  const avatarEl = document.getElementById('sidebar-doc-avatar');
  if (avatarEl) avatarEl.textContent = initials;

  const nameEl = document.getElementById('sidebar-doc-name');
  if (nameEl) nameEl.textContent = doc.name;

  const specEl = document.getElementById('sidebar-doc-spec');
  if (specEl) specEl.textContent = doc.title;

  const homeGreeting = document.querySelector('.home-greeting');
  if (homeGreeting) homeGreeting.textContent = `Bonjour, ${doc.name}`;
}

// ==========================================================================
// Navigation & View Switching
// ==========================================================================

function navigateTo(viewId) {
  AppState.currentView = viewId;

  // Update Nav links
  document.querySelectorAll('.nav-item').forEach(el => {
    if (el.dataset.view === viewId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // Update Views visibility
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active-view');
  });

  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active-view');
  }

  // Refresh view specific components
  if (viewId === 'prescription') {
    renderPrescriptionWorkspace();
  } else if (viewId === 'patients') {
    renderPatientsList();
  } else if (viewId === 'home') {
    renderHomePatients();
  } else if (viewId === 'presets') {
    renderPresetsList();
  } else if (viewId === 'medicines') {
    renderMedicinesDb();
  } else if (viewId === 'certificates') {
    renderCertificatesDashboard();
  }
}

// ==========================================================================
// Prescription Workspace Logic (Spec #9, #10, #11, #12, #13, #14)
// ==========================================================================

function renderPrescriptionWorkspace() {
  const patient = AppState.activePatient;
  const pCard = document.getElementById('ordo-patient-card');
  if (pCard) {
    if (patient) {
      // Patient specs: Age and Sex (UI only, sex never printed)
      const ageStr = patient.age !== null ? `A : ${patient.age} ans` : '';
      const sexeBadge = patient.sexe ? `<span class="badge-sexe ${patient.sexe === 'Homme' ? 'badge-homme' : 'badge-femme'}">${patient.sexe}</span>` : '';
      
      pCard.innerHTML = `
        <div class="patient-info-left">
          <div class="patient-avatar-circle">${patient.nomComplet.charAt(0).toUpperCase()}</div>
          <div class="patient-meta-lines">
            <span class="patient-full-name">${escapeHtml(patient.nomComplet)}</span>
            <div class="patient-specs-line">
              ${ageStr ? `<span>${ageStr}</span>` : ''}
              ${ageStr && sexeBadge ? `<span>•</span>` : ''}
              ${sexeBadge}
            </div>
          </div>
        </div>
        <div class="patient-actions-right">
          <button class="btn btn-secondary btn-sm" onclick="openEditPatientModal(AppState.activePatient.id)" title="Modifier les coordonnées du patient">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Modifier
          </button>
          <button class="btn btn-secondary btn-sm" onclick="openPatientSelectorModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            Changer de patient
          </button>
          <button class="btn btn-subtle btn-sm" onclick="openPreviousPrescriptionsDrawer()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Ordonnances précédentes (${AppState.previousPrescriptions.length})
          </button>
        </div>
      `;
    } else {
      pCard.innerHTML = `
        <div class="patient-info-left">
          <span class="patient-full-name text-muted">Aucun patient sélectionné</span>
        </div>
        <div class="patient-actions-right">
          <button class="btn btn-primary btn-sm" onclick="openPatientSelectorModal()">Sélectionner un patient</button>
        </div>
      `;
    }
  }

  // Synchronize Date
  const dateInput = document.getElementById('ordo-date-input');
  if (dateInput) {
    dateInput.value = AppState.activePrescription.date;
  }

  // Render Medicine Rows
  renderMedicineRows();

  // Render Real-time A4 Print Preview
  renderA4Preview();
}

function renderMedicineRows() {
  const container = document.getElementById('medicine-rows-container');
  const emptyState = document.getElementById('empty-prescription-state');
  const countBadge = document.getElementById('ordo-meds-count');
  
  if (!container) return;

  const meds = AppState.activePrescription.medicines;
  if (countBadge) countBadge.textContent = `${meds.length} médicament${meds.length > 1 ? 's' : ''}`;

  if (meds.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = meds.map((med, index) => `
    <div class="medicine-row" data-index="${index}">
      <div class="row-medicine-name">${index + 1}. ${escapeHtml(med.nom)}</div>
      <div class="row-pathology">
        <span class="pathology-tag">${escapeHtml(med.pathologie || 'Non spécifiée')}</span>
      </div>
      <div class="row-quantity">${med.quantite}</div>
      <div class="row-actions">
        <button class="btn-action-icon" title="Monter" onclick="moveMedicineUp(${index})" ${index === 0 ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
        <button class="btn-action-icon" title="Descendre" onclick="moveMedicineDown(${index})" ${index === meds.length - 1 ? 'disabled style="opacity:0.3; cursor:default;"' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <button class="btn-action-icon" title="Modifier la ligne" onclick="openEditMedicineModal(${index})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="btn-action-icon danger" title="Supprimer de l'ordonnance" onclick="confirmDeleteMedicine(${index})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function moveMedicineUp(index) {
  if (index <= 0) return;
  const meds = AppState.activePrescription.medicines;
  const temp = meds[index];
  meds[index] = meds[index - 1];
  meds[index - 1] = temp;
  saveToStorage();
  renderMedicineRows();
  renderA4Preview();
}

function moveMedicineDown(index) {
  const meds = AppState.activePrescription.medicines;
  if (index >= meds.length - 1) return;
  const temp = meds[index];
  meds[index] = meds[index + 1];
  meds[index + 1] = temp;
  saveToStorage();
  renderMedicineRows();
  renderA4Preview();
}

// ==========================================================================
// Medicine Search & Enter-to-Add Matching Algorithm (Spec #11, #12)
// ==========================================================================

let activeAutocompleteResults = [];
let selectedAutocompleteIndex = -1;

function setupMedicineSearch() {
  const input = document.getElementById('medicine-search-input');
  const dropdown = document.getElementById('medicine-autocomplete-dropdown');

  if (!input || !dropdown) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length === 0) {
      dropdown.style.display = 'none';
      activeAutocompleteResults = [];
      selectedAutocompleteIndex = -1;
      return;
    }

    // Filter by trade name or DCI
    activeAutocompleteResults = AppState.medicinesDb.filter(m => 
      m.nom.toLowerCase().includes(query) || m.dci.toLowerCase().includes(query)
    );

    renderAutocomplete(query);
  });

  input.addEventListener('keydown', (e) => {
    if (dropdown.style.display !== 'block') {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleMedicineEnterKey(input.value.trim());
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, activeAutocompleteResults.length - 1);
      highlightAutocompleteItem();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, 0);
      highlightAutocompleteItem();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedAutocompleteIndex >= 0 && selectedAutocompleteIndex < activeAutocompleteResults.length) {
        addMedicineFromDb(activeAutocompleteResults[selectedAutocompleteIndex]);
        closeAutocomplete();
        input.value = '';
      } else {
        handleMedicineEnterKey(input.value.trim());
      }
    } else if (e.key === 'Escape') {
      closeAutocomplete();
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      closeAutocomplete();
    }
  });
}

function renderAutocomplete(query) {
  const dropdown = document.getElementById('medicine-autocomplete-dropdown');
  if (!dropdown) return;

  selectedAutocompleteIndex = -1;

  if (activeAutocompleteResults.length === 0) {
    dropdown.innerHTML = `
      <div class="autocomplete-custom-prompt">
        <span>Aucun médicament trouvé pour "<strong>${escapeHtml(query)}</strong>"</span>
        <button class="btn btn-sm btn-subtle" onclick="openCustomMedicineModal('${escapeHtml(query)}')">
          + Ajouter personnalisé
        </button>
      </div>
    `;
    dropdown.style.display = 'block';
    return;
  }

  let html = activeAutocompleteResults.map((med, idx) => `
    <div class="autocomplete-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}" onclick="selectAutocompleteMedicine(${idx})">
      <div>
        <div class="item-name">${escapeHtml(med.nom)}</div>
        <div class="item-dci">DCI: ${escapeHtml(med.dci)}</div>
      </div>
      <span class="pathology-tag">${escapeHtml(med.pathologieDefaut)} • Qté ${med.quantiteDefaut}</span>
    </div>
  `).join('');

  html += `
    <div class="autocomplete-custom-prompt">
      <span>Autre médicament non répertorié ?</span>
      <button class="btn btn-sm btn-subtle" onclick="openCustomMedicineModal('${escapeHtml(query)}')">
        + Personnalisé
      </button>
    </div>
  `;

  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
  selectedAutocompleteIndex = 0;
}

function highlightAutocompleteItem() {
  const items = document.querySelectorAll('.autocomplete-item');
  items.forEach((item, idx) => {
    if (idx === selectedAutocompleteIndex) {
      item.classList.add('selected');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('selected');
    }
  });
}

function selectAutocompleteMedicine(idx) {
  const med = activeAutocompleteResults[idx];
  if (med) {
    addMedicineFromDb(med);
    closeAutocomplete();
    const input = document.getElementById('medicine-search-input');
    if (input) input.value = '';
  }
}

function closeAutocomplete() {
  const dropdown = document.getElementById('medicine-autocomplete-dropdown');
  if (dropdown) dropdown.style.display = 'none';
}

function handleMedicineEnterKey(query) {
  if (!query) return;

  // Exact match check
  const exact = AppState.medicinesDb.find(m => m.nom.toLowerCase() === query.toLowerCase());
  if (exact) {
    addMedicineFromDb(exact);
    const input = document.getElementById('medicine-search-input');
    if (input) input.value = '';
    closeAutocomplete();
    showToast(`"${exact.nom}" ajouté à l'ordonnance.`);
    return;
  }

  // Partial matches check
  const matches = AppState.medicinesDb.filter(m => m.nom.toLowerCase().includes(query.toLowerCase()));
  if (matches.length === 1) {
    addMedicineFromDb(matches[0]);
    const input = document.getElementById('medicine-search-input');
    if (input) input.value = '';
    closeAutocomplete();
    showToast(`"${matches[0].nom}" ajouté à l'ordonnance.`);
  } else if (matches.length > 1) {
    renderAutocomplete(query);
  } else {
    // No matches -> prompt custom medicine modal
    openCustomMedicineModal(query);
    closeAutocomplete();
  }
}

function addMedicineFromDb(dbMed) {
  // Create an independent snapshot copy (Spec #19)
  AppState.activePrescription.medicines.push({
    id: Date.now() + Math.random(),
    nom: dbMed.nom,
    pathologie: dbMed.pathologieDefaut || 'Symptomatique',
    quantite: dbMed.quantiteDefaut || 20
  });

  renderMedicineRows();
  renderA4Preview();
  showToast(`Médicament ajouté : ${dbMed.nom}`);
}

// ==========================================================================
// A4 Print & Live Document Renderer (Spec #2, #21, #23)
// ==========================================================================

function renderA4Preview() {
  const sheet = document.getElementById('a4-sheet-preview');
  if (!sheet) return;

  const doc = AppState.doctor;
  const patient = AppState.activePatient;
  const ordo = AppState.activePrescription;

  // Patient block rules (Spec #21):
  // 1. Nom : Ahmed Benali
  // 2. Age only if not null: "A : {age} ans"
  // 3. Sexe : NEVER printed on document!
  const ageDisplay = (patient && patient.age !== null && patient.age !== undefined) 
    ? `<div class="a4-patient-age">A : ${patient.age} ans</div>` 
    : '';

  const patientName = patient ? patient.nomComplet : 'Nom du patient non spécifié';

  // Prescriptions List
  const itemsHtml = ordo.medicines.length > 0
    ? ordo.medicines.map((m, idx) => `
        <div class="a4-prescription-item">
          <div class="a4-med-header">
            <span class="a4-item-number">${idx + 1}.</span>
            <span class="a4-med-name">${escapeHtml(m.nom)}</span>
          </div>
          <div class="a4-med-details">
            <span class="a4-pathology-print">${escapeHtml(m.pathologie)}</span>
            <span class="a4-qty-print">Quantité : ${m.quantite}</span>
          </div>
        </div>
      `).join('')
    : `<div style="text-align: center; color: #94A3B8; margin: 40px 0; font-style: italic;">Aucun médicament prescrit</div>`;

  sheet.innerHTML = `
    <!-- Top Doctor Cabinet Header (Algerian Bilingual FR/AR) -->
    <div class="a4-header">
      <div class="a4-country">République Algérienne Démocratique et Populaire</div>
      <div class="a4-doctor-row">
        <div class="a4-doctor-fr">
          <div class="a4-doc-name-fr">${escapeHtml(doc.name)}</div>
          <div class="a4-doc-spec-fr">${escapeHtml(doc.title)}</div>
          <div class="a4-doc-sub-fr">${escapeHtml(doc.faculty)}</div>
          <div class="a4-doc-sub-fr">N° Ordre : ${doc.orderNum} • Agrément : ${doc.agreementNum}</div>
        </div>
        <div class="a4-doctor-ar">
          <div class="a4-doc-name-ar">${escapeHtml(doc.nameAr)}</div>
          <div class="a4-doc-spec-ar">${escapeHtml(doc.specAr)}</div>
          <div class="a4-doc-sub-ar">خريج كلية الطب بالجزائر</div>
          <div class="a4-doc-sub-ar">رقم القيد : ${doc.orderNum}</div>
        </div>
      </div>
    </div>

    <!-- Patient & Date Block -->
    <div class="a4-meta-block">
      <div class="a4-patient-meta">
        <span class="a4-patient-label">Patient</span>
        <span class="a4-patient-name">${escapeHtml(patientName)}</span>
        ${ageDisplay}
      </div>
      <div class="a4-date-block">
        <span class="a4-patient-label">Alger, le</span>
        <div class="a4-date-text">${escapeHtml(ordo.date)}</div>
      </div>
    </div>

    <!-- Classical Medical Title -->
    <div class="a4-document-title">O R D O N N A N C E</div>

    <!-- Prescriptions Body -->
    <div class="a4-prescriptions-body">
      ${itemsHtml}
    </div>

    <!-- Clean space for doctor manual physical stamp and handwritten signature -->
    <div class="a4-signature-space"></div>

    <!-- Professional Cabinet Footer -->
    <div class="a4-footer">
      <div>${escapeHtml(doc.address)}</div>
      <div>Téléphone : ${escapeHtml(doc.phone)} • Consultations sur rendez-vous et urgences</div>
    </div>
  `;
}

// Print Handler (Spec #21, #24)
function triggerPrint() {
  window.print();
}

// A4 Zoom State & Handler
let currentZoom = 0.95;

function changeZoom(delta) {
  currentZoom = Math.min(Math.max(currentZoom + delta, 0.65), 1.25);
  const container = document.getElementById('a4-sheet-container');
  const text = document.getElementById('zoom-level-text');
  if (container) {
    container.style.transform = `scale(${currentZoom})`;
  }
  if (text) {
    text.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function testEmptyState() {
  AppState.activePrescription.medicines = [];
  navigateTo('prescription');
  renderMedicineRows();
  renderA4Preview();
  showToast("Démonstration : État vide sans médicament.");
}

// ==========================================================================
// Modals & Editing Handlers (Spec #7, #14, #18)
// ==========================================================================

function openEditMedicineModal(index) {
  AppState.editingMedicineIndex = index;
  const med = AppState.activePrescription.medicines[index];
  if (!med) return;

  document.getElementById('edit-med-name').value = med.nom;
  document.getElementById('edit-med-pathology').value = med.pathologie || '';
  document.getElementById('edit-med-quantity').value = med.quantite || 20;

  openModal('modal-edit-medicine');
}

function saveEditedMedicine() {
  const idx = AppState.editingMedicineIndex;
  if (idx === null || idx < 0 || idx >= AppState.activePrescription.medicines.length) return;

  const nom = document.getElementById('edit-med-name').value.trim();
  const pathologie = document.getElementById('edit-med-pathology').value.trim();
  const quantite = parseInt(document.getElementById('edit-med-quantity').value, 10) || 1;

  if (!nom) {
    alert('Le nom du médicament est requis.');
    return;
  }

  AppState.activePrescription.medicines[idx] = {
    ...AppState.activePrescription.medicines[idx],
    nom,
    pathologie,
    quantite
  };

  closeModal('modal-edit-medicine');
  saveToStorage();
  renderMedicineRows();
  renderA4Preview();
  showToast('Ligne modifiée avec succès.');
}

function confirmDeleteMedicine(index) {
  const med = AppState.activePrescription.medicines[index];
  if (!med) return;

  if (confirm(`Supprimer "${med.nom}" de l'ordonnance ?`)) {
    AppState.activePrescription.medicines.splice(index, 1);
    saveToStorage();
    renderMedicineRows();
    renderA4Preview();
    showToast('Médicament supprimé.');
  }
}

// Custom Medicine Modal (Spec #12)
function openCustomMedicineModal(prefillName = '') {
  document.getElementById('custom-med-name').value = prefillName;
  document.getElementById('custom-med-pathology').value = '';
  document.getElementById('custom-med-quantity').value = 20;
  openModal('modal-custom-medicine');
}

function saveCustomMedicine() {
  const nom = document.getElementById('custom-med-name').value.trim();
  const pathologie = document.getElementById('custom-med-pathology').value.trim() || 'Traitement';
  const quantite = parseInt(document.getElementById('custom-med-quantity').value, 10) || 20;

  if (!nom) {
    alert('Le nom du médicament est obligatoire.');
    return;
  }

  AppState.activePrescription.medicines.push({
    id: Date.now(),
    nom,
    pathologie,
    quantite
  });

  closeModal('modal-custom-medicine');
  saveToStorage();
  renderMedicineRows();
  renderA4Preview();
  showToast(`Médicament personnalisé ajouté : ${nom}`);

  const searchInput = document.getElementById('medicine-search-input');
  if (searchInput) searchInput.value = '';
}

// ==========================================================================
// Patient Management CRUD (Spec #7, #8)
// ==========================================================================

let editingPatientId = null;

function openNewPatientModal() {
  editingPatientId = null;
  const title = document.getElementById('modal-patient-title');
  if (title) title.textContent = 'Nouveau patient';
  const btn = document.getElementById('btn-save-patient');
  if (btn) btn.textContent = 'Créer le patient';

  document.getElementById('new-patient-nom').value = '';
  document.getElementById('new-patient-age').value = '';
  document.getElementById('new-patient-sexe').value = '';
  openModal('modal-new-patient');
}

function openEditPatientModal(patientId) {
  const patient = AppState.patients.find(p => p.id === patientId);
  if (!patient) return;

  editingPatientId = patientId;
  const title = document.getElementById('modal-patient-title');
  if (title) title.textContent = `Modifier le patient : ${patient.nomComplet}`;
  const btn = document.getElementById('btn-save-patient');
  if (btn) btn.textContent = 'Enregistrer les modifications';

  document.getElementById('new-patient-nom').value = patient.nomComplet || '';
  document.getElementById('new-patient-age').value = patient.age !== null && patient.age !== undefined ? patient.age : '';
  document.getElementById('new-patient-sexe').value = patient.sexe || '';

  openModal('modal-new-patient');
}

function savePatientModal() {
  const nom = document.getElementById('new-patient-nom').value.trim();
  const ageVal = document.getElementById('new-patient-age').value.trim();
  const sexe = document.getElementById('new-patient-sexe').value || null;

  if (!nom) {
    alert('Le Nom complet est obligatoire.');
    return;
  }

  const age = ageVal ? parseInt(ageVal, 10) : null;

  if (editingPatientId) {
    const idx = AppState.patients.findIndex(p => p.id === editingPatientId);
    if (idx !== -1) {
      AppState.patients[idx] = {
        ...AppState.patients[idx],
        nomComplet: nom,
        age: isNaN(age) ? null : age,
        sexe: sexe
      };

      if (AppState.activePatient && AppState.activePatient.id === editingPatientId) {
        AppState.activePatient = AppState.patients[idx];
      }

      if (AppState.activeCertificate && AppState.activeCertificate.patient && AppState.activeCertificate.patient.id === editingPatientId) {
        AppState.activeCertificate.patient = AppState.patients[idx];
        AppState.activeCertificate.patientNom = nom;
        AppState.activeCertificate.patientAge = age;
        AppState.activeCertificate.patientSexe = sexe;
      }

      showToast(`Dossier patient "${nom}" mis à jour.`);
    }
  } else {
    const newPatient = {
      id: Date.now(),
      nomComplet: nom,
      age: isNaN(age) ? null : age,
      sexe: sexe,
      derniereOrdo: '05/10/2026'
    };

    AppState.patients.unshift(newPatient);
    AppState.activePatient = newPatient;
    showToast(`Patient "${nom}" créé et sélectionné.`);
  }

  closeModal('modal-new-patient');
  saveToStorage();
  renderPrescriptionWorkspace();
  renderHomePatients();
  renderPatientsList();
}

function saveNewPatient() {
  savePatientModal();
}

function deletePatient(patientId) {
  const patient = AppState.patients.find(p => p.id === patientId);
  if (!patient) return;

  if (confirm(`Voulez-vous vraiment supprimer le dossier de "${patient.nomComplet}" ?`)) {
    AppState.patients = AppState.patients.filter(p => p.id !== patientId);

    if (AppState.activePatient && AppState.activePatient.id === patientId) {
      AppState.activePatient = AppState.patients[0] || null;
      renderPrescriptionWorkspace();
    }

    saveToStorage();
    renderPatientsList();
    renderHomePatients();
    showToast(`Dossier patient "${patient.nomComplet}" supprimé.`);
  }
}

// Patient Selector Modal
function openPatientSelectorModal() {
  const listContainer = document.getElementById('patient-selector-list');
  if (listContainer) {
    listContainer.innerHTML = AppState.patients.map(p => `
      <div class="autocomplete-item" onclick="selectPatientById(${p.id})">
        <div>
          <span class="item-name">${escapeHtml(p.nomComplet)}</span>
          ${p.age !== null ? `<span class="patient-badge-age">(A : ${p.age} ans)</span>` : ''}
        </div>
        <div>
          ${p.sexe ? `<span class="badge-sexe ${p.sexe === 'Homme' ? 'badge-homme' : 'badge-femme'}">${p.sexe}</span>` : ''}
          <span style="font-size: 11.5px; color: var(--text-muted); margin-left: 8px;">Dernière: ${p.derniereOrdo || 'Nouveau'}</span>
        </div>
      </div>
    `).join('');
  }
  openModal('modal-select-patient');
}

function selectPatientById(id) {
  const patient = AppState.patients.find(p => p.id === id);
  if (patient) {
    AppState.activePatient = patient;
    if (AppState.activeCertificate) {
      AppState.activeCertificate.patient = patient;
      regenerateCertTextFromFields();
      if (document.getElementById('cert-editor-view') && document.getElementById('cert-editor-view').style.display !== 'none') {
        renderCertificateEditor();
      }
    }
    closeModal('modal-select-patient');
    renderPrescriptionWorkspace();
    showToast(`Patient actif : ${patient.nomComplet}`);
  }
}

// ==========================================================================
// Previous Prescriptions & Reuse Logic (Spec #15, #16)
// ==========================================================================

function openPreviousPrescriptionsDrawer() {
  const container = document.getElementById('previous-prescriptions-list');
  if (!container) return;

  const list = AppState.previousPrescriptions;
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-desc text-muted" style="padding: 24px; text-align: center;">Aucune ordonnance antérieure pour ce patient.</div>`;
  } else {
    container.innerHTML = list.map((item, idx) => `
      <div class="history-item-card">
        <div class="history-card-header">
          <span class="history-date">Ordonnance du ${item.date}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="history-med-count">${item.medicines.length} médicaments</span>
            <button class="btn-action-icon danger" title="Supprimer de l'historique" onclick="deletePreviousPrescription(${idx})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>
        <ul class="history-med-list">
          ${item.medicines.map(m => `
            <li>
              <span><strong>${escapeHtml(m.nom)}</strong></span>
              <span class="text-muted">${escapeHtml(m.pathologie || '')} (x${m.quantite})</span>
            </li>
          `).join('')}
        </ul>
        <button class="btn btn-sm btn-subtle" style="width: 100%;" onclick="reusePrescription(${idx})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          Utiliser comme nouvelle ordonnance
        </button>
      </div>
    `).join('');
  }

  openDrawer('drawer-previous-prescriptions');
}

function deletePreviousPrescription(index) {
  const item = AppState.previousPrescriptions[index];
  if (!item) return;

  if (confirm(`Supprimer l'ordonnance archivée du ${item.date} ?`)) {
    AppState.previousPrescriptions.splice(index, 1);
    saveToStorage();
    openPreviousPrescriptionsDrawer();
    showToast('Ordonnance archivée supprimée.');
  }
}

// CRITICAL SPEC REQUIREMENT (#16):
// "L'ancienne ordonnance ne doit jamais être écrasée.
// Copie -> Nouvelle ordonnance -> Date = aujourd'hui -> Modifier si nécessaire"
function reusePrescription(historyIndex) {
  const oldOrdo = AppState.previousPrescriptions[historyIndex];
  if (!oldOrdo) return;

  // Deep clone medicines
  const clonedMeds = oldOrdo.medicines.map(m => ({
    id: Date.now() + Math.random(),
    nom: m.nom,
    pathologie: m.pathologie,
    quantite: m.quantite
  }));

  // Create brand new prescription with today's date
  AppState.activePrescription = {
    id: 'ord-current',
    date: '05/10/2026', // Today's date
    medicines: clonedMeds
  };

  closeDrawer('drawer-previous-prescriptions');
  renderPrescriptionWorkspace();
  showToast(`Nouvelle ordonnance générée d'après celle du ${oldOrdo.date}`);
}

// ==========================================================================
// Ordonnances Types / Treatment Presets (Spec #17, #18)
// ==========================================================================

function openPresetsDrawer() {
  const container = document.getElementById('presets-list-drawer');
  if (!container) return;

  container.innerHTML = `
    <button class="btn btn-sm btn-subtle" style="width: 100%; margin-bottom: 14px;" onclick="closeDrawer('drawer-treatment-presets'); openCreatePresetModal(false);">
      + Créer une ordonnance type
    </button>
  ` + AppState.treatmentPresets.map((preset, idx) => `
    <div class="history-item-card">
      <div class="history-card-header">
        <span class="history-date">${escapeHtml(preset.nom)}</span>
        <span class="history-med-count">${preset.medicines.length} médicaments</span>
      </div>
      <ul class="history-med-list">
        ${preset.medicines.map(m => `
          <li>
            <span>${escapeHtml(m.nom)}</span>
            <span class="text-muted">${escapeHtml(m.posologie || m.pathologie || '')} • ${escapeHtml(String(m.quantite))}</span>
          </li>
        `).join('')}
      </ul>
      <button class="btn btn-sm btn-primary" style="width: 100%;" onclick="applyPreset(${idx})">
        + Insérer dans l'ordonnance
      </button>
    </div>
  `).join('');

  openDrawer('drawer-treatment-presets');
}

function applyPreset(presetIndex) {
  const preset = AppState.treatmentPresets[presetIndex];
  if (!preset) return;

  preset.medicines.forEach(m => {
    AppState.activePrescription.medicines.push({
      id: Date.now() + Math.random(),
      nom: m.nom,
      pathologie: m.posologie || m.pathologie || 'Traitement',
      quantite: m.quantite || '1 boîte'
    });
  });

  closeDrawer('drawer-treatment-presets');
  renderMedicineRows();
  renderA4Preview();
  showToast(`Ordonnance type "${preset.nom}" appliquée.`);
}

// ==========================================================================
// Ordonnance Type (Presets) State & Modal Management (Spec #18)
// Matches User Design: Modal with direct medication addition & deletion
// ==========================================================================

let presetDraftMedicines = [];
let presetEditingId = null;
let presetAutocompleteResults = [];
let presetAutocompleteSelectedIndex = -1;

function openCreatePresetModal(prefillFromCurrent = false) {
  presetEditingId = null;
  const titleEl = document.getElementById('modal-preset-title');
  if (titleEl) titleEl.textContent = 'Nouvelle ordonnance type';

  const nomInput = document.getElementById('new-preset-nom');
  if (nomInput) nomInput.value = '';

  if (prefillFromCurrent && AppState.activePrescription.medicines.length > 0) {
    presetDraftMedicines = AppState.activePrescription.medicines.map(m => ({
      nom: m.nom,
      posologie: m.posologie || m.pathologie || '1 cp/j',
      quantite: m.quantite ? (typeof m.quantite === 'number' ? `${m.quantite}` : m.quantite) : '1 boîte'
    }));
  } else {
    presetDraftMedicines = [];
  }

  hidePresetAddMedForm();
  renderPresetDraftMedicines();
  openModal('modal-create-preset');

  setTimeout(() => {
    if (nomInput) nomInput.focus();
  }, 100);
}

function openEditPresetModal(presetIndex) {
  const preset = AppState.treatmentPresets[presetIndex];
  if (!preset) return;

  presetEditingId = preset.id;
  const titleEl = document.getElementById('modal-preset-title');
  if (titleEl) titleEl.textContent = 'Modifier l\'ordonnance type';

  const nomInput = document.getElementById('new-preset-nom');
  if (nomInput) nomInput.value = preset.nom;

  presetDraftMedicines = preset.medicines.map(m => ({
    nom: m.nom,
    posologie: m.posologie || m.pathologie || '1 cp/j',
    quantite: m.quantite || '1 boîte'
  }));

  hidePresetAddMedForm();
  renderPresetDraftMedicines();
  openModal('modal-create-preset');

  setTimeout(() => {
    if (nomInput) nomInput.focus();
  }, 100);
}

function deletePreset(presetIndex) {
  const preset = AppState.treatmentPresets[presetIndex];
  if (!preset) return;

  if (confirm(`Voulez-vous vraiment supprimer l'ordonnance type "${preset.nom}" ?`)) {
    AppState.treatmentPresets.splice(presetIndex, 1);
    saveToStorage();
    renderPresetsList();
    showToast(`Ordonnance type "${preset.nom}" supprimée.`);
  }
}

function togglePresetAddMedForm() {
  const form = document.getElementById('preset-add-med-form');
  if (!form) return;

  if (form.style.display === 'none' || !form.style.display) {
    showPresetAddMedForm();
  } else {
    hidePresetAddMedForm();
  }
}

function showPresetAddMedForm() {
  const form = document.getElementById('preset-add-med-form');
  if (!form) return;

  form.style.display = 'block';

  const nomInput = document.getElementById('preset-new-med-nom');
  const posologyInput = document.getElementById('preset-new-med-posologie');
  const quantiteInput = document.getElementById('preset-new-med-quantite');

  if (nomInput) nomInput.value = '';
  if (posologyInput && !posologyInput.value) posologyInput.value = '1 cp/j';
  if (quantiteInput && !quantiteInput.value) quantiteInput.value = '1 boîte';

  setTimeout(() => {
    if (nomInput) nomInput.focus();
  }, 50);
}

function hidePresetAddMedForm() {
  const form = document.getElementById('preset-add-med-form');
  if (form) form.style.display = 'none';

  const dropdown = document.getElementById('preset-med-autocomplete');
  if (dropdown) dropdown.style.display = 'none';
  presetAutocompleteResults = [];
  presetAutocompleteSelectedIndex = -1;
}

function onPresetMedSearchInput(event) {
  const query = event.target.value.trim().toLowerCase();
  const dropdown = document.getElementById('preset-med-autocomplete');
  if (!dropdown) return;

  if (!query) {
    dropdown.style.display = 'none';
    presetAutocompleteResults = [];
    presetAutocompleteSelectedIndex = -1;
    return;
  }

  presetAutocompleteResults = AppState.medicinesDb.filter(m =>
    m.nom.toLowerCase().includes(query) || m.dci.toLowerCase().includes(query)
  );

  if (presetAutocompleteResults.length === 0) {
    dropdown.style.display = 'none';
    return;
  }

  presetAutocompleteSelectedIndex = 0;
  dropdown.innerHTML = presetAutocompleteResults.slice(0, 6).map((m, idx) => `
    <div class="preset-autocomplete-item ${idx === 0 ? 'active' : ''}" onclick="selectPresetMedAutocomplete(${idx})">
      <span class="preset-autocomplete-nom">${escapeHtml(m.nom)}</span>
      <span class="preset-autocomplete-dci">${escapeHtml(m.dci)}</span>
    </div>
  `).join('');
  dropdown.style.display = 'block';
}

function onPresetMedSearchKeydown(event) {
  const dropdown = document.getElementById('preset-med-autocomplete');
  const isOpen = dropdown && dropdown.style.display === 'block';

  if (event.key === 'ArrowDown' && isOpen) {
    event.preventDefault();
    presetAutocompleteSelectedIndex = Math.min(presetAutocompleteSelectedIndex + 1, presetAutocompleteResults.length - 1);
    updatePresetAutocompleteHighlight();
    return;
  }

  if (event.key === 'ArrowUp' && isOpen) {
    event.preventDefault();
    presetAutocompleteSelectedIndex = Math.max(presetAutocompleteSelectedIndex - 1, 0);
    updatePresetAutocompleteHighlight();
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    if (isOpen && presetAutocompleteSelectedIndex >= 0 && presetAutocompleteResults[presetAutocompleteSelectedIndex]) {
      selectPresetMedAutocomplete(presetAutocompleteSelectedIndex);
    } else {
      confirmAddMedToPreset();
    }
    return;
  }

  if (event.key === 'Escape') {
    if (isOpen) {
      event.preventDefault();
      dropdown.style.display = 'none';
    }
  }
}

function updatePresetAutocompleteHighlight() {
  const items = document.querySelectorAll('#preset-med-autocomplete .preset-autocomplete-item');
  items.forEach((item, idx) => {
    if (idx === presetAutocompleteSelectedIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function selectPresetMedAutocomplete(index) {
  const med = presetAutocompleteResults[index];
  if (!med) return;

  const nomInput = document.getElementById('preset-new-med-nom');
  const posologyInput = document.getElementById('preset-new-med-posologie');
  const quantiteInput = document.getElementById('preset-new-med-quantite');
  const dropdown = document.getElementById('preset-med-autocomplete');

  if (nomInput) nomInput.value = med.nom;
  if (posologyInput) posologyInput.value = med.pathologieDefaut ? `1 cp/j (${med.pathologieDefaut})` : '1 cp/j';
  if (quantiteInput) quantiteInput.value = `${med.quantiteDefaut || 1} boîte`;

  if (dropdown) dropdown.style.display = 'none';
  if (posologyInput) posologyInput.focus();
}

function confirmAddMedToPreset() {
  const nomInput = document.getElementById('preset-new-med-nom');
  const posologyInput = document.getElementById('preset-new-med-posologie');
  const quantiteInput = document.getElementById('preset-new-med-quantite');

  const nom = nomInput ? nomInput.value.trim() : '';
  const posologie = posologyInput ? posologyInput.value.trim() : '1 cp/j';
  const quantite = quantiteInput ? quantiteInput.value.trim() : '1 boîte';

  if (!nom) {
    if (nomInput) {
      nomInput.focus();
      nomInput.style.borderColor = 'var(--error)';
      setTimeout(() => { nomInput.style.borderColor = ''; }, 1500);
    }
    return;
  }

  presetDraftMedicines.push({
    nom: nom,
    posologie: posologie || '1 cp/j',
    quantite: quantite || '1 boîte'
  });

  if (nomInput) nomInput.value = '';
  if (posologyInput) posologyInput.value = '1 cp/j';
  if (quantiteInput) quantiteInput.value = '1 boîte';

  hidePresetAddMedForm();
  renderPresetDraftMedicines();
}

function removeMedFromPreset(index) {
  presetDraftMedicines.splice(index, 1);
  renderPresetDraftMedicines();
}

function renderPresetDraftMedicines() {
  const listContainer = document.getElementById('preset-meds-list');
  if (!listContainer) return;

  if (presetDraftMedicines.length === 0) {
    listContainer.innerHTML = `
      <div class="preset-empty-meds">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <p>Aucun médicament dans cette ordonnance type</p>
        <span>Cliquez sur « + Ajouter » ci-dessus pour composer votre modèle.</span>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = presetDraftMedicines.map((med, index) => `
    <div class="preset-med-card">
      <div class="preset-med-details">
        <div class="preset-med-card-name">${escapeHtml(med.nom)}</div>
        <div class="preset-med-card-posology">${escapeHtml(med.posologie || '1 cp/j')}</div>
        <div class="preset-med-card-quantity">${escapeHtml(med.quantite || '1 boîte')}</div>
      </div>
      <button type="button" class="btn-preset-med-remove" onclick="removeMedFromPreset(${index})" title="Supprimer ce médicament">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join('');
}

function saveNewPreset() {
  const nomInput = document.getElementById('new-preset-nom');
  const nom = nomInput ? nomInput.value.trim() : '';

  if (!nom) {
    alert('Veuillez saisir le nom de l\'ordonnance type.');
    if (nomInput) {
      nomInput.focus();
      nomInput.style.borderColor = 'var(--error)';
      setTimeout(() => { nomInput.style.borderColor = ''; }, 1500);
    }
    return;
  }

  if (presetDraftMedicines.length === 0) {
    alert('Veuillez ajouter au moins un médicament dans cette ordonnance type (cliquez sur + Ajouter).');
    showPresetAddMedForm();
    return;
  }

  const cleanMeds = presetDraftMedicines.map(m => ({
    nom: m.nom,
    posologie: m.posologie || '1 cp/j',
    pathologie: m.posologie || nom,
    quantite: m.quantite || '1 boîte'
  }));

  if (presetEditingId) {
    const existingIndex = AppState.treatmentPresets.findIndex(p => p.id === presetEditingId);
    if (existingIndex !== -1) {
      AppState.treatmentPresets[existingIndex].nom = nom;
      AppState.treatmentPresets[existingIndex].pathologieDefaut = nom;
      AppState.treatmentPresets[existingIndex].medicines = cleanMeds;
      showToast(`Ordonnance type "${nom}" modifiée avec succès.`);
    }
  } else {
    AppState.treatmentPresets.unshift({
      id: `preset-${Date.now()}`,
      nom: nom,
      pathologieDefaut: nom,
      medicines: cleanMeds
    });
    showToast(`Ordonnance type "${nom}" créée avec succès (${cleanMeds.length} médicaments).`);
  }

  closeModal('modal-create-preset');
  saveToStorage();
  renderPresetsList();
}

// ==========================================================================
// ==========================================================================
// Views Rendering: Home, Patients, Medicines, Certificates
// ==========================================================================

function renderHomePatients() {
  const tableBody = document.getElementById('home-recent-patients');
  if (!tableBody) return;

  tableBody.innerHTML = AppState.patients.slice(0, 5).map(p => `
    <tr style="cursor: pointer;" onclick="quickSelectPatientAndPrescribe(${p.id})">
      <td>
        <div class="patient-cell-name">${escapeHtml(p.nomComplet)}</div>
      </td>
      <td>${p.age !== null ? `${p.age} ans` : '<span class="text-muted">—</span>'}</td>
      <td>${p.sexe ? `<span class="badge-sexe ${p.sexe === 'Homme' ? 'badge-homme' : 'badge-femme'}">${p.sexe}</span>` : '<span class="text-muted">—</span>'}</td>
      <td><strong>${p.derniereOrdo || '—'}</strong></td>
      <td style="text-align: right;">
        <div class="table-action-group" onclick="event.stopPropagation()">
          <button class="btn btn-sm btn-subtle" onclick="quickSelectPatientAndPrescribe(${p.id})">
            + Ordonnance
          </button>
          <button class="btn btn-sm btn-secondary btn-icon" title="Modifier le patient" onclick="openEditPatientModal(${p.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

let patientsSearchQuery = '';

function filterPatientsList(query) {
  patientsSearchQuery = (query || '').toLowerCase().trim();
  renderPatientsList();
}

function renderPatientsList() {
  const container = document.getElementById('patients-full-table');
  const emptySearch = document.getElementById('patients-empty-search');
  if (!container) return;

  const filtered = AppState.patients.filter(p => {
    if (!patientsSearchQuery) return true;
    const nameMatch = p.nomComplet.toLowerCase().includes(patientsSearchQuery);
    const ageMatch = p.age !== null && String(p.age).includes(patientsSearchQuery);
    const sexeMatch = p.sexe && p.sexe.toLowerCase().includes(patientsSearchQuery);
    return nameMatch || ageMatch || sexeMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptySearch) emptySearch.style.display = 'flex';
    return;
  }
  if (emptySearch) emptySearch.style.display = 'none';

  container.innerHTML = filtered.map(p => `
    <tr>
      <td><div class="patient-cell-name">${escapeHtml(p.nomComplet)}</div></td>
      <td>${p.age !== null ? `${p.age} ans` : '<span class="text-muted">—</span>'}</td>
      <td>${p.sexe ? `<span class="badge-sexe ${p.sexe === 'Homme' ? 'badge-homme' : 'badge-femme'}">${p.sexe}</span>` : '<span class="text-muted">—</span>'}</td>
      <td><strong>${p.derniereOrdo || '—'}</strong></td>
      <td style="text-align: right;">
        <div class="table-action-group">
          <button class="btn btn-sm btn-primary" onclick="quickSelectPatientAndPrescribe(${p.id})">
            + Prescrire
          </button>
          <button class="btn btn-sm btn-secondary btn-icon" title="Modifier le patient" onclick="openEditPatientModal(${p.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
          <button class="btn btn-sm btn-danger btn-icon" title="Supprimer le patient" onclick="deletePatient(${p.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderPresetsList() {
  const container = document.getElementById('presets-cards-grid');
  if (!container) return;

  container.innerHTML = AppState.treatmentPresets.map((preset, idx) => `
    <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <h3 class="card-title">${escapeHtml(preset.nom)}</h3>
          <span class="badge-sexe badge-homme">${preset.medicines.length} méd.</span>
        </div>
        <p class="text-secondary" style="font-size: 13px; margin-bottom: 14px;">Pathologie cible : ${escapeHtml(preset.pathologieDefaut || preset.nom)}</p>
        <ul class="history-med-list">
          ${preset.medicines.map(m => `
            <li>
              <span>${escapeHtml(m.nom)}</span>
              <span class="text-muted">${escapeHtml(m.posologie || m.pathologie || '')} • ${escapeHtml(String(m.quantite))}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 14px;">
        <button class="btn btn-subtle" style="flex: 1;" onclick="applyPresetAndSwitchToPrescription(${idx})">
          Appliquer à l'ordonnance
        </button>
        <button class="btn btn-secondary btn-icon" title="Modifier le modèle" onclick="openEditPresetModal(${idx})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="btn btn-secondary btn-icon" title="Supprimer le modèle" onclick="deletePreset(${idx})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" style="color: var(--error);"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function applyPresetAndSwitchToPrescription(presetIndex) {
  applyPreset(presetIndex);
  navigateTo('prescription');
}

let medicinesDbSearchQuery = '';

function filterMedicinesList(query) {
  medicinesDbSearchQuery = (query || '').toLowerCase().trim();
  renderMedicinesDb();
}

function renderMedicinesDb() {
  const container = document.getElementById('medicines-full-table');
  const emptySearch = document.getElementById('medicines-empty-search');
  if (!container) return;

  const filtered = AppState.medicinesDb.filter(m => {
    if (!medicinesDbSearchQuery) return true;
    const nameMatch = m.nom.toLowerCase().includes(medicinesDbSearchQuery);
    const dciMatch = m.dci && m.dci.toLowerCase().includes(medicinesDbSearchQuery);
    const pathoMatch = m.pathologieDefaut && m.pathologieDefaut.toLowerCase().includes(medicinesDbSearchQuery);
    return nameMatch || dciMatch || pathoMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptySearch) emptySearch.style.display = 'flex';
    return;
  }
  if (emptySearch) emptySearch.style.display = 'none';

  container.innerHTML = filtered.map(m => `
    <tr>
      <td><strong>${escapeHtml(m.nom)}</strong></td>
      <td><span style="font-family: monospace; color: var(--primary-700);">${escapeHtml(m.dci || '—')}</span></td>
      <td>${escapeHtml(m.pathologieDefaut || '—')}</td>
      <td>${m.quantiteDefaut || 20}</td>
      <td style="text-align: right;">
        <div class="table-action-group">
          <button class="btn btn-sm btn-subtle" onclick="addMedFromCatalog('${m.id}')" title="Ajouter à l'ordonnance en cours">
            + Prescrire
          </button>
          <button class="btn btn-sm btn-secondary btn-icon" title="Modifier le médicament" onclick="openEditDbMedicineModal('${m.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
          <button class="btn btn-sm btn-danger btn-icon" title="Supprimer de la base" onclick="deleteDbMedicine('${m.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

let editingDbMedId = null;

function openAddDbMedicineModal() {
  editingDbMedId = null;
  const title = document.getElementById('modal-db-medicine-title');
  if (title) title.textContent = 'Nouveau médicament au formulaire';
  const btn = document.getElementById('btn-save-db-medicine');
  if (btn) btn.textContent = 'Ajouter au formulaire';

  document.getElementById('db-med-nom').value = '';
  document.getElementById('db-med-dci').value = '';
  document.getElementById('db-med-pathology').value = '';
  document.getElementById('db-med-quantity').value = 20;

  openModal('modal-db-medicine');
}

function openEditDbMedicineModal(medId) {
  const med = AppState.medicinesDb.find(m => m.id === medId);
  if (!med) return;

  editingDbMedId = medId;
  const title = document.getElementById('modal-db-medicine-title');
  if (title) title.textContent = `Modifier : ${med.nom}`;
  const btn = document.getElementById('btn-save-db-medicine');
  if (btn) btn.textContent = 'Enregistrer les modifications';

  document.getElementById('db-med-nom').value = med.nom;
  document.getElementById('db-med-dci').value = med.dci || '';
  document.getElementById('db-med-pathology').value = med.pathologieDefaut || '';
  document.getElementById('db-med-quantity').value = med.quantiteDefaut || 20;

  openModal('modal-db-medicine');
}

function saveDbMedicine() {
  const nom = document.getElementById('db-med-nom').value.trim();
  const dci = document.getElementById('db-med-dci').value.trim();
  const pathologie = document.getElementById('db-med-pathology').value.trim() || 'Traitement';
  const quantite = parseInt(document.getElementById('db-med-quantity').value, 10) || 20;

  if (!nom) {
    alert('Le nom commercial du médicament est obligatoire.');
    return;
  }

  if (editingDbMedId) {
    const idx = AppState.medicinesDb.findIndex(m => m.id === editingDbMedId);
    if (idx !== -1) {
      AppState.medicinesDb[idx] = {
        ...AppState.medicinesDb[idx],
        nom,
        dci,
        pathologieDefaut: pathologie,
        quantiteDefaut: quantite
      };
      showToast(`Médicament "${nom}" modifié.`);
    }
  } else {
    const newMed = {
      id: 'm' + Date.now(),
      nom,
      dci,
      pathologieDefaut: pathologie,
      quantiteDefaut: quantite
    };
    AppState.medicinesDb.unshift(newMed);
    showToast(`Médicament "${nom}" ajouté à la base.`);
  }

  closeModal('modal-db-medicine');
  saveToStorage();
  renderMedicinesDb();
}

function deleteDbMedicine(medId) {
  const med = AppState.medicinesDb.find(m => m.id === medId);
  if (!med) return;

  if (confirm(`Voulez-vous vraiment supprimer "${med.nom}" de la base de médicaments ?`)) {
    AppState.medicinesDb = AppState.medicinesDb.filter(m => m.id !== medId);
    saveToStorage();
    renderMedicinesDb();
    showToast(`Médicament "${med.nom}" supprimé de la base.`);
  }
}

function addMedFromCatalog(medId) {
  const med = AppState.medicinesDb.find(m => m.id === medId);
  if (med) {
    addMedicineFromDb(med);
    saveToStorage();
    navigateTo('prescription');
  }
}

function quickSelectPatientAndPrescribe(patientId) {
  const patient = AppState.patients.find(p => p.id === patientId);
  if (patient) {
    AppState.activePatient = patient;
    navigateTo('prescription');
  }
}

// ==========================================================================
// CERTIFICATS MÉDICAUX WORKFLOW & DOCUMENT GENERATION ENGINE
// Spec #20 & Complete Desktop Document Generation Workflow
// ==========================================================================

let certZoomLevel = 0.95;
let editingCertTemplateId = null;

// Returns default official title based on template type
function getDefaultCertTitle(type) {
  switch (type) {
    case 'repos': return 'CERTIFICAT MÉDICAL DE REPOS';
    case 'aptitude': return 'CERTIFICAT D\'APTITUDE PHYSIQUE';
    case 'descriptif': return 'CERTIFICAT MÉDICAL DESCRIPTIF';
    case 'reprise': return 'CERTIFICAT MÉDICAL DE REPRISE';
    case 'custom':
    default:
      return 'CERTIFICAT MÉDICAL';
  }
}

// Render the main Certificates dashboard
function renderCertificatesDashboard() {
  const dashboard = document.getElementById('cert-dashboard-view');
  const editor = document.getElementById('cert-editor-view');
  if (dashboard) dashboard.style.display = 'block';
  if (editor) editor.style.display = 'none';

  renderCertTemplates();
  renderRecentCertificates();
}

// Render template cards grid
function renderCertTemplates() {
  const container = document.getElementById('cert-templates-grid');
  const countBadge = document.getElementById('cert-templates-count');
  if (!container) return;

  const tpls = AppState.certificateTemplates;
  if (countBadge) countBadge.textContent = `${tpls.length} modèle${tpls.length > 1 ? 's' : ''}`;

  if (tpls.length === 0) {
    container.innerHTML = `
      <div class="empty-prescription-state" style="grid-column: 1 / -1; padding: 40px 20px;">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <div class="empty-title">Vous n'avez encore aucun modèle</div>
        <div class="empty-desc">Créez votre premier modèle personnalisé pour automatiser la rédaction de vos certificats.</div>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="openCreateCertTemplateModal()">+ Créer un modèle</button>
      </div>
    `;
    return;
  }

  // Icons by type
  const getIconSvg = (type) => {
    switch (type) {
      case 'repos':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
      case 'aptitude':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`;
      case 'descriptif':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
      case 'reprise':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;
      case 'custom':
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`;
    }
  };

  const cardsHtml = tpls.map(t => `
    <div class="cert-template-card">
      <div>
        <div class="cert-card-top">
          <div class="cert-card-icon">
            ${getIconSvg(t.type)}
          </div>
          <span class="cert-card-badge">${escapeHtml(t.badge || 'Certificat')}</span>
        </div>
        <h3 class="cert-card-title">${escapeHtml(t.nom)}</h3>
        <p class="cert-card-desc">${escapeHtml(t.description || '')}</p>
      </div>
      <div class="cert-card-actions">
        <button class="btn btn-sm btn-primary btn-use" onclick="useCertificateTemplate('${t.id}')">
          Utiliser ce modèle
        </button>
        <button class="btn btn-sm btn-secondary btn-icon" onclick="openEditCertTemplateModal('${t.id}')" title="Modifier le modèle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="btn btn-sm btn-secondary btn-icon" onclick="deleteCertTemplate('${t.id}')" title="Supprimer le modèle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="15" height="15" style="color: var(--error);"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  const createCardHtml = `
    <div class="cert-card-create-new" onclick="openCreateCertTemplateModal()">
      <div class="cert-create-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="22" height="22" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <span>+ Créer un modèle</span>
      <p>Personnalisez vos formules types et variables dynamiques</p>
    </div>
  `;

  container.innerHTML = cardsHtml + createCardHtml;
}

// Render recent certificates table
function renderRecentCertificates() {
  const tableBody = document.getElementById('cert-recent-table-body');
  const emptyState = document.getElementById('cert-recent-empty');
  const countBadge = document.getElementById('cert-recent-count');
  if (!tableBody) return;

  const recents = AppState.recentCertificates || [];
  if (countBadge) countBadge.textContent = `${recents.length} certificat${recents.length > 1 ? 's' : ''}`;

  if (recents.length === 0) {
    tableBody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tableBody.innerHTML = recents.map(c => `
    <tr>
      <td>
        <div class="patient-cell-name">${escapeHtml(c.patientNom)}</div>
        ${c.patientAge !== null && c.patientAge !== undefined ? `<span class="text-muted" style="font-size: 11.5px;">A : ${c.patientAge} ans</span>` : ''}
      </td>
      <td>
        <span class="badge-sexe badge-homme" style="margin-right: 6px;">${escapeHtml(c.templateNom)}</span>
      </td>
      <td><strong>${escapeHtml(c.date)}</strong></td>
      <td><span class="badge-sexe" style="background:#E7F7F0; color:#16845B;">Créé</span></td>
      <td style="text-align: right;">
        <div style="display: inline-flex; gap: 6px;">
          <button class="btn btn-sm btn-subtle" onclick="viewRecentCertificate('${c.id}')" title="Consulter et modifier">
            Modifier
          </button>
          <button class="btn btn-sm btn-secondary" onclick="duplicateRecentCertificate('${c.id}')" title="Dupliquer pour aujourd'hui">
            Dupliquer
          </button>
          <button class="btn btn-sm btn-secondary btn-icon" onclick="printRecentCertificate('${c.id}')" title="Imprimer directement">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          </button>
          <button class="btn btn-sm btn-secondary btn-icon" onclick="deleteRecentCertificate('${c.id}')" title="Supprimer de l'historique">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14" style="color: var(--error);"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Start editing a fresh certificate with chosen template
function useCertificateTemplate(templateId) {
  const tpl = AppState.certificateTemplates.find(t => t.id === templateId);
  if (!tpl) return;

  const patient = AppState.activePatient || AppState.patients[0];
  const today = AppState.activePrescription.date || '05/10/2026';

  let defaultData = {};
  if (tpl.type === 'repos') {
    defaultData = {
      dateDebut: today,
      duree: tpl.defaultDuration || 7,
      dateReprise: computeFutureDate(today, tpl.defaultDuration || 7),
      motif: tpl.defaultMotif || 'Syndrome infectieux fébrile aigu',
      observations: 'Repos strict à domicile'
    };
  } else if (tpl.type === 'aptitude') {
    defaultData = {
      activityType: tpl.defaultActivityType || 'Sport',
      activity: tpl.defaultActivity || 'Pratique de la natation',
      resultat: tpl.defaultResult || 'Apte sans contre-indication apparente',
      observations: 'Examen cardio-vasculaire et pleuropulmonaire sans anomalie'
    };
  } else if (tpl.type === 'descriptif') {
    defaultData = {
      dateConstat: today,
      motif: tpl.defaultMotif || 'Constatation de lésions traumatiques',
      constat: 'Présence d\'une ecchymose superficielle sans lésion osseuse décelable cliniquement.',
      conclusion: 'État clinique compatible avec les actes usuels de la vie.'
    };
  } else if (tpl.type === 'reprise') {
    defaultData = {
      dateArret: computePastDate(today, 10),
      dateReprise: today,
      avis: tpl.defaultAvis || 'Apte à la reprise de ses fonctions sans restriction',
      recommandations: 'Reprise normale'
    };
  } else {
    defaultData = {
      texteLibre: 'État clinique stationnaire ne présentant aucune anomalie aiguë.'
    };
  }

  AppState.activeCertificate = {
    id: null,
    templateId: tpl.id,
    templateNom: tpl.nom,
    type: tpl.type,
    patient: patient,
    date: today,
    title: getDefaultCertTitle(tpl.type),
    data: defaultData,
    customText: ''
  };

  // Generate initial rendered text
  AppState.activeCertificate.customText = generateEvaluatedCertText(tpl.templateText, AppState.activeCertificate);

  // Switch to Editor View
  openCertificateEditor('Nouveau document');
}

// Compute simple future date (DD/MM/YYYY + days)
function computeFutureDate(dateStr, days) {
  try {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
      d.setDate(d.getDate() + parseInt(days, 10));
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    }
  } catch (e) {}
  return dateStr;
}

// Compute simple past date (DD/MM/YYYY - days)
function computePastDate(dateStr, days) {
  try {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
      d.setDate(d.getDate() - parseInt(days, 10));
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const yyyy = d.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    }
  } catch (e) {}
  return dateStr;
}

// View existing certificate in the editor
function viewRecentCertificate(certId) {
  const cert = AppState.recentCertificates.find(c => c.id === certId);
  if (!cert) return;

  AppState.activeCertificate = JSON.parse(JSON.stringify(cert));
  if (!AppState.activeCertificate.patient) {
    AppState.activeCertificate.patient = {
      id: cert.patientId || null,
      nomComplet: cert.patientNom,
      age: cert.patientAge,
      sexe: cert.patientSexe
    };
  }
  AppState.activePatient = JSON.parse(JSON.stringify(AppState.activeCertificate.patient));
  openCertificateEditor('Document enregistré');
}

// Duplicate existing certificate for today
function duplicateRecentCertificate(certId) {
  const cert = AppState.recentCertificates.find(c => c.id === certId);
  if (!cert) return;

  const clone = JSON.parse(JSON.stringify(cert));
  clone.id = null;
  const today = AppState.activePrescription.date || '05/10/2026';
  clone.date = today;
  if (!clone.patient) {
    clone.patient = {
      id: cert.patientId || null,
      nomComplet: cert.patientNom,
      age: cert.patientAge,
      sexe: cert.patientSexe
    };
  }
  AppState.activePatient = JSON.parse(JSON.stringify(clone.patient));

  if (clone.data) {
    if (clone.data.dateDebut) clone.data.dateDebut = today;
    if (clone.data.duree) clone.data.dateReprise = computeFutureDate(today, clone.data.duree);
    if (clone.data.dateConstat) clone.data.dateConstat = today;
    if (clone.data.dateReprise) clone.data.dateReprise = today;
  }

  // Update dates in text if present
  if (clone.customText) {
    clone.customText = clone.customText.replace(new RegExp(cert.date, 'g'), today);
  }

  AppState.activeCertificate = clone;
  openCertificateEditor('Copie (Nouveau document)');
  showToast('Certificat dupliqué avec la date du jour.');
}

// Print directly from recent certificates table
function printRecentCertificate(certId) {
  const cert = AppState.recentCertificates.find(c => c.id === certId);
  if (!cert) return;

  AppState.activeCertificate = JSON.parse(JSON.stringify(cert));
  openCertificateEditor('Impression');
  setTimeout(() => {
    triggerCertificatePrint();
  }, 200);
}

// Open Certificate Editor view
function openCertificateEditor(modeLabel = 'Nouveau document') {
  const dashboard = document.getElementById('cert-dashboard-view');
  const editor = document.getElementById('cert-editor-view');
  if (dashboard) dashboard.style.display = 'none';
  if (editor) editor.style.display = 'block';

  const badgeEl = document.getElementById('cert-editor-template-badge');
  const modeEl = document.getElementById('cert-editor-instance-mode');
  if (badgeEl) badgeEl.textContent = `Modèle : ${AppState.activeCertificate.templateNom}`;
  if (modeEl) modeEl.textContent = modeLabel;

  renderCertificateEditor();
}

// Return to Certificates dashboard
function returnToCertDashboard() {
  const dashboard = document.getElementById('cert-dashboard-view');
  const editor = document.getElementById('cert-editor-view');
  if (dashboard) dashboard.style.display = 'block';
  if (editor) editor.style.display = 'none';

  renderCertificatesDashboard();
}

// Render all components inside the Certificate Editor
function renderCertificateEditor() {
  const cert = AppState.activeCertificate;
  if (!cert) return;

  // 1. Patient Card
  const pCard = document.getElementById('cert-patient-card');
  if (pCard) {
    const p = cert.patient;
    if (p) {
      const ageStr = p.age !== null ? `A : ${p.age} ans` : '';
      const sexeBadge = p.sexe ? `<span class="badge-sexe ${p.sexe === 'Homme' ? 'badge-homme' : 'badge-femme'}">${p.sexe}</span>` : '';
      pCard.innerHTML = `
        <div class="patient-info-left">
          <div class="patient-avatar-circle">${p.nomComplet.charAt(0).toUpperCase()}</div>
          <div class="patient-meta-lines">
            <span class="patient-full-name">${escapeHtml(p.nomComplet)}</span>
            <div class="patient-specs-line">
              ${ageStr ? `<span>${ageStr}</span>` : ''}
              ${ageStr && sexeBadge ? `<span>•</span>` : ''}
              ${sexeBadge}
            </div>
          </div>
        </div>
        <div class="patient-actions-right">
          <button class="btn btn-secondary btn-sm" onclick="openEditPatientModal(p.id)" title="Modifier les coordonnées du patient">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Modifier
          </button>
          <button class="btn btn-secondary btn-sm" onclick="openPatientSelectorModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            Changer de patient
          </button>
        </div>
      `;
    }
  }

  // 2. Title & Date
  const titleInput = document.getElementById('cert-doc-title-input');
  const dateInput = document.getElementById('cert-date-input');
  if (titleInput) titleInput.value = cert.title || getDefaultCertTitle(cert.type);
  if (dateInput) dateInput.value = cert.date || '05/10/2026';

  // 3. Dynamic Fields based on Type
  renderCertSpecificFields();

  // 4. Custom Content Textarea
  const textArea = document.getElementById('cert-custom-content');
  if (textArea) {
    textArea.value = cert.customText || '';
  }

  // 5. Render A4 Live Preview
  renderCertificateA4Preview();
}

// Render dynamic fields based on cert.type
function renderCertSpecificFields() {
  const container = document.getElementById('cert-specific-fields-container');
  if (!container) return;

  const cert = AppState.activeCertificate;
  const d = cert.data || {};

  if (cert.type === 'repos') {
    container.innerHTML = `
      <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" style="color: var(--primary-600);"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
        Paramètres du repos médical & arrêt de travail
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div class="form-group">
          <label class="form-label">Date de début</label>
          <input type="text" class="form-input" value="${escapeHtml(d.dateDebut || cert.date)}" oninput="onCertFieldChange('dateDebut', this.value); recalculateRepriseDate();">
        </div>
        <div class="form-group">
          <label class="form-label">Durée (jours)</label>
          <input type="number" min="1" max="180" class="form-input" value="${d.duree || 7}" oninput="onCertFieldChange('duree', this.value); recalculateRepriseDate();">
        </div>
        <div class="form-group">
          <label class="form-label">Date de reprise</label>
          <input type="text" id="field-date-reprise" class="form-input" value="${escapeHtml(d.dateReprise || computeFutureDate(cert.date, d.duree || 7))}" oninput="onCertFieldChange('dateReprise', this.value)">
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Motif / Indication médicale</label>
          <input type="text" class="form-input" value="${escapeHtml(d.motif || '')}" placeholder="ex: Syndrome infectieux fébrile" oninput="onCertFieldChange('motif', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">Observations</label>
          <input type="text" class="form-input" value="${escapeHtml(d.observations || '')}" placeholder="ex: Repos strict à domicile" oninput="onCertFieldChange('observations', this.value)">
        </div>
      </div>
    `;
  } else if (cert.type === 'aptitude') {
    container.innerHTML = `
      <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" style="color: var(--primary-600);"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        Paramètres d'aptitude physique
      </div>
      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 12px; margin-bottom: 12px;">
        <div class="form-group">
          <label class="form-label">Type d'activité</label>
          <select class="form-select" onchange="onCertFieldChange('activityType', this.value)">
            <option value="Sport" ${d.activityType === 'Sport' ? 'selected' : ''}>Pratique sportive</option>
            <option value="Travail" ${d.activityType === 'Travail' ? 'selected' : ''}>Aptitude au travail</option>
            <option value="Scolaire" ${d.activityType === 'Scolaire' ? 'selected' : ''}>Activités scolaires</option>
            <option value="Autre" ${d.activityType === 'Autre' ? 'selected' : ''}>Autre activité</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Activité / Discipline</label>
          <input type="text" class="form-input" value="${escapeHtml(d.activity || 'Pratique de la natation')}" placeholder="ex: Football en compétition" oninput="onCertFieldChange('activity', this.value)">
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1.2fr 1.8fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Résultat d'aptitude</label>
          <select class="form-select" onchange="onCertFieldChange('resultat', this.value)">
            <option value="Apte sans contre-indication apparente" ${d.resultat && d.resultat.includes('Apte sans') ? 'selected' : ''}>Apte sans contre-indication</option>
            <option value="Inapte temporairement" ${d.resultat && d.resultat.includes('Inapte') ? 'selected' : ''}>Inapte temporairement</option>
            <option value="Apte avec restrictions" ${d.resultat && d.resultat.includes('restrictions') ? 'selected' : ''}>Apte avec restrictions</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Observations cliniques</label>
          <input type="text" class="form-input" value="${escapeHtml(d.observations || '')}" placeholder="ex: Examen cardio-vasculaire normal" oninput="onCertFieldChange('observations', this.value)">
        </div>
      </div>
    `;
  } else if (cert.type === 'descriptif') {
    container.innerHTML = `
      <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" style="color: var(--primary-600);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Constatations médicales descriptives
      </div>
      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 12px; margin-bottom: 12px;">
        <div class="form-group">
          <label class="form-label">Date du constat</label>
          <input type="text" class="form-input" value="${escapeHtml(d.dateConstat || cert.date)}" oninput="onCertFieldChange('dateConstat', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">Motif du certificat</label>
          <input type="text" class="form-input" value="${escapeHtml(d.motif || '')}" placeholder="ex: Constatation de lésions traumatiques" oninput="onCertFieldChange('motif', this.value)">
        </div>
      </div>
      <div class="form-group" style="margin-bottom: 12px;">
        <label class="form-label">Constat médical détaillé</label>
        <textarea class="cert-textarea" rows="3" placeholder="Description des lésions, ecchymoses, signes cliniques..." oninput="onCertFieldChange('constat', this.value)">${escapeHtml(d.constat || '')}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Conclusion médicale / ITT éventuelle</label>
        <input type="text" class="form-input" value="${escapeHtml(d.conclusion || '')}" placeholder="ex: ITT de 4 jours, sans complication" oninput="onCertFieldChange('conclusion', this.value)">
      </div>
    `;
  } else if (cert.type === 'reprise') {
    container.innerHTML = `
      <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" style="color: var(--primary-600);"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Modalités de reprise d'activité
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div class="form-group">
          <label class="form-label">Date d'arrêt initial</label>
          <input type="text" class="form-input" value="${escapeHtml(d.dateArret || computePastDate(cert.date, 10))}" oninput="onCertFieldChange('dateArret', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">Date de reprise effective</label>
          <input type="text" class="form-input" value="${escapeHtml(d.dateReprise || cert.date)}" oninput="onCertFieldChange('dateReprise', this.value)">
        </div>
      </div>
      <div style="display: grid; grid-template-columns: 1.2fr 1.8fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Avis médical</label>
          <select class="form-select" onchange="onCertFieldChange('avis', this.value)">
            <option value="Apte à la reprise de ses fonctions sans restriction" ${d.avis && d.avis.includes('sans restriction') ? 'selected' : ''}>Apte sans restriction</option>
            <option value="Apte avec aménagement temporaire du poste" ${d.avis && d.avis.includes('aménagement') ? 'selected' : ''}>Apte avec aménagement</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Recommandations</label>
          <input type="text" class="form-input" value="${escapeHtml(d.recommandations || 'Reprise progressive normale')}" oninput="onCertFieldChange('recommandations', this.value)">
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary); margin-bottom: 12px;">
        Champs personnalisés
      </div>
      <div class="form-group">
        <label class="form-label">Objet / Motif</label>
        <input type="text" class="form-input" value="${escapeHtml(d.motif || '')}" placeholder="ex: Attestation de présence ou situation particulière" oninput="onCertFieldChange('motif', this.value)">
      </div>
    `;
  }
}

// Recalculate reprise date when start date or duration changes
function recalculateRepriseDate() {
  const cert = AppState.activeCertificate;
  if (!cert || cert.type !== 'repos') return;

  const d = cert.data || {};
  const newReprise = computeFutureDate(d.dateDebut || cert.date, d.duree || 7);
  d.dateReprise = newReprise;
  const el = document.getElementById('field-date-reprise');
  if (el) el.value = newReprise;

  regenerateCertTextFromFields();
}

// Field changed handler
function onCertFieldChange(field, value) {
  if (!AppState.activeCertificate) return;
  if (!AppState.activeCertificate.data) AppState.activeCertificate.data = {};
  AppState.activeCertificate.data[field] = value;
  regenerateCertTextFromFields();
}

// Title changed handler
function onCertTitleChange(value) {
  if (!AppState.activeCertificate) return;
  AppState.activeCertificate.title = value.trim() || getDefaultCertTitle(AppState.activeCertificate.type);
  renderCertificateA4Preview();
}

// Date changed handler
function onCertDateChange(value) {
  if (!AppState.activeCertificate) return;
  AppState.activeCertificate.date = value.trim();
  regenerateCertTextFromFields();
}

// Text changed directly in the textarea
function onCertTextChange(value) {
  if (!AppState.activeCertificate) return;
  AppState.activeCertificate.customText = value;
  renderCertificateA4Preview();
}

// Regenerate text from template using active fields
function regenerateCertTextFromFields() {
  const cert = AppState.activeCertificate;
  if (!cert) return;

  const tpl = AppState.certificateTemplates.find(t => t.id === cert.templateId) || AppState.certificateTemplates[0];
  const evalText = generateEvaluatedCertText(tpl.templateText, cert);
  cert.customText = evalText;

  const textArea = document.getElementById('cert-custom-content');
  if (textArea) textArea.value = evalText;

  renderCertificateA4Preview();
}

// Evaluates {{variables}} in template text
function generateEvaluatedCertText(templateString, cert) {
  const p = cert.patient || { nomComplet: 'Nom du patient', age: 30, sexe: 'Homme' };
  const d = cert.data || {};
  const doc = AppState.doctor;

  let text = templateString || '';

  // Patient vars
  text = text.replace(/\{\{patient\.nom\}\}/g, p.nomComplet || '');
  text = text.replace(/\{\{patient\.age\}\}/g, p.age !== null && p.age !== undefined ? p.age : '');
  text = text.replace(/\{\{patient\.sexe\}\}/g, p.sexe || '');

  // Doctor vars
  let docNom = doc.name || 'Dr. Ahmed Benali';
  if (!docNom.startsWith('Dr.')) {
    docNom = `Dr. ${docNom}`;
  }
  text = text.replace(/\{\{doctor\.nom\}\}/g, docNom);
  text = text.replace(/Dr\.\s+Dr\./g, 'Dr.');
  text = text.replace(/\{\{doctor\.specialite\}\}/g, doc.title || 'Médecin généraliste');
  text = text.replace(/\{\{doctor\.numero_ordre\}\}/g, doc.orderNum || '16/4892');

  // Date
  text = text.replace(/\{\{date\}\}/g, cert.date || '05/10/2026');

  // Certificate-specific vars
  text = text.replace(/\{\{cert\.date_debut\}\}/g, d.dateDebut || cert.date);
  text = text.replace(/\{\{cert\.duree\}\}/g, d.duree || '7');
  text = text.replace(/\{\{cert\.date_reprise\}\}/g, d.dateReprise || computeFutureDate(cert.date, d.duree || 7));
  text = text.replace(/\{\{cert\.motif\}\}/g, d.motif || '');
  text = text.replace(/\{\{cert\.observations\}\}/g, d.observations || 'Néant');
  text = text.replace(/\{\{cert\.activite\}\}/g, d.activity || 'la pratique sportive');
  text = text.replace(/\{\{cert\.resultat\}\}/g, d.resultat || 'Apte');
  text = text.replace(/\{\{cert\.date_constat\}\}/g, d.dateConstat || cert.date);
  text = text.replace(/\{\{cert\.constat\}\}/g, d.constat || '');
  text = text.replace(/\{\{cert\.conclusion\}\}/g, d.conclusion || '');
  text = text.replace(/\{\{cert\.date_arret\}\}/g, d.dateArret || computePastDate(cert.date, 10));
  text = text.replace(/\{\{cert\.avis\}\}/g, d.avis || 'Apte à la reprise de ses fonctions');
  text = text.replace(/\{\{cert\.recommandations\}\}/g, d.recommandations || 'Reprise normale');
  text = text.replace(/\{\{cert\.texte_libre\}\}/g, d.texteLibre || '');

  return text;
}

// Insert variable token into textarea at cursor
function insertVariableIntoCert(variable) {
  const textarea = document.getElementById('cert-custom-content');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;

  // Evaluate variable value for real-time preview
  const cert = AppState.activeCertificate;
  const p = cert.patient;
  let valToInsert = variable;
  if (variable === '{{patient.nom}}') valToInsert = p.nomComplet;
  else if (variable === '{{patient.age}}') valToInsert = p.age ? `${p.age} ans` : '';
  else if (variable === '{{date}}') valToInsert = cert.date;
  else if (variable === '{{doctor.nom}}') valToInsert = AppState.doctor.name;
  else if (variable === '{{doctor.specialite}}') valToInsert = AppState.doctor.title;
  else if (variable === '{{doctor.numero_ordre}}') valToInsert = AppState.doctor.orderNum;

  textarea.value = text.substring(0, start) + valToInsert + text.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + valToInsert.length;
  textarea.focus();

  onCertTextChange(textarea.value);
}

// Render the Authentic A4 Certificate Document Preview
function renderCertificateA4Preview() {
  const sheet = document.getElementById('cert-a4-sheet-preview');
  if (!sheet) return;

  const cert = AppState.activeCertificate;
  if (!cert) return;

  const doc = AppState.doctor;
  const p = cert.patient || { nomComplet: 'Nom du patient non spécifié', age: null };

  // Patient block rules (Spec #21):
  // Nom, Age only if not null, SEX NEVER PRINTED
  const ageDisplay = (p.age !== null && p.age !== undefined)
    ? `<div class="a4-patient-age">A : ${p.age} ans</div>`
    : '';

  sheet.innerHTML = `
    <!-- Top Doctor Cabinet Header (Algerian Bilingual FR/AR) -->
    <div class="a4-header">
      <div class="a4-country">République Algérienne Démocratique et Populaire</div>
      <div class="a4-doctor-row">
        <div class="a4-doctor-fr">
          <div class="a4-doc-name-fr">${escapeHtml(doc.name)}</div>
          <div class="a4-doc-spec-fr">${escapeHtml(doc.title)}</div>
          <div class="a4-doc-sub-fr">${escapeHtml(doc.faculty)}</div>
          <div class="a4-doc-sub-fr">Ordre N° : ${escapeHtml(doc.orderNum)} • Agrément : ${escapeHtml(doc.agreementNum)}</div>
        </div>
        <div class="a4-doctor-ar">
          <div class="a4-doc-name-ar">${escapeHtml(doc.nameAr)}</div>
          <div class="a4-doc-spec-ar">${escapeHtml(doc.specAr)}</div>
          <div class="a4-doc-sub-ar">طبيب عام معتمد</div>
        </div>
      </div>
    </div>

    <!-- Document Official Title -->
    <div class="cert-a4-title">${escapeHtml(cert.title || getDefaultCertTitle(cert.type))}</div>

    <!-- Patient Meta Box -->
    <div class="a4-meta-block">
      <div class="a4-patient-meta">
        <span class="a4-patient-label">Patient(e)</span>
        <strong class="a4-patient-name">${escapeHtml(p.nomComplet)}</strong>
      </div>
      <div class="a4-right-meta">
        ${ageDisplay}
        <div class="a4-date-line">Fait le : ${escapeHtml(cert.date)}</div>
      </div>
    </div>

    <!-- Certificate Body (Formatted paragraphs) -->
    <div class="cert-a4-body">${escapeHtml(cert.customText || '')}</div>

    <!-- Closing & Location -->
    <div class="cert-a4-closing">
      Certificat délivré à la demande de l'intéressé(e) pour servir et valoir ce que de droit.
    </div>

    <div class="cert-a4-date-location">
      Fait à Alger, le ${escapeHtml(cert.date)}
    </div>

    <!-- Signature & Cachet Box -->
    <div class="cert-a4-signature-box">
      <div class="cert-signature-area">
        <div class="cert-signature-label">Signature et Cachet du Médecin</div>
        <div class="cert-signature-doc">${escapeHtml(doc.name)}</div>
      </div>
    </div>

    <!-- Cabinet Footer -->
    <div class="a4-footer" style="margin-top: 24px;">
      <div>${escapeHtml(doc.address)}</div>
      <div>Tél : ${escapeHtml(doc.phone)}</div>
    </div>
  `;
}

// Zoom control for certificate preview
function changeCertZoom(delta) {
  certZoomLevel = Math.min(Math.max(certZoomLevel + delta, 0.65), 1.25);
  const container = document.getElementById('cert-a4-sheet-container');
  const text = document.getElementById('cert-zoom-level-text');
  if (container) {
    container.style.transform = `scale(${certZoomLevel})`;
  }
  if (text) {
    text.textContent = `${Math.round(certZoomLevel * 100)}%`;
  }
}

// Save active certificate to recent certificates list
function saveActiveCertificate() {
  const cert = AppState.activeCertificate;
  if (!cert) return;

  if (!cert.patient) {
    alert('Veuillez sélectionner un patient.');
    return;
  }

  if (!cert.customText || !cert.customText.trim()) {
    alert('Le contenu du certificat ne peut pas être vide.');
    return;
  }

  if (cert.id) {
    // Update existing
    const idx = AppState.recentCertificates.findIndex(c => c.id === cert.id);
    if (idx !== -1) {
      AppState.recentCertificates[idx] = JSON.parse(JSON.stringify(cert));
      showToast(`Certificat pour ${cert.patient.nomComplet} mis à jour.`);
    }
  } else {
    // Create new instance
    cert.id = `cert-inst-${Date.now()}`;
    cert.patientNom = cert.patient.nomComplet;
    cert.patientAge = cert.patient.age;
    cert.patientSexe = cert.patient.sexe;
    cert.status = 'Créé';
    AppState.recentCertificates.unshift(JSON.parse(JSON.stringify(cert)));
    showToast(`Certificat pour ${cert.patient.nomComplet} enregistré.`);
  }

  saveToStorage();
  renderRecentCertificates();
  const modeEl = document.getElementById('cert-editor-instance-mode');
  if (modeEl) modeEl.textContent = 'Document enregistré';
}

function deleteRecentCertificate(certId) {
  const cert = AppState.recentCertificates.find(c => c.id === certId);
  if (!cert) return;

  if (confirm(`Supprimer ce certificat de ${cert.patientNom} (${cert.templateNom}) de l'historique ?`)) {
    AppState.recentCertificates = AppState.recentCertificates.filter(c => c.id !== certId);
    saveToStorage();
    renderRecentCertificates();
    showToast('Certificat supprimé de l\'historique.');
  }
}

// Trigger printable A4 certificate document
function triggerCertificatePrint() {
  document.body.classList.add('printing-certificate');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-certificate');
  }, 1000);
}

// ==========================================================================
// Certificate Template Creator & Editor Modal
// ==========================================================================

function openCreateCertTemplateModal() {
  editingCertTemplateId = null;
  const title = document.getElementById('modal-cert-template-title');
  if (title) title.textContent = 'Nouveau modèle de certificat';

  document.getElementById('tpl-cert-nom').value = '';
  document.getElementById('tpl-cert-type').value = 'repos';
  document.getElementById('tpl-cert-badge').value = 'Certificat';
  document.getElementById('tpl-cert-desc').value = '';
  document.getElementById('tpl-cert-text').value = "Je soussigné, {{doctor.nom}}, certifie que l'état de santé de {{patient.nom}}, âgé(e) de {{patient.age}} ans, nécessite les dispositions suivantes :\n\nCertificat délivré pour servir et valoir ce que de droit.";

  openModal('modal-cert-template');
}

function openEditCertTemplateModal(templateId) {
  const tpl = AppState.certificateTemplates.find(t => t.id === templateId);
  if (!tpl) return;

  editingCertTemplateId = templateId;
  const title = document.getElementById('modal-cert-template-title');
  if (title) title.textContent = `Modifier le modèle : ${tpl.nom}`;

  document.getElementById('tpl-cert-nom').value = tpl.nom;
  document.getElementById('tpl-cert-type').value = tpl.type;
  document.getElementById('tpl-cert-badge').value = tpl.badge || '';
  document.getElementById('tpl-cert-desc').value = tpl.description || '';
  document.getElementById('tpl-cert-text').value = tpl.templateText || '';

  openModal('modal-cert-template');
}

function insertVariableIntoTpl(variable) {
  const textarea = document.getElementById('tpl-cert-text');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;

  textarea.value = text.substring(0, start) + variable + text.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + variable.length;
  textarea.focus();
}

function saveCertTemplate() {
  const nom = document.getElementById('tpl-cert-nom').value.trim();
  const type = document.getElementById('tpl-cert-type').value;
  const badge = document.getElementById('tpl-cert-badge').value.trim() || 'Certificat';
  const desc = document.getElementById('tpl-cert-desc').value.trim();
  const text = document.getElementById('tpl-cert-text').value.trim();

  if (!nom) {
    alert('Le nom du modèle est obligatoire.');
    return;
  }
  if (!text) {
    alert('Le contenu type du document est obligatoire.');
    return;
  }

  if (editingCertTemplateId) {
    const idx = AppState.certificateTemplates.findIndex(t => t.id === editingCertTemplateId);
    if (idx !== -1) {
      AppState.certificateTemplates[idx].nom = nom;
      AppState.certificateTemplates[idx].type = type;
      AppState.certificateTemplates[idx].badge = badge;
      AppState.certificateTemplates[idx].description = desc;
      AppState.certificateTemplates[idx].templateText = text;
      showToast(`Modèle "${nom}" modifié.`);
    }
  } else {
    AppState.certificateTemplates.push({
      id: `tpl-${Date.now()}`,
      nom: nom,
      type: type,
      badge: badge,
      description: desc,
      templateText: text
    });
    showToast(`Nouveau modèle "${nom}" enregistré.`);
  }

  closeModal('modal-cert-template');
  saveToStorage();
  renderCertTemplates();
}

function deleteCertTemplate(templateId) {
  const tpl = AppState.certificateTemplates.find(t => t.id === templateId);
  if (!tpl) return;

  if (confirm(`Voulez-vous vraiment supprimer le modèle "${tpl.nom}" ?`)) {
    AppState.certificateTemplates = AppState.certificateTemplates.filter(t => t.id !== templateId);
    saveToStorage();
    renderCertTemplates();
    showToast(`Modèle "${tpl.nom}" supprimé.`);
  }
}

// Reset Prescription
function resetPrescription() {
  if (AppState.activePrescription.medicines.length > 0) {
    if (!confirm('Réinitialiser l\'ordonnance en cours ? Les médicaments saisis seront effacés.')) {
      return;
    }
  }

  AppState.activePrescription = {
    id: 'ord-' + Date.now(),
    date: '05/10/2026',
    medicines: []
  };

  saveToStorage();
  renderPrescriptionWorkspace();
  showToast('Nouvelle ordonnance vierge prête.');
}

// Save Prescription (Spec #24)
function savePrescription() {
  const ordo = AppState.activePrescription;
  const patient = AppState.activePatient;

  if (ordo.medicines.length === 0) {
    showToast('Ajoutez au moins un médicament avant d\'enregistrer l\'ordonnance.', 'warning');
    return;
  }

  if (!patient) {
    showToast('Veuillez sélectionner un patient.', 'warning');
    return;
  }

  const savedOrdo = {
    id: 'ord-hist-' + Date.now(),
    patientId: patient.id,
    date: ordo.date || '05/10/2026',
    medicines: JSON.parse(JSON.stringify(ordo.medicines))
  };

  AppState.previousPrescriptions.unshift(savedOrdo);

  patient.derniereOrdo = savedOrdo.date;
  const pIdx = AppState.patients.findIndex(p => p.id === patient.id);
  if (pIdx !== -1) {
    AppState.patients[pIdx].derniereOrdo = savedOrdo.date;
  }

  saveToStorage();
  renderPrescriptionWorkspace();
  renderHomePatients();
  renderPatientsList();
  showToast(`Ordonnance de ${patient.nomComplet} enregistrée dans l'historique !`);
}

// ==========================================================================
// Modal & Drawer Helpers
// ==========================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

function openDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.getElementById(drawerId + '-backdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  const backdrop = document.getElementById(drawerId + '-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// Toast System (Spec #30)
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==========================================================================
// Keyboard Shortcuts Matrix (Spec #26 & Tokens)
// ==========================================================================

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Esc: close any modal or drawer
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.drawer-panel.open').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.drawer-backdrop.open').forEach(b => b.classList.remove('open'));
      closeAutocomplete();
      return;
    }

    // Ctrl+N: Nouvelle ordonnance
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'n') {
      e.preventDefault();
      resetPrescription();
      navigateTo('prescription');
      return;
    }

    // Ctrl+S: Enregistrer
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      savePrescription();
      return;
    }

    // Ctrl+P: Imprimer
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      triggerPrint();
      return;
    }

    // Ctrl+K: Global search focus
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const globalSearch = document.getElementById('global-search-input');
      if (globalSearch) globalSearch.focus();
      return;
    }
  });
}

// ==========================================================================
// Initialization on Load
// ==========================================================================

window.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  updateDoctorUI();
  setupMedicineSearch();
  setupKeyboardShortcuts();
  navigateTo('prescription'); // Start directly on the primary workflow view
});
