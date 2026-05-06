/* --- DICTIONNAIRE DE TRADUCTION --- */
/* --- DICTIONNAIRE DE TRADUCTION --- */
/* --- DICTIONNAIRE DE TRADUCTION --- */
/* --- DICTIONNAIRE DE TRADUCTION --- */
const dict = {
    fr: {
        new_model: " + NOUVEAU MODÈLE", logbook_btn: "📓 JOURNAL DES VOLS", back: "RETOUR", config: "CONFIG",
        settings_title: "PARAMÈTRES", language: "LANGUE", theme: "THÈME", global_calc: "Calcul Global",
        opt_title: "OPTIMISATION", opt_desc: "Réglages des limites acceptables pour l'algorithme.",
        lbl_tol_w_min: "Tol. Poids Moins (-g)", lbl_tol_w_max: "Tol. Poids Plus (+g)",
        lbl_tol_cg_plus: "Tol. CG + (mm)", lbl_tol_cg_min: "Tol. CG - (mm)",
        gl_desc: "Définissez la courbe de ballastage pour un planeur standard.",
        pt1: "POINT 1 (Léger/Vide)", pt2: "POINT 2 (Lourd/Max)", lbl_weight_kg: "Poids (kg)",
        ref_surf: "Surface Référence (dm²)", res_int: "Résultat interne:",
        stat_target: "CIBLE", stat_current: "ACTUEL", stat_cg: "CG (mm)", wind: "Vent (m/s)", factor: "Facteur %", optimize: "🪄 OPTIMISER",
        clear_all: "Tout Vider", ph_slope: "Pente", ph_time: "Chrono", save_flight: "💾 ENREGISTRER",
        mass_g: "MASSE (g)", adj_cg: "Ajust. CG",
        
        edit_title: "ÉDITION DU MODÈLE", 
        lbl_name: "Nom du modèle", 
        lbl_empty_w: "Poids à vide (g)", 
        lbl_empty_cg: "Centrage à vide (mm)", 
        lbl_area: "Surface Ailaire (dm²)", 
        lbl_target_cg: "Centrage Cible (mm)",
        desc_nose: "Distance mesurée entre la soute de nez et le Bord d'Attaque.",
        chambers_title: "CONFIGURATION DES BALLASTS", 
        add_chamber: "+ Ajouter une soute", 
        lbl_color: "Coul.",
        lbl_ch_name: "Nom Soute",
        lbl_grp: "Lien", 
        lbl_dist: "Dist. Bord d'Attaque ", 
        lbl_max: "Capacité Max (Qté)", 
        lbl_unit_mass: "Poids d'un élément (g)", 
        lbl_stock: "Stock Disponible (Qté)", 
        ph_stock: "Stock",

        save: "SAUVEGARDER", cancel: "ANNULER", delete_model: "SUPPRIMER",
        duplicate_model: "DUPLIQUER", copy_suffix: " (Copie)", export_model: "EXPORTER MODÈLE",
        logbook_title: "JOURNAL", help_title: "AIDE", mat_brass: "LAITON", mat_lead: "PLOMB", mat_tung: "TUNG.",
        alert_saved: "Vol enregistré !", alert_copied: "Copié !", msg_del_log: "Supprimer ce vol ?", msg_del_mod: "Supprimer ce modèle ?", msg_reset: "Vider les ballasts ?",
        msg_note: "Note du vol :", yes: "OUI", no: "NON", charge: "Charge", cible_short: "Cible",
        all_models: "TOUS MODÈLES", all_slopes: "TOUTES PENTES", nose_title: "SOUTE NEZ (MANUEL)",
        data_title: "DONNÉES & SAUVEGARDE", data_desc: "Sauvegardez l'intégralité de vos modèles et vols.",
        export_all: "EXPORTER TOUT (.json)", import_btn: "IMPORTER",
        msg_import_success: "Importation réussie !", msg_import_err: "Erreur lors de l'import.",
        msg_replace_all: "Attention : Ceci va REMPLACER tous vos modèles et logs actuels. Continuer ?",
        msg_add_model: "Modèle détecté : ", msg_add_model_q: "Voulez-vous l'ajouter à votre liste ?",
        help_html: `
        <h3>1. Accueil (Gestion de la flotte planeur)</h3>
        <ul>
            <li><strong>Liste des planeurs :</strong> Affiche vos modèles enregistrés avec leur poids à vide. Appuyez sur un nom pour ouvrir le calculateur.</li>
            <li><strong>Bouton "+" (Nouveau Modèle) :</strong> Pour créer une nouvelle fiche technique.</li>
            <li><strong>Journal des Vols :</strong> Accès à l'historique de vos sessions passées.</li>
            <li><strong>Icônes du haut :</strong> Le "?" ouvre l'aide rapide et l'icône "Engrenage" ouvre les réglages globaux.</li>
        </ul>

        <h3>2. Création et Édition d'un Modèle (Vue "CONFIG")</h3>
        <p>C’est l'étape la plus importante pour la précision des calculs.</p>
        <ul>
            <li><strong>Nom :</strong> Le nom de votre planeur (ex: Pitbull 2, Freestyler 6).</li>
            <li><strong>Poids Vide & CG Vide :</strong> Le poids et le centre de gravité mesurés sans aucun lest.</li>
            <li><strong>Surf. dm² FAI :</strong> La surface totale de l'aile et du stab. Elle est utilisée pour la "Règle de 3" par rapport à la surface de référence.</li>
            <li><strong>CG Cible :</strong> Le CG idéal auquel vous souhaitez voler (l'application cherchera à s'en rapprocher au maximum).</li>
        </ul>
        <p><strong>Gestion des Chambres :</strong></p>
        <ul>
            <li><strong>Dist :</strong> La distance entre le centre de la chambre et le bord d’attaque. Positif pour l’arrière, négatif pour la soute de nez.</li>
            <li><strong>Qté Max :</strong> Nombre de gueuses que la chambre peut contenir.</li>
            <li><strong>Masses Unitaires :</strong> Le poids d'une seule gueuse pour chaque matière (Laiton, Plomb, Tungstène).</li>
            <li><strong>Stock :</strong> Indiquez combien de gueuses vous possédez réellement pour chaque matière. Si vous laissez vide ou mettez 0, la colonne n'apparaîtra pas dans le calculateur.</li>
            <li><strong>Soute nez :</strong> Cette soute ne rentre pas en compte dans l’optimisation. Elle est présente à titre indicatif. Vous pouvez soit retirer soit rajouter du plomb pour ajuster le CG.</li>
            <li><strong>Distance Soute Nez :</strong> Indiquez la distance entre la soute de nez et le Bord d'Attaque (le calcul additionnera cette distance au CG pour trouver le bras de levier).</li>
        </ul>

        <h3>3. Le Calculateur (Vue "Optimisation")</h3>
        <p>C’est la vue que vous utiliserez sur la pente.</p>
        <ul>
            <li><strong>Vent (m/s) :</strong> Entrez la force du vent mesurée.</li>
            <li><strong>Facteur % :</strong> Permet d'ajuster la charge. Ex : 100% pour un ballast standard, 85% si la pente ne porte pas, 110% si la pente porte énormément.</li>
            <li><strong>Cible (Zone grise) :</strong> Le poids total idéal calculé par l'algorithme selon le vent et la surface du planeur.</li>
            <li><strong>Actuel (Zone centrale) :</strong> Affiche votre poids total en temps réel et votre charge alaire (g/dm²).</li>
            <li><strong>CG (mm) :</strong> Affiche le CG résultant de votre ballastage. Il devient VERT s'il est dans vos tolérances, ROUGE s'il s'en éloigne trop.</li>
        </ul>

        <h3>4. L'Optimisation Automatique (Baguette Magique)</h3>
        <p>Le bouton "Optimiser" remplit automatiquement vos chambres en quelques millisecondes.</p>
        <ul>
            <li><strong>Priorité n°1 :</strong> Ne jamais dépasser vos tolérances de sécurité.</li>
            <li><strong>Priorité n°2 :</strong> Obtenir le CG le plus proche possible de votre cible (quitte à mettre moins de poids).</li>
            <li><strong>Priorité n°3 :</strong> Atteindre le poids cible.</li>
        </ul>
        <p><strong>Astuce :</strong> Le mode manuel est toujours actif quelque soit les paramètres. Ajustez manuellement les plombs en cliquant sur les noms des chambres pour les dérouler.</p>

        <h3>5. Enregistrement des Vols</h3>
        <p>En bas du calculateur, vous pouvez documenter votre vol.</p>
        <ul>
            <li><strong>Pente :</strong> Le nom du lieu.</li>
            <li><strong>Chrono :</strong> Votre temps sur la base (ex: 35.52).</li>
            <li><strong>Note :</strong> Appuyez sur "Enregistrer" pour ouvrir une fenêtre de commentaire (ex: Ressenti un peu arrière, Conditions stables).</li>
        </ul>
        <p>Le vol est alors sauvegardé avec le poids exact, le CG et le lieu de ce moment-là.</p>

        <h3>6. Paramètres Globaux (⚙️)</h3>
        <p>Réglages pour personnaliser le comportement de l'app.</p>
        <ul>
            <li><strong>Tolérances Poids/CG :</strong> Définit à partir de quand les chiffres deviennent rouges. Ex : Une tolérance CG de 0.5mm est stricte, 2mm est plus souple.</li>
            <li><strong>Coefficients A et B :</strong> Définit la "nervosité" du ballastage.</li>
            <ul>
                <li><strong>Valeurs par défaut :</strong> Ballastage lourd (typé compétition F3F bord de mer).</li>
                <li><strong>Valeurs Aeromod (A=0.1 / B=2.0) :</strong> Plus adapté au vol de pente loisir/montagne.</li>
            </ul>
            <li><strong>Surface de Référence :</strong> La surface sur laquelle est basée la formule (généralement 62 dm² pour un planeur de 2300gr et 2m90 d’envergure). Ne la changez que si vous voulez redéfinir toute votre logique de calcul.</li>
        </ul>

        <h3>7. Journal et Export</h3>
        <ul>
            <li><strong>Filtres :</strong> Vous pouvez trier vos vols par modèle ou par pente.</li>
            <li><strong>Bouton CSV :</strong> Exporte tout votre historique. Vous pouvez le coller dans un Excel ou l'envoyer par email pour analyser vos performances à tête reposée.</li>
        </ul>

        <h3>8. Mode Hors-Ligne (Zone Blanche)</h3>
        <p>L'application est conçue pour fonctionner sans internet une fois la première visite effectuée.</p>
        <ul>
            <li><strong>Installation :</strong> Sur iPhone, utilisez Safari > Partager > "Sur l'écran d'accueil".</li>
            <li><strong>Utilisation :</strong> L'icône apparaît sur votre téléphone. Même en mode avion au sommet d'une montagne, vos données et le calculateur restent 100% fonctionnels. Toutes les données sont stockées localement dans votre téléphone.</li>
        </ul>
        `
    },
    en: {
        new_model: "+ NEW MODEL", logbook_btn: "Flight Logs", back: "BACK", config: "CONFIG",
        settings_title: "SETTINGS", language: "LANGUAGE", theme: "THEME", global_calc: "Global Calc",
        opt_title: "OPTIMIZATION", opt_desc: "Acceptable limit settings.",
        lbl_tol_w_min: "Tol. Weight Minus (-g)", lbl_tol_w_max: "Tol. Weight Plus (+g)",
        lbl_tol_cg_plus: "Tol. CG + (mm)", lbl_tol_cg_min: "Tol. CG - (mm)",
        gl_desc: "Define the ballast curve.", pt1: "POINT 1 (Light)", pt2: "POINT 2 (Heavy)", lbl_weight_kg: "Weight (kg)",
        ref_surf: "Reference Area (dm²)", res_int: "Internal result:",
        stat_target: "TARGET", stat_current: "CURRENT", stat_cg: "CG (mm)", wind: "Wind (m/s)", factor: "Factor %", optimize: "🪄 OPTIMIZE",
        clear_all: "Clear All", ph_slope: "Slope", ph_time: "Time", save_flight: "💾 SAVE FLIGHT",
        mass_g: "MASS (g)", adj_cg: "CG Adj.",
        
        edit_title: "EDIT MODEL", 
        lbl_name: "Model Name", 
        lbl_empty_w: "Empty Weight (g)", 
        lbl_empty_cg: "Empty CG (mm)", 
        lbl_area: "Wing Area (dm²)", 
        lbl_target_cg: "Target CG (mm)",
        desc_nose: "Distance between nose ballast and Leading Edge.",
        chambers_title: "BALLAST CHAMBERS", 
        add_chamber: "+ Add Chamber", 
        lbl_color: "Col.",
        lbl_ch_name: "Chamber Name",
        lbl_grp: "Stock Link (ID)", 
        lbl_dist: "Dist. to LE (mm)", 
        lbl_max: "Max Cap. (Qty)", 
        lbl_unit_mass: "Unit Mass (g)", 
        lbl_stock: "Stock Avail. (Qty)", 
        ph_stock: "Stock",

        save: "SAVE", cancel: "CANCEL", delete_model: "DELETE MODEL",
        duplicate_model: "DUPLICATE", copy_suffix: " (Copy)", export_model: "EXPORT MODEL",
        logbook_title: "LOGBOOK", help_title: "HELP", mat_brass: "BRASS", mat_lead: "LEAD", mat_tung: "TUNG.",
        alert_saved: "Flight Saved!", alert_copied: "Copied!", msg_del_log: "Delete flight?", msg_del_mod: "Delete model?", msg_reset: "Reset ballast?",
        msg_note: "Flight Note:", yes: "YES", no: "NO", charge: "Load", cible_short: "Target",
        all_models: "ALL MODELS", all_slopes: "ALL SLOPES", nose_title: "NOSE BALLAST",
        data_title: "DATA & BACKUP", data_desc: "Backup all your models and logs.",
        export_all: "EXPORT ALL (.json)", import_btn: "IMPORT",
        msg_import_success: "Import successful!", msg_import_err: "Error importing.",
        msg_replace_all: "Replace all data?", msg_add_model: "Model detected: ", msg_add_model_q: "Add to list?",
        help_html: `
        <h3>1. Home</h3>
        <ul><li>List, New Model, Logs.</li></ul>
        <h3>2. Config</h3>
        <ul><li>Empty Weight/CG: Without ballast.</li><li>Use 'Stock Link' ID to share ballast between chambers.</li></ul>
        <h3>3. Calculator</h3>
        <ul><li>Set Wind & Factor.</li><li>Press Optimize to fill ballast automatically.</li></ul>
        `
    },
    es: {
        new_model: "+ NUEVO MODELO", logbook_btn: "📓 REGISTRO DE VUELOS", back: "VOLVER", config: "CONFIG",
        settings_title: "AJUSTES", language: "IDIOMA", theme: "TEMA", global_calc: "Cálculo Global",
        opt_title: "OPTIMIZACIÓN", opt_desc: "Ajustes de límites aceptables.",
        lbl_tol_w_min: "Tol. Peso Menos (-g)", lbl_tol_w_max: "Tol. Peso Más (+g)",
        lbl_tol_cg_plus: "Tol. CDG + (mm)", lbl_tol_cg_min: "Tol. CDG - (mm)",
        gl_desc: "Definir curva de lastre.", pt1: "PUNTO 1 (Vacío)", pt2: "PUNTO 2 (Cargado)", lbl_weight_kg: "Peso (kg)",
        ref_surf: "Superficie Ref. (dm²)", res_int: "Resultado interno:",
        stat_target: "OBJETIVO", stat_current: "ACTUAL", stat_cg: "CDG (mm)", wind: "Viento (m/s)", factor: "Factor %", optimize: "🪄 OPTIMIZAR",
        clear_all: "Vaciar Todo", ph_slope: "Ladera", ph_time: "Crono", save_flight: "💾 GUARDAR VUELO",
        mass_g: "MASA (g)", adj_cg: "Ajuste CDG",
        
        edit_title: "EDITAR MODELO", 
        lbl_name: "Nombre del modelo", 
        lbl_empty_w: "Peso en vacío (g)", 
        lbl_empty_cg: "CDG en vacío (mm)", 
        lbl_area: "Superficie Alar (dm²)", 
        lbl_target_cg: "CDG Objetivo (mm)",
        desc_nose: "Distancia entre el lastre de morro y el Borde de Ataque.",
        chambers_title: "CONFIGURACIÓN DE LASTRES", 
        add_chamber: "+ Añadir Cámara", 
        lbl_color: "Col.",
        lbl_ch_name: "Nombre Cámara",
        lbl_grp: "Vincular Stock (ID)", 
        lbl_dist: "Dist. Borde Ataque (mm)", 
        lbl_max: "Capacidad Máx (Cant)", 
        lbl_unit_mass: "Peso unitario (g)", 
        lbl_stock: "Stock Dispon. (Cant)", 
        ph_stock: "Stock",

        save: "GUARDAR", cancel: "CANCELAR", delete_model: "ELIMINAR",
        duplicate_model: "DUPLICAR", copy_suffix: " (Copia)", export_model: "EXPORTAR MODELO",
        logbook_title: "REGISTRO", help_title: "AYUDA", mat_brass: "LATÓN", mat_lead: "PLOMO", mat_tung: "TUNGST.",
        alert_saved: "¡Vuelo guardado!", alert_copied: "¡Copiado!", msg_del_log: "¿Borrar vuelo?", msg_del_mod: "¿Borrar modelo?", msg_reset: "¿Vaciar lastres?",
        msg_note: "Nota:", yes: "SÍ", no: "NO", charge: "Carga", cible_short: "Objet.",
        all_models: "TODOS MODELOS", all_slopes: "TODAS LADERAS", nose_title: "LASTRE MORRO",
        data_title: "DATOS Y COPIA", data_desc: "Copia de seguridad de modelos.",
        export_all: "EXPORTAR TODO (.json)", import_btn: "IMPORTAR",
        msg_import_success: "¡Importación exitosa!", msg_import_err: "Error al importar.",
        msg_replace_all: "¿Reemplazar todos los datos?", msg_add_model: "Modelo detectado: ", msg_add_model_q: "¿Añadir a la lista?",
        help_html: `
        <h3>1. Inicio (Flota)</h3>
        <ul>
            <li><strong>Lista:</strong> Modelos guardados. Toque para abrir el calculador.</li>
            <li><strong>"+":</strong> Crear nuevo modelo.</li>
            <li><strong>Registro:</strong> Historial de vuelos.</li>
        </ul>
        <h3>2. Configuración</h3>
        <ul>
            <li><strong>Peso/CDG Vacío:</strong> Medidos sin lastre.</li>
            <li><strong>CDG Objetivo:</strong> El CDG ideal de vuelo.</li>
        </ul>
        <p><strong>Cámaras de Lastre:</strong></p>
        <ul>
            <li><strong>Dist:</strong> Distancia (mm) al Borde de Ataque.</li>
            <li><strong>Stock:</strong> "0" para ocultar. "999" para ilimitado.</li>
            <li><strong>Vincular (ID):</strong> Use el mismo ID para compartir el stock físico.</li>
        </ul>
        <h3>3. Calculador</h3>
        <ul>
            <li><strong>Viento:</strong> Velocidad medida.</li>
            <li><strong>Objetivo:</strong> Peso ideal calculado.</li>
            <li><strong>Actual:</strong> Peso real con lastre.</li>
            <li><strong>Optimizar 🪄:</strong> Calcula la mejor carga automáticamente.</li>
        </ul>
        `
    }
};

