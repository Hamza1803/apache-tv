// =============================================
// TRANSLATIONS / TRADUCCIONES
// =============================================
const translations = {
  fr: {
    'who-watches': 'Qui regarde ?',
    'add-profile': 'Ajouter un profil',
    'search-placeholder': 'Rechercher une chaîne...',
    'my-account': 'Mon compte',
    'live-tv': 'LIVE TV',
    'movies': 'FILMS',
    'series': 'SÉRIES',
    'favorites': 'FAVORIS',
    'back-to-menu': '← Retour au menu',
    'channels': 'Chaînes',
    'previous': 'Précédent',
    'next': 'Suivant',
    'per-page': 'Par page:',
    'no-channels': 'Aucune chaîne trouvée.',
    'guest': 'Invité',
    'add-user': '➕',
    'edit-user': '✏️',
    'delete-user': '🗑️',
    'switch-user': '🔄 Changer de profil',
    'new-user': '➕ Nouvel utilisateur',
    'profile-name': 'Nom du profil',
    'profile-name-placeholder': 'Ex : Salon',
    'm3u-url': 'URL M3U',
    'm3u-url-placeholder': 'https://...',
    'import-m3u': 'Importer un fichier (.m3u/.m3u8)',
    'xtream-url': 'URL du serveur',
    'xtream-url-placeholder': 'http://iptv.example.com:8080',
    'xtream-user': 'Nom d\'utilisateur',
    'xtream-pass': 'Mot de passe',
    'connect': 'Se connecter',
    'save': 'Enregistrer',
    'cancel': 'Annuler',
    'loading': 'Chargement en cours...',
    'select-user-msg': 'Veuillez sélectionner ou ajouter un utilisateur',
    'close-player': 'Fermer le lecteur',
    'page': 'Page',
    'no-user-selected': 'Aucun utilisateur sélectionné',
    'missing-profile-name': 'Nom du profil manquant',
    'missing-m3u-url': 'URL M3U manquante',
    'missing-xtream-params': 'Paramètres Xtream manquants',
    'no-channels-found': 'Aucune chaîne trouvée dans ce flux',
    'no-channels-file': 'Aucune chaîne trouvée dans ce fichier',
    'storage-error': 'Erreur de stockage',
    'profile-created': 'Profil "{name}" créé avec {count} chaînes',
    'profile-updated': 'Profil "{name}" mis à jour avec {count} chaînes',
    'profile-deleted': 'Profil "{name}" supprimé',
    'confirm-delete': 'Supprimer le profil "{name}" ?',
    'missing-name': 'Nom manquant',
    'update-error': 'Erreur lors de la mise à jour',
    'file-error': 'Erreur lors du traitement du fichier',
    'import-error': 'Erreur lors de l\'import. Vérifiez les paramètres et la connexion.',
    'stream-error': 'Erreur de lecture du flux',
    'network-error': 'Erreur réseau - Impossible de charger le flux',
    'media-error': 'Erreur média - Le flux est corrompu ou incompatible',
    'unsupported-format': 'Format non supporté',
    'player-not-supported': 'Lecteur non supporté pour ce flux',
    'all-proxies-failed': 'Tous les proxies ont échoué. Vérifie tes identifiants.',
    'check-credentials': 'Vérifie tes identifiants Xtream.',
    'm3u-fetch-error': 'Impossible de récupérer le fichier M3U.',
    'invalid-server-response': 'Réponse invalide du serveur',
    'add-profile-btn': '+ Ajouter un profil'
  },
  en: {
    'who-watches': 'Who\'s watching?',
    'add-profile': 'Add Profile',
    'search-placeholder': 'Search channel...',
    'my-account': 'My Account',
    'live-tv': 'LIVE TV',
    'movies': 'MOVIES',
    'series': 'SERIES',
    'favorites': 'FAVORITES',
    'back-to-menu': '← Back to menu',
    'channels': 'Channels',
    'previous': 'Previous',
    'next': 'Next',
    'per-page': 'Per page:',
    'no-channels': 'No channels found.',
    'guest': 'Guest',
    'add-user': '➕',
    'edit-user': '✏️',
    'delete-user': '🗑️',
    'switch-user': '🔄 Switch Profile',
    'new-user': '➕ New User',
    'profile-name': 'Profile Name',
    'profile-name-placeholder': 'Ex: Living Room',
    'm3u-url': 'M3U URL',
    'm3u-url-placeholder': 'https://...',
    'import-m3u': 'Import file (.m3u/.m3u8)',
    'xtream-url': 'Server URL',
    'xtream-url-placeholder': 'http://iptv.example.com:8080',
    'xtream-user': 'Username',
    'xtream-pass': 'Password',
    'connect': 'Connect',
    'save': 'Save',
    'cancel': 'Cancel',
    'loading': 'Loading...',
    'select-user-msg': 'Please select or add a user',
    'close-player': 'Close player',
    'page': 'Page',
    'no-user-selected': 'No user selected',
    'missing-profile-name': 'Missing profile name',
    'missing-m3u-url': 'Missing M3U URL',
    'missing-xtream-params': 'Missing Xtream parameters',
    'no-channels-found': 'No channels found in this stream',
    'no-channels-file': 'No channels found in this file',
    'storage-error': 'Storage error',
    'profile-created': 'Profile "{name}" created with {count} channels',
    'profile-updated': 'Profile "{name}" updated with {count} channels',
    'profile-deleted': 'Profile "{name}" deleted',
    'confirm-delete': 'Delete profile "{name}"?',
    'missing-name': 'Missing name',
    'update-error': 'Update error',
    'file-error': 'File processing error',
    'import-error': 'Import error. Check settings and connection.',
    'stream-error': 'Stream playback error',
    'network-error': 'Network error - Unable to load stream',
    'media-error': 'Media error - Stream corrupted or incompatible',
    'unsupported-format': 'Unsupported format',
    'player-not-supported': 'Player not supported for this stream',
    'all-proxies-failed': 'All proxies failed. Check your credentials.',
    'check-credentials': 'Check your Xtream credentials.',
    'm3u-fetch-error': 'Unable to fetch M3U file.',
    'invalid-server-response': 'Invalid server response',
    'add-profile-btn': '+ Add Profile'
  },
  es: {
    'who-watches': '¿Quién está viendo?',
    'add-profile': 'Añadir perfil',
    'search-placeholder': 'Buscar canal...',
    'my-account': 'Mi cuenta',
    'live-tv': 'TV EN VIVO',
    'movies': 'PELÍCULAS',
    'series': 'SERIES',
    'favorites': 'FAVORITOS',
    'back-to-menu': '← Volver al menú',
    'channels': 'Canales',
    'previous': 'Anterior',
    'next': 'Siguiente',
    'per-page': 'Por página:',
    'no-channels': 'No se encontraron canales.',
    'guest': 'Invitado',
    'add-user': '➕',
    'edit-user': '✏️',
    'delete-user': '🗑️',
    'switch-user': '🔄 Cambiar perfil',
    'new-user': '➕ Nuevo usuario',
    'profile-name': 'Nombre del perfil',
    'profile-name-placeholder': 'Ej: Salón',
    'm3u-url': 'URL M3U',
    'm3u-url-placeholder': 'https://...',
    'import-m3u': 'Importar archivo (.m3u/.m3u8)',
    'xtream-url': 'URL del servidor',
    'xtream-url-placeholder': 'http://iptv.example.com:8080',
    'xtream-user': 'Nombre de usuario',
    'xtream-pass': 'Contraseña',
    'connect': 'Conectar',
    'save': 'Guardar',
    'cancel': 'Cancelar',
    'loading': 'Cargando...',
    'select-user-msg': 'Seleccione o añada un usuario',
    'close-player': 'Cerrar reproductor',
    'page': 'Página',
    'no-user-selected': 'Ningún usuario seleccionado',
    'missing-profile-name': 'Falta el nombre del perfil',
    'missing-m3u-url': 'Falta la URL M3U',
    'missing-xtream-params': 'Faltan parámetros de Xtream',
    'no-channels-found': 'No se encontraron canales en este flujo',
    'no-channels-file': 'No se encontraron canales en este archivo',
    'storage-error': 'Error de almacenamiento',
    'profile-created': 'Perfil "{name}" creado con {count} canales',
    'profile-updated': 'Perfil "{name}" actualizado con {count} canales',
    'profile-deleted': 'Perfil "{name}" eliminado',
    'confirm-delete': '¿Eliminar perfil "{name}"?',
    'missing-name': 'Falta el nombre',
    'update-error': 'Error de actualización',
    'file-error': 'Error al procesar el archivo',
    'import-error': 'Error de importación. Verifique configuración y conexión.',
    'stream-error': 'Error de reproducción del flujo',
    'network-error': 'Error de red - No se puede cargar el flujo',
    'media-error': 'Error de medio - Flujo corrupto o incompatible',
    'unsupported-format': 'Formato no soportado',
    'player-not-supported': 'Reproductor no soportado para este flujo',
    'all-proxies-failed': 'Todos los proxies fallaron. Verifica tus credenciales.',
    'check-credentials': 'Verifica tus credenciales de Xtream.',
    'm3u-fetch-error': 'No se puede obtener el archivo M3U.',
    'invalid-server-response': 'Respuesta inválida del servidor',
    'add-profile-btn': '+ Añadir perfil'
  }
};

