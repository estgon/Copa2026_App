// ============================================================================
// Copa 2026 - Controle de Figurinhas
// Arquivo: app.js
// ============================================================================

// ============================================================================
// DATA STRUCTURES
// ============================================================================

const countries = {
  'A': [['México', 'MEX'], ['África do Sul', 'ZAF'], ['Coreia do Sul', 'KOR'], ['Rep. Tcheca', 'CZE']],
  'B': [['Canadá', 'CAN'], ['Bósnia', 'BIH'], ['Catar', 'QAT'], ['Suíça', 'CHE']],
  'C': [['Brasil', 'BRA'], ['Marrocos', 'MAR'], ['Haiti', 'HTI'], ['Escócia', 'GBR']],
  'D': [['Estados Unidos', 'USA'], ['Paraguai', 'PRY'], ['Austrália', 'AUS'], ['Turquia', 'TUR']],
  'E': [['Alemanha', 'DEU'], ['Curaçau', 'CUW'], ['Costa do Marfim', 'CIV'], ['Equador', 'ECU']],
  'F': [['Holanda', 'NLD'], ['Japão', 'JPN'], ['Suécia', 'SWE'], ['Tunísia', 'TUN']],
  'G': [['Bélgica', 'BEL'], ['Egito', 'EGY'], ['Irã', 'IRN'], ['Nova Zelândia', 'NZL']],
  'H': [['Espanha', 'ESP'], ['Cabo Verde', 'CPV'], ['Arábia Saudita', 'SAU'], ['Uruguai', 'URY']],
  'I': [['França', 'FRA'], ['Senegal', 'SEN'], ['Iraque', 'IRQ'], ['Noruega', 'NOR']],
  'J': [['Argentina', 'ARG'], ['Argélia', 'DZA'], ['Áustria', 'AUT'], ['Jordânia', 'JOR']],
  'K': [['Portugal', 'PRT'], ['Congo', 'COD'], ['Uzbequistão', 'UZB'], ['Colômbia', 'COL']],
  'L': [['Inglaterra', 'GB-ENG'], ['Croácia', 'HRV'], ['Gana', 'GHA'], ['Panamá', 'PAN']]
};

const countryColors = {
  'BRA': '#FFD700', 'ARG': '#87CEEB', 'URY': '#87CEEB', 'COL': '#FFD700', 'ECU': '#FFD700', 'PRY': '#E74C3C',
  'DEU': '#DC241F', 'GB-ENG': '#E71930', 'FRA': '#003DA5', 'ESP': '#E74C3C', 'PRT': '#E74C3C', 'NLD': '#FF8C00',
  'BEL': '#8B0000', 'HRV': '#DC143C', 'SWE': '#FFD700', 'GBR': '#003DA5', 'AUT': '#E74C3C',
  'CZE': '#E74C3C', 'TUR': '#E60000', 'NOR': '#E74C3C', 'BIH': '#0055CC',
  'USA': '#B22234', 'MEX': '#006C42', 'CAN': '#FF0000', 'PAN': '#FF0000', 'HTI': '#0055CC', 'CUW': '#0055CC',
  'MAR': '#E74C3C', 'SEN': '#CE1126', 'CIV': '#FF8C00', 'EGY': '#E74C3C', 'GHA': '#CE1126', 'DZA': '#CE1126',
  'TUN': '#E74C3C', 'ZAF': '#FFD700', 'COD': '#87CEEB', 'CPV': '#0055CC',
  'JPN': '#BC002D', 'KOR': '#FF0000', 'AUS': '#FFB800', 'SAU': '#006C4E', 'IRN': '#CE1126', 'QAT': '#800020',
  'IRQ': '#228B22', 'UZB': '#1E90FF', 'JOR': '#000000', 'NZL': '#002B7F', 'CHE': '#E74C3C'
};

const flagEmojis = {
  'MEX': '🇲🇽', 'ZAF': '🇿🇦', 'KOR': '🇰🇷', 'CZE': '🇨🇿', 'CAN': '🇨🇦', 'BIH': '🇧🇦', 'QAT': '🇶🇦', 'CHE': '🇨🇭',
  'BRA': '🇧🇷', 'MAR': '🇲🇦', 'HTI': '🇭🇹', 'GBR': '🇬🇧', 'GB-ENG': '🏴', 'USA': '🇺🇸', 'PRY': '🇵🇾', 'AUS': '🇦🇺',
  'TUR': '🇹🇷', 'DEU': '🇩🇪', 'CUW': '🇨🇼', 'CIV': '🇨🇮', 'ECU': '🇪🇨', 'NLD': '🇳🇱', 'JPN': '🇯🇵', 'SWE': '🇸🇪',
  'TUN': '🇹🇳', 'BEL': '🇧🇪', 'EGY': '🇪🇬', 'IRN': '🇮🇷', 'NZL': '🇳🇿', 'ESP': '🇪🇸', 'CPV': '🇨🇻', 'SAU': '🇸🇦',
  'URY': '🇺🇾', 'FRA': '🇫🇷', 'SEN': '🇸🇳', 'IRQ': '🇮🇶', 'NOR': '🇳🇴', 'ARG': '🇦🇷', 'DZA': '🇩🇿', 'AUT': '🇦🇹',
  'JOR': '🇯🇴', 'PRT': '🇵🇹', 'COD': '🇨🇩', 'UZB': '🇺🇿', 'COL': '🇨🇴', 'HRV': '🇭🇷', 'GHA': '🇬🇭', 'PAN': '🇵🇦'
};
const continentMap = {
  'BRA': 'América do Sul', 'ARG': 'América do Sul', 'URY': 'América do Sul', 'COL': 'América do Sul', 'ECU': 'América do Sul', 'PRY': 'América do Sul',
  'DEU': 'Europa', 'GB-ENG': 'Europa', 'FRA': 'Europa', 'ESP': 'Europa', 'PRT': 'Europa', 'NLD': 'Europa', 'BEL': 'Europa', 'HRV': 'Europa', 'SWE': 'Europa', 'GBR': 'Europa', 'AUT': 'Europa', 'CZE': 'Europa', 'TUR': 'Europa', 'NOR': 'Europa', 'BIH': 'Europa', 'CHE': 'Europa',
  'USA': 'América do Norte', 'MEX': 'América do Norte', 'CAN': 'América do Norte', 'PAN': 'América do Norte', 'HTI': 'América do Norte', 'CUW': 'América do Norte',
  'MAR': 'África', 'SEN': 'África', 'CIV': 'África', 'EGY': 'África', 'GHA': 'África', 'DZA': 'África', 'TUN': 'África', 'ZAF': 'África', 'COD': 'África', 'CPV': 'África',
  'JPN': 'Ásia', 'KOR': 'Ásia', 'AUS': 'Ásia', 'SAU': 'Ásia', 'IRN': 'Ásia', 'QAT': 'Ásia', 'IRQ': 'Ásia', 'UZB': 'Ásia', 'JOR': 'Ásia', 'NZL': 'Oceania'
};