/* --- VARIABLES D'ÉTAT --- */
let gliders = [], flightLogs = [], globalCoefs = { a: 0.16, b: 1.82, refArea: 62, v1:3, m1:2.3, v2:20, m2:5.0 }, currentGliderId = null, tempGlider = null;
let optParams = { wMin: 75, wMax: 20, cgTolPlus: 0.5, cgTolMinus: 0.5 };
let currentLang = localStorage.getItem('f3f_lang') || 'fr';
let currentTheme = localStorage.getItem('f3f_theme_style') || 'cyber';

/* --- FONCTIONS UTILITAIRES --- */
function t(key) { return (dict[currentLang] && dict[currentLang][key]) ? dict[currentLang][key] : key; }

function hexToRgba(hex, alpha) {
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){ c= [c[0], c[0], c[1], c[1], c[2], c[2]]; }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
    }
    return 'rgba(255,255,255,0.05)';
}

function calculateAB() {
    let x1 = parseFloat(globalCoefs.v1);
    let y1 = parseFloat(globalCoefs.m1); 
    let x2 = parseFloat(globalCoefs.v2);
    let y2 = parseFloat(globalCoefs.m2);
    
    // Protection division par zéro
    if (x2 === x1) x2 += 0.1; 
    
    globalCoefs.a = (y2 - y1) / (x2 - x1);
    globalCoefs.b = y1 - (globalCoefs.a * x1);

    // NOUVEAU : Affichage dans le HTML
    const elA = document.getElementById('disp-coef-a');
    const elB = document.getElementById('disp-coef-b');
    if(elA) elA.innerText = globalCoefs.a.toFixed(3);
    if(elB) elB.innerText = globalCoefs.b.toFixed(3);
}