let currentLang = 'fr';

function t(key) {
  return translations[currentLang][key] || translations['fr'][key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('iptv_language', lang);
  updateUIText();
}

function updateUIText() {
  // Selection screen
  const selectionTitle = document.querySelector('.selection-title');
  if (selectionTitle) selectionTitle.textContent = t('who-watches');
  
  const addProfileBtn = document.getElementById('add-user-from-selection');
  if (addProfileBtn) {
    addProfileBtn.querySelector('.add-icon').textContent = '+';
    addProfileBtn.querySelector('span:last-child').textContent = t('add-profile');
  }
  
  // Search
  const searchInput = document.getElementById('global-search');
  if (searchInput) searchInput.placeholder = t('search-placeholder');
  
  // User menu button
  const userMenuBtn = document.getElementById('user-menu-btn');
  if (userMenuBtn) userMenuBtn.title = t('my-account');
  
  // Dashboard
  const dashCards = document.querySelectorAll('.dash-label');
  if (dashCards[0]) dashCards[0].textContent = t('live-tv');
  if (dashCards[1]) dashCards[1].textContent = t('movies');
  if (dashCards[2]) dashCards[2].textContent = t('series');
  if (dashCards[3]) dashCards[3].textContent = t('favorites');
  
  // Channel view
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) backBtn.textContent = t('back-to-menu');
  
  const sectionTitle = document.getElementById('current-section-title');
  if (sectionTitle) sectionTitle.textContent = t('channels');
  
  const prevBtn = document.getElementById('prev-page-btn');
  if (prevBtn) prevBtn.textContent = t('previous');
  
  const nextBtn = document.getElementById('next-page-btn');
  if (nextBtn) nextBtn.textContent = t('next');
  
  const perPageLabel = document.querySelector('.pagination-right label');
  if (perPageLabel) perPageLabel.textContent = t('per-page');
  
  // User menu
  const addBtn = document.getElementById('add-user-btn');
  if (addBtn) addBtn.title = t('add-profile');
  
  const editBtn = document.getElementById('edit-user-btn');
  if (editBtn) editBtn.title = t('edit-user');
  
  const delBtn = document.getElementById('delete-user-btn');
  if (delBtn) delBtn.title = t('delete-user');
  
  const switchBtn = document.getElementById('switch-user-btn');
  if (switchBtn) switchBtn.textContent = t('switch-user');
  
  // Modal
  const modalTitle = document.querySelector('.modal-content h2');
  if (modalTitle) modalTitle.textContent = t('new-user');
  
  const profileLabel = document.querySelector('label');
  if (profileLabel) {
    profileLabel.childNodes[0].textContent = t('profile-name') + ' ';
  }
  
  const nameInput = document.getElementById('user-name');
  if (nameInput) nameInput.placeholder = t('profile-name-placeholder');
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns[0]) tabBtns[0].textContent = t('m3u-url');
  if (tabBtns[1]) tabBtns[1].textContent = 'Xtream Codes';
  
  const m3uInput = document.getElementById('m3u-url');
  if (m3uInput) m3uInput.placeholder = t('m3u-url-placeholder');
  
  const importBtn = document.getElementById('upload-m3u-btn');
  if (importBtn) importBtn.textContent = t('import-m3u');
  
  const xtUrlInput = document.getElementById('xt-url');
  if (xtUrlInput) xtUrlInput.placeholder = t('xtream-url-placeholder');
  
  const xtUserInput = document.getElementById('xt-user');
  if (xtUserInput) xtUserInput.placeholder = t('xtream-user');
  
  const xtPassInput = document.getElementById('xt-pass');
  if (xtPassInput) xtPassInput.placeholder = t('xtream-pass');
  
  const createBtn = document.getElementById('create-user');
  if (createBtn && createBtn.textContent !== t('save')) {
    createBtn.textContent = t('connect');
  }
  
  const cancelBtn = document.getElementById('cancel-user');
  if (cancelBtn) cancelBtn.textContent = t('cancel');
  
  // Loader
  const loaderText = document.querySelector('.loader-spinner p');
  if (loaderText) loaderText.textContent = t('loading');
  
  // Status
  const status = document.getElementById('status');
  if (status) status.textContent = t('select-user-msg');
  
  // Close player
  const closePlayer = document.getElementById('close-player-side');
  if (closePlayer) closePlayer.title = t('close-player');
}