// ============================================================================
// APPLICATION STATE
// ============================================================================

const legacyCountryCodeMap = {
  MX: 'MEX', ZA: 'ZAF', KR: 'KOR', CZ: 'CZE', CA: 'CAN', BA: 'BIH', QA: 'QAT', CH: 'CHE',
  BR: 'BRA', MA: 'MAR', HT: 'HTI', GB: 'GBR', 'GB-ENG': 'GB-ENG', US: 'USA', PY: 'PRY', AU: 'AUS', TR: 'TUR',
  DE: 'DEU', CW: 'CUW', CI: 'CIV', EC: 'ECU', NL: 'NLD', JP: 'JPN', SE: 'SWE', TN: 'TUN',
  BE: 'BEL', EG: 'EGY', IR: 'IRN', NZ: 'NZL', ES: 'ESP', CV: 'CPV', SA: 'SAU', UY: 'URY',
  FR: 'FRA', SN: 'SEN', IQ: 'IRQ', NO: 'NOR', AR: 'ARG', DZ: 'DZA', AT: 'AUT', JO: 'JOR',
  PT: 'PRT', CD: 'COD', UZ: 'UZB', CO: 'COL', HR: 'HRV', GH: 'GHA', PA: 'PAN'
};

let stickers = JSON.parse(localStorage.getItem('copaStickers') || '{}');
let duplicates = JSON.parse(localStorage.getItem('copaDuplicates') || '{}');
let searchFilter = { group: null, country: null, number: null };
let currentReportData = '';
let currentReportTitle = '';
let currentDashboardView = 'continents';
let pendingUnmark = null;

migrateLegacyData();

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Salva dados no localStorage
 */
function saveData() {
  localStorage.setItem('copaStickers', JSON.stringify(stickers));
  localStorage.setItem('copaDuplicates', JSON.stringify(duplicates));
  updateStats();
}

function migrateLegacyData() {
  const migrateKeys = (source) => {
    const result = {};
    Object.entries(source).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(legacyCountryCodeMap, key)) {
        result[legacyCountryCodeMap[key]] = value;
        return;
      }

      const [code, ...rest] = key.split('-');
      const mappedCode = legacyCountryCodeMap[code] || code;
      result[[mappedCode, ...rest].join('-')] = value;
    });
    return result;
  };

  stickers = migrateKeys(stickers);
  duplicates = migrateKeys(duplicates);
}

/**
 * Escapa caracteres HTML para prevenir XSS
 */
function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Parse da busca de país e número
 */
function parseSearch(countryQuery, numberQuery) {
  if (!countryQuery && !numberQuery) return { group: null, country: null, number: null };
  
  let group = null, country = null, number = null;
  
  if (countryQuery) {
    const lower = countryQuery.toLowerCase().trim();
    for (const [g, countryList] of Object.entries(countries)) {
      for (const [name, code] of countryList) {
        if (code.toLowerCase() === lower || name.toLowerCase().includes(lower)) {
          country = code;
          group = g;
          break;
        }
      }
    }
  }
  
  if (numberQuery) {
    number = parseInt(numberQuery);
  }
  
  return { group, country, number };
}

/**
 * Verifica se o país deve ser exibido baseado no filtro
 */
function shouldShowCountry(group, code) {
  if (!searchFilter.group && !searchFilter.country && !searchFilter.number) return true;
  if (searchFilter.group && searchFilter.group !== group) return false;
  if (searchFilter.country && searchFilter.country !== code) return false;
  return true;
}

/**
 * Verifica se o número deve ser exibido baseado no filtro
 */
function shouldShowNumber(num) {
  if (!searchFilter.number) return true;
  return searchFilter.number === num;
}

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

/**
 * Alterna figurinha entre coletada e não coletada
 */
function toggleSticker(country, num, type = 'country') {
  let key = type === 'country' ? country + '-' + num : type + '-' + num;
  
  if (stickers[key]) {
    showConfirmation(country, num, type);
  } else {
    stickers[key] = true;
    saveData();
    renderPaises();
    renderRefri();
    renderHistory();
    renderTrocas();
  }
}

/**
 * Adiciona uma duplicata
 */
function addDuplicate(country, num, type = 'country') {
  const key = type === 'country' ? country + '-' + num : type + '-' + num;
  if (!duplicates[key]) duplicates[key] = 0;
  duplicates[key]++;
  saveData();
  if (type === 'country') renderPaises();
  else if (type === 'refri') renderRefri();
  else if (type === 'history') renderHistory();
  renderTrocas();
}

/**
 * Remove uma duplicata
 */
function removeDuplicate(country, num, type = 'country') {
  const key = type === 'country' ? country + '-' + num : type + '-' + num;
  if (duplicates[key] && duplicates[key] > 0) {
    duplicates[key]--;
    if (duplicates[key] === 0) delete duplicates[key];
  }
  saveData();
  if (type === 'country') renderPaises();
  else if (type === 'refri') renderRefri();
  else if (type === 'history') renderHistory();
  renderTrocas();
}

/**
 * Mostra modal de confirmação para desmarcar figurinha
 */