function getCalculatedTargetWeight(w, f, gliderArea) {
    if (isNaN(w) || isNaN(f)) return 0;
    let baseTarget = (globalCoefs.a * w + globalCoefs.b) * 1000;
    let ratio = (gliderArea && gliderArea > 0 && globalCoefs.refArea > 0) ? gliderArea / globalCoefs.refArea : 1;
    return baseTarget * ratio * (f/100);
}

function getEffectiveStock(g, idx, typeFull) {
    const c = g.chambers[idx];
    const stockKey = 'stock_' + typeFull;
    if(c.group && c.group > 0) {
        let totalGroupStock = 0;
        g.chambers.forEach(ch => { if(ch.group == c.group) { totalGroupStock += (parseFloat(ch[stockKey]) || 0); } });
        return { val: totalGroupStock, isGroup: true };
    }
    return { val: (parseFloat(c[stockKey]) || 0), isGroup: false };
}

/* --- AFFICHAGE & NAVIGATION --- */
window.navigateTo = function(v, id=null) { 
    if(id) currentGliderId=id; 
    history.pushState({v,id}, ""); 
    showView(v); 
};
window.onpopstate = e => showView(e.state ? e.state.v : 'home');

function showView(n) {
    document.querySelectorAll('body > div:not(#custom-modal-overlay)').forEach(v => v.classList.add('hidden'));
    const view = document.getElementById('view-'+n);
    if(view) view.classList.remove('hidden');
    if(n==='home') renderList(); 
    if(n==='calc') renderCalc(); 
    if(n==='logbook') showLogbook();
}