// =============================================
// INDEXEDDB
// =============================================
const DB_NAME = 'IPTV_App_DB';
const DB_VERSION = 1;
const STORE_USERS = 'users';
const STORE_FAVS = 'favorites';

let dbInstance = null;

function openDB() {
  return new Promise((resolve, reject) => {
    if (dbInstance) {
      resolve(dbInstance);
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains(STORE_USERS)) {
        db.createObjectStore(STORE_USERS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_FAVS)) {
        db.createObjectStore(STORE_FAVS, { keyPath: 'userId' });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      reject(new Error('IndexedDB error: ' + event.target.errorCode));
    };
  });
}

async function dbGetAllUsers() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_USERS, 'readonly');
    const store = tx.objectStore(STORE_USERS);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function dbSaveUser(user) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_USERS, 'readwrite');
    const store = tx.objectStore(STORE_USERS);
    const request = store.put(user);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function dbDeleteUser(userId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_USERS, 'readwrite');
    const store = tx.objectStore(STORE_USERS);
    const request = store.delete(userId);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function dbGetFavorites(userId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_FAVS, 'readonly');
    const store = tx.objectStore(STORE_FAVS);
    const request = store.get(userId);
    request.onsuccess = () => resolve(request.result ? request.result.channels : []);
    request.onerror = () => reject(request.error);
  });
}

async function dbSaveFavorites(userId, channels) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_FAVS, 'readwrite');
    const store = tx.objectStore(STORE_FAVS);
    const request = store.put({ userId, channels });
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Migration from localStorage to IndexedDB
async function migrateFromLocalStorage() {
  try {
    const usersData = localStorage.getItem('iptv_users');
    const favsData = localStorage.getItem('iptv_favs');

    if (usersData) {
      const parsed = JSON.parse(usersData);
      const users = parsed.map(userData => App.decompressUserData(userData));
      for (const user of users) {
        await dbSaveUser(user);
      }
      console.log(`✅ Migrated ${users.length} users to IndexedDB`);
    }

    if (favsData) {
      const favs = JSON.parse(favsData);
      for (const [userId, channels] of Object.entries(favs)) {
        await dbSaveFavorites(userId, channels);
      }
      console.log('✅ Migrated favorites to IndexedDB');
    }

    // Clear localStorage after successful migration
    localStorage.removeItem('iptv_users');
    localStorage.removeItem('iptv_favs');
    console.log('✅ localStorage cleared after migration');
  } catch (e) {
    console.error('Migration error:', e);
  }
}

const App = {
  users: [],
  currentUserId: null,
  // Structure: { userId: [channelId, ...], ... }
  favorites: {},

  // Compression utility functions
  compressUserData: function(userData) {
    // Store only essential data to reduce storage size
    const compressed = {
      id: userData.id,
      name: userData.name,
      source: userData.source,
      channels: userData.channels.map(channel => ({
        id: channel.id,
        n: channel.name, // compressed property name
        u: channel.url,
        g: channel.group,
        l: channel.logo,
        t: channel.type
      }))
    };
    return compressed;
  },
  
  decompressUserData: function(compressedData) {
    const decompressed = {
      id: compressedData.id,
      name: compressedData.name,
      source: compressedData.source,
      channels: compressedData.channels.map(channel => ({
        id: channel.id,
        name: channel.n,
        url: channel.u,
        group: channel.g,
        logo: channel.l,
        type: channel.t
      }))
    };
    return decompressed;
  }
};

let currentHls = null;
let currentChannelList = [];
let currentChannelIndex = -1;
let currentPage = 1;
let itemsPerPage = 50;
let currentDisplayList = []; // stores the filtered list currently being paginated


// --- NOTIFICATIONS/TOAST SYSTEM ---
function showNotification(message, type = 'error', duration = 3000) {
  const container = document.getElementById('notifications');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fadeOut');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --- PARSING AMÉLIORÉ ---
function parseM3U(text) {
  // Optimized M3U parser using efficient string operations
  const lines = text.split(/\r?\n/);
  const channels = [];
  
  // Precompile regex patterns for reuse
  const extinfRegex = /^#EXTINF:(?:-?[0-9]+|\s*)/;
  const groupTitleRegex = /group-title="([^"]*)"/i;
  const tvgLogoRegex = /tvg-logo="([^"]*)"/i;
  const moviePattern = /\b(?:movie|film|vod)\b/i;
  const videoExtPattern = /\.(?:mkv|mp4|mov|avi|wmv|flv|webm)$/i;
  
  let infoLine = null;
  let name = '';
  let group = 'Autres';
  let logo = '';
  let type = 'live';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('#EXTINF')) {
      // Extract info once when we encounter EXTINF
      infoLine = line;
      
      // Parse group-title
      const groupMatch = groupTitleRegex.exec(infoLine);
      group = groupMatch ? groupMatch[1] : 'Autres';
      
      // Parse tvg-logo
      const logoMatch = tvgLogoRegex.exec(infoLine);
      logo = logoMatch ? logoMatch[1] : '';
      
      // Check if it's a movie
      type = (moviePattern.test(infoLine) || videoExtPattern.test(infoLine)) ? 'movies' : 'live';
      
      // Extract name (everything after the last comma)
      const nameStart = infoLine.lastIndexOf(',');
      name = nameStart !== -1 ? infoLine.substring(nameStart + 1).trim() : 'Sans nom';
    } else if (infoLine && line && !line.startsWith('#')) {
      // Process the URL line
      channels.push({
        id: (crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2),
        name: name || 'Sans nom',
        url: line,
        group: group,
        logo: logo,
        type: type
      });
      
      // Reset for next channel
      infoLine = null;
      name = '';
      group = 'Autres';
      logo = '';
      type = 'live';
    }
  }
  
  return channels;
}