function showConfirmation(country, num, type = 'country') {
  const key = type === 'country' ? country + '-' + num : type + '-' + num;
  const dupCount = duplicates[key] || 0;
  
  if (dupCount > 0) {
    pendingUnmark = { country, num, type, key };
    
    let countryName = '';
    let itemLabel = '';
    
    if (type === 'country') {
      for (const [g, countryList] of Object.entries(countries)) {
        for (const [name, code] of countryList) {
          if (code === country) {
            countryName = name;
            break;
          }
        }
      }
      itemLabel = `${countryName} #${num}`;
    } else if (type === 'refri') {
      itemLabel = `Refri #${num}`;
    } else if (type === 'history') {
      itemLabel = `World Cup #${num}`;
    }
    
    const message = `Você tem <strong>${dupCount}</strong> cópia${dupCount > 1 ? 's' : ''} dessa figurinha registrada${dupCount > 1 ? 's' : ''} para troca.<br><br>Se desmarcar, <strong>${itemLabel}</strong> e suas duplicatas serão removidas.`;
    
    document.getElementById('modal-message').innerHTML = message;
    document.getElementById('confirmation-modal').classList.add('active');
  } else {
    performUnmark(country, num, type);
  }
}

/**
 * Confirma o desmarcamento da figurinha
 */
function confirmUnmark() {
  if (pendingUnmark) {
    performUnmark(pendingUnmark.country, pendingUnmark.num, pendingUnmark.type);
    document.getElementById('confirmation-modal').classList.remove('active');
    pendingUnmark = null;
  }
}

/**
 * Cancela o desmarcamento
 */
function cancelUnmark() {
  document.getElementById('confirmation-modal').classList.remove('active');
  pendingUnmark = null;
  renderPaises();
  renderRefri();
  renderHistory();
}

/**
 * Executa o desmarcamento da figurinha
 */
function performUnmark(country, num, type = 'country') {
  const key = type === 'country' ? country + '-' + num : type + '-' + num;
  stickers[key] = false;
  delete duplicates[key];
  
  saveData();
  renderPaises();
  renderRefri();
  renderHistory();
  renderTrocas();
}

// ============================================================================
// DASHBOARD AND VIEW RENDERING
// ============================================================================

/**
 * Alterna visualização do dashboard (grupos vs continentes)
 */
function switchDashboardView(view) {
  currentDashboardView = view;
  
  document.getElementById('btn-groups').style.background = view === 'groups' ? '#667eea' : 'var(--color-background-secondary)';
  document.getElementById('btn-groups').style.color = view === 'groups' ? 'white' : 'var(--color-text-primary)';
  
  document.getElementById('btn-continents').style.background = view === 'continents' ? '#667eea' : 'var(--color-background-secondary)';
  document.getElementById('btn-continents').style.color = view === 'continents' ? 'white' : 'var(--color-text-primary)';
  
  document.getElementById('view-title').textContent = view === 'groups' ? 'Por Grupo (A-L)' : 'Por Continente';
  
  updateDashboardView();
}

/**
 * Atualiza visualização do dashboard
 */
function updateDashboardView() {
  if (currentDashboardView === 'groups') {
    renderGroupsView();
  } else {
    renderContinentsView();
  }
}

/**
 * Renderiza visualização por grupos
 */
function renderGroupsView() {
  const groupStats = {};
  
  Object.entries(countries).forEach(([group, countryList]) => {
    groupStats[group] = { collected: 0, total: 0 };
    
    countryList.forEach(([name, code]) => {
      let collected = 0;
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) collected++;
      }
      
      groupStats[group].collected += collected;
      groupStats[group].total += 20;
    });
  });
  
  let html = '';
  Object.entries(groupStats).forEach(([group, stats]) => {
    const pct = Math.round((stats.collected / stats.total) * 100);
    const colors = ['#FFD700', '#FF8C00', '#27AE60', '#3498DB', '#E74C3C', '#9B59B6', '#F39C12', '#1ABC9C', '#E91E63', '#00BCD4', '#FF5722', '#673AB7'];
    const color = colors[group.charCodeAt(0) % colors.length];
    const flags = (countries[group] || []).map(([name, code]) => `<span title="${name}" style="font-size: 20px; line-height: 1; margin-right: 6px;">${flagEmojis[code] || '🏳️'}</span>`).join('');

    html += `<div class="group-card" style="border-color: ${color}30; background: linear-gradient(135deg, ${color}10 0%, ${color}15 100%);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'>
      <div class="group-card__header">
        <div class="group-card__title">
          <span class="group-card__label" style="color: ${color};">Grupo ${group}</span>
          <div class="group-card__flags">${flags}</div>
        </div>
        <div class="group-card__percent" style="color: ${color};">${pct}% completo</div>
      </div>
      <div class="group-card__content">
        <div class="group-card__count" style="color: ${color};">${stats.collected}/${stats.total}</div>
        <div class="group-card__progress">
          <div class="group-card__progress-bar" style="width: ${pct}%; background: ${color};"></div>
        </div>
      </div>
    </div>`;
  });
  document.getElementById('view-stats').innerHTML = html;
}

/**
 * Renderiza visualização por continentes
 */