window.showModal = function(msg, withInp, btns, cb, def="") {
    const o = document.getElementById('custom-modal-overlay'), m = document.getElementById('modal-msg'), i = document.getElementById('modal-input-field'), b = document.getElementById('modal-buttons');
    m.innerText = msg; b.innerHTML = '';
    if(withInp) { i.classList.remove('hidden'); i.value = def; } else i.classList.add('hidden');
    btns.forEach(x => { 
        const btn = document.createElement('button'); btn.className = 'btn '+x.cl; btn.innerText = x.tx; 
        btn.onclick = () => { o.style.display='none'; cb(x.val==='inp'?i.value:x.val); }; 
        b.appendChild(btn); 
    });
    o.style.display='flex';
};
window.customAlert = function(msg) { window.showModal(msg, false, [{tx:"OK", cl:"btn-primary", val:true}], () => {}); };

window.changeLang = function(l) { currentLang = l; localStorage.setItem('f3f_lang', l); updateUITexts(); };
window.setTheme = function(name) {
    currentTheme = name;
    document.body.setAttribute('data-theme', name);
    localStorage.setItem('f3f_theme_style', name);
};

function updateUITexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => el.innerText = t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
    document.getElementById('help-content').innerHTML = t('help_html');
    if(!document.getElementById('view-calc').classList.contains('hidden')) renderCalc();
}

/* --- RENDER FUNCTIONS --- */
function renderList() {
    const l = document.getElementById('glider-list'); l.innerHTML = '';
    gliders.forEach(g => {
        const d = document.createElement('div'); d.className = 'glider-item';
        d.innerHTML = `<div><div style="font-family:var(--font-head); font-weight:bold;">${g.name}</div><div style="font-size:0.75rem; opacity:0.6; font-family:var(--font-num);">${g.emptyW}g</div></div><div>›</div>`;
        d.onclick = () => window.navigateTo('calc', g.id); l.appendChild(d);
    });
}