// --- NAVIGATION ---
function showDashboard() {
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('channel-view').classList.add('hidden');
  document.getElementById('status').classList.add('hidden');
}

function showSection(type) {
  const user = App.users.find(u => u.id === App.currentUserId);
  if (!user) {
    showNotification('❌ ' + t('no-user-selected'), 'error');
    return;
  }

  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('channel-view').classList.remove('hidden');
  
  let list = user.channels || [];
  if (type === 'favorites') {
    const favIds = App.favorites[App.currentUserId] || [];
    list = user.channels.filter(ch => favIds.includes(ch.id));
  } else if (type === 'movies' || type === 'series') {
    list = user.channels.filter(ch => ch.type === 'movies');
  } else {
    list = user.channels.filter(ch => ch.type === 'live');
  }

  // sync dropdown with current itemsPerPage
  const select = document.getElementById('items-per-page');
  if (select) select.value = itemsPerPage;

  renderChannels(list);
}

// --- RENDERING ---
function renderChannels(channels) {
  // Clean up previous DOM elements and event listeners
  cleanupChannelElements();
  
  const container = document.getElementById('categories');
  container.innerHTML = '';
  // keep flat list for keyboard navigation
  currentChannelList = channels || [];
  currentDisplayList = channels || []; // store for pagination
  currentChannelIndex = -1;
  currentPage = 1; // reset page when rendering new list

  if (!channels || channels.length === 0) {
    container.innerHTML = '<p style="padding:20px;color:rgba(255,255,255,0.7)">Aucune chaîne trouvée.</p>';
    updatePaginationControls(0);
    return;
  }

  // calculate pagination
  const totalPages = Math.ceil(channels.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedChannels = channels.slice(startIdx, endIdx);

  // build id->index map for quick lookup (in flat list)
  const idIndex = {};
  currentChannelList.forEach((c, i) => idIndex[c.id] = i);

  const groups = {};
  paginatedChannels.forEach(ch => {
    if (!groups[ch.group]) groups[ch.group] = [];
    groups[ch.group].push(ch);
  });

  for (const [group, list] of Object.entries(groups)) {
    const section = document.createElement('div');
    section.innerHTML = `<h3>${group}</h3><div class="channels-row"></div>`;
    const row = section.querySelector('.channels-row');

    list.forEach(ch => {
      const isFav = (App.favorites[App.currentUserId] || []).includes(ch.id);
      const card = document.createElement('div');
      card.className = 'channel-card';
      card.dataset.id = ch.id;
      card.innerHTML = `
        <button class="fav-btn">${isFav ? '★' : '☆'}</button>
        <div class="channel-poster">
          ${ch.logo ? `<img data-src="${ch.logo}" class="lazy-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/100?text=TV';this.classList.add('logo-error')">` : '📺'}
        </div>
        <div class="channel-name">${ch.name}</div>
      `;

      // Store event handlers for later cleanup
      const favHandler = (e) => toggleFav(ch.id, e);
      const posterHandler = () => playChannel(ch.url, idx);
      
      // handlers
      const favBtn = card.querySelector('.fav-btn');
      favBtn.addEventListener('click', favHandler);
      const poster = card.querySelector('.channel-poster');
      const idx = idIndex[ch.id];
      poster.addEventListener('click', posterHandler);
      
      // Store references for cleanup
      card._eventHandlers = {
        favBtn: { element: favBtn, handler: favHandler },
        poster: { element: poster, handler: posterHandler }
      };

      row.appendChild(card);
    });
    container.appendChild(section);
  }

  updatePaginationControls(totalPages);
  
  // Load visible logos after rendering
  setTimeout(loadVisibleLogos, 100); // Small delay to ensure DOM is updated
}

// Helper function to clean up DOM elements and event listeners
function cleanupChannelElements() {
  const container = document.getElementById('categories');
  if (!container) return;
  
  // Remove event listeners from existing elements
  const cards = container.querySelectorAll('.channel-card');
  cards.forEach(card => {
    if (card._eventHandlers) {
      const { favBtn, poster } = card._eventHandlers;
      if (favBtn) {
        favBtn.element.removeEventListener('click', favBtn.handler);
      }
      if (poster) {
        poster.element.removeEventListener('click', poster.handler);
      }
      // Clear reference
      card._eventHandlers = null;
    }
  });
}

// Logo cache to prevent repeated downloads
const logoCache = new Map();

// Function to load visible logos
function loadVisibleLogos() {
  const lazyLogos = document.querySelectorAll('.lazy-logo[data-src]:not([src])');
  
  // Use Intersection Observer for efficient lazy loading
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          // Check if logo is already cached
          if (logoCache.has(src)) {
            img.src = logoCache.get(src);
          } else {
            // Load and cache the logo
            loadImageWithCache(img, src);
          }
          
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
    
    lazyLogos.forEach(img => observer.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyLogos.forEach(img => {
      const src = img.getAttribute('data-src');
      if (logoCache.has(src)) {
        img.src = logoCache.get(src);
      } else {
        loadImageWithCache(img, src);
      }
    });
  }
}

// Function to load image and cache it
async function loadImageWithCache(imgElement, src) {
  try {
    // Check if image is already loaded elsewhere
    if (logoCache.has(src)) {
      imgElement.src = logoCache.get(src);
      return;
    }
    
    // Create a temporary image to preload
    const tempImg = new Image();
    tempImg.onload = () => {
      // Cache the successful image
      logoCache.set(src, src);
      imgElement.src = src;
    };
    tempImg.onerror = () => {
      // Cache the fallback image if original fails
      logoCache.set(src, 'https://via.placeholder.com/100?text=TV');
      imgElement.src = 'https://via.placeholder.com/100?text=TV';
      imgElement.classList.add('logo-error');
    };
    tempImg.src = src;
  } catch (e) {
    console.error('Error loading logo:', src, e);
    imgElement.src = 'https://via.placeholder.com/100?text=TV';
    imgElement.classList.add('logo-error');
  }
}

// --- PAGINATION ---
function updatePaginationControls(totalPages) {
  const pageInfo = document.getElementById('page-info');
  const prevBtn = document.getElementById('prev-page-btn');
  const nextBtn = document.getElementById('next-page-btn');

  if (pageInfo) pageInfo.textContent = `Page ${currentPage} / ${totalPages}`;
  if (prevBtn) prevBtn.disabled = currentPage <= 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    reRenderCurrentPage();
  }
}

function nextPage() {
  const totalPages = Math.ceil(currentDisplayList.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    reRenderCurrentPage();
  }
}