function renderContinentsView() {
  const continentStats = {};
  
  Object.entries(countries).forEach(([group, countryList]) => {
    countryList.forEach(([name, code]) => {
      const continent = continentMap[code] || 'Outros';
      if (!continentStats[continent]) {
        continentStats[continent] = { collected: 0, total: 0 };
      }
      
      let collected = 0;
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) collected++;
      }
      
      continentStats[continent].collected += collected;
      continentStats[continent].total += 20;
    });
  });
  
  let html = '';
  const colors = {
    'América do Sul': { bg: 'linear-gradient(135deg, #FFD70015 0%, #FFA50030 100%)', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', text: '#B8860B' },
    'Europa': { bg: 'linear-gradient(135deg, #4FACFE15 0%, #00F2FE30 100%)', gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)', text: '#0077B6' },
    'América do Norte': { bg: 'linear-gradient(135deg, #FA709A15 0%, #FEE14030 100%)', gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)', text: '#A91D3A' },
    'África': { bg: 'linear-gradient(135deg, #F093FB15 0%, #F5576C30 100%)', gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)', text: '#B91D3A' },
    'Ásia': { bg: 'linear-gradient(135deg, #FFB34715 0%, #FF8C4230 100%)', gradient: 'linear-gradient(135deg, #FFB347 0%, #FF8C42 100%)', text: '#B8450D' },
    'Oceania': { bg: 'linear-gradient(135deg, #A8EDEA15 0%, #FED6E330 100%)', gradient: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)', text: '#06A77D' }
  };
  
  Object.entries(continentStats).forEach(([continent, stats]) => {
    const pct = Math.round((stats.collected / stats.total) * 100);
    const colorSet = colors[continent] || colors['Oceania'];
    
    html += `<div style="padding: 1.25rem; background: ${colorSet.bg}; border-radius: 14px; border: 1px solid ${colorSet.text}30; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
      <div style="font-weight: 700; margin-bottom: 8px; font-size: 13px; color: ${colorSet.text}; text-transform: uppercase; letter-spacing: 0.3px;">${continent}</div>
      <div style="font-size: 24px; font-weight: 800; background: ${colorSet.gradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px;">${stats.collected}/${stats.total}</div>
      <div style="height: 6px; background: rgba(0,0,0,0.1); border-radius: 3px; overflow: hidden; margin-bottom: 8px;">
        <div style="height: 100%; width: ${pct}%; background: ${colorSet.gradient}; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);"></div>
      </div>
      <div style="font-size: 12px; font-weight: 700; color: ${colorSet.text};">${pct}% completo</div>
    </div>`;
  });
  
  document.getElementById('view-stats').innerHTML = html;
}

// ============================================================================
// RENDERING FUNCTIONS
// ============================================================================

/**
 * Renderiza lista de países
 */
function renderPaises() {
  let html = '';
  Object.entries(countries).forEach(([group, countryList]) => {
    let groupHasContent = false;
    let groupHtml = `<h2 style="font-size: 14px; font-weight: 700; background: #DAA520; color: white; padding: 12px 16px; border-radius: 12px; margin: 1.5rem 0 12px; text-transform: uppercase; letter-spacing: 0.3px;">Grupo ${group}</h2>`;
    
    countryList.forEach(([name, code]) => {
      if (!shouldShowCountry(group, code)) return;
      
      let collected = 0;
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) collected++;
      }
      
      const emoji = flagEmojis[code] || '🏳️';
      const countryColor = countryColors[code] || '#667eea';
      const textColor = ['#F5F5F5', '#FFFFFF'].includes(countryColor) ? '#000000' : 'white';
      
      groupHtml += `<div style="margin-bottom: 12px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; color: var(--color-text-primary);">
          <span style="font-size: 20px;">${emoji}</span>
          ${name} (${collected}/20)
        </div>
        <div class="sticker-grid">`;
      
      for (let i = 1; i <= 20; i++) {
        if (!shouldShowNumber(i)) continue;
        
        const checked = stickers[code + '-' + i];
        const dupCount = duplicates[code + '-' + i] || 0;
        groupHtml += `<div style="position: relative;">
          <button onclick="toggleSticker('${code}', ${i}, 'country')" class="sticker-button ${checked ? 'checked' : ''}" style="background: ${checked ? countryColor : 'var(--color-background-secondary)'}; color: ${checked ? textColor : 'var(--color-text-primary)'}; box-shadow: ${checked ? '0 4px 12px ' + countryColor + '40' : 'none'};">${i}</button>
          ${checked ? `<div class="dup-indicator" onclick="event.stopPropagation(); document.getElementById('dup-${code}-${i}').classList.toggle('active');">+</div>
          <div class="dup-menu" id="dup-${code}-${i}">
            <button onclick="event.stopPropagation(); addDuplicate('${code}', ${i}, 'country')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500; color: var(--color-text-primary);">+1</button>
            <div style="font-size: 11px; text-align: center; font-weight: 700; color: var(--color-text-primary);">${dupCount}</div>
            <button onclick="event.stopPropagation(); removeDuplicate('${code}', ${i}, 'country')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500; color: var(--color-text-primary);">-1</button>
          </div>` : ''}
        </div>`;
      }
      
      groupHtml += `</div></div>`;
      groupHasContent = true;
    });
    
    if (groupHasContent) {
      html += groupHtml;
    }
  });
  
  document.getElementById('paises-list').innerHTML = html || '<div style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">Nenhuma figurinha encontrada</div>';
}

/**
 * Renderiza lista de Refris
 */
function renderRefri() {
  let html = '';
  for (let i = 1; i <= 14; i++) {
    const checked = stickers['refri-' + i];
    const dupCount = duplicates['refri-' + i] || 0;
    html += `<div style="position: relative;">
      <button onclick="toggleSticker('', ${i}, 'refri')" class="sticker-button ${checked ? 'checked' : ''}" style="background: ${checked ? '#E74C3C' : 'var(--color-background-secondary)'}; color: ${checked ? 'white' : 'var(--color-text-primary)'}; box-shadow: ${checked ? '0 4px 12px #E74C3C40' : 'none'};">R${i}</button>
      ${checked ? `<div class="dup-indicator" style="background: #E74C3C;" onclick="event.stopPropagation(); document.getElementById('dup-refri-${i}').classList.toggle('active');">+</div>
      <div class="dup-menu" id="dup-refri-${i}">
        <button onclick="event.stopPropagation(); addDuplicate('', ${i}, 'refri')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">+1</button>
        <div style="font-size: 11px; text-align: center; font-weight: 700;">${dupCount}</div>
        <button onclick="event.stopPropagation(); removeDuplicate('', ${i}, 'refri')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">-1</button>
      </div>` : ''}
    </div>`;
  }
  document.getElementById('refri-list').innerHTML = html;
}

/**
 * Renderiza lista de World Cup History
 */