function renderCalc() {
    const g = gliders.find(x => x.id == currentGliderId); 
    if(!g) { console.error("Config Error"); return; }

    document.getElementById('calc-title').innerText = g.name;
    document.getElementById('inp-wind').value = g.lastWind || 3.5;
    document.getElementById('rng-wind').value = g.lastWind || 3.5;
    document.getElementById('inp-factor').value = g.lastFactor || 100;
    document.getElementById('rng-factor').value = g.lastFactor || 100;

    // Nose UI
    const noseContainer = document.getElementById('nose-ballast-container');
    const noseColor = g.noseColor || '#d63384';
    const noseMass = g.noseMass || 0;
    noseContainer.innerHTML = `
        <div class="ballast-line ${noseMass<=0 ? 'collapsed' : ''} nose-card" id="nose-ballast-ui" onclick="if(event.target.tagName!=='BUTTON' && event.target.tagName!=='INPUT') this.classList.toggle('collapsed')">
            <div class="ballast-title-row">
                <div style="display:flex; align-items:center;"><span style="font-weight:bold; font-family:var(--font-head); color:${noseColor};">${t('nose_title')}</span></div>
                <div style="display:flex; align-items:center;"><span style="font-family:var(--font-num); font-size:0.9rem;">${noseMass}g</span><span class="toggle-icon">▶</span></div>
            </div>
            <div class="mix-controls" style="border-top:none;">
                <div class="mix-col nose" style="width:100%">
                    <div class="mix-info"><span class="mix-label" style="color:${noseColor}">${t('mass_g')}</span></div>
                    <div class="ctrl-row">
                        <button class="mix-btn" onclick="window.updNose(event, -5)">-</button>
                        <input type="number" class="nose-val mix-val" value="${noseMass}" onchange="window.updNose(event, 0, this.value)" style="border:none; background:transparent; color:${noseColor}">
                        <button class="mix-btn" onclick="window.updNose(event, 5)">+</button>
                    </div>
                </div>
            </div>
        </div>`;
    const noseEl = document.getElementById('nose-ballast-ui');
    noseEl.style.borderColor = noseColor; noseEl.style.background = hexToRgba(noseColor, 0.1);

    const l = document.getElementById('calc-list'); l.innerHTML = '';
    if(!g.loadout) g.loadout = new Array(g.chambers.length).fill({b:0, l:0, t:0});

    const getGroupUsage = (grpId, type) => { let u = 0; g.chambers.forEach((ch, idx) => { if(ch.group == grpId) u += g.loadout[idx][type]; }); return u; };

    g.chambers.forEach((c,i) => {
        const L = g.loadout[i];
        const d = document.createElement('div');
        let mB = c.mass_brass || 0, mL = c.mass_lead || 0, mT = c.mass_tungsten || 0;
        let currentChamberMass = (L.b * mB) + (L.l * mL) + (L.t * mT);
        let totalCount = L.b + L.l + L.t;
        
        const effB = getEffectiveStock(g, i, 'brass');
        const effL = getEffectiveStock(g, i, 'lead');
        const effT = getEffectiveStock(g, i, 'tungsten');
        const showB = (effB.val > 0 || L.b > 0) && mB > 0;
        const showL = (effL.val > 0 || L.l > 0) && mL > 0;
        const showT = (effT.val > 0 || L.t > 0) && mT > 0;
        
        d.className = `ballast-line ${currentChamberMass > 0 ? '' : 'collapsed'}`;
        d.onclick = (e) => { if(e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return; d.classList.toggle('collapsed'); };
        
        const txtStkB = effB.isGroup ? `Link` : (effB.val > 0 ? (effB.val - L.b) : '0');
        const txtStkL = effL.isGroup ? `Link` : (effL.val > 0 ? (effL.val - L.l) : '0');
        const txtStkT = effT.isGroup ? `Link` : (effT.val > 0 ? (effT.val - L.t) : '0');
        let groupIndicator = (c.group && c.group > 0) ? `<span style="font-size:0.6rem; background:var(--primary); color:white; padding:2px 5px; border-radius:4px; margin-left:5px;">ID ${c.group}</span>` : "";
        const baseColor = c.color || '#888888';
        d.style.borderColor = baseColor; d.style.background = hexToRgba(baseColor, 0.1); 

        d.innerHTML = `
            <div class="ballast-title-row">
                <div style="display:flex; align-items:center;"><span style="font-weight:bold; font-family:var(--font-head); color:${baseColor};">${c.name}</span>${groupIndicator}</div>
                <div style="display:flex; align-items:center;"><span style="font-family:var(--font-num); font-size:0.9rem;">${currentChamberMass}g <span style="font-size:0.7rem; color:var(--text-muted);">(${totalCount}/${c.max})</span></span><span class="toggle-icon">▶</span></div>
            </div>
            <div class="mix-controls">
                <div class="mix-col brass" style="${showB?'':'display:none'}"><div class="mix-info"><span class="mix-label" style="color:var(--c-brass)">${t('mat_brass')}</span><span class="stock-tag">${txtStkB}</span></div><div class="ctrl-row"><button class="mix-btn" onclick="window.updMix(event, ${i},'b',-1)">-</button><span class="mix-val" style="color:var(--c-brass)">${L.b}</span><button class="mix-btn" onclick="window.updMix(event, ${i},'b',1)">+</button></div></div>
                <div class="mix-col lead" style="${showL?'':'display:none'}"><div class="mix-info"><span class="mix-label" style="color:var(--c-lead)">${t('mat_lead')}</span><span class="stock-tag">${txtStkL}</span></div><div class="ctrl-row"><button class="mix-btn" onclick="window.updMix(event, ${i},'l',-1)">-</button><span class="mix-val" style="color:var(--c-lead)">${L.l}</span><button class="mix-btn" onclick="window.updMix(event, ${i},'l',1)">+</button></div></div>
                <div class="mix-col tung" style="${showT?'':'display:none'}"><div class="mix-info"><span class="mix-label" style="color:var(--c-tung)">${t('mat_tung')}</span><span class="stock-tag">${txtStkT}</span></div><div class="ctrl-row"><button class="mix-btn" onclick="window.updMix(event, ${i},'t',-1)">-</button><span class="mix-val" style="color:var(--c-tung)">${L.t}</span><button class="mix-btn" onclick="window.updMix(event, ${i},'t',1)">+</button></div></div>
            </div>`;
        l.appendChild(d);
    });
    recalc(g);
}

window.updMix = function(e, idx, type, delta) {
    if(e) e.stopPropagation(); 
    const g = gliders.find(x=>x.id==currentGliderId); const L = g.loadout[idx]; const c = g.chambers[idx];
    let newVal = L[type] + delta;
    if(newVal < 0) return; 
    if(delta > 0 && (L.b + L.l + L.t) >= c.max) return; 

    let typeFull = (type==='b')?'brass':(type==='l'?'lead':'tungsten');
    let eff = getEffectiveStock(g, idx, typeFull);
    if(delta > 0 && eff.val <= 0) return;
    if(eff.val > 0) {
        if(eff.isGroup) {
            let groupUsed = 0;
            g.chambers.forEach((ch, i) => { if(ch.group == c.group) { if(i === idx) groupUsed += newVal; else groupUsed += g.loadout[i][type]; } });
            if(groupUsed > eff.val) return; 
        } else {
            if(newVal > eff.val) return;
        }
    }
    L[type] = newVal; save(); renderCalc();
};

window.updNose = function(e, delta, specificVal=null) {
    if(e) e.stopPropagation();
    const g = gliders.find(x=>x.id==currentGliderId);
    if(!g) return;
    if(specificVal !== null) { g.noseMass = parseFloat(specificVal); } else { g.noseMass = (g.noseMass || 0) + delta; }
    if(isNaN(g.noseMass)) g.noseMass = 0;
    save(); renderCalc();
};

function recalc(g) {
    if(!g) return;
    let nMass = g.noseMass || 0;
    let nDist = g.noseDist || 0;
    let m = g.emptyW + nMass;
    let mom = (g.emptyW * g.emptyCG) + (nMass * (-nDist));
    let addedMass = nMass; 
    
    g.chambers.forEach((c,i) => {
        const L = g.loadout[i];
        let mass = L.b*(c.mass_brass||0) + L.l*(c.mass_lead||0) + L.t*(c.mass_tungsten||0);
        m += mass; mom += mass * c.dist;
        addedMass += mass;
    });
    let cg = mom/m;
    
    const wEl = document.getElementById('res-weight');
    wEl.innerText = (m/1000).toFixed(3);
    
    const wVal = parseFloat(document.getElementById('inp-wind').value) || 0;
    const fVal = parseFloat(document.getElementById('inp-factor').value) || 100;
    let target = getCalculatedTargetWeight(wVal, fVal, g.area);
    let weightDiff = m - target;
    wEl.style.color = (weightDiff >= -optParams.wMin && weightDiff <= optParams.wMax) ? 'var(--success)' : 'var(--warning)';

    document.getElementById('res-cg').innerText = cg.toFixed(1);
    const diff = cg - g.target;
    const dEl = document.getElementById('cg-diff-display'); 
    dEl.innerText = (diff*-1 > 0 ? '+' : '') + (diff*-1).toFixed(1) + 'mm';
    let isCgGood = (diff >= 0) ? (diff <= optParams.cgTolPlus) : (Math.abs(diff) <= optParams.cgTolMinus);
    dEl.style.color = isCgGood ? 'var(--success)' : 'var(--danger)';
    document.getElementById('res-cg').style.color = isCgGood ? 'var(--success)' : 'var(--danger)';
    
    document.getElementById('bar-weight').style.width = Math.min((m/5000)*100, 100)+'%';
    const loadEl = document.getElementById('res-loading');
    if(g.area > 0) {
        let load = m/g.area;
        loadEl.innerText = `${load.toFixed(1)} g/dm² (+${addedMass}g)`;
        if(load > 75) { loadEl.style.color = 'var(--danger)'; loadEl.style.fontWeight = '900'; loadEl.style.fontSize = '0.9rem'; } else { loadEl.style.color = 'var(--text-muted)'; loadEl.style.fontWeight = 'normal'; loadEl.style.fontSize = '0.75rem'; }
    }
    document.getElementById('res-target-cg-disp').innerText = t('cible_short') + " " + g.target + "mm";
    document.getElementById('res-sim-target').innerText = (target/1000).toFixed(3);
}

window.syncInputs = function(type, val) {
    document.getElementById('inp-'+type).value = val;
    document.getElementById('rng-'+type).value = val;
    const g=gliders.find(x=>x.id==currentGliderId); if(!g) return;
    if(type==='wind') g.lastWind=parseFloat(val);
    if(type==='factor') g.lastFactor=parseFloat(val);
    save(); recalc(g);
};

window.autoFillBallast = function() {
    const g = gliders.find(x => x.id == currentGliderId); if(!g) return;
    const wVal = parseFloat(document.getElementById('inp-wind').value) || 0;
    const fVal = parseFloat(document.getElementById('inp-factor').value) || 100;
    let targetW = getCalculatedTargetWeight(wVal, fVal, g.area);
    if(targetW <= 0) return;

    let bestLoadout = g.loadout.map(() => ({b:0, l:0, t:0}));
    let bestScore = Infinity;
    let currentLoadout = JSON.parse(JSON.stringify(bestLoadout));
    const matMap = { 'brass': 'b', 'lead': 'l', 'tungsten': 't' };
    
    let baseM = g.emptyW + (g.noseMass||0);
    let baseMom = (g.emptyW * g.emptyCG) + ((g.noseMass||0) * -(g.noseDist||0));

    function getStats(load) {
        let m = baseM, mom = baseMom;
        g.chambers.forEach((c,i) => {
            let w = load[i].b*(c.mass_brass||0) + load[i].l*(c.mass_lead||0) + load[i].t*(c.mass_tungsten||0);
            m += w; mom += w * c.dist;
        });
        return { m, cg: (m > 0 ? mom/m : 0) };
    }

    function getCost(stats) {
        let diffW = stats.m - targetW;
        let diffCG = stats.cg - g.target; 
        let wCost = 0;
        if (diffW > optParams.wMax) wCost = (diffW - optParams.wMax) * 50.0;
        else if (diffW < -optParams.wMin) wCost = Math.abs(diffW + optParams.wMin) * 50.0;
        else wCost = Math.abs(diffW) * 0.1;
        let cgCost = 0;
        if (diffCG > 0) { if(diffCG > optParams.cgTolPlus) cgCost = (diffCG - optParams.cgTolPlus) * 10000.0; else cgCost = diffCG * 15.0; } 
        else { if(Math.abs(diffCG) > optParams.cgTolMinus) cgCost = (Math.abs(diffCG) - optParams.cgTolMinus) * 10000.0; else cgCost = Math.abs(diffCG) * 15.0; }
        return wCost + cgCost;
    }

    const getGroupUsage = (grpId, matCode, load) => { let u = 0; g.chambers.forEach((ch, idx) => { if(ch.group == grpId) u += load[idx][matCode]; }); return u; };

    for(let step=0; step<2000; step++) {
        let stats = getStats(currentLoadout);
        let score = getCost(stats);
        if (score < bestScore) { bestScore = score; bestLoadout = JSON.parse(JSON.stringify(currentLoadout)); }
        if (stats.m > targetW + optParams.wMax + 100) break;
        
        let bestMove = null; let bestMoveScore = Infinity; let hasMoves = false;
        
        g.chambers.forEach((c, i) => {
            let L = currentLoadout[i];
            if((L.b + L.l + L.t) >= c.max) return;
            ['brass', 'lead', 'tungsten'].forEach(mat => {
                let mCode = matMap[mat];
                let eff = getEffectiveStock(g, i, mat); 
                let canAdd = false;
                if(eff.val > 0) {
                    if(eff.isGroup) { if(getGroupUsage(c.group, mCode, currentLoadout) < eff.val) canAdd = true; } 
                    else { if(L[mCode] < eff.val) canAdd = true; }
                }
                if(canAdd) {
                    hasMoves = true;
                    let testLoad = JSON.parse(JSON.stringify(currentLoadout)); testLoad[i][mCode]++;
                    let h = getCost(getStats(testLoad));
                    if(mat==='lead') h -= 0.001; if(mat==='tungsten') h -= 0.002;
                    if(h < bestMoveScore) { bestMoveScore = h; bestMove = {action:'add', i, mat: mCode}; }
                }
            });
        });
        
        if(!hasMoves) break;
        if(bestMove) currentLoadout[bestMove.i][bestMove.mat]++; else break;
    }
    g.loadout = bestLoadout; save(); renderCalc();
};

/* --- DATA & IMPORT/EXPORT --- */
window.exportData = function(type) {
    let exportObj = {}, fileName = "f3f_backup.json";
    if(type === 'all') {
        exportObj = { type: 'backup_full', version: '5.24', date: new Date().toISOString(), gliders: gliders, logs: flightLogs, coefs: globalCoefs, opts: optParams };
        fileName = `f3f_full_backup_${new Date().toISOString().slice(0,10)}.json`;
    } else if (type === 'model') {
        if(!tempGlider) return;
        exportObj = { type: 'backup_model', version: '5.24', data: tempGlider };
        fileName = `${tempGlider.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
    }
    const blob = new Blob([JSON.stringify(exportObj, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = fileName;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
};

window.triggerImport = function() { document.getElementById('import-file').click(); };
document.getElementById('import-file').addEventListener('change', function() {
    const file = this.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = JSON.parse(e.target.result);
            processImport(json);
        } catch(err) { window.customAlert(t('msg_import_err')); console.error(err); }
        this.value = '';
    };
    reader.readAsText(file);
});

function processImport(data) {
    if(!data.type) { window.customAlert(t('msg_import_err')); return; }
    if(data.type === 'backup_full') {
        window.showModal(t('msg_replace_all'), false, [{tx:t('cancel'), cl:'btn-outline', val:0}, {tx:t('yes'), cl:'btn-danger', val:1}], (r) => {
            if(r) { gliders = data.gliders || []; flightLogs = data.logs || []; globalCoefs = data.coefs || globalCoefs; optParams = data.opts || optParams; save(); window.location.reload(); }
        });
    } else if (data.type === 'backup_model') {
        let m = data.data;
        window.showModal(t('msg_add_model') + m.name + ". " + t('msg_add_model_q'), false, [{tx:t('cancel'), cl:'btn-outline', val:0}, {tx:t('yes'), cl:'btn-success', val:1}], (r) => {
            if(r) { m.id = Date.now(); m.loadout = m.chambers.map(() => ({b:0, l:0, t:0})); gliders.push(m); save(); window.customAlert(t('msg_import_success')); window.navigateTo('home'); }
        });
    } else { window.customAlert(t('msg_import_err')); }
}

/* --- LOGS --- */
function updateLogFilters() {
    const mSel = document.getElementById('filter-model'), sSel = document.getElementById('filter-slope');
    const currM = mSel.value; const currS = sSel.value;
    const models = [...new Set(flightLogs.map(l => l.m))].sort(); const slopes = [...new Set(flightLogs.map(l => l.s))].sort();
    mSel.innerHTML = `<option value="">${t('all_models')}</option>` + models.map(m => `<option value="${m}">${m}</option>`).join('');
    sSel.innerHTML = `<option value="">${t('all_slopes')}</option>` + slopes.map(s => `<option value="${s}">${s}</option>`).join('');
    if(models.includes(currM)) mSel.value = currM; if(slopes.includes(currS)) sSel.value = currS;
}
window.renderLogs = function() {
    const c = document.getElementById('logs-container'), fM = document.getElementById('filter-model').value, fS = document.getElementById('filter-slope').value;
    c.innerHTML = '';
    flightLogs.filter(l => (!fM || l.m===fM) && (!fS || l.s===fS)).forEach(l => {
        const d = document.createElement('div'); d.className = 'log-card'; const dt = new Date(l.d);
        d.innerHTML = `<button class="log-del" onclick="window.confirmDeleteLog(${l.id})">×</button><div class="log-header"><div class="log-date-slope">${dt.toLocaleDateString()} | ${l.s || 'PENTE'}</div></div><div class="log-model">${l.m}</div><div class="log-stats"><span class="log-stat-item">⚖️ ${l.w}kg</span><span class="log-stat-item">🎯 ${l.cg}mm</span></div>${l.n ? `<div class="log-note">${l.n}</div>` : ''}`;
        c.appendChild(d);
    });
};
window.showLogbook = function() { updateLogFilters(); window.renderLogs(); };
window.openSaveLogModal = function() { window.showModal(t('msg_note'), true, [{tx:t('cancel'), cl:"btn-outline", val:null}, {tx:t('save_flight'), cl:"btn-primary", val:"inp"}], (n) => { if(n!==null) { const g=gliders.find(x=>x.id==currentGliderId); flightLogs.unshift({id:Date.now(), d:new Date().toISOString(), m:g.name, w:document.getElementById('res-weight').innerText, cg:document.getElementById('res-cg').innerText, s:document.getElementById('inp-slope').value.toUpperCase(), n:n, wind:document.getElementById('inp-wind').value}); save(); window.customAlert(t('alert_saved')); } }); };
window.confirmDeleteLog = function(id) { window.showModal(t('msg_del_log'), false, [{tx:t('no'), cl:"btn-outline", val:0}, {tx:t('yes'), cl:"btn-danger", val:1}], (r) => { if(r) { flightLogs = flightLogs.filter(x=>x.id!==id); save(); window.renderLogs(); updateLogFilters(); } }); };
window.exportLogsCSV = async function() { if(flightLogs.length === 0) return; let csv = "Date,Heure,Modele,Poids,Pente,Note\n"; flightLogs.forEach(l => { const dt = new Date(l.d); csv += `${dt.toLocaleDateString()},${dt.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})},${l.m},${l.w},${l.s},"${l.n}"\n`; }); try { await navigator.clipboard.writeText(csv); window.customAlert(t('alert_copied')); } catch (e) { const b = new Blob([csv], {type:'text/csv'}); const u = URL.createObjectURL(b); const a = document.createElement('a'); a.href=u; a.download='logs_F3F.csv'; a.click(); } };

/* --- CRUD MODEL --- */
window.createNewGlider = function() { tempGlider = { id: Date.now(), name: "MODÈLE", emptyW: 2200, emptyCG: 100, area: 58, target: 102, chambers: [{ name: "AILES", dist: 100, mass_brass: 150, mass_lead: 200, mass_tungsten: 300, max: 10, color: "#888888" }], loadout: [{b:0,l:0,t:0}], noseDist: 0, noseMass: 0, noseColor: "#d63384" }; renderEdit(); window.navigateTo('edit'); };
window.editCurrentGlider = function() { const g = gliders.find(x => x.id == currentGliderId); if(!g) return; tempGlider = JSON.parse(JSON.stringify(g)); renderEdit(); window.navigateTo('edit'); };
function renderEdit() { 
    document.getElementById('edit-name').value = tempGlider.name; 
    document.getElementById('edit-empty-w').value = tempGlider.emptyW; 
    document.getElementById('edit-empty-cg').value = tempGlider.emptyCG; 
    document.getElementById('edit-area').value = tempGlider.area; 
    document.getElementById('edit-target').value = tempGlider.target; 
    document.getElementById('edit-nose-dist').value = tempGlider.noseDist || 0; 
    document.getElementById('edit-nose-color').value = tempGlider.noseColor || "#d63384";
    
    const l = document.getElementById('edit-chambers-list'); 
    l.innerHTML = ''; 
    
    tempGlider.chambers.forEach((c,i) => { 
        const d = document.createElement('div'); 
        d.className = 'card'; 
        d.style.position = 'relative'; 
        const mb = c.mass_brass || '', ml = c.mass_lead || '', mt = c.mass_tungsten || '';
        const sb = c.stock_brass || '', sl = c.stock_lead || '', st = c.stock_tungsten || '';
        const gr = c.group || ''; // Si vide, c'est vide
        const clr = c.color || '#888888'; 

        d.innerHTML = `
        <button style="position:absolute; top:10px; right:10px; color:var(--danger); border:none; background:none; font-size:1.5rem;" onclick="window.rmCh(${i})">×</button>
        
        <div class="row">
            <div style="flex:0 0 50px; display:flex; flex-direction:column; align-items:center;">
                <label class="lbl-small">${t('lbl_color')}</label>
                <input type="color" value="${clr}" onchange="window.upc(${i},'color',this.value)" style="width:100%; height:35px; border:none; padding:0; background:none; cursor:pointer; margin-top:2px;">
                <div onclick="window.resetColor(${i})" style="font-size:0.8rem; cursor:pointer; color:var(--text-muted); margin-top:4px;">↺</div>
            </div>
            <div style="flex:3">
                <label class="lbl-small">${t('lbl_ch_name')}</label>
                <input value="${c.name}" onchange="window.upc(${i},'name',this.value)">
            </div>
            <div style="flex:1">
                <label class="lbl-small">${t('lbl_grp')}</label>
                <input type="number" placeholder="ID" value="${gr}" onchange="window.upc(${i},'group',this.value)" style="border-color:var(--primary)">
            </div>
        </div>
        
        <div class="row" style="margin-top:10px;">
            <div style="flex:1">
                <label class="lbl-small">${t('lbl_dist')}</label>
                <input type="number" value="${c.dist}" onchange="window.upc(${i},'dist',this.value)">
            </div>
            <div style="flex:1">
                <label class="lbl-small">${t('lbl_max')}</label>
                <input type="number" value="${c.max}" onchange="window.upc(${i},'max',this.value)">
            </div>
        </div>
        
        <div style="margin-top:10px;">
            <label class="lbl-small">${t('lbl_unit_mass')}</label>
            <div class="row">
                <input type="number" placeholder="${t('mat_brass')}" value="${mb}" onchange="window.upc(${i},'mass_brass',this.value)" style="border-bottom:2px solid var(--c-brass)">
                <input type="number" placeholder="${t('mat_lead')}" value="${ml}" onchange="window.upc(${i},'mass_lead',this.value)" style="border-bottom:2px solid var(--c-lead)">
                <input type="number" placeholder="${t('mat_tung')}" value="${mt}" onchange="window.upc(${i},'mass_tungsten',this.value)" style="border-bottom:2px solid var(--c-tung)">
            </div>
        </div>
        
        <div style="margin-top:5px;">
            <label class="lbl-small">${t('lbl_stock')}</label>
            <div class="row">
                <input type="number" placeholder="${t('ph_stock')}" value="${sb}" onchange="window.upc(${i},'stock_brass',this.value)">
                <input type="number" placeholder="${t('ph_stock')}" value="${sl}" onchange="window.upc(${i},'stock_lead',this.value)">
                <input type="number" placeholder="${t('ph_stock')}" value="${st}" onchange="window.upc(${i},'stock_tungsten',this.value)">
            </div>
        </div>`; 
        l.appendChild(d); 
    }); 
    updateUITexts(); 
}
window.rmCh = function(i) { tempGlider.chambers.splice(i,1); renderEdit(); };
window.resetColor = function(t) { if(t==='nose') { document.getElementById('edit-nose-color').value = '#d63384'; tempGlider.noseColor = '#d63384'; } else { tempGlider.chambers[t].color = '#888888'; renderEdit(); } };
window.addChamberLine = function() { tempGlider.chambers.push({name:"BALLAST", dist:0, max:5, mass_brass:0, mass_lead:0, mass_tungsten:0, color:"#888888"}); renderEdit(); };
window.duplicateGlider = function() { tempGlider.name = document.getElementById('edit-name').value; tempGlider.emptyW = parseFloat(document.getElementById('edit-empty-w').value); tempGlider.emptyCG = parseFloat(document.getElementById('edit-empty-cg').value); tempGlider.area = parseFloat(document.getElementById('edit-area').value); tempGlider.target = parseFloat(document.getElementById('edit-target').value); tempGlider.noseDist = parseFloat(document.getElementById('edit-nose-dist').value) || 0; tempGlider.noseColor = document.getElementById('edit-nose-color').value; let newG = JSON.parse(JSON.stringify(tempGlider)); newG.id = Date.now(); newG.name += t('copy_suffix'); newG.loadout = newG.chambers.map(() => ({b:0, l:0, t:0})); newG.noseMass = 0; gliders.push(newG); save(); window.navigateTo('home'); window.customAlert(t('alert_copied')); };
window.saveGlider = function() { tempGlider.name = document.getElementById('edit-name').value; tempGlider.emptyW = parseFloat(document.getElementById('edit-empty-w').value); tempGlider.emptyCG = parseFloat(document.getElementById('edit-empty-cg').value); tempGlider.area = parseFloat(document.getElementById('edit-area').value); tempGlider.target = parseFloat(document.getElementById('edit-target').value); tempGlider.noseDist = parseFloat(document.getElementById('edit-nose-dist').value) || 0; tempGlider.noseColor = document.getElementById('edit-nose-color').value; const idx = gliders.findIndex(x=>x.id==tempGlider.id); if(idx===-1) { tempGlider.loadout = new Array(tempGlider.chambers.length).fill({b:0,l:0,t:0}); gliders.push(tempGlider); } else { if(gliders[idx].chambers.length !== tempGlider.chambers.length) { tempGlider.loadout = new Array(tempGlider.chambers.length).fill({b:0,l:0,t:0}); } else { tempGlider.loadout = gliders[idx].loadout; } gliders[idx]=tempGlider; } save(); window.navigateTo('home'); };
window.confirmDeleteGlider = function() { window.showModal(t('msg_del_mod'), false, [{tx:t('cancel'), cl:"btn-outline", val:0}, {tx:t('delete_model'), cl:"btn-danger", val:1}], (r) => { if(r) { gliders = gliders.filter(x=>x.id!==tempGlider.id); save(); window.navigateTo('home'); } }); };
window.confirmResetLoadout = function() { window.showModal(t('msg_reset'), false, [{tx:t('no'), cl:"btn-outline", val:0}, {tx:t('yes'), cl:"btn-danger", val:1}], (r) => { if(r) { const g = gliders.find(x=>x.id==currentGliderId); g.loadout = g.loadout.map(() => ({b:0, l:0, t:0})); save(); renderCalc(); } }); };

/* --- SAVE & INIT --- */
function save() { localStorage.setItem('f3f_gliders', JSON.stringify(gliders)); localStorage.setItem('f3f_logs', JSON.stringify(flightLogs)); localStorage.setItem('f3f_global_coefs', JSON.stringify(globalCoefs)); localStorage.setItem('f3f_opt_params', JSON.stringify(optParams)); }
window.saveGlobalCoefs = function() { globalCoefs.v1 = parseFloat(document.getElementById('set-v1').value) || 0; globalCoefs.m1 = parseFloat(document.getElementById('set-m1').value) || 0; globalCoefs.v2 = parseFloat(document.getElementById('set-v2').value) || 20; globalCoefs.m2 = parseFloat(document.getElementById('set-m2').value) || 5; globalCoefs.refArea = parseFloat(document.getElementById('set-ref-area').value); calculateAB(); save(); };
window.saveOptParams = function() { optParams.wMin = parseFloat(document.getElementById('set-tol-w-min').value) || 0; optParams.wMax = parseFloat(document.getElementById('set-tol-w-max').value) || 0; optParams.cgTolPlus = parseFloat(document.getElementById('set-tol-cg-plus').value) || 0.1; optParams.cgTolMinus = parseFloat(document.getElementById('set-tol-cg-minus').value) || 0.1; save(); };

function initApp() {
    gliders = JSON.parse(localStorage.getItem('f3f_gliders')) || [];
    flightLogs = JSON.parse(localStorage.getItem('f3f_logs')) || [];
    let savedCoefs = JSON.parse(localStorage.getItem('f3f_global_coefs'));
    if (!savedCoefs) { globalCoefs = { a: 0.16, b: 1.82, refArea: 62, v1:3, m1:2.3, v2:20, m2:5.0 }; save(); } else { globalCoefs = savedCoefs; if(!globalCoefs.refArea) { globalCoefs.refArea = 62; save(); } }
    let savedOpt = JSON.parse(localStorage.getItem('f3f_opt_params'));
    if(savedOpt) optParams = savedOpt;
    
    document.getElementById('set-v1').value = globalCoefs.v1; document.getElementById('set-m1').value = globalCoefs.m1;
    document.getElementById('set-v2').value = globalCoefs.v2; document.getElementById('set-m2').value = globalCoefs.m2;
    calculateAB();
    document.getElementById('set-ref-area').value = globalCoefs.refArea || 62;
    document.getElementById('set-tol-w-min').value = optParams.wMin; document.getElementById('set-tol-w-max').value = optParams.wMax;
    document.getElementById('set-tol-cg-plus').value = optParams.cgTolPlus; document.getElementById('set-tol-cg-minus').value = optParams.cgTolMinus;
    
    window.setTheme(currentTheme);
    gliders.forEach(g => { if(Array.isArray(g.loadout) && typeof g.loadout[0] === 'number') g.loadout = g.loadout.map(v => ({ b: v, l: 0, t: 0 })); });
    save();
    document.getElementById('lang-select').value = currentLang; document.getElementById('theme-select').value = currentTheme; 
    updateUITexts(); showView('home');
}

// LANCEMENT
window.addEventListener('load', initApp);