function reRenderCurrentPage() {
  // Clean up previous DOM elements and event listeners
  cleanupChannelElements();
  
  const container = document.getElementById('categories');
  container.innerHTML = '';

  if (!currentDisplayList || currentDisplayList.length === 0) {
    container.innerHTML = '<p style="padding:20px;color:rgba(255,255,255,0.7)">Aucune chaîne trouvée.</p>';
    return;
  }

  // calculate pagination
  const totalPages = Math.ceil(currentDisplayList.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedChannels = currentDisplayList.slice(startIdx, endIdx);

  // build id->index map
  const idIndex = {};
  currentChannelList.forEach((c, i) => idIndex[c.id] = i);

  const groups = {};
  paginatedChannels.forEach(ch => {
    if (!groups[ch.group]) groups[ch.group] = [];
    groups[ch.group].push(ch);
  });

  for (const [group, list] of Object.entries(groups)) {
    const section = document.createElement('div');
    section.innerHTML = `<h3>${group}</h3><div class="channels-row"></div>`;
    const row = section.querySelector('.channels-row');

    list.forEach(ch => {
      const isFav = (App.favorites[App.currentUserId] || []).includes(ch.id);
      const card = document.createElement('div');
      card.className = 'channel-card';
      card.dataset.id = ch.id;
      card.innerHTML = `
        <button class="fav-btn">${isFav ? '★' : '☆'}</button>
        <div class="channel-poster">
          ${ch.logo ? `<img data-src="${ch.logo}" class="lazy-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/100?text=TV';this.classList.add('logo-error')">` : '📺'}
        </div>
        <div class="channel-name">${ch.name}</div>
      `;

      // Store event handlers for later cleanup
      const favHandler = (e) => toggleFav(ch.id, e);
      const posterHandler = () => playChannel(ch.url, idx);
      
      const favBtn = card.querySelector('.fav-btn');
      favBtn.addEventListener('click', favHandler);
      const poster = card.querySelector('.channel-poster');
      const idx = idIndex[ch.id];
      poster.addEventListener('click', posterHandler);
      
      // Store references for cleanup
      card._eventHandlers = {
        favBtn: { element: favBtn, handler: favHandler },
        poster: { element: poster, handler: posterHandler }
      };

      row.appendChild(card);
    });
    container.appendChild(section);
  }

  updatePaginationControls(totalPages);
  
  // Load visible logos after rendering
  setTimeout(loadVisibleLogos, 100); // Small delay to ensure DOM is updated
}

function changeItemsPerPage(value) {
  itemsPerPage = parseInt(value);
  currentPage = 1;
  renderChannels(currentDisplayList);
}

// --- FAVORIS ---
async function toggleFav(id, event) {
  event.stopPropagation();
  if (!App.currentUserId) return alert('Sélectionnez un utilisateur');
  if (!App.favorites[App.currentUserId]) App.favorites[App.currentUserId] = [];
  const favs = App.favorites[App.currentUserId];
  const idx = favs.indexOf(id);

  if (idx > -1) favs.splice(idx, 1);
  else favs.push(id);

  // Save to IndexedDB
  await dbSaveFavorites(App.currentUserId, favs);

  // Mise à jour visuelle du bouton
  const btn = event.currentTarget || event.target;
  if (btn) btn.textContent = idx > -1 ? '☆' : '★';
}

// --- LECTEUR HLS ---
function playChannel(url, index) {
  const video = document.getElementById('video-player');
  const overlay = document.getElementById('player-overlay');
  overlay.classList.add('active');

  // set current index if provided
  if (typeof index === 'number') currentChannelIndex = index;
  else {
    const found = currentChannelList.findIndex(c => c && c.url === url);
    currentChannelIndex = found >= 0 ? found : currentChannelIndex;
  }

  // cleanup previous instance
  try {
    if (currentHls) {
      currentHls.destroy();
      currentHls = null;
    }
  } catch (e) { console.warn('HLS cleanup failed', e); }

  // Clear any previous error state
  clearVideoErrorState();

  if (window.Hls && Hls.isSupported()) {
    // Initialize HLS with error handling
    currentHls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90
    });
    
    // Handle various HLS errors
    currentHls.on(Hls.Events.ERROR, (event, data) => {
      handleHlsError(data, url);
    });
    
    currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
      // Reset error state on successful manifest parsing
      clearVideoErrorState();
      video.play().catch(error => {
        console.error('Video play error:', error);
        showNotification('Impossible de lire le flux vidéo', 'error');
      });
    });
    
    // Additional events for better monitoring
    currentHls.on(Hls.Events.BUFFER_CREATED, () => {
      clearVideoErrorState();
    });
    
    currentHls.on(Hls.Events.FRAG_LOADED, () => {
      clearVideoErrorState();
    });
    
    currentHls.loadSource(url);
    currentHls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // For Safari with native HLS support
    video.src = url;
    
    video.addEventListener('error', (e) => {
      handleVideoError(e, url);
    });
    
    video.addEventListener('loadstart', () => {
      clearVideoErrorState();
    });
    
    video.addEventListener('canplay', () => {
      clearVideoErrorState();
    });
    
    video.play().catch(error => {
      console.error('Video play error:', error);
      showNotification('Impossible de lire le flux vidéo', 'error');
    });
  } else {
    showNotification('Lecteur non supporté pour ce flux', 'error');
  }
}

// Function to handle HLS errors
function handleHlsError(data, url) {
  console.error('HLS Error:', data);
  
  let errorMessage = 'Erreur de lecture du flux';
  
  switch(data.type) {
    case Hls.ErrorTypes.NETWORK_ERROR:
      errorMessage = 'Erreur réseau - Impossible de charger le flux';
      // Attempt to retry after a delay
      setTimeout(() => {
        if (currentChannelIndex !== -1) {
          const channel = currentChannelList[currentChannelIndex];
          if (channel && channel.url === url) {
            playChannel(url, currentChannelIndex);
          }
        }
      }, 5000);
      break;
    case Hls.ErrorTypes.MEDIA_ERROR:
      errorMessage = 'Erreur média - Le flux est corrompu ou incompatible';
      break;
    default:
      errorMessage = 'Erreur inconnue lors de la lecture du flux';
  }
  
  showNotification(errorMessage, 'error');
  
  // Add error class to video for visual indication
  const video = document.getElementById('video-player');
  if (video) {
    video.classList.add('video-error');
  }
}