function renderHistory() {
  let html = '';
  for (let i = 0; i <= 19; i++) {
    const checked = stickers['history-' + i];
    const dupCount = duplicates['history-' + i] || 0;
    html += `<div style="position: relative;">
      <button onclick="toggleSticker('', ${i}, 'history')" class="sticker-button ${checked ? 'checked' : ''}" style="background: ${checked ? '#3498DB' : 'var(--color-background-secondary)'}; color: ${checked ? 'white' : 'var(--color-text-primary)'}; box-shadow: ${checked ? '0 4px 12px #3498DB40' : 'none'};">FWC${i}</button>
      ${checked ? `<div class="dup-indicator" style="background: #3498DB;" onclick="event.stopPropagation(); document.getElementById('dup-history-${i}').classList.toggle('active');">+</div>
      <div class="dup-menu" id="dup-history-${i}">
        <button onclick="event.stopPropagation(); addDuplicate('', ${i}, 'history')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">+1</button>
        <div style="font-size: 11px; text-align: center; font-weight: 700;">${dupCount}</div>
        <button onclick="event.stopPropagation(); removeDuplicate('', ${i}, 'history')" style="padding: 4px 8px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 500;">-1</button>
      </div>` : ''}
    </div>`;
  }
  document.getElementById('history-list').innerHTML = html;
}

/**
 * Renderiza lista de trocas (duplicatas)
 */
function renderTrocas() {
  let html = '';
  
  for (let i = 1; i <= 14; i++) {
    const dupCount = duplicates['refri-' + i] || 0;
    if (stickers['refri-' + i] && dupCount > 0) {
      html += `<div style="padding: 12px; background: linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%); border-radius: 12px; border: 1px solid #F48FB1; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 2px 8px rgba(244, 143, 177, 0.2);"><div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 24px;">🥤</span><div><div style="font-weight: 700; font-size: 13px; color: #E74C3C;">Refri #${i}</div><div style="font-size: 12px; color: #E74C3C; opacity: 0.8;">Disponíveis: ${dupCount}</div></div></div><div style="display: flex; gap: 4px;"><button onclick="removeDuplicate('', ${i}, 'refri')" style="padding: 4px 8px; background: #E74C3C; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">-1</button><button onclick="addDuplicate('', ${i}, 'refri')" style="padding: 4px 8px; background: #27AE60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">+1</button></div></div>`;
    }
  }
  
  for (let i = 0; i <= 19; i++) {
    const dupCount = duplicates['history-' + i] || 0;
    if (stickers['history-' + i] && dupCount > 0) {
      html += `<div style="padding: 12px; background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%); border-radius: 12px; border: 1px solid #64B5F6; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 2px 8px rgba(100, 181, 246, 0.2);"><div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 24px;">🏆</span><div><div style="font-weight: 700; font-size: 13px; color: #3498DB;">World Cup #${i}</div><div style="font-size: 12px; color: #3498DB; opacity: 0.8;">Disponíveis: ${dupCount}</div></div></div><div style="display: flex; gap: 4px;"><button onclick="removeDuplicate('', ${i}, 'history')" style="padding: 4px 8px; background: #E74C3C; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">-1</button><button onclick="addDuplicate('', ${i}, 'history')" style="padding: 4px 8px; background: #27AE60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">+1</button></div></div>`;
    }
  }
  
  Object.entries(countries).forEach(([group, countryList]) => {
    countryList.forEach(([name, code]) => {
      for (let i = 1; i <= 20; i++) {
        const dupCount = duplicates[code + '-' + i] || 0;
        if (stickers[code + '-' + i] && dupCount > 0) {
          const emoji = flagEmojis[code] || '🏳️';
          const color = countryColors[code] || '#667eea';
          html += `<div style="padding: 12px; background: linear-gradient(135deg, ${color}15 0%, ${color}30 100%); border-radius: 12px; border: 1px solid ${color}40; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 2px 8px ${color}20;"><div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 24px;">${emoji}</span><div><div style="font-weight: 700; font-size: 13px; color: ${color};">${name} #${i}</div><div style="font-size: 12px; color: ${color}; opacity: 0.8;">Disponíveis: ${dupCount}</div></div></div><div style="display: flex; gap: 4px;"><button onclick="removeDuplicate('${code}', ${i}, 'country')" style="padding: 4px 8px; background: #E74C3C; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">-1</button><button onclick="addDuplicate('${code}', ${i}, 'country')" style="padding: 4px 8px; background: #27AE60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: 600;">+1</button></div></div>`;
        }
      }
    });
  });
  
  if (html === '') {
    html = '<div style="padding: 24px; text-align: center; color: var(--color-text-secondary); grid-column: 1/-1;">Nenhuma figurinha duplicada</div>';
  }
  
  document.getElementById('trocas-list').innerHTML = html;
}

// ============================================================================
// STATISTICS AND UPDATES
// ============================================================================

/**
 * Atualiza estatísticas gerais
 */
function updateStats() {
  let collected = 0, paises = 0, refri = 0, history = 0;
  let totalDuplicates = 0;
  
  Object.entries(stickers).forEach(([key, value]) => {
    if (!value) return;
    if (key.startsWith('refri-')) refri++;
    else if (key.startsWith('history-')) history++;
    else paises++;
  });
  
  Object.entries(duplicates).forEach(([key, qty]) => {
    if (stickers[key]) {
      totalDuplicates += qty || 0;
    }
  });
  
  collected = paises + refri + history;
  const total = 1047;
  const missing = total - collected;
  const percentage = Math.round((collected / total) * 100);
  
  document.getElementById('collected').textContent = collected;
  document.getElementById('missing').textContent = missing;
  document.getElementById('percentage').textContent = percentage + '%';
  document.getElementById('duplicates').textContent = totalDuplicates;
  document.getElementById('progress-bar').style.width = percentage + '%';
  
  document.getElementById('stats-paises').textContent = paises + '/960';
  document.getElementById('stats-refri').textContent = refri + '/14';
  document.getElementById('stats-history').textContent = history + '/20';
  
  document.getElementById('bar-paises').style.width = (paises / 960 * 100) + '%';
  document.getElementById('bar-refri').style.width = (refri / 14 * 100) + '%';
  document.getElementById('bar-history').style.width = (history / 20 * 100) + '%';
  
  updateDashboardView();
}

