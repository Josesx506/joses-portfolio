import '@/styles/cards/tooltip.css';

const logos = {
  "chevron":"/comp_logos/chevron.svg",
  "exxon":"/comp_logos/exxon.svg",
  "emr":"/comp_logos/emr.svg",
  "seneca":"/comp_logos/seneca.svg",
  "seepco":"/comp_logos/seepco.png",
  "aapg":"/comp_logos/aapg.svg",
  "lsu":"/comp_logos/lsu.svg",
  "ua":"/comp_logos/ua.svg",
  "caltech":"/comp_logos/caltech.svg"}

function GeoscienceCard(properties, details=false) {
  let content = `<div class=${details?"long-tooltip":"short-tooltip"}>`;
  
  content += `<div class="fieldName">${properties.name}</div>`;
  if (details) {
    content += `<div class="blockName"><span class="key">Area:</span> ${properties.block}</div>`;
    content += `<div class="companyIcon"><img src=${logos[properties.icon]} width=auto height=32px /></div>`;
    content += `<div class="resourceType"><span class="key">Resource:</span> ${properties.rtype}</div>`;
  }
  content += '</div>';
  return content;
}



export { GeoscienceCard }