// Function to handle native video errors
function handleVideoError(event, url) {
  const video = event.target;
  let errorMessage = 'Erreur de lecture du flux';
  
  switch(video.error.code) {
    case video.error.MEDIA_ERR_ABORTED:
      errorMessage = 'Lecture du flux annulée par l\'utilisateur';
      break;
    case video.error.MEDIA_ERR_NETWORK:
      errorMessage = 'Erreur réseau - Impossible de charger le flux';
      break;
    case video.error.MEDIA_ERR_DECODE:
      errorMessage = 'Erreur de décodage - Le flux est corrompu ou incompatible';
      break;
    case video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
      errorMessage = 'Format non supporté - Impossible de lire ce flux';
      break;
    default:
      errorMessage = 'Erreur inconnue lors de la lecture du flux';
  }
  
  console.error('Video Error:', errorMessage);
  showNotification(errorMessage, 'error');
  
  // Add error class to video for visual indication
  video.classList.add('video-error');
}

// Function to clear video error state
function clearVideoErrorState() {
  const video = document.getElementById('video-player');
  if (video) {
    video.classList.remove('video-error');
  }
}

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', async () => {
  // Load saved language
  const savedLang = localStorage.getItem('iptv_language') || 'fr';
  setLanguage(savedLang);
  
  // Set language selector value
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.value = savedLang;
    langSelector.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  
  // Initialize IndexedDB and migrate data if needed
  try {
    await openDB();
    await migrateFromLocalStorage();

    // Load users from IndexedDB
    App.users = await dbGetAllUsers();

    // Load favorites for all users
    for (const user of App.users) {
      App.favorites[user.id] = await dbGetFavorites(user.id);
    }

    // Show user selection screen if users exist
    if (App.users.length > 0) {
      showUserSelectionScreen();
    } else {
      // No users, show add user modal directly
      document.getElementById('user-modal').classList.add('active');
    }

    renderUserMenu();
    renderUserSelectionScreen();
  } catch (e) {
    console.error('Failed to initialize IndexedDB:', e);
    showNotification('❌ Erreur de chargement des données', 'error');
  }

  // UI hooks
  document.getElementById('add-user-btn').onclick = () => openAddUserModal();
  document.getElementById('add-user-from-selection').onclick = () => openAddUserModal();
  document.getElementById('cancel-user').onclick = () => document.getElementById('user-modal').classList.remove('active');
  document.getElementById('create-user').onclick = createUser;
  // Add event listener for the side close button
  const sideCloseBtn = document.getElementById('close-player-side');
  if (sideCloseBtn) {
    sideCloseBtn.onclick = () => {
      document.getElementById('player-overlay').classList.remove('active');
      const video = document.getElementById('video-player');
      video.pause();
      video.removeAttribute('src');
      try { if (currentHls) { currentHls.destroy(); currentHls = null; } } catch (e) {}
      currentChannelIndex = -1;
    };
  }

  // user menu toggle
  const userBtn = document.getElementById('user-menu-btn');
  const userMenu = document.getElementById('user-menu');
  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenu.classList.toggle('active');
  });

  // close menus on outside click
  document.addEventListener('click', () => {
    userMenu.classList.remove('active');
  });

  // search
  const search = document.getElementById('global-search');
  if (search) search.addEventListener('input', (e) => searchChannels(e.target.value));

  // Switch user button in dropdown
  const switchBtn = document.getElementById('switch-user-btn');
  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      showUserSelectionScreen();
      userMenu.classList.remove('active');
    });
  }

  // tabs in modal: switch between URL and Xtream
  document.querySelectorAll('.tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.toggle('active', tc.id === `tab-${tab}`));
    });
  });
  
  // Add event listener for the upload M3U button
  const uploadM3UBtn = document.getElementById('upload-m3u-btn');
  if (uploadM3UBtn) {
    uploadM3UBtn.addEventListener('click', () => {
      // Create a file input element
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.m3u,.m3u8';
      
      fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = async (e) => {
            try {
              // Process the M3U content directly
              const content = e.target.result;

              // Get the user name
              const name = document.getElementById('user-name').value;
              if (!name) {
                showNotification("❌ " + t('missing-profile-name'), 'error');
                return;
              }

              // Parse the M3U content
              const channels = parseM3U(content);
              if (!channels || channels.length === 0) {
                showNotification("⚠️ " + t('no-channels-file'), 'error');
                return;
              }

              const newUser = { id: Date.now().toString(), name, channels, source: { type: 'm3u_file', filename: file.name } };
              App.users.push(newUser);
              // Save to IndexedDB (no compression needed)
              try {
                await dbSaveUser(newUser);
              } catch (storageError) {
                showNotification(`❌ ${t('storage-error')} : ${storageError.message}`, 'error');
                return;
              }

              showNotification(`✅ ` + t('profile-created').replace('{name}', name).replace('{count}', channels.length), 'success');
              selectUser(newUser.id);
              document.getElementById('user-modal').classList.remove('active');
            } catch (error) {
              console.error('Error processing M3U file:', error);
              showNotification(`❌ ${t('file-error')} : ${error.message}`, 'error');
            }
          };
          reader.readAsText(file);
        }
      };

      fileInput.click();
    });
  }

  // wire edit/delete buttons
  const editBtn = document.getElementById('edit-user-btn');
  const delBtn = document.getElementById('delete-user-btn');
  if (editBtn) editBtn.addEventListener('click', (ev) => { ev.stopPropagation(); editUser(); });
  if (delBtn) delBtn.addEventListener('click', (ev) => { ev.stopPropagation(); deleteUser(); });

  // esc to close overlays + arrow navigation in player
  document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('player-overlay');
    if (e.key === 'Escape') {
      document.getElementById('user-modal').classList.remove('active');
      overlay.classList.remove('active');
      // stop playback
      const video = document.getElementById('video-player');
      if (video) { video.pause(); video.removeAttribute('src'); }
      try { if (currentHls) { currentHls.destroy(); currentHls = null; } } catch(e){}
      currentChannelIndex = -1;
    }
    if (overlay && overlay.classList.contains('active')) {
      if (e.key === 'ArrowRight') { e.preventDefault(); nextChannel(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevChannel(); }
    }
  });
});