// ============================================================================
// TABS MANAGEMENT
// ============================================================================

/**
 * Alterna entre abas
 */
function switchTab(tab) {
  document.getElementById('dashboard-content').style.display = tab === 'dashboard' ? 'block' : 'none';
  document.getElementById('paises-content').style.display = tab === 'paises' ? 'block' : 'none';
  document.getElementById('refri-content').style.display = tab === 'refri' ? 'block' : 'none';
  document.getElementById('history-content').style.display = tab === 'history' ? 'block' : 'none';
  document.getElementById('trocas-content').style.display = tab === 'trocas' ? 'block' : 'none';
  document.getElementById('relatorios-content').style.display = tab === 'relatorios' ? 'block' : 'none';
  
  document.querySelectorAll('[id^="tab-"]').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.getElementById('tab-' + tab);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// ============================================================================
// PREVIEW DE TROCAS
// ============================================================================

function getTradePreviewItems() {
  let items = [];

  const addItem = (title, emoji, color, dupCount, category) => {
    items.push({ title, emoji, color, dupCount, category });
  };

  for (let i = 1; i <= 14; i++) {
    const dupCount = duplicates['refri-' + i] || 0;
    if (stickers['refri-' + i] && dupCount > 0) {
      addItem(`Refri #${i}`, '🥤', '#E74C3C', dupCount, 'Refri');
    }
  }

  for (let i = 0; i <= 19; i++) {
    const dupCount = duplicates['history-' + i] || 0;
    if (stickers['history-' + i] && dupCount > 0) {
      addItem(`World Cup #${i}`, '🏆', '#3498DB', dupCount, 'World Cup');
    }
  }

  Object.entries(countries).forEach(([group, countryList]) => {
    countryList.forEach(([name, code]) => {
      const emoji = flagEmojis[code] || '🏳️';
      const color = countryColors[code] || '#667eea';
      for (let i = 1; i <= 20; i++) {
        const dupCount = duplicates[code + '-' + i] || 0;
        if (stickers[code + '-' + i] && dupCount > 0) {
          addItem(`${name} #${i}`, emoji, color, dupCount, 'Países');
        }
      }
    });
  });

  return items;
}

/**
 * Abre o modal com as figurinhas disponíveis para troca
 */
function openTradePreview() {
  const container = document.getElementById('trade-preview-container');
  const statsContainer = document.getElementById('trade-preview-stats');
  const items = getTradePreviewItems();
  let html = '';
  let stats = { paises: 0, refri: 0, history: 0, total: 0 };

  items.forEach((item) => {
    stats.total += item.dupCount;
    stats[item.category === 'Países' ? 'paises' : item.category === 'Refri' ? 'refri' : 'history']++;
    html += `<div class="trade-card" style="border: 1px solid ${item.color}33; background: ${item.color}15;">
      <div class="trade-image" style="background: ${item.color};">${item.emoji}</div>
      <div class="trade-info">
        <div class="trade-title">${item.title}</div>
        <div class="trade-count">${item.dupCount} disponível${item.dupCount > 1 ? 's' : ''}</div>
      </div>
    </div>`;
  });

  if (!html) {
    html = '<div style="padding: 2rem; text-align: center; color: var(--color-text-secondary);">Nenhuma figurinha disponível para troca.</div>';
  }

  container.innerHTML = html;
  statsContainer.innerHTML = `
    <strong style="display:block; margin-bottom:8px; color:#667eea;">Resumo de Trocas</strong>
    🌍 Países: ${stats.paises} itens<br>
    🥤 Refri: ${stats.refri} itens<br>
    🏆 World Cup: ${stats.history} itens<br>
    <strong style="display:block; margin-top:8px; color:#667eea;">Total: ${stats.total} figurinhas</strong>
  `;
  document.getElementById('trade-modal').classList.add('active');
}

/**
 * Copia uma imagem das figurinhas disponíveis para troca para a área de transferência
 */
async function copyTradePreviewImage() {
  const items = getTradePreviewItems();
  if (!items.length) {
    alert('Nenhuma figurinha disponível para troca.');
    return;
  }

  const columns = 3;
  const cardWidth = 260;
  const cardHeight = 120;
  const padding = 20;
  const width = columns * cardWidth + (columns + 1) * padding;
  const rows = Math.ceil(items.length / columns);
  const height = rows * cardHeight + (rows + 1) * padding + 80;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#667eea';
  ctx.font = '24px sans-serif';
  ctx.fillText('Figurinhas para Troca', padding, 36);
  ctx.fillStyle = '#444444';
  ctx.font = '14px sans-serif';
  ctx.fillText(`Gerado em ${new Date().toLocaleDateString('pt-BR')}`, padding, 58);

  items.forEach((item, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = padding + col * (cardWidth + padding);
    const y = 80 + row * (cardHeight + padding);

    ctx.fillStyle = '#f8f9ff';
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, cardWidth, cardHeight);

    ctx.fillStyle = item.color;
    ctx.fillRect(x + 16, y + 16, 56, 56);
    ctx.fillStyle = '#ffffff';
    ctx.font = '36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.emoji, x + 44, y + 44);

    ctx.fillStyle = '#222222';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(item.title, x + 88, y + 32);

    ctx.fillStyle = '#555555';
    ctx.font = '13px sans-serif';
    ctx.fillText(`${item.dupCount} disponível${item.dupCount > 1 ? 's' : ''}`, x + 88, y + 60);
  });

  if (!navigator.clipboard || !window.ClipboardItem) {
    alert('Copiar imagem não é suportado neste navegador.');
    return;
  }

  canvas.toBlob(async (blob) => {
    if (!blob) {
      alert('Não foi possível gerar a imagem.');
      return;
    }

    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      alert('Imagem copiada para a área de transferência!');
    } catch (err) {
      console.error(err);
      alert('Falha ao copiar a imagem. Verifique as permissões do navegador.');
    }
  });
}

/**
 * Fecha modal de preview de trocas
 */
function closeTradePreview() {
  document.getElementById('trade-modal').classList.remove('active');
}

// ============================================================================
// REPORTS GENERATION
// ============================================================================

/**
 * Gera relatório baseado no tipo
 */
function generateReport(type) {
  let reportContent = '';
  let reportTitle = '';
  
  if (type === 'obtained') {
    reportTitle = '✅ FIGURINHAS OBTIDAS';
    reportContent = generateObtainedReport();
  } else if (type === 'missing') {
    reportTitle = '❌ FIGURINHAS FALTANTES';
    reportContent = generateMissingReport();
  } else if (type === 'duplicates') {
    reportTitle = '🔄 FIGURINHAS PARA TROCA';
    reportContent = generateDuplicatesReport();
  } else if (type === 'complete') {
    reportTitle = '📊 RELATÓRIO COMPLETO';
    reportContent = generateCompleteReport();
  }
  
  currentReportData = reportContent;
  currentReportTitle = reportTitle;
  document.getElementById('report-title').textContent = reportTitle;
  document.getElementById('report-content').textContent = reportContent;
  document.getElementById('report-modal').classList.add('active');
}

/**
 * Gera relatório de figurinhas obtidas
 */
function generateObtainedReport() {
  let report = `COPA 2026 - FIGURINHAS OBTIDAS\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n\n`;
  
  Object.entries(countries).forEach(([group, countryList]) => {
    report += `GRUPO ${group}\n${'-'.repeat(30)}\n`;
    
    countryList.forEach(([name, code]) => {
      let obtained = [];
      for (let i = 1; i <= 20; i++) {
        if (stickers[code + '-' + i]) {
          obtained.push(i);
        }
      }
      
      if (obtained.length > 0) {
        report += `${name}: ${obtained.join(', ')}\n`;
      }
    });
  });
  
  report += `\n\nREFRI\n${'-'.repeat(30)}\n`;
  let refriObtained = [];
  for (let i = 1; i <= 14; i++) {
    if (stickers['refri-' + i]) {
      refriObtained.push(`R${i}`);
    }
  }
  if (refriObtained.length > 0) {
    report += `Figurinhas: ${refriObtained.join(', ')}\n`;
  }
  
  report += `\n\nWORLD CUP HISTORY\n${'-'.repeat(30)}\n`;
  let historyObtained = [];
  for (let i = 0; i <= 19; i++) {
    if (stickers['history-' + i]) {
      historyObtained.push(`FWC${i}`);
    }
  }
  if (historyObtained.length > 0) {
    report += `Figurinhas: ${historyObtained.join(', ')}\n`;
  }
  
  return report;
}

/**
 * Gera relatório de figurinhas faltantes
 */
function generateMissingReport() {
  let report = `COPA 2026 - FIGURINHAS FALTANTES\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n\n`;
  
  Object.entries(countries).forEach(([group, countryList]) => {
    report += `GRUPO ${group}\n${'-'.repeat(30)}\n`;
    
    countryList.forEach(([name, code]) => {
      let missing = [];
      for (let i = 1; i <= 20; i++) {
        if (!stickers[code + '-' + i]) {
          missing.push(i);
        }
      }
      
      if (missing.length > 0) {
        report += `${name}: ${missing.join(', ')}\n`;
      }
    });
  });
  
  report += `\n\nREFRI\n${'-'.repeat(30)}\n`;
  let refriMissing = [];
  for (let i = 1; i <= 14; i++) {
    if (!stickers['refri-' + i]) {
      refriMissing.push(`R${i}`);
    }
  }
  if (refriMissing.length > 0) {
    report += `Figurinhas: ${refriMissing.join(', ')}\n`;
  }
  
  report += `\n\nWORLD CUP HISTORY\n${'-'.repeat(30)}\n`;
  let historyMissing = [];
  for (let i = 0; i <= 19; i++) {
    if (!stickers['history-' + i]) {
      historyMissing.push(`FWC${i}`);
    }
  }
  if (historyMissing.length > 0) {
    report += `Figurinhas: ${historyMissing.join(', ')}\n`;
  }
  
  return report;
}

/**
 * Gera relatório de figurinhas para troca
 */
function generateDuplicatesReport() {
  let report = `COPA 2026 - FIGURINHAS PARA TROCA\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n\n`;
  
  let hasDuplicates = false;
  
  Object.entries(countries).forEach(([group, countryList]) => {
    let groupDups = [];
    
    countryList.forEach(([name, code]) => {
      for (let i = 1; i <= 20; i++) {
        const dupCount = duplicates[code + '-' + i] || 0;
        if (stickers[code + '-' + i] && dupCount > 0) {
          groupDups.push(`${name} #${i}: ${dupCount}`);
          hasDuplicates = true;
        }
      }
    });
    
    if (groupDups.length > 0) {
      report += `GRUPO ${group}\n${'-'.repeat(30)}\n`;
      groupDups.forEach(dup => {
        report += `${dup}\n`;
      });
    }
  });
  
  report += `\n\nREFRI\n${'-'.repeat(30)}\n`;
  let refriDups = [];
  for (let i = 1; i <= 14; i++) {
    const dupCount = duplicates['refri-' + i] || 0;
    if (stickers['refri-' + i] && dupCount > 0) {
      refriDups.push(`R${i}: ${dupCount}`);
      hasDuplicates = true;
    }
  }
  if (refriDups.length > 0) {
    refriDups.forEach(dup => {
      report += `${dup}\n`;
    });
  }
  
  report += `\n\nWORLD CUP HISTORY\n${'-'.repeat(30)}\n`;
  let historyDups = [];
  for (let i = 0; i <= 19; i++) {
    const dupCount = duplicates['history-' + i] || 0;
    if (stickers['history-' + i] && dupCount > 0) {
      historyDups.push(`FWC${i}: ${dupCount}`);
      hasDuplicates = true;
    }
  }
  if (historyDups.length > 0) {
    historyDups.forEach(dup => {
      report += `${dup}\n`;
    });
  }
  
  if (!hasDuplicates) {
    report += '\nNenhuma figurinha duplicada registrada para troca.\n';
  }
  
  return report;
}