async function createUser() {
  const name = document.getElementById('user-name').value;
  // determine active tab
  const activeTabBtn = document.querySelector('.tabs button.active');
  const activeTab = activeTabBtn ? activeTabBtn.dataset.tab : 'url';

  if (!name) {
    showNotification("❌ " + t('missing-profile-name'), 'error');
    return;
  }

  try {
    // Show loader
    document.getElementById('loader-overlay').classList.remove('hidden');
    
    let text;
    let source;
    if (activeTab === 'url') {
      const url = document.getElementById('m3u-url').value;
      if (!url) {
        showNotification("❌ " + t('missing-m3u-url'), 'error');
        return;
      }
      try {
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        text = await response.text();
      } catch (e) {
        console.error('M3U URL Error:', e);
        throw new Error(t('m3u-fetch-error'));
      }
      source = { type: 'm3u', url };
    } else {
      // xtream: utiliser un proxy CORS gratuit pour contourner la restriction navigateur
      const xtUrl = document.getElementById('xt-url').value;
      const xtUser = document.getElementById('xt-user').value;
      const xtPass = document.getElementById('xt-pass').value;
      if (!xtUrl || !xtUser || !xtPass) {
        showNotification("❌ " + t('missing-xtream-params'), 'error');
        return;
      }
      const base = xtUrl.replace(/\/$/, '');
      // Construire l'URL M3U
      const built = `${base}/get.php?username=${encodeURIComponent(xtUser)}&password=${encodeURIComponent(xtPass)}&type=m3u_plus&output=m3u8`;

      console.log('Xtream URL:', built);

      // Essayer plusieurs proxies CORS
      const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(built)}`,
        `https://corsproxy.io/?${encodeURIComponent(built)}`,
        `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(built)}`
      ];

      let lastError = null;
      for (const proxyUrl of proxies) {
        try {
          console.log('Trying proxy:', proxyUrl);
          const response = await fetch(proxyUrl, { 
            method: 'GET',
            headers: { 'Accept': '*/*' }
          });
          
          if (!response.ok) {
            throw new Error(`Proxy error ${response.status}`);
          }
          
          text = await response.text();
          
          // Vérifier si la réponse contient du contenu M3U valide
          if (!text.includes('#EXTM3U') && !text.includes('http')) {
            console.warn('Response may not be valid M3U:', text.substring(0, 200));
          }
          
          console.log('Success with proxy:', proxyUrl);
          break;
        } catch (e) {
          console.warn('Proxy failed:', proxyUrl, e.message);
          lastError = e;
          continue;
        }
      }

      if (!text) {
        throw new Error(t('all-proxies-failed') + ' ' + t('check-credentials'));
      }

      source = { type: 'xtream', url: base, username: xtUser };
    }

    const channels = parseM3U(text);
    if (!channels || channels.length === 0) {
      showNotification("⚠️ " + t('no-channels-found'), 'error');
      return;
    }
    const newUser = { id: Date.now().toString(), name, channels, source };
    App.users.push(newUser);
    // Save to IndexedDB (no compression needed, storage is much larger)
    try {
      await dbSaveUser(newUser);
    } catch (e) {
      showNotification(`❌ ${t('storage-error')} : ${e.message}`, 'error');
      throw e;
    }

    showNotification(`✅ ` + t('profile-created').replace('{name}', name).replace('{count}', channels.length), 'success');
    selectUser(newUser.id);
    document.getElementById('user-modal').classList.remove('active');
  } catch (e) {
    console.error(e);
    showNotification(`❌ ${e.message || 'Erreur lors de l\'import. Vérifiez les paramètres et la connexion.'}`, 'error');
  } finally {
    // Hide loader
    document.getElementById('loader-overlay').classList.add('hidden');
  }
}

// --- USER SELECTION SCREEN (Netflix Style) ---
function openAddUserModal() {
  // Hide selection screen first
  hideUserSelectionScreen();
  
  document.getElementById('user-name').value = '';
  document.getElementById('m3u-url').value = '';
  document.getElementById('xt-url').value = '';
  document.getElementById('xt-user').value = '';
  document.getElementById('xt-pass').value = '';
  
  const tabBtns = document.querySelectorAll('.tabs button');
  tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === 'url'));
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.toggle('active', tc.id === 'tab-url'));
  
  const createBtn = document.getElementById('create-user');
  createBtn.textContent = t('connect');
  createBtn.replaceWith(createBtn.cloneNode(true));
  document.getElementById('create-user').onclick = createUser;
  
  document.getElementById('user-modal').classList.add('active');
}

function showUserSelectionScreen() {
  document.getElementById('user-selection-screen').classList.remove('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('channel-view').classList.add('hidden');
  document.getElementById('topbar').classList.add('hidden');
  renderUserSelectionScreen();
}

function hideUserSelectionScreen() {
  document.getElementById('user-selection-screen').classList.add('hidden');
  document.getElementById('topbar').classList.remove('hidden');
}

function renderUserSelectionScreen() {
  const container = document.getElementById('user-avatars-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  App.users.forEach((user, index) => {
    const avatarItem = document.createElement('div');
    avatarItem.className = 'user-avatar-item';
    avatarItem.onclick = () => {
      selectUser(user.id);
      hideUserSelectionScreen();
    };
    
    const avatarColor = `avatar-${index % 8}`;
    const initial = user.name.charAt(0).toUpperCase();
    
    avatarItem.innerHTML = `
      <div class="avatar-circle ${avatarColor}">${initial}</div>
      <div class="avatar-name">${user.name}</div>
    `;
    
    container.appendChild(avatarItem);
  });
}

function selectUser(id) {
  App.currentUserId = id;
  const user = App.users.find(u => u.id === id);
  document.getElementById('current-user-name').textContent = user.name;
  hideUserSelectionScreen();
  showDashboard();
  // show live channels by default when a user is selected
  showSection('live');
  renderUserMenu();
}