/**
 * Gera relatório completo
 */
function generateCompleteReport() {
  let report = `COPA 2026 - RELATÓRIO COMPLETO\nData: ${new Date().toLocaleDateString('pt-BR')}\n${'='.repeat(50)}\n`;
  
  let totalCollected = 0, totalMissing = 0, totalDuplicates = 0;
  
  Object.entries(stickers).forEach(([key, value]) => {
    if (value) totalCollected++;
    else totalMissing++;
  });
  
  Object.entries(duplicates).forEach(([key, qty]) => {
    if (stickers[key]) totalDuplicates += qty || 0;
  });
  
  report += `\n📊 ESTATÍSTICAS GERAIS\n${'-'.repeat(30)}\n`;
  report += `Figurinhas Coletadas: ${totalCollected}/1047 (${Math.round((totalCollected/1047)*100)}%)\n`;
  report += `Figurinhas Faltantes: ${totalMissing}/1047\n`;
  report += `Duplicatas Registradas: ${totalDuplicates}\n`;
  
  return report;
}

/**
 * Exporta relatório como HTML
 */
function exportToHTML() {
  const doctype = '<!DOCTYPE html>';
  const html = '<html lang="pt-BR">';
  const head = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${currentReportTitle}</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; padding: 2rem; min-height: 100vh; }
      .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); padding: 3rem; }
      h1 { color: #FF8C42; margin-bottom: 1rem; font-size: 2.5rem; text-align: center; }
      .date { text-align: center; color: #666; margin-bottom: 2rem; font-size: 0.95rem; }
      .divider { border: none; border-top: 3px solid #FF8C42; margin: 2rem 0; }
      pre { background: #f5f5f5; padding: 2rem; border-radius: 8px; overflow-x: auto; font-size: 0.95rem; line-height: 1.6; border-left: 5px solid #FF8C42; white-space: pre-wrap; }
      .footer { text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #eee; color: #666; font-size: 0.9rem; }
      @media (max-width: 768px) { body { padding: 1rem; } .container { padding: 1.5rem; } h1 { font-size: 1.8rem; } pre { padding: 1rem; font-size: 0.85rem; } }
      @media print { body { background: #fff; padding: 0; } .container { box-shadow: none; padding: 0; } }
    </style>
  </head>`;
  
  const body = `<body>
    <div class="container">
      <h1>${currentReportTitle}</h1>
      <p class="date">Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
      <hr class="divider">
      <pre>${escapeHtml(currentReportData)}</pre>
      <div class="footer">
        <p>Copa 2026 - Controle de Figurinhas | Estiva GO</p>
      </div>
    </div>
  </body>`;
  
  const htmlContent = doctype + html + head + body + '</html>';
  
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Exporta relatório como CSV
 */
function exportToCSV() {
  const csv = currentReportData.replace(/\n/g, '\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `relatorio_figurinhas_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exporta dados atuais como JSON
 */
function exportData() {
  const exportPayload = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    stickers,
    duplicates
  };
  
  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `copa2026_dados_${new Date().toISOString().split('T')[0]}.json`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Inicia o fluxo de importação de dados
 */
function importData() {
  const input = document.getElementById('import-data-input');
  if (input) {
    input.value = '';
    input.click();
  }
}

/**
 * Processa o arquivo JSON importado
 */
function handleImportFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      validateImportedData(data);

      const shouldMerge = window.confirm(
        'Deseja mesclar os dados importados com os dados atuais?\n\nOK: Mesclar\nCancelar: Substituir'
      );
      
      if (shouldMerge) {
        mergeImportedData(data);
      } else {
        if (!window.confirm('A importação substituirá os dados atuais. Deseja continuar?')) {
          return;
        }
        stickers = data.stickers || {};
        duplicates = data.duplicates || {};
      }
      
      saveData();
      renderPaises();
      renderRefri();
      renderHistory();
      renderTrocas();
      alert('Dados importados com sucesso!');
    } catch (error) {
      console.error('Falha ao importar dados:', error);
      alert('Arquivo inválido ou formato incorreto. Use um arquivo JSON exportado pelo app.');
    }
  };
  reader.onerror = () => {
    alert('Não foi possível ler o arquivo. Tente novamente.');
  };
  reader.readAsText(file, 'UTF-8');
}

/**
 * Mescla dados importados com os dados existentes
 */
function mergeImportedData(data) {
  const importedStickers = data.stickers || {};
  const importedDuplicates = data.duplicates || {};
  
  Object.entries(importedStickers).forEach(([key, value]) => {
    if (value) {
      stickers[key] = true;
    }
  });
  
  Object.entries(importedDuplicates).forEach(([key, qty]) => {
    if (!qty || qty <= 0) return;
    const currentQty = duplicates[key] || 0;
    duplicates[key] = currentQty + qty;
    if (!stickers[key]) {
      stickers[key] = true;
    }
  });
}

/**
 * Valida o conteúdo do JSON importado
 */
function validateImportedData(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Formato inválido');
  }
  if (typeof data.stickers !== 'object' || typeof data.duplicates !== 'object') {
    throw new Error('Estrutura de dados inválida');
  }
}

/**
 * Fecha modal de relatório
 */
function closeReport() {
  document.getElementById('report-modal').classList.remove('active');
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Service Worker Registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('ServiceWorker registrado:', reg.scope))
      .catch((err) => console.log('Falha no ServiceWorker:', err));
  }
  
  // Sear
Listeners
  const searchPaises = document.getElementById('search-paises');
  const searchNumber = document.getElementById('search-number');
  
  if (searchPaises && searchNumber) {
    const updateFilter = () => {
      searchFilter = parseSearch(searchPaises.value, searchNumber.value);
      renderPaises();
    };
    
    searchPaises.addEventListener('input', updateFilter);
    searchNumber.addEventListener('input', updateFilter);
  }
  
  // Initial Render
  renderPaises();
  renderRefri();
  renderHistory();
  renderTrocas();
  updateStats();
  switchDashboardView('continents');
});