function renderUserMenu() {
  const list = document.getElementById('user-list');
  list.innerHTML = '';
  App.users.forEach((u, index) => {
    const avatarColor = `avatar-${index % 8}`;
    const initial = u.name.charAt(0).toUpperCase();
    const el = document.createElement('div');
    el.className = 'user-item';
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px">
        <div class="avatar-circle ${avatarColor}" style="width:30px;height:30px;font-size:0.8rem">${initial}</div>
        <span>${u.name}</span>
      </div>
    `;
    el.addEventListener('click', () => selectUser(u.id));
    list.appendChild(el);
  });
}

// --- SEARCH ---
function searchChannels(query) {
  const q = (query || '').toLowerCase().trim();
  const user = App.users.find(u => u.id === App.currentUserId);
  if (!user) return;
  if (!q) { showSection('live'); return; }
  const results = (user.channels || []).filter(ch => (ch.name || '').toLowerCase().includes(q) || (ch.group || '').toLowerCase().includes(q));
  // show results
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('channel-view').classList.remove('hidden');
  renderChannels(results);
}

// --- EDIT / DELETE USER ---
function getCurrentUser() { return App.users.find(u => u.id === App.currentUserId); }

function editUser() {
  const user = getCurrentUser();
  if (!user) {
    showNotification('❌ Aucun utilisateur sélectionné', 'error');
    return;
  }
  // prefill fields and select tab depending on stored source
  document.getElementById('user-name').value = user.name || '';
  if (user.source && typeof user.source === 'object' && user.source.type === 'xtream') {
    // xtream
    document.getElementById('xt-url').value = user.source.url || '';
    document.getElementById('xt-user').value = user.source.username || '';
    document.getElementById('xt-pass').value = '';
    // activate xtream tab
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === 'xtream'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.toggle('active', tc.id === 'tab-xtream'));
  } else {
    // assume m3u
    document.getElementById('m3u-url').value = (user.source && user.source.url) ? user.source.url : (typeof user.source === 'string' ? user.source : '');
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === 'url'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.toggle('active', tc.id === 'tab-url'));
  }
  document.getElementById('user-modal').classList.add('active');

  const btn = document.getElementById('create-user');
  const origText = btn.textContent;

  const saveHandler = async () => {
    const name = document.getElementById('user-name').value;
    const activeTabBtn = document.querySelector('.tabs button.active');
    const activeTab = activeTabBtn ? activeTabBtn.dataset.tab : 'url';
    if (!name) {
      showNotification('❌ ' + t('missing-name'), 'error');
      return;
    }
    try {
      // Show loader
      document.getElementById('loader-overlay').classList.remove('hidden');

      let text;
      let source;
      if (activeTab === 'url') {
        const url = document.getElementById('m3u-url').value;
        if (!url) {
          showNotification('❌ ' + t('missing-m3u-url'), 'error');
          return;
        }
        try {
          const r = await fetch(url, { mode: 'cors' });
          if (!r.ok) throw new Error(`Erreur ${r.status}: ${r.statusText}`);
          text = await r.text();
        } catch (e) {
          console.error('M3U URL Error:', e);
          throw new Error(t('m3u-fetch-error'));
        }
        source = { type: 'm3u', url };
      } else {
        const xtUrl = document.getElementById('xt-url').value;
        const xtUser = document.getElementById('xt-user').value;
        const xtPass = document.getElementById('xt-pass').value;
        if (!xtUrl || !xtUser || !xtPass) {
          showNotification('❌ ' + t('missing-xtream-params'), 'error');
          return;
        }
        const base = xtUrl.replace(/\/$/, '');
        // Construire l'URL M3U
        const built = `${base}/get.php?username=${encodeURIComponent(xtUser)}&password=${encodeURIComponent(xtPass)}&type=m3u_plus&output=m3u8`;

        console.log('Xtream URL:', built);

        // Essayer plusieurs proxies CORS
        const proxies = [
          `https://api.allorigins.win/raw?url=${encodeURIComponent(built)}`,
          `https://corsproxy.io/?${encodeURIComponent(built)}`,
          `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(built)}`
        ];

        for (const proxyUrl of proxies) {
          try {
            console.log('Trying proxy:', proxyUrl);
            const r = await fetch(proxyUrl, { headers: { 'Accept': '*/*' } });
            if (!r.ok) throw new Error(`Proxy error ${r.status}`);
            text = await r.text();
            if (!text.includes('#EXTM3U') && !text.includes('http')) {
              throw new Error(t('invalid-server-response'));
            }
            console.log('Success with proxy:', proxyUrl);
            break;
          } catch (e) {
            console.warn('Proxy failed:', proxyUrl, e.message);
            continue;
          }
        }

        if (!text) {
          throw new Error(t('all-proxies-failed'));
        }
        source = { type: 'xtream', url: base, username: xtUser };
      }
      const channels = parseM3U(text);
      user.name = name; user.channels = channels; user.source = source;
      // Save to IndexedDB (no compression needed)
      try {
        await dbSaveUser(user);
      } catch (e) {
        showNotification(`❌ ${t('storage-error')} : ${e.message}`, 'error');
        throw e;
      }
      showNotification(`✅ ` + t('profile-updated').replace('{name}', name).replace('{count}', channels.length), 'success');
      selectUser(user.id);
      document.getElementById('user-modal').classList.remove('active');
    } catch (e) {
      console.error(e);
      showNotification(`❌ ${e.message || t('update-error')}`, 'error');
    } finally {
      // Hide loader
      document.getElementById('loader-overlay').classList.add('hidden');
      btn.textContent = origText;
      btn.onclick = createUser;
    }
  };
  btn.textContent = t('save');
  btn.onclick = saveHandler;
}

function deleteUser() {
  const user = getCurrentUser();
  if (!user) {
    showNotification('❌ ' + t('no-user-selected'), 'error');
    return;
  }
  if (!confirm(t('confirm-delete').replace('{name}', user.name))) return;
  App.users = App.users.filter(u => u.id !== user.id);
  // Delete from IndexedDB
  dbDeleteUser(user.id);
  dbSaveFavorites(user.id, []);

  delete App.favorites[user.id];

  if (App.users.length > 0) {
    App.currentUserId = App.users[0].id;
    selectUser(App.currentUserId);
  } else {
    // No more users, show selection screen
    App.currentUserId = null;
    document.getElementById('current-user-name').textContent = t('guest');
    showUserSelectionScreen();
  }

  showNotification(`✅ ` + t('profile-deleted').replace('{name}', user.name), 'success');
  renderUserMenu();
  renderUserSelectionScreen();
}

// --- PLAYER NAVIGATION (next/prev) ---
function nextChannel() {
  if (!currentChannelList || currentChannelList.length === 0) return;
  if (currentChannelIndex < 0) currentChannelIndex = 0;
  else currentChannelIndex = (currentChannelIndex + 1) % currentChannelList.length;
  const ch = currentChannelList[currentChannelIndex];
  if (ch) playChannel(ch.url, currentChannelIndex);
}

function prevChannel() {
  if (!currentChannelList || currentChannelList.length === 0) return;
  if (currentChannelIndex < 0) currentChannelIndex = 0;
  else currentChannelIndex = (currentChannelIndex - 1 + currentChannelList.length) % currentChannelList.length;
  const ch = currentChannelList[currentChannelIndex];
  if (ch) playChannel(ch.url, currentChannelIndex);
}